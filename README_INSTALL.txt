CMCS SMOOTH SCROLL — HYDRATION SAFE REPLACEMENT
================================================
Purpose: remove unstable 3D scroll code that mutates React SSR DOM attributes.
Keeps the existing design, Hero auto-slideshow, and water-filled heading.
Adds one lightweight Web Animations API scroll reveal controller.
Files changed:
  src/app/layout.tsx
  src/components/ui/SmoothScroll.tsx
No packages to install. Does NOT change ServicesPreview.tsx or globals.css.
The old CinematicScroll.tsx, ScrollReveals.tsx and scroll styles may stay on disk,
but layout.tsx no longer imports/mounts them.

In Windows PowerShell project directory, with dev server stopped:
  Copy-Item src/app/layout.tsx layout.before-smooth-fix.tsx.bak -Force
  Expand-Archive -LiteralPath "$env:USERPROFILE\Downloads\CMCS_Smooth_Scroll_Hydration_Fixed.zip" -DestinationPath "C:\constellation-marine" -Force
  npx tsc --noEmit
  npm run lint
  npm run build
  npm run dev
Then hard-refresh the browser (Ctrl+Shift+R).

If warning persists, search additional DOM-mutating scripts and browser extensions,
verify new layout import and try stopping server / deleting .next / rebuilding.
