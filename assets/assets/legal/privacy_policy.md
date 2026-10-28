# Privacy Policy

HashSign is operated by Exemplar Copy LLC d/b/a HashSign, a Texas limited liability company.

**Effective Date:** July 1, 2026  
**Last Updated:** October 28, 2026

**Important:** HashSign ("the App," "the Service") is operated by Exemplar Copy LLC d/b/a HashSign ("Exemplar Copy LLC"), a Texas limited liability company. All references to "we," "us," "our," and "HashSign" in this Privacy Policy refer to Exemplar Copy LLC d/b/a HashSign.

## 1. Introduction

Exemplar Copy LLC d/b/a HashSign ("we," "us," or "our"), a Texas limited liability company, operates the HashSign mobile application (the "App") and its associated website at hashsign.app (collectively, the "Service"). We are committed to protecting your personal information and your right to privacy.

This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. By using HashSign, you agree to the collection and use of information in accordance with this policy.

If you have questions or concerns, please contact us at [privacy@hashsign.app](mailto:privacy@hashsign.app).

This version describes the data practices of HashSign version 1.3.0, including end-to-end encrypted 1:1 messages, on-device contract tooling, optional cloud review, Agent Connectors, profile photos, and Deal Rooms.

## 2. Information We Collect

### 2.1 Information You Provide

We may collect the following information that you provide directly:

- Email address and account credentials (through Firebase Authentication)
- Name, @handle, and other profile details you choose to display
- An optional profile photo
- Payment information (processed by the App Store and Google Play Billing; Exemplar Copy LLC does not receive or store raw card details). HashSign Pro Annual is $79.99 per year. Cancel in your Apple ID or Google Play subscription settings. Deleting the App does not cancel the subscription.
- Contract text and files you draft, import, save to your Vault, share, or seal
- Messages you send in direct chats and Deal Rooms
- Standing rules, risk limits, exposure caps, and the Electronic Agent Mandate you accept

### 2.2 Automatically Collected Information

When you use HashSign, we may automatically collect:

- Device model, operating system version, and app version
- Crash logs and diagnostic data (via the App Store's and Google Play's aggregated reporting)
- App performance telemetry through Firebase Analytics, including feature interactions and session duration
- On Android, the Google Advertising ID (`AD_ID`), which Firebase Analytics uses for app performance measurement and Google Ads campaign attribution. This matches the Advertising ID declaration in Google Play Console for Android 13 and later. HashSign does not sell the Advertising ID.
- IP address and general geographic region (country/region level)

## 3. Local-First On-Device Processing

**On your device by default.** Standard contract drafting, standing-rule audits, and risk scoring run locally on your device. Those runs do not send the contract to Exemplar Copy LLC or to a cloud model.

A free account includes a complimentary quota of 3 Draft Contract runs and 3 Legal Inspect runs. The counter in the App shows how many remain, from 3 free down to Upgrade. Once those runs are used, drafting and inspection require HashSign Pro. HashSign Pro includes unlimited drafting and inspection, both on the device and with Cloud boost or Deep review. The quota covers on-device runs and cloud runs alike. Signing, SHA-384 hashing, and sealing stay available.

Specifically:

- An NDA, MSA, letter of intent, bill of sale, or custom draft is written by the on-device drafter unless you explicitly choose Cloud boost.
- Legal Inspect scores risk and flags clauses on the device unless you explicitly choose Deep review.
- Standing rules you set for an Agent Connector are applied on the device.
- SHA-384 digests used for sealing, and the ML-DSA (post-quantum) signature over the document manifest, are computed on your device.
- Signing key material is generated and stored on your device (Secure Enclave on supported Apple devices, Android Keystore where available) and is not transmitted to our servers.

Saving or sharing a document is a separate step. When you save a file to your Vault, seal it, or store a signature or company seal, that file is uploaded to Firebase Storage so you and the people you share it with can open it. Vault PDFs are stored at `documents/{shareCode}.pdf`. A sealed copy is stored at `sealed/{uid}/{documentId}.pdf`.

## 4. Cloud Boost and Deep Review

