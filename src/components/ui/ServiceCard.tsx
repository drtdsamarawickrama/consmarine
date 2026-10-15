import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

  return (
    <Reveal
      variant="card"
      delay={((Number(service.id) - 1) % 4) * 0.075}
      className="h-full min-w-0"
    >
      <Link
        href={`/services/${service.slug}`}
        className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-1.5 ${
          isNavy
            ? "border-aqua/30 bg-gradient-to-b from-deep-ocean via-[#082b46] to-midnight text-white shadow-[0_14px_34px_rgba(6,29,50,0.24)] hover:border-aqua/60 hover:shadow-[0_22px_48px_rgba(6,29,50,0.34)]"
            : "border-[#d7e3e9] bg-[#fcfdfd] text-midnight shadow-[0_12px_32px_rgba(6,29,50,0.075),0_2px_5px_rgba(6,29,50,0.025)] hover:border-[#84b9c9] hover:shadow-[0_22px_46px_rgba(6,29,50,0.15),0_5px_10px_rgba(6,29,50,0.025)]"
        }`}
      >
        {/* A subtle line ties all service cards into the CMCS brand. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-maritime via-aqua to-transparent transition-opacity duration-300 ${
            isNavy ? "opacity-85" : "opacity-70 group-hover:opacity-100"
          }`}
        />

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
                ? "bg-gradient-to-t from-midnight/65 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#061d32]/20 via-transparent to-transparent"
            }`}
          />
          <span
            className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] backdrop-blur-md ${
              isNavy
                ? "border-aqua/35 bg-midnight/80 text-aqua-light"
                : "border-[#d2e6ec] bg-[#f3fbfd]/95 text-maritime shadow-sm"
            }`}
          >
            Survey
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3
            className={`text-base font-bold leading-[1.5] transition-colors duration-200 ${
              isNavy
                ? "text-white group-hover:text-aqua-light"
                : "text-midnight group-hover:text-maritime"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`mt-3 line-clamp-3 text-[13px] leading-[1.7] ${
              isNavy ? "text-[#bed2de]" : "text-[#536677]"
            }`}
          >
            {service.description}
          </p>
          <div
            className={`mt-auto flex items-center justify-between border-t pt-6 ${
              isNavy ? "border-aqua/20" : "border-[#e6edf0]"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 ${
                isNavy
                  ? "text-aqua-light group-hover:text-white"
                  : "text-maritime group-hover:text-[#0a4969]"
              }`}
            >
              View Details
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </span>
            <span
              className={`font-mono text-[10px] ${
                isNavy ? "text-[#afc4d1]" : "text-[#7a90a2]"
              }`}
            >
              CMCS-{String(service.id).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
