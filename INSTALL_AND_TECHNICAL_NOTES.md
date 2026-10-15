# CMCS Professional Motion — v2 (Hydration-Safe)

### Why this is different
The earlier patches dynamically changed React-rendered DOM class, style and data attributes (`cmcs-reveal-*`), leading to hydration mismatch errors. This version uses declarative Motion wrappers only in the components they animate. There are no page-wide DOM scanners, mutation observers, or mouse-driven 3D rotations. On each route, content animates once when in view.

### Motion behavior
- SectionTitle: 30px fade-up with subtle heading blur (0.82s)
- ServiceCard: 40px / subtle 3.5-degree 3D perspective / 0.975 scale, stagger by service id
- WhyChoose cards: stable flex widths, row stagger, depth transform
- About: image and editorial column enter independently
- Industries: row-staggered cards
- Gallery: staggered photo tiles (both home and gallery)
- CTA: understated fade-up
- `prefers-reduced-motion`: reveal effects disabled by CSS
- Original Hero slideshow + water-filled letters are unchanged

### Critical conflict cleanup
This patch removes the global `<SmoothScroll />` loader from `src/app/layout.tsx`. The old files (`SmoothScroll.tsx`, `ScrollReveals.tsx`, `CinematicScroll.tsx`) may remain, but must NOT be rendered or imported by layouts/pages. Only one system should run.

### Files
`src/app/layout.tsx`, `src/components/ui/Reveal.tsx`, `src/components/ui/reveal-motion.css`, `src/components/ui/SectionTitle.tsx`, `src/components/ui/ServiceCard.tsx`, `src/components/home/WhyPreview.tsx`, `AboutPreview.tsx`, `IndustriesPreview.tsx`, `GalleryPreview.tsx`, `ContactCTA.tsx`, `src/components/gallery/GalleryGrid.tsx`.

### Test
`npx tsc --noEmit`, `npm run lint`, `npm run build`, `npm run dev`.

Before installing, back up `src` or commit current state. Never paste PowerShell prompt prefixes such as `PS C:\...>` or `>>`.
