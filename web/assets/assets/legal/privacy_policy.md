# Privacy Policy

HashSign is owned and operated by Exemplar Copy LLC.

**Effective Date:** July 1, 2026  
**Last Updated:** September 24, 2026

**Important:** HashSign ("the App," "the Service") is wholly owned and operated by Exemplar Copy LLC, a limited liability company. All references to "we," "us," "our," and "HashSign" in this Privacy Policy refer to Exemplar Copy LLC.

## 1. Introduction

Exemplar Copy LLC ("we," "us," or "our") operates the HashSign mobile application (the "App") and its associated website at hashsign.app (collectively, the "Service"). We are committed to protecting your personal information and your right to privacy.

This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. By using HashSign, you agree to the collection and use of information in accordance with this policy.

If you have questions or concerns, please contact us at [privacy@hashsign.app](mailto:privacy@hashsign.app).

## 2. Information We Collect

### 2.1 Information You Provide

We may collect the following information that you provide directly:

- Email address (for waitlist or account registration)
- Name (optional, for account display purposes)
- Payment information (processed by the App Store and Google Play Billing; Exemplar Copy LLC does not receive or store raw card details)
- Contract documents you upload for signing or AI auditing

### 2.2 Automatically Collected Information

When you use HashSign, we may automatically collect:

- Device model, operating system version, and app version
- Crash logs and diagnostic data (via the App Store's and Google Play's aggregated reporting)
- Anonymous usage analytics (feature interactions, session duration)
- IP address and general geographic region (country/region level)

## 3. Local Data Sandbox

**On-Device Processing:** Contract files you import into HashSign are processed locally on your device using native cryptographic and PDF rendering libraries. Documents are stored in your device's secure app sandbox and, if enabled, your personal iCloud / Google Drive or local device storage, which is controlled by you, not by Exemplar Copy LLC.

Specifically:

- Uploaded PDF files are never permanently stored on Exemplar Copy LLC servers.
- Files are held in a temporary, encrypted cache on-device solely to support the AI audit feature. This cache is cleared automatically when the audit is complete or when the app session ends.
- SHA-256 hash computations are performed entirely on your device before any network transmission occurs.
- Your signing key material is generated and stored exclusively within your device's Secure Enclave / Android Keystore and is never transmitted to any server.

## 4. AI Processing (Gemini API)

**Third-Party AI:** HashSign's AI Legal Audit feature transmits the text content of your document to Google LLC's Gemini API for analysis. By using the AI audit feature, you consent to this transmission.

- Document text is sent to the Google Gemini API over an encrypted HTTPS connection solely for the purpose of generating a legal risk summary for your review.
- Exemplar Copy LLC does not use your document content to train any proprietary AI model, and does not sell or license your document content to any third party.
- Google LLC's use of data submitted to the Gemini API is governed by Google's Gemini API Terms of Service and its Privacy Policy. We encourage you to review those documents.
- The AI audit feature is opt-in. You may sign and hash documents without triggering any AI processing.
- We recommend you remove or redact sensitive personal identifiers (Social Security numbers, passport numbers, bank account details) from documents before using the AI audit feature.

## 5. Blockchain Anchoring (Hedera Network)

**Public Ledger Notice:** When you choose to anchor a contract, its SHA-256 cryptographic hash is submitted to the Hedera public distributed ledger. This record is permanent and cannot be deleted or modified by Exemplar Copy LLC or anyone else.

- Only the cryptographic hash (a fixed-length fingerprint) of your document is submitted to the Hedera Consensus Service, not the document itself, not its text, and not any personal identifying information.
- The hash value is mathematically irreversible; no party can reconstruct the original document from the hash alone.
- The public ledger entry also includes a timestamp and your Hedera account identifier (a numeric ID, not your name or email address).
- Because the Hedera ledger is public and immutable, you should be aware that the existence of an anchored hash, and its timestamp, is permanently visible to anyone with access to the Hedera network.
- Anchoring is optional. You may sign documents without submitting any data to the Hedera network.

## 6. How We Use Your Information

Exemplar Copy LLC uses the information we collect to:

- Provide, operate, and improve the HashSign Service
- Process subscription payments through the App Store and Google Play Billing
- Send you transactional emails (waitlist confirmation, account notices)
- Diagnose bugs and improve app stability
- Comply with applicable legal obligations
- Respond to your support requests

We do **not** sell, rent, or trade your personal information to third parties for their marketing purposes.

## 7. Data Sharing and Third Parties

We may share your information with the following categories of third-party service providers, solely to operate the Service:

- **Apple Inc.:** App distribution, App Store payment processing, iCloud storage (user-controlled), and crash reporting.
- **Google LLC (Google Play):** App distribution, Google Play Billing payment processing, Google Drive storage (user-controlled), and crash reporting.
- **Google LLC (Gemini API):** Document text analysis for AI Legal Audits (opt-in only).
- **Hedera Hashgraph LLC:** Immutable anchoring of document hashes to the public Hedera ledger (opt-in only).
- **Email service provider:** To send transactional and waitlist emails on our behalf.

We require all third-party providers to maintain appropriate security measures and only process your data as instructed by Exemplar Copy LLC.

## 8. Data Retention

- **Account data:** Retained for as long as your account is active. Deleted within 30 days of account deletion request.
- **Temporary AI processing cache:** Cleared immediately upon session end or audit completion.
- **Blockchain hash records:** Permanent and irremovable by design of the Hedera public ledger.
- **Crash and diagnostic logs:** Retained for up to 90 days in anonymized form.

## 9. Your Rights

Depending on your jurisdiction, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you.
- **Correction:** Request correction of inaccurate personal data.
- **Deletion:** Request deletion of your personal data (subject to legal retention obligations and the irremovable nature of blockchain records).
- **Portability:** Request a machine-readable export of your data.
- **Objection:** Object to certain types of processing, including direct marketing.
- **Withdrawal of Consent:** Withdraw consent at any time where processing is consent-based (e.g., AI audit feature).

To exercise any of these rights, contact Exemplar Copy LLC at [privacy@hashsign.app](mailto:privacy@hashsign.app). We will respond within 30 days.

## 10. Children's Privacy

HashSign is not directed to individuals under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately at [privacy@hashsign.app](mailto:privacy@hashsign.app).

## 11. Security

Exemplar Copy LLC implements commercially reasonable technical and organizational measures to protect your information, including TLS encryption for all data in transit, Secure Enclave / Android Keystore-based key storage, and limited employee access to personal data. However, no transmission over the Internet or electronic storage method is 100% secure.

## 12. International Data Transfers

Exemplar Copy LLC is based in the United States. If you access the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using HashSign, you consent to such transfers.

## 13. Changes to This Policy

Exemplar Copy LLC may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. For material changes, we will notify you via in-app notification or email. Your continued use of HashSign after the effective date of any changes constitutes acceptance of the revised policy.

## 14. Contact Us

If you have questions or concerns about this Privacy Policy or Exemplar Copy LLC's data practices, please contact us:

- **Email:** privacy@hashsign.app
- **Support:** support@hashsign.app
- **Company:** Exemplar Copy LLC