**Only when you ask.** Cloud boost (drafting) and Deep review (inspection) run only after you tap that control. HashSign does not send contract text to the cloud engine in the background.

When you do tap it:

- The `legalAssist` service receives the contract text you submitted. For Deep review of a file, it may also receive that PDF or image.
- Our server sends that content to Google LLC's Gemini API over HTTPS to produce the draft or the inspection. The model used for this optional review is Google's Gemini API. Google's use of that submission is governed by Google's Gemini API terms and privacy policy.
- The generated result (not a copy of your raw upload) may be stored in our `legal_cache` for up to 14 days so an identical request can be reused. Exemplar Copy LLC does not use your documents, prompts, or messages to train public foundational AI models, and we do not sell or license your document content. Content sent for Cloud boost or Deep review is processed to answer that request only.
- If the cloud request fails, the App falls back to the on-device engine.
- You can sign and hash a document without using Cloud boost or Deep review. Draft Contract and Legal Inspect follow the complimentary quota in Section 3, including when the on-device engine produces the result. Remove or redact government ID numbers, account numbers, and similar identifiers before you send a document to cloud review.

Cloud boost and Deep review are the App's cloud-assisted drafting and AI inspection features (Cloud Assist and AI Inspect). Their output is informational. It is not legal advice and it does not create an attorney-client relationship. The full disclaimer is in the Terms of Use.

## 5. External Agent Handoffs and Clipboard Access

Grok Connector and Muse Connector are optional. They hand a prompt to a session you control. That interaction is governed by your own account with that third party, and by that company's terms and privacy policy. HashSign does not operate those services and does not receive the conversation you have with them.

- Choosing Grok opens Grok in your own session. The prompt may be placed in the link or copied to the clipboard for you to paste.
- Choosing Muse does not open a website. The prompt is copied so you can paste it into your own Muse session.
- The prompt can include contract details you entered. Once it leaves HashSign, the third party processes it under your relationship with them.
- HashSign writes the prompt to the system clipboard only as part of a handoff you start.
- HashSign reads the system clipboard only when you explicitly tap **Import**. It does not read the clipboard in the background, on a timer, or when you merely return to the App.

## 6. Profile Photos and Avatars

A profile photo is optional. If you add one:

- You crop it in the App. The App resizes and compresses it on your device to a 512 pixel JPEG before upload.
- The file is stored in Firebase Storage at `avatars/{uid}/{timestamp}.jpg` and the address is saved on your profile so the photo can appear beside your @handle in chats, Deal Rooms, and other member views.
- Any signed-in HashSign user who has that file address can load the image. List browsing of the avatars folder is disabled.
- When you remove the photo, or replace it, we delete the previous file from Firebase Storage. We also clear the photo address on your profile.

## 7. Messages, Deal Rooms, and Vault Documents

**1:1 direct messages (HashSign 1.3.0 and later).** A direct message is encrypted on your device before it is uploaded, using X25519 key agreement and AES-256-GCM. HashSign's servers store the ciphertext. They do not receive the private key or the message plaintext. The private key is stored on the device: in iCloud Keychain on Apple devices (so a phone signed into the same iCloud Keychain can use it) and in the Android Keystore on Android devices. HashSign does not operate a key-backup server. The inbox preview and the push notification say that an encrypted message or a shared document arrived. They do not contain the message text or the document title.

Messages sent by HashSign versions before 1.3.0 were not end-to-end encrypted. Those older messages, if they are still in a thread, remain readable by the conversation's participants through Firebase. They are not retroactively encrypted.

If the other person has not yet published an encryption key, the App does not send the message in plaintext. It waits until that key exists.

**Deal Rooms.** Deal Room messages and the documents linked in a Deal Room are not end-to-end encrypted. They are stored in Firebase so the members of that room, and HashSign's servers, can read them. They are protected by TLS in transit and by Google-managed encryption at rest, and only room members can read them under the access rules.

**Vault documents.** Files you save or seal are not end-to-end encrypted. They are protected by TLS in transit and AES-256 encryption at rest in Firebase Storage. When you seal a document, the App computes a SHA-384 digest and an ML-DSA (post-quantum) signature on your device. Anchoring submits that digest, not the file, to the Hedera Consensus Service.

