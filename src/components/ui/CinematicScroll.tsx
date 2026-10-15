"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Route-aware, dependency-free scroll reveals and restrained 3D card lighting.
 * Content remains readable without JS or when reduced motion is enabled.
 * Hero and its separately controlled slideshow/water animation are untouched.
 */
export default function CinematicScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("main");
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduceMotion.matches) return;

    const inspected = new WeakSet<HTMLElement>();
    const waiting = new Set<HTMLElement>();
    const timeouts = new Set<number>();
    const cleanupCallbacks: Array<() => void> = [];
    let scanFrame = 0;
    let scrollFrame = 0;

    const reveal = (el: HTMLElement) => {
      if (!waiting.has(el)) return;
      waiting.delete(el);
      observer?.unobserve(el);
      el.dataset.cmcsReveal = "revealing";
      const delay = Number(el.dataset.cmcsDelay || 0);
      const timeout = window.setTimeout(() => {
        el.dataset.cmcsReveal = "done";
        timeouts.delete(timeout);
      }, 1120 + delay);
      timeouts.add(timeout);
    };

    const visible = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      // Tall elements should not wait until their entire height is visible.
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) reveal(entry.target as HTMLElement);
              });
            },
            { threshold: 0.06, rootMargin: "0px 0px -5% 0px" },
          )
        : null;

    const targets = [
      "main section h1",
      "main section h2",
      "main section .grid > article",
      "main section .grid > a",
      "main section .grid > div",
      "main section .grid > button",
      "main section .flex.flex-wrap > article",
      "main section .flex.flex-wrap > a",
      "main section .cmcs-card-glass",
      "main section .cmcs-card-light",
    ].join(", ");

    const scan = () => {
      const elements = root.querySelectorAll<HTMLElement>(targets);
      for (const el of elements) {
        if (inspected.has(el)) continue;
        inspected.add(el);
        if (el.closest(".cmcs3d-hero, [role='dialog'], [aria-hidden='true']"))
          continue;
        if (el.getClientRects().length === 0) continue;
        // Animate an entire card, never also its nested heading / child.
        if (el.parentElement?.closest("[data-cmcs-reveal]")) continue;

        const isCard =
          el.matches("article, a, button") ||
          (el.classList.contains("group") && !el.querySelector("section"));
        if (isCard && finePointer.matches) {
          el.dataset.cmcsDepth = "true";
        }

        const siblings = el.parentElement?.children;
        const index = siblings ? Array.from(siblings).indexOf(el) : 0;
        const delay = isCard ? Math.min(index % 5, 4) * 90 : 0;
        if (isCard && el.parentElement) {
          el.parentElement.classList.add("cmcs-perspective-scope");
        }
        el.dataset.cmcsDelay = String(delay);
        el.style.setProperty("--cmcs-stagger-delay", `${delay}ms`);

        const rect = el.getBoundingClientRect();
        // Never hide something the user has already scrolled past.
        if (rect.bottom < 0) {
          el.dataset.cmcsReveal = "done";
          continue;
        }

        el.dataset.cmcsReveal = "waiting";
        waiting.add(el);
        observer?.observe(el);
      }
      // Also handles content inserted already inside the viewport.
      requestScanViewport();
    };

    const scanViewport = () => {
      scrollFrame = 0;
      for (const el of waiting) if (visible(el)) reveal(el);
    };
    const requestScanViewport = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(scanViewport);
    };
    const scheduleScan = () => {
      if (scanFrame) return;
      scanFrame = window.requestAnimationFrame(() => {
        scanFrame = 0;
        scan();
      });
    };

    document.documentElement.classList.add("cmcs-cinematic-active");
    scan();

    // IntersectionObserver + a scroll fallback for robust activation.
    window.addEventListener("scroll", requestScanViewport, { passive: true });
    window.addEventListener("resize", requestScanViewport, { passive: true });
    const mutation = new MutationObserver(scheduleScan);
    mutation.observe(root, { childList: true, subtree: true });

    if (finePointer.matches) {
      let active: HTMLElement | null = null;
      let pointerFrame = 0;
      let last: PointerEvent | null = null;
      const updateTilt = () => {
        pointerFrame = 0;
        if (!last || !active) return;
        const rect = active.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (last.clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (last.clientY - rect.top) / rect.height));
        active.style.setProperty("--cmcs-tilt-x", `${((0.5 - y) * 4.8).toFixed(2)}deg`);
        active.style.setProperty("--cmcs-tilt-y", `${((x - 0.5) * 5.6).toFixed(2)}deg`);
        active.style.setProperty("--cmcs-pointer-x", `${(x * 100).toFixed(1)}%`);
        active.style.setProperty("--cmcs-pointer-y", `${(y * 100).toFixed(1)}%`);
      };
      const clearTilt = (el: HTMLElement | null) => {
        if (!el) return;
        el.style.setProperty("--cmcs-tilt-x", "0deg");
        el.style.setProperty("--cmcs-tilt-y", "0deg");
      };
      const onPointerMove = (event: PointerEvent) => {
        const candidate = (event.target as Element | null)?.closest<HTMLElement>(
          "[data-cmcs-depth='true']",
        );
        if (candidate !== active) {
          clearTilt(active);
          active = candidate || null;
        }
        if (!active) return;
        last = event;
        if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updateTilt);
      };
      const onPointerOut = (event: PointerEvent) => {
        if (!active) return;
        const next = event.relatedTarget;
        if (next instanceof Node && active.contains(next)) return;
        clearTilt(active);
        active = null;
      };
      root.addEventListener("pointermove", onPointerMove, { passive: true });
      root.addEventListener("pointerout", onPointerOut, { passive: true });
      cleanupCallbacks.push(() => {
        root.removeEventListener("pointermove", onPointerMove);
        root.removeEventListener("pointerout", onPointerOut);
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        clearTilt(active);
      });
    }

    return () => {
      mutation.disconnect();
      observer?.disconnect();
      window.removeEventListener("scroll", requestScanViewport);
      window.removeEventListener("resize", requestScanViewport);
      cleanupCallbacks.forEach((fn) => fn());
      if (scanFrame) window.cancelAnimationFrame(scanFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      timeouts.forEach((id) => window.clearTimeout(id));
      // Never leave route content hidden on unmount / navigation.
      waiting.forEach((el) => (el.dataset.cmcsReveal = "done"));
      document.documentElement.classList.remove("cmcs-cinematic-active");
    };
  }, [pathname]);

  return null;
}
