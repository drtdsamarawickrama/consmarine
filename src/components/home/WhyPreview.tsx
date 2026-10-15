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
    <section className="relative isolate overflow-hidden border-b border-[#d9e4e9] bg-[#f1f5f5] py-20 lg:py-28">
      {/* A touch of ocean light keeps the neutral surface from feeling flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-[#cde8ee]/40 blur-[110px]"
      />
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
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#bed3de] bg-white px-6 py-3 text-xs font-bold text-midnight shadow-[0_6px_20px_rgba(6,29,50,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-maritime hover:shadow-[0_12px_25px_rgba(6,29,50,0.11)] motion-reduce:transform-none md:self-auto"
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
                <article className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#d6e4ea] bg-[#fcfdfd] p-7 shadow-[0_12px_34px_rgba(6,29,50,0.075),0_2px_5px_rgba(6,29,50,0.025)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-[#81b9ca] hover:shadow-[0_22px_48px_rgba(6,29,50,0.14),0_6px_12px_rgba(6,29,50,0.03)] motion-safe:hover:-translate-y-1.5 lg:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#155c80] via-[#49c5e5] to-transparent opacity-85"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#dff4f8]/60 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative mb-7 flex items-center justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d0e5ed] bg-gradient-to-br from-[#e8f5f8] to-[#d7ebf1] text-maritime shadow-[0_5px_12px_rgba(6,29,50,0.07)] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-[1.04]">
                      <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-maritime/70">
                      CMCS / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative text-lg font-bold leading-snug text-midnight transition-colors duration-200 group-hover:text-maritime">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-[1.75] text-[#536677]">
                    {item.description}
                  </p>
                  <div className="relative mt-8 flex items-center justify-between border-t border-[#e4ecf0] pt-4">
                    <span className="text-[10px] font-semibold tracking-[0.11em] text-maritime">
                      MARINE EXPERTISE
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#329fbd] shadow-[0_0_0_4px_rgba(73,197,229,0.12)]"
                    />
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
