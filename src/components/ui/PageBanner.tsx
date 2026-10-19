import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { ChevronRight } from "lucide-react";

export default function PageBanner({
  title,
  eyebrow = "Constellation Marine",
  subtitle,
  image = "/images/hero/cmcs-cinematic-ship-1.webp",
  breadcrumbs = [],
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[280px] items-center overflow-hidden bg-[#04182a] text-white md:min-h-[330px]">
      {/* Background Vessel Image with Smooth Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic ocean gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-[#04182a]/90 via-[#04182a]/70 to-[#04182a]/25" />
        <div className="absolute inset-0 bg-linear-to-t from-[#04182a]/65 via-transparent to-[#04182a]/30" />
      </div>

      <Container className="relative z-10 py-16 md:py-20">
        <Reveal variant="heading">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs font-medium text-[#d6e0e8]"
          >
            <Link href="/" className="transition-colors hover:text-aqua">
              Home
            </Link>
            {breadcrumbs.length > 0 ? (
              breadcrumbs.map((b, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-aqua" />
                  {b.href ? (
                    <Link
                      href={b.href}
                      className="transition-colors hover:text-aqua"
                    >
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ice font-semibold">{b.label}</span>
                  )}
                </span>
              ))
            ) : (
              <span className="flex items-center gap-2">
                <ChevronRight size={12} className="text-aqua" />
                <span className="text-ice font-semibold">{title}</span>
              </span>
            )}
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-0.5 w-6 bg-[#70bfff]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8dcf2]">
              {eyebrow}
            </p>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-[#e7f0f6] sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>

    </section>
  );
}