Your @handle is the name other members use to find you. A HashSign Pro badge may appear beside a Pro member's @handle. That badge shows an active Pro subscription. It is not a government identity check.

## 8. Blockchain Anchoring (Hedera Network)

**Public ledger notice.** When you seal a document and anchor it, HashSign submits the SHA-384 digest of the finished PDF to the Hedera public ledger. The record is permanent. Exemplar Copy LLC cannot delete or edit it.

- Only the digest is submitted, not the document, its text, or your name or email.
- The digest is not reversible. No one can rebuild the file from the hash alone.
- The ledger entry includes a timestamp and a Hedera account identifier, which is a numeric ID, not your name.
- The existence of an anchored digest, and its timestamp, is visible to anyone with access to the Hedera network.
- Anchoring happens when you seal. You can draft and sign without anchoring only where the App still offers that path. A completed seal is designed to carry the SHA-384 anchor and the on-device ML-DSA signature.

## 9. How We Use Your Information

Exemplar Copy LLC uses the information we collect to:

- Provide, operate, and improve the HashSign Service
- Show your name, @handle, and avatar to people you message or share a Deal Room with
- Run a cloud draft or inspection you explicitly requested
- Process subscription payments through the App Store and Google Play Billing
- Send you transactional emails (account notices and support replies)
- Diagnose bugs and improve app stability
- Comply with applicable legal obligations
- Respond to your support requests

We do **not** sell, rent, or trade your personal information to third parties for their marketing purposes.

## 10. Data Sharing and Third Parties

We share information with these providers only to operate the Service:

- **Google LLC (Firebase):** Authentication, Cloud Firestore (profiles, ciphertext for 1:1 messages, Deal Room messages, mandate records), Cloud Storage (Vault files, sealed PDFs, avatars, signatures, and seals), Cloud Functions (including `legalAssist` when you request it), and Firebase Analytics (app performance telemetry and, on Android, the Google Advertising ID for Google Ads campaign attribution).
- **Google LLC (Gemini API):** Contract text, and any file you attach, only when you tap Cloud boost or Deep review.
- **Apple Inc.:** App distribution, App Store payment processing, and crash reporting.
- **Google LLC (Google Play):** App distribution, Google Play Billing, and crash reporting.
- **Hedera:** The SHA-384 digest and timestamp of a document you seal.
- **Your own assistant account (xAI Grok, or the Muse session you paste into):** The handoff prompt, only when you start that handoff. We are not the provider of that conversation.

We require service providers who act for us to protect the data they process for the Service. A handoff to your own Grok or Muse account is your transmission to that third party.

## 11. Data Retention

- **Account data:** Kept while your account is active, and deleted within 30 days after we complete an account-deletion request, except for records we must keep and hashes already written to Hedera.
- **Vault and sealed files:** Kept until you delete them or your account is deleted, subject to copies you already shared.
- **Profile photos:** Deleted from Firebase Storage when you remove or replace them.
- **Cloud review results:** The generated result may be kept for up to 14 days.
- **Messages and Deal Rooms:** Kept so participants can read the history, until the conversation is deleted or the account-deletion process removes your copy.
- **Blockchain hash records:** Permanent on the Hedera ledger.
- **Crash and diagnostic logs:** Retained for up to 90 days in anonymized form.
- **Electronic Agent Mandate:** Kept until you revoke it. Revocation stops new agent signing. Documents already sealed stay sealed.

## 12. Your Rights

Depending on your jurisdiction, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you.
- **Correction:** Request correction of inaccurate personal data.
- **Deletion:** Request deletion of your personal data, subject to legal retention duties, files other people already received, and the permanent nature of a Hedera record.
- **Portability:** Request a machine-readable export of your data.
- **Objection:** Object to certain types of processing, including direct marketing.
- **Withdrawal of consent:** Stop using Cloud boost, Deep review, or an Agent Connector at any time. Revoke an Electronic Agent Mandate in Agent Connectors. Withdrawal does not undo a document you already sealed.

