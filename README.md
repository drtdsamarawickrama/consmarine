# Constellation Marine Website — Review Version 2

A responsive Next.js review build for Constellation Marine Consultant Services (Pvt) Ltd. This version refines the supplied project into a navy-and-white corporate design while preserving existing routes, company content, photography, logo, and interactions. It is a customer review version and is not deployed.

## Included

- Home, About Us, Services, all 17 service detail routes, Why Choose Us, Industries, Gallery, and Contact pages.
- Original company logo, hero slideshow images, service and gallery photography, and credentials.
- Automatic two-image Hero slideshow, water-ripple headline, and shipping-route graphic. Hero overlay cards are removed.
- Responsive sticky navigation, gallery filtering and lightbox, SEO metadata, sitemap, robots route, and contact form API.
- Restrained navy-and-white design tokens, dark ocean treatment, rectangular bordered cards, and reduced-motion support.

## Run locally

Extract this archive into a new folder. Open a terminal in the folder containing this `package.json`, then run:

```bash
npm install
npm run dev
```

Confirm the terminal package banner says `constellation-marine-review-v2`. Do not run the older `Constellation-Marine-Review-Version-1-Updated` folder.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Email delivery

The contact form API sends messages to `info@consmarine.com` when SMTP settings are configured. Copy `.env.example` to `.env.local` and provide the SMTP host, port, username, and password supplied by the company email or hosting administrator. `SMTP_FROM` is optional and defaults to `SMTP_USER`. SMTP credentials are not included in this review package.
