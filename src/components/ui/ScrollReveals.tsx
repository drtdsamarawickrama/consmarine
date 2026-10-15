"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Hydration-safe version of the original CMCS reveal animation.
 *
 * Uses the Web Animations API rather than changing React-owned className,
 * style, or data attributes.  This avoids mismatches between the server's
 * HTML and React's first client render, while preserving the same rise/fade
 * animation and stagger timings.
 *
 * The existing Hero controls its own slideshow and water-fill animation.
 */
export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (!("IntersectionObserver" in window)) return;

    const selectors = [
      "main section:not(.cmcs3d-hero) h1",
      "main section:not(.cmcs3d-hero) h2",
      "main section:not(.cmcs3d-hero) .grid > article",
      "main section:not(.cmcs3d-hero) .grid > a",
      "main section:not(.cmcs3d-hero) .grid > div",
      "main section:not(.cmcs3d-hero) .grid > button",
      "main section:not(.cmcs3d-hero) .flex.flex-wrap > article",
    ].join(", ");

    const main = document.querySelector<HTMLElement>("main");
    if (!main) return;

    const observed = new WeakSet<HTMLElement>();
    const animations = new Set<Animation>();
    let scanFrame = 0;
    let initFrame1 = 0;
    let initFrame2 = 0;
    let mutationObserver: MutationObserver | undefined;
    let disposed = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);

          // This changes only the browser's animated/compositor values.
          // It does NOT change the DOM attributes React hydrates.
          if (typeof element.animate !== "function") continue;
          const siblings = element.parentElement?.children;
          const delayIndex =
            siblings && element.matches("article, a, button, div")
              ? Math.min(Math.max(Array.from(siblings).indexOf(element), 0), 4)
              : 0;

          const animation = element.animate(
            [
              { opacity: 0, transform: "translate3d(0, 22px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration: 730,
              delay: delayIndex * 65,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
          animations.add(animation);
          animation.onfinish = () => {
            animations.delete(animation);
            animation.cancel(); // Release transform so the existing CSS hover works.
          };
          animation.oncancel = () => {
            animations.delete(animation);
          };
        }
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );

    const registerTargets = () => {
      if (disposed) return;
      const elements = main.querySelectorAll<HTMLElement>(selectors);
      for (const element of elements) {
        if (observed.has(element)) continue;
        if (element.closest("[aria-hidden='true'], [role='dialog']")) continue;
        if (element.getClientRects().length === 0) continue;
        observed.add(element);
        observer.observe(element);
      }
    };

    const scheduleScan = () => {
      if (scanFrame || disposed) return;
      scanFrame = requestAnimationFrame(() => {
        scanFrame = 0;
        registerTargets();
      });
    };

    // Let React commit the initial page before scanning its elements.
    // React-owned HTML attributes are never modified, even on route changes.
    initFrame1 = requestAnimationFrame(() => {
      initFrame1 = 0;
      initFrame2 = requestAnimationFrame(() => {
        initFrame2 = 0;
        registerTargets();
        mutationObserver = new MutationObserver(scheduleScan);
        mutationObserver.observe(main, { childList: true, subtree: true });
      });
    });

    return () => {
      disposed = true;
      if (initFrame1) cancelAnimationFrame(initFrame1);
      if (initFrame2) cancelAnimationFrame(initFrame2);
      if (scanFrame) cancelAnimationFrame(scanFrame);
      mutationObserver?.disconnect();
      observer.disconnect();
      for (const animation of animations) animation.cancel();
      animations.clear();
    };
  }, [pathname]);

  return null;
}
