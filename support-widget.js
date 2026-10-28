/* HashSign Support widget. Posts to /api/support-bot, then the Cloud
 * Function URL, then answers from the on-page knowledge base. */
(function () {
  var SUPPORT_EMAIL = "CEO@exemplarcopy.com";
  var ASK_ENDPOINTS = [
    "/api/support-bot",
    "https://us-central1-suresign-c12ca.cloudfunctions.net/webSupportBot",
  ];
  var TICKET_ENDPOINTS = [
    "/api/support-ticket",
    "/api/support-bot",
    "https://us-central1-suresign-c12ca.cloudfunctions.net/webSupportBot",
  ];
  var STARTERS = [
    "How does HashSign Pro ($79.99/yr) work?",
    "Fix 'Unable to decrypt' on a new phone",
    "How US Face Signature & ID Verification work",
    "How to verify a Hedera SHA-384 proof",
    "Contact Human Support",
  ];

  function sessionId() {
    try {
      var key = "hashsign.support.session";
      var existing = sessionStorage.getItem(key);
      if (existing) return existing;
      var created = "web-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(key, created);
      return created;
    } catch (e) {
      return "web-anon";
    }
  }

  function localAnswer(question) {
    var text = String(question || "").toLowerCase();
    var escalation = /refund|billing|bug|crash|human|agent|representative/.test(text);
    var reply = "HashSign is operated by Exemplar Copy LLC d/b/a HashSign. Pro is $79.99/year. HashSign is a software platform, not a law firm. Email " + SUPPORT_EMAIL + " for a person.";
    var topic = "general";
    if (/unable to decrypt|encryption key|new phone|reinstall|x25519/.test(text)) {
      topic = "e2ee_reset";
      reply = "1:1 chats use X25519, HKDF-SHA256, and AES-256-GCM. Private keys stay on the device. If you see \"Unable to decrypt message on this device\", open Settings → Reset Encryption Key on This Device, or tap the banner in chat. Older messages from the previous device stay unreadable. New messages work after the reset.";
    } else if (/sender pays|counterparty|for free|invited/.test(text)) {
      topic = "sender_pays";
      reply = "Only the sender needs HashSign Pro ($79.99/year) to require a Biometric Face Signature. An invited signer in the United States can complete that required Face Signature for free.";
    } else if (/deal room/.test(text)) {
      topic = "deal_rooms";
      reply = "Deal Rooms use TLS in transit and cloud storage so newly invited counterparties can review shared history. 1:1 chats are end-to-end encrypted. Deal Rooms are not.";
    } else if (/face signature|id verification|bipa|cubi|biometric|passport/.test(text)) {
      topic = "biometrics";
      reply = "US Face Signature and ID Verification are for United States signers only (Texas CUBI and Illinois BIPA). Consent is collected first. Raw frames and ID photos are wiped on the device and are not uploaded. The record is SHA-384(documentSha384|docId|signerUid|livenessFrameHash|timestamp) on Hedera Consensus Service.";
    } else if (/hedera|sha-?384|proof|anchor/.test(text)) {
      topic = "hedera";
      reply = "A sealed document anchors a SHA-384 digest of the finished PDF, not the file, to Hedera Consensus Service. Compare the digest in the audit trail with the hash of the PDF you hold.";
    } else if (/79\.99|\bpro\b|subscription|restore purchase|cancel/.test(text)) {
      topic = "pro";
      reply = "HashSign Pro is $79.99/year. It unlocks unlimited document preparation, US Biometric Face Signature, US Government ID Verification, and Pro templates. Tap Restore Purchases on the Paywall or in Settings. Cancel in iOS Settings → Apple ID → Subscriptions, or Google Play → Payments & subscriptions.";
    } else if (/legal advice|lawyer|attorney|should i sign/.test(text)) {
      topic = "legal";
      reply = "HashSign is a software platform operated by Exemplar Copy LLC d/b/a HashSign, not a law firm. This assistant cannot give legal advice.";
    } else if (/human support|contact human|real person/.test(text)) {
      topic = "escalation";
      escalation = true;
      reply = "Email " + SUPPORT_EMAIL + " or submit a ticket below. Keep the ticket id.";
    }
    if (/refund|billing|bug|crash/.test(text)) escalation = true;
    return { reply: reply, suggestEscalation: escalation, matchedTopic: topic, remainingQuota: null, local: true };
  }

  function readJsonResponse(response) {
    var type = (response.headers.get("content-type") || "").toLowerCase();
    if (!response.ok || type.indexOf("application/json") === -1) {
      throw new Error("expected json");
    }
    return response.json();
  }

  function post(action, payload) {
    var body = JSON.stringify(Object.assign({ action: action, sessionId: sessionId() }, payload));
    var urls = action === "ticket" ? TICKET_ENDPOINTS : ASK_ENDPOINTS;
    var chain = Promise.reject(new Error("no endpoint"));
    urls.forEach(function (url) {
      chain = chain.catch(function () {
        return fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        }).then(readJsonResponse);
      });
    });
    return chain;
  }

  var transcript = [];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function mount() {
    if (document.getElementById("hashsign-support")) return;
    var style = document.createElement("style");
    style.textContent = [
      "#hashsign-support{position:fixed;right:16px;bottom:16px;z-index:9999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}",
      "#hashsign-support *{box-sizing:border-box}",
      "#hashsign-support .hs-launch{display:flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:12px 16px;background:linear-gradient(135deg,#d4a853,#34d399);color:#08110c;font-weight:700;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35)}",
      "#hashsign-support .hs-panel{display:none;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 96px));background:#080c14;color:#e7eef2;border:1px solid rgba(212,168,83,.45);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.45);flex-direction:column;overflow:hidden}",
      "#hashsign-support.open .hs-panel{display:flex}",
      "#hashsign-support.open .hs-launch{display:none}",
      "#hashsign-support header{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:#0e1612;border-bottom:1px solid rgba(52,211,153,.25)}",
      "#hashsign-support header strong{color:#f3e6c4}",
      "#hashsign-support header button{background:transparent;color:#d4a853;border:0;font-size:20px;cursor:pointer}",
      "#hashsign-support .hs-log{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px}",
      "#hashsign-support .hs-bubble{max-width:90%;padding:8px 10px;border-radius:12px;line-height:1.4;font-size:14px;white-space:pre-wrap}",
      "#hashsign-support .hs-user{align-self:flex-end;background:#14523a}",
      "#hashsign-support .hs-bot{align-self:flex-start;background:#171e27;border:1px solid rgba(212,168,83,.25)}",
      "#hashsign-support .hs-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px}",
      "#hashsign-support .hs-chips button,#hashsign-support .hs-form button,#hashsign-support .hs-compose button{border:1px solid rgba(212,168,83,.5);background:#102018;color:#f3e6c4;border-radius:999px;padding:6px 10px;font-size:12px;cursor:pointer}",
      "#hashsign-support .hs-compose{display:flex;gap:6px;padding:10px;border-top:1px solid rgba(255,255,255,.06)}",
      "#hashsign-support input,#hashsign-support textarea{width:100%;background:#0c1218;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px;font:inherit}",
      "#hashsign-support .hs-form{display:none;padding:10px 12px;border-top:1px solid rgba(255,255,255,.06);gap:6px}",
      "#hashsign-support .hs-form.open{display:flex;flex-direction:column}",
      "#hashsign-support .hs-note{font-size:12px;color:#9fb0a8;padding:0 12px 8px}",
      "@media(max-width:640px){#hashsign-support{right:8px;bottom:8px;left:8px}#hashsign-support .hs-launch{margin-left:auto}}"
    ].join("");
    document.head.appendChild(style);

    var root = el("div");
    root.id = "hashsign-support";
    var launch = el("button", "hs-launch", "HashSign Support");
    launch.type = "button";
    launch.setAttribute("aria-label", "Open HashSign Support");
    var panel = el("div", "hs-panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "HashSign Support");
    var header = document.createElement("header");
    header.appendChild(el("strong", null, "HashSign Support"));
    var close = el("button", null, "×");
    close.type = "button";
    close.setAttribute("aria-label", "Close support chat");
    header.appendChild(close);
    var log = el("div", "hs-log");
    var chips = el("div", "hs-chips");
    var note = el("p", "hs-note");
    var form = el("form", "hs-form");
    var emailInput = document.createElement("input");
    emailInput.name = "email";
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;
    var subjectInput = document.createElement("input");
    subjectInput.name = "subject";
    subjectInput.placeholder = "Subject";
    subjectInput.required = true;
    subjectInput.maxLength = 160;
    var messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.placeholder = "Details";
    messageInput.required = true;
    messageInput.maxLength = 4000;
    var ticketSubmit = el("button", null, "Send ticket");
    ticketSubmit.type = "submit";
    form.appendChild(emailInput);
    form.appendChild(subjectInput);
    form.appendChild(messageInput);
    form.appendChild(ticketSubmit);
    var compose = el("form", "hs-compose");
    var questionInput = document.createElement("input");
    questionInput.name = "question";
    questionInput.maxLength = 500;
    questionInput.placeholder = "Ask about Pro, encryption, or ID checks";
    questionInput.setAttribute("aria-label", "Support question");
    var askSubmit = el("button", null, "Send");
    askSubmit.type = "submit";
    compose.appendChild(questionInput);
    compose.appendChild(askSubmit);
    var ticketBtn = el("button", null, "Submit Ticket to Human Support");
    ticketBtn.type = "button";
    chips.appendChild(ticketBtn);
    STARTERS.forEach(function (label) {
      var chip = el("button", null, label);
      chip.type = "button";
      chip.addEventListener("click", function () { ask(label); });
      chips.appendChild(chip);
    });
    panel.appendChild(header);
    panel.appendChild(log);
    panel.appendChild(chips);
    panel.appendChild(note);
    panel.appendChild(form);
    panel.appendChild(compose);
    root.appendChild(panel);
    root.appendChild(launch);
    document.body.appendChild(root);

    function addBubble(kind, text) {
      var bubble = el("div", "hs-bubble " + (kind === "user" ? "hs-user" : "hs-bot"), text);
      log.appendChild(bubble);
      log.scrollTop = log.scrollHeight;
      transcript.push({ role: kind === "user" ? "user" : "assistant", text: text });
      if (transcript.length > 20) transcript.shift();
    }

    addBubble("assistant", "Ask about HashSign Pro ($79.99/year), encrypted chats, or US face signature. HashSign is a software platform, not a law firm.");

    function ask(question) {
      var trimmed = String(question || "").trim();
      if (!trimmed) return;
      addBubble("user", trimmed);
      note.textContent = "Looking that up…";
      post("ask", { question: trimmed.slice(0, 500) }).then(function (data) {
        note.textContent = data.local ? "Answered on this page." : "";
        addBubble("assistant", data.reply || localAnswer(trimmed).reply);
        if (data.suggestEscalation) note.textContent = "A person can help. Submit a ticket or email " + SUPPORT_EMAIL + ".";
      }).catch(function () {
        var local = localAnswer(trimmed);
        note.textContent = "Answered on this page.";
        addBubble("assistant", local.reply);
        if (local.suggestEscalation) note.textContent = "A person can help. Submit a ticket or email " + SUPPORT_EMAIL + ".";
      });
    }

    launch.addEventListener("click", function () { root.classList.add("open"); });
    close.addEventListener("click", function () { root.classList.remove("open"); });
    ticketBtn.addEventListener("click", function () { form.classList.toggle("open"); });
    compose.addEventListener("submit", function (event) {
      event.preventDefault();
      ask(questionInput.value);
      questionInput.value = "";
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var payload = {
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
        transcript: transcript.slice(-20),
      };
      note.textContent = "Sending ticket…";
      post("ticket", payload).then(function (data) {
        var id = data.ticketId || "pending";
        note.textContent = "";
        addBubble("assistant", "Ticket " + id + " is open. You can also email " + (data.supportEmail || SUPPORT_EMAIL) + ".");
        form.reset();
        form.classList.remove("open");
      }).catch(function () {
        note.textContent = "";
        addBubble("assistant", "The ticket could not be sent from this browser. Email " + SUPPORT_EMAIL + " and include your question.");
        var link = document.createElement("a");
        link.href = "mailto:" + SUPPORT_EMAIL + "?subject=" + encodeURIComponent(payload.subject || "HashSign support");
        link.textContent = "Email " + SUPPORT_EMAIL;
        link.style.color = "#d4a853";
        log.appendChild(link);
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
