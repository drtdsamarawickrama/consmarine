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
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-midnight text-white md:min-h-[380px]">
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
        <div className="absolute inset-0 bg-linear-to-r from-midnight via-midnight/85 to-deep-ocean/50" />
        <div className="absolute inset-0 bg-linear-to-t from-midnight via-transparent to-midnight/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(73,197,229,0.15),_transparent_50%)]" />
      </div>

      <Container className="relative z-10 py-16 md:py-20">
        <Reveal variant="heading">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs font-medium text-mist"
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
            <span className="h-0.5 w-6 bg-aqua" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-aqua-light">
              {eyebrow}
            </p>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-silver sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>

      {/* Decorative Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-aqua/30 to-transparent" />
    </section>
  );
}
