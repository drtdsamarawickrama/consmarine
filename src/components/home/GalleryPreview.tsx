import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/gallery";
import { ArrowUpRight } from "lucide-react";

export default function GalleryPreview() {
  const previewImages = gallery.slice(0, 4);

  return (
    <section className="relative isolate overflow-hidden border-t border-[#e2e8f0] bg-[#f8fafc] py-20 text-[#071d33] lg:py-24">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            theme="light"
            eyebrow="Projects & Gallery"
            title="Our Work"
            description="A glimpse into our marine surveying assignments, vessel inspections, cargo monitoring, and technical operations."
          />
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#0284c7] transition-colors duration-200 hover:text-[#0369a1] self-start md:self-auto"
          >
            View Gallery <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewImages.map((g, index) => (
            <Reveal
              key={g.id}
              variant="image"
              delay={(index % 4) * 0.08}
              className="aspect-[4/3] min-w-0"
            >
              <Link
                href="/gallery"
                className="cmcs-card-light group relative block h-full w-full overflow-hidden rounded-xl border border-[#e2e8f0]"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#071d33]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Subtle Hover Action */}
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071d33] opacity-0 shadow-md transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-[#0284c7] group-hover:text-white">
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
