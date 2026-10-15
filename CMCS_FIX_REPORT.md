# Constellation Marine — ZIP Review and Corrections

Reviewed user-supplied `constellation-marine.zip` (15 October 2026).

## Verified checks
- TypeScript: PASS (`node node_modules/typescript/bin/tsc --noEmit`).
- ESLint: PASS (`node node_modules/eslint/bin/eslint.js src`).
- PostCSS parsing: PASS for `src/app/globals.css` and `src/components/home/HeroOcean.css`.
- Local image asset review: both `/images/hero/cmcs-cinematic-ship-1.webp` and `...-2.webp` exist; official CMC logo and 17 service images exist.
- 17 service records and corresponding dynamic service route remain in the project.
- Existing Hero uses one active slide state for image and text. Automatic timer runs every 7 seconds. No left/right arrow controls.
- Animated water fill remains in `WaterRippleText.tsx` plus `HeroOcean.css`.

## Changes made
1. Corrected ESLint `react/no-unescaped-entities` error in `src/app/why-choose-us/page.tsx`.
2. Kept valid Tailwind v4 `@theme inline` in CSS. Added `.vscode/settings.json` to suppress the editor-only unknown-at-rule false positive (other CSS validation remains enabled).
3. Corrected `:root` browser color scheme from `light dark` to `light` so built-in form controls don't unexpectedly switch dark in light sections.
4. Trimmed transparent whitespace from a COPY of the official logo to `public/logo/company-logo-trimmed.png`. The original PNG is unchanged. Updated Navbar and Footer to use the properly scaled asset; Footer displays it in original colors instead of applying an all-white invert filter.
5. Homepage GalleryPreview uses a brighter neutral surface with a restrained navy/cyan card system, improving section-to-section color balance.
6. Hero's first slide image is now prioritized for page load; second image remains a separate slide asset. Progress buttons expose their current state via `aria-pressed`.

## Limitations and required checks on YOUR Windows PC
- Production build NOT VERIFIED here: the uploaded `node_modules` only includes the Windows SWC native package, while this temporary Linux environment cannot download the required Linux binary from npm due to network/DNS restrictions. This does NOT establish a failure on Windows.
- Run `npm ci`, `npx tsc --noEmit`, `npm run lint`, and `npm run build` on your Windows project.
- Check the visual appearance at mobile, tablet, and desktop widths in a real browser.
- The email contact endpoint needs real SMTP environment configuration before it can send submissions; without configuration it correctly returns HTTP 503 and a clear error.
- Any descriptions involving specific professional certifications or service claims should be independently verified before launch. `221B` and `AGM` abbreviations also need confirmation from the company.
- Domain `consmarinems.com` and public contact email `info@consmarine.com` are different names as supplied; verify both before publishing.

## Recommended installation
### Safest method — Patch only
1. Back up your project folder.
2. Extract the PATCH zip into `C:\constellation-marine` (project root containing `package.json`).
3. Replace matching paths and restart your Next.js server.
4. From PowerShell, run:
   `npx tsc --noEmit`
   `npm run lint`
   `npm run build`
   `npm run dev`
5. Hard refresh the browser.

### Complete source zip
Extract the complete project zip to a NEW directory. Do not overwrite your current `node_modules` or delete your working original. In the extracted folder run `npm ci`, then the checks above.

This package intentionally excludes `node_modules/`, `.next/`, `.git/`, `.env` files and machine-specific build caches.