To exercise any of these rights, contact Exemplar Copy LLC at [privacy@hashsign.app](mailto:privacy@hashsign.app). We will respond within 30 days.

## 13. Children's Privacy

HashSign is not directed to individuals under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately at [privacy@hashsign.app](mailto:privacy@hashsign.app).

## 14. Security

Exemplar Copy LLC d/b/a HashSign uses the following boundaries. They are not the same thing, and this policy does not describe Deal Rooms or Vault files as end-to-end encrypted.

- **1:1 direct messages (version 1.3.0 and later):** end-to-end encryption with X25519 and AES-256-GCM. Private keys stay in Apple iCloud Keychain or the Android Keystore. HashSign servers do not have those private keys and do not have the message plaintext.
- **Deal Rooms and Vault documents:** TLS in transit, AES-256 encryption at rest, on-device post-quantum (ML-DSA) signatures, and SHA-384 digests anchored to the Hedera Consensus Service when you seal a document.
- **Access rules:** Firestore rules limit who can read a conversation or a file.

No transmission or storage method is perfectly secure. End-to-end encryption does not hide the fact that two accounts exchanged a message, and it does not encrypt a Deal Room or a Vault file.

## 15. International Data Transfers

Exemplar Copy LLC is based in the United States. If you access the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using HashSign, you consent to such transfers.

## 16. Changes to This Policy

Exemplar Copy LLC may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. For material changes, we will notify you via in-app notification or email. Your continued use of HashSign after the effective date of any changes constitutes acceptance of the revised policy.

## 17. Contact Us

If you have questions or concerns about this Privacy Policy or Exemplar Copy LLC's data practices, please contact us:

- **Email:** privacy@hashsign.app
- **Support:** support@hashsign.app
- **Company:** Exemplar Copy LLC d/b/a HashSign (Texas LLC)

## 18. Biometric Information Privacy Policy (Texas CUBI, Illinois BIPA, and US State Compliance)

Biometric Face Signature and US ID Verification are features of the **$79.99 per year** HashSign Pro plan. They are offered only to people the App and our server identify as being in the United States.

Before the camera or a biometric prompt opens, HashSign shows a consent screen. The checkbox is unchecked until you select it. The consent record stores the time, the policy version `2026-10-28`, and a SHA-256 hash of the consent text. It does not store a photo.

- **Purpose.** Identity proofing and non-repudiation for electronic signatures under ESIGN and UETA.
- **What is collected.** A hardware biometric confirmation (Face ID or the Android biometric prompt) and, if you take one, a face frame or a photo of a US driver's license, state ID, or passport. The frame is used on this device to confirm a face with open eyes, or to read the ID barcode or passport lines.
- **On-device processing.** The check runs on your device. HashSign's servers receive a redacted attestation: whether the ID verified, the US state or `US` for a passport, the ID type, a salted hash, and the time. They do not receive the ID photo, the face photo, or the ID number.
- **Zero sale and zero AI training.** Exemplar Copy LLC does not sell, lease, or trade biometric identifiers or biometric information. They are not used to train AI models.
- **Destruction.** Raw image buffers and temporary photo files are wiped when the check finishes, when it fails, and when you cancel. They are not kept on HashSign servers. The lasting record is an irreversible SHA-384 commitment that can be anchored to the Hedera Consensus Service.
- **Retention of the commitment.** The hash, the consent time, and the verification method stay in the signature audit trail for the life of that signature record. You may contact privacy@hashsign.app to ask about a verification on your profile.

A Pro sender can require a face signature on a document. The person invited to sign that document can complete the face signature without buying HashSign Pro.

## 19. Encryption key reset

If you use a new Android phone, or an Apple device that does not have your iCloud Keychain item, Settings includes **Reset Encryption Key on This Device**. Confirming it creates a new X25519 key, increases `keyVersion` on your profile, and publishes the new public key. New 1:1 messages use that key. Encrypted messages from the previous device stay unreadable on the new device. HashSign still never receives the private key.

© Exemplar Copy LLC d/b/a HashSign. All rights reserved.
