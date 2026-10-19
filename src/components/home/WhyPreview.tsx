import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/data/why";
import {
  ShieldCheck,
  Users,
  Award,
  Clock3,
  GraduationCap,
  MapPinned,
  ArrowRight,
  Anchor,
} from "lucide-react";

const icons = [
  Award,
  ShieldCheck,
  Clock3,
  GraduationCap,
  Anchor,
  Users,
  MapPinned,
];

export default function WhyPreview({ full = false }: { full?: boolean }) {
  const displayItems = full ? whyChooseUs : whyChooseUs.slice(0, 4);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#e8eef3] bg-[#f7fafc] py-18 lg:py-24">
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Trusted Maritime Experts For a Safer Tomorrow"
            description="Providing reliable marine consultancy and surveying services worldwide, backed by independent expertise, professional integrity, and a client-focused approach."
            theme="light"
          />
          {!full && (
            <Link
              href="/why-choose-us"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-[5px] border border-[#142b42] bg-white px-6 py-3 text-xs font-bold text-midnight shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-maritime hover:shadow-md motion-reduce:transform-none md:self-auto"
            >
              Learn More About Us
              <ArrowRight
                size={15}
                className="text-maritime"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>

        {/* Four across on desktop; a final three-card row centers naturally. */}
        <div className="flex flex-wrap justify-center gap-6">
          {displayItems.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={item.title}
                variant="card"
                delay={(index % 4) * 0.075}
                className="w-full min-w-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
              >
                <article className="cmcs-card-light group relative flex h-full w-full min-w-0 flex-col overflow-hidden p-6 sm:p-7 lg:p-8">
                  <div className="relative mb-7 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[5px] border border-[#142b42] bg-[#e8eef3] text-[#12476b] transition-colors duration-300 group-hover:bg-[#d9eaf5]">
                      <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#52677c]">
                      CMCS / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative text-[18px] font-bold leading-snug text-midnight transition-colors duration-200 group-hover:text-maritime">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-[14px] leading-[1.7] text-[#52677c]">
                    {item.description}
                  </p>
                  <div className="relative mt-8 flex items-center justify-between border-t border-[#e4ecf0] pt-4">
                    <span className="text-[10px] font-semibold tracking-[0.11em] text-[#52677c]">
                      MARINE EXPERTISE
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071d33] text-white">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
