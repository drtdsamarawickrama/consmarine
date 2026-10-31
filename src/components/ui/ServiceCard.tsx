"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { MarineService } from "@/data/services";

export default function ServiceCard({
  service,
  featured = false,
  variant = "light",
}: {
  service: MarineService;
  featured?: boolean;
  variant?: "light" | "navy";
}) {
  const isNavy = variant === "navy" || featured;
  const serviceCode = service.code || `CMCS-${String(service.id).padStart(2, "0")}`;

  return (
    <Reveal
      variant="card"
      delay={((Number(service.id) - 1) % 4) * 0.075}
      className="h-full min-w-0"
    >
      <Link
        href={`/services/${service.slug}`}
        className={`cmcs-service-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-1 ${
          isNavy
            ? "cmcs-card-dark text-white hover:border-[#70bfff]"
            : "cmcs-card-light text-[#071d33]"
        }`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8eff1]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 ${
              isNavy
                ? "bg-gradient-to-t from-[#071d33]/65 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#071d33]/25 via-transparent to-transparent"
            }`}
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3
            className={`text-base font-bold leading-[1.4] transition-colors duration-200 ${
              isNavy
                ? "text-white group-hover:text-[#cbd5e1]"
                : "text-[#071d33] group-hover:text-[#0c3660]"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`mt-2.5 line-clamp-2 text-[13px] leading-[1.65] ${
              isNavy ? "text-[#cbd5e1]" : "text-[#52677c]"
            }`}
          >
            {service.description}
          </p>

          {service.scope && service.scope.length > 0 && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#0284c7]">
              <CheckCircle2 size={13} className="shrink-0" />
              <span>{service.scope.length} Defined Scope Checklist Items</span>
            </div>
          )}

          <div
            className={`mt-auto flex items-center justify-between border-t pt-4 ${
              isNavy ? "border-white/15" : "border-[#f1f5f9]"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 ${
                isNavy
                  ? "text-white/90 group-hover:text-white"
                  : "text-[#071d33] group-hover:text-[#0c3660]"
              }`}
            >
              View Scope &amp; Deliverables
              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </span>
            <span
              className={`font-mono text-[10px] ${
                isNavy ? "text-[#94a3b8]" : "text-[#94a3b8]"
              }`}
            >
              {serviceCode}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
