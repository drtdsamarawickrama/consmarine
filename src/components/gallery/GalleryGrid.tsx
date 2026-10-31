"use client";

import Reveal from "@/components/ui/Reveal";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import { gallery } from "@/data/gallery";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "vessel", label: "Vessel Surveys" },
  { id: "port", label: "Port Operations" },
  { id: "cargo", label: "Cargo & Hold" },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return gallery;
    return gallery.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (selected === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((v) => (v === null ? v : (v + 1) % filteredImages.length));
      if (e.key === "ArrowLeft")
        setSelected((v) =>
          v === null
            ? v
            : (v + filteredImages.length - 1) % filteredImages.length,
        );
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [selected, filteredImages.length]);

  return (
    <>
      {/* Category Filter Pills — Light Theme */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {categories.map((c) => {
          const isActive = activeCategory === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCategory(c.id);
                setSelected(null);
              }}
              className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-midnight text-white shadow-md"
                  : "border border-stone-300 bg-white text-graphite/80 hover:border-maritime hover:text-midnight shadow-2xs"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Responsive Image Grid — Framed White Tiles */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((g, i) => (
          <Reveal
            key={g.id}
            variant="image"
            delay={(i % 4) * 0.075}
            className="aspect-4/3 min-w-0"
          >
            <button
              onClick={() => setSelected(i)}
              className="cmcs-card-light group relative h-full w-full overflow-hidden text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maritime"
              aria-label={`View full size of project image ${i + 1}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Subtle cinematic gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-midnight/85 via-midnight/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Hover Caption & Zoom Icon */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="self-end rounded-full bg-white/90 p-2 text-midnight backdrop-blur-md opacity-0 transition-all duration-300 transform -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 shadow-md">
                  <ZoomIn size={16} />
                </div>
                <div className="opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-midnight/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-aqua-light backdrop-blur-md border border-aqua/30">
                    <Camera size={12} /> Marine Operation
                  </span>
                  <p className="mt-1.5 text-xs font-semibold text-white drop-shadow line-clamp-1">
                    {g.alt}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Accessible Fullscreen Lightbox */}
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020a13]/95 p-4 backdrop-blur-2xl"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            autoFocus
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-aqua/30 bg-deep-ocean/80 text-white backdrop-blur-md transition hover:bg-aqua hover:text-midnight"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X size={22} />
          </button>

          {/* Previous button */}
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-aqua/30 bg-deep-ocean/80 text-white backdrop-blur-md transition hover:bg-aqua hover:text-midnight sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(
                (selected + filteredImages.length - 1) % filteredImages.length,
              );
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative flex flex-col items-center max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-[85vw] max-w-5xl overflow-hidden rounded-2xl border border-aqua/30 shadow-2xl">
              <Image
                src={filteredImages[selected].src}
                alt={filteredImages[selected].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-5xl px-2 text-xs text-silver">
              <span>{filteredImages[selected].alt}</span>
              <span className="font-mono text-aqua">
                {selected + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-aqua/30 bg-deep-ocean/80 text-white backdrop-blur-md transition hover:bg-aqua hover:text-midnight sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % filteredImages.length);
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
