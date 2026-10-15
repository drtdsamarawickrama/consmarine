"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement: visible server-rendered content, animated on entry.
 * Never writes classes, style, datasets, or other React-owned DOM attributes.
 * This prevents scroll-script induced hydration mismatches under Next.js/React.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const animations = new Set<Animation>();
    const visited = new WeakSet<HTMLElement>();
    let disposed = false;
    let initialFrame = 0;
    let secondFrame = 0;
    let scanFrame = 0;
    let mutationObserver: MutationObserver | undefined;
    let targetRoot: HTMLElement | null = null;

    const selectors = [
      "section h2",
      "section .grid > article",
      "section .grid > a",
      "section .grid > div",
      "section .grid > li",
      "section .flex.flex-wrap > article",
      "section .flex.flex-wrap > a",
    ].join(", ");

    function animateEntrance(element: HTMLElement) {
      if (!element.isConnected || typeof element.animate !== "function") return;
      const parent = element.parentElement;
      const siblings = parent?.children;
      const gridOrCard =
        element.matches("article, a, li") ||
        Boolean(parent?.classList.contains("grid"));
      const index = siblings
        ? (Array.prototype.indexOf.call(siblings, element) as number)
        : 0;
      const delay = gridOrCard ? Math.min(Math.max(index, 0), 4) * 75 : 0;
      const keyframes: Keyframe[] = gridOrCard
        ? [
            {
              opacity: 0,
              transform:
                "perspective(1100px) translate3d(0, 32px, 0) rotateX(1.8deg) scale(0.985)",
            },
            {
              opacity: 1,
              transform:
                "perspective(1100px) translate3d(0, 0, 0) rotateX(0deg) scale(1)",
            },
          ]
        : [
            { opacity: 0, transform: "translate3d(0, 20px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ];

      const animation = element.animate(keyframes, {
        duration: gridOrCard ? 790 : 700,
        delay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "backwards",
      });
      animations.add(animation);
      animation.onfinish = () => {
        animations.delete(animation);
        // Return control to the site's existing CSS :hover transitions.
        animation.cancel();
      };
      animation.oncancel = () => animations.delete(animation);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          animateEntrance(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );

    function scan() {
      if (!targetRoot || disposed) return;
      const elements = targetRoot.querySelectorAll<HTMLElement>(selectors);
      for (const element of elements) {
        if (visited.has(element) || !element.isConnected) continue;
        visited.add(element);
        // The Hero and all its independent water / slide animations are protected.
        if (
          element.closest(".cmcs3d-hero, [aria-hidden='true'], [role='dialog']")
        )
          continue;
        if (!element.getClientRects().length) continue;

        const rect = element.getBoundingClientRect();
        // Avoid reanimating content already on-screen after hydration/navigation.
        if (rect.top < window.innerHeight * 0.78 && rect.bottom > 0) continue;
        // Don't animate previously passed content when navigating backwards.
        if (rect.bottom <= 0) continue;
        observer.observe(element);
      }
    }

    function scheduleScan() {
      if (scanFrame || disposed) return;
      scanFrame = window.requestAnimationFrame(() => {
        scanFrame = 0;
        scan();
      });
    }

    // Wait for React to commit, then scan. No manual class/style/data mutations.
    initialFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        if (disposed) return;
        targetRoot = document.querySelector<HTMLElement>("main");
        if (!targetRoot) return;
        scan();
        mutationObserver = new MutationObserver(scheduleScan);
        mutationObserver.observe(targetRoot, {
          childList: true,
          subtree: true,
        });
      });
    });

    return () => {
      disposed = true;
      if (initialFrame) window.cancelAnimationFrame(initialFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
      if (scanFrame) window.cancelAnimationFrame(scanFrame);
      mutationObserver?.disconnect();
      observer.disconnect();
      for (const animation of animations) animation.cancel();
      animations.clear();
    };
  }, [pathname]);

  return null;
}
