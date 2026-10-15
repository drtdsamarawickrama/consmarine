import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/gallery";
import { ArrowUpRight, Camera } from "lucide-react";

export default function GalleryPreview() {
  const previewImages = gallery.slice(0, 4);

  return (
    <section className="relative isolate overflow-hidden border-t border-[#E2E9EC] bg-[#FAFBFC] py-20 lg:py-28 text-midnight">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            theme="light"
            eyebrow="Our Gallery"
            title="Our Work in Focus"
            description="A glimpse into our marine surveying assignments, vessel inspections, cargo monitoring, and technical operations."
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-maritime/20 bg-white px-6 py-3 text-xs font-bold text-midnight shadow-sm transition-all duration-300 hover:border-maritime hover:bg-[#E8EFF1] hover:shadow-md shrink-0 self-start md:self-auto"
          >
            View Complete Gallery{" "}
            <ArrowUpRight size={15} className="text-aqua" />
          </Link>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewImages.map((g, index) => (
            <Reveal
              key={g.id}
              variant="image"
              delay={(index % 4) * 0.08}
              className="aspect-4/3 min-w-0"
            >
              <Link
                href="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-deep-ocean shadow-[0_8px_24px_rgba(6,29,50,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-maritime/40 hover:shadow-[0_20px_40px_rgba(6,29,50,0.18)]"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-midnight/85 via-midnight/10 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-85" />

                {/* Hover Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 rounded-full bg-midnight/80 px-3 py-1 text-[11px] font-semibold text-aqua-light backdrop-blur-md border border-aqua/30">
                    <Camera size={13} /> Project #{index + 1}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua text-midnight opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
