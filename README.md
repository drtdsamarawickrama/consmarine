# Constellation Marine Consultant Services (Pvt) Ltd — Next.js website

Complete Next.js 16 App Router / TypeScript / Tailwind CSS v4 responsive website, based on the supplied CMCS website specification and 34 provided photos/logos. Built as a **standalone project**; keep the existing project backed up before replacing files.

## Quick start (Windows PowerShell)

1. Extract the entire ZIP to `C:\constellation-marine` (or another development folder). Make sure `package.json` is at the root, not nested in an extra folder.
2. Open the folder in Antigravity / VS Code terminal.
3. Run `npm install` then `npm run dev`.
4. Open `http://localhost:3000`.
5. Before deployment run `npm run typecheck` and `npm run build`.

## Contact form email delivery (required before publishing)

Copy `.env.example` to `.env.local` and set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, CONTACT_TO. Ask Lankahost for SMTP details. **Do not commit `.env.local` to Git.** Without SMTP values, the API returns 503 and advises visitors to email directly — it never falsely claims delivery. Also add spam protection/rate limiting for a public deployment and consider mailbox deliverability (SPF/DKIM/DMARC).

## Company confirmations before production

* Confirm exact meaning of **221B** in service 5 and **AGM** in service 17. The provided titles/descriptions are retained unchanged pending clarification.
* Chairman's **Thilina portrait** was not present among identifiable assets; a clearly labelled placeholder is used. Replace with the actual approved portrait.
* Confirm membership/association permissions for displaying Chamber, port and training-organization logos, and verify any listed licenses and service claims. The footer deliberately does **not** assert that specific licenses are held without verification.
* Confirm that `info@consmarine.com` is active, even though the agreed domain is `consmarinems.com`.
* Review and approve image rights, all text, contact details and hosting/privacy requirements.
* Responsive behavior should be manually checked at 375, 768, 1024, 1440px.

## Routes

Home `/`, About `/about-us`, Why Choose Us `/why-choose-us`, Services `/services`, 17 individual `/services/[slug]`, Industries `/industries`, Gallery `/gallery`, Contact `/contact`. Sitemap & robots included.

## Image mapping

All public files are included in the ZIP: `public/images/hero` (2), `services` (17), `gallery` (8), `credentials` (6), and `public/logo` (1). No separate downloader needed. Images are **local** and the source code refers to these exact paths.

## Styling and components

Reusable components live in `src/components`; copy changes shared across routes using `src/data` and `src/config/site.ts`.

## Source of content

CMCS supplied Word document `marrine service website details.docx` and assets from the uploaded photo ZIP, with higher-resolution assets extracted from the document where available. Do not treat examples in site cards as independently validated certifications.
