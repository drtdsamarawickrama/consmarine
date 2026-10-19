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
        className={`cmcs-service-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[5px] border transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-1 ${
          isNavy
            ? "cmcs-card-dark text-white hover:border-[#70bfff]"
            : "cmcs-card-light text-midnight"
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
                ? "bg-gradient-to-t from-midnight/65 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#061d32]/20 via-transparent to-transparent"
            }`}
          />
          <span
            className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] backdrop-blur-md ${
              isNavy
                ? "border-white/40 bg-[#071d33]/90 text-white"
                : "border-white/80 bg-[#071d33]/90 text-white shadow-sm"
            }`}
          >
            Survey
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
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
              isNavy ? "border-white/20" : "border-[#d7e0e8]"
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
