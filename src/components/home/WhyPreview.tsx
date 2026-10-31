import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/data/why";
import {
  ShieldCheck,
  Scale,
  Handshake,
  ClipboardCheck,
  Users,
  Award,
  Clock3,
  GraduationCap,
  MapPinned,
  ArrowRight,
  Anchor,
} from "lucide-react";

const homepageTrustFeatures = [
  {
    icon: ClipboardCheck,
    title: "Experienced Professionals",
    description: "Skilled and qualified marine experts",
  },
  {
    icon: ShieldCheck,
    title: "Accurate Reporting",
    description: "Detailed, objective and timely reports",
  },
  {
    icon: Scale,
    title: "Independent & Impartial",
    description: "Your interests, our priority",
  },
  {
    icon: Handshake,
    title: "Industry-Focused Solutions",
    description: "Tailored to your specific needs",
  },
];

const fullIcons = [
  Award,
  ShieldCheck,
  Clock3,
  GraduationCap,
  Anchor,
  Users,
  MapPinned,
];

export default function WhyPreview({ full = false }: { full?: boolean }) {
  if (!full) {
    return (
      <section className="relative isolate border-b border-[#e2e8f0] bg-white py-9 sm:py-11">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {homepageTrustFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center px-4 sm:px-6 lg:border-r lg:border-[#e2e8f0] last:lg:border-r-0"
                >
                  <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f9ff] text-[#0284c7] transition-transform duration-300 hover:scale-110">
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#071d33] sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#52677c] sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-[#e2e8f0] bg-[#f8fafc] py-18 lg:py-24">
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Trusted Maritime Experts For a Safer Tomorrow"
            description="Providing reliable marine consultancy and surveying services worldwide, backed by independent expertise, professional integrity, and a client-focused approach."
            theme="light"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = fullIcons[index % fullIcons.length];
            return (
              <Reveal
                key={item.title}
                variant="card"
                delay={(index % 4) * 0.075}
                className="w-full min-w-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
              >
                <article className="cmcs-card-light group relative flex h-full w-full min-w-0 flex-col overflow-hidden p-6 sm:p-7">
                  <div className="relative mb-6 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#f0f4f8] text-[#071d33] transition-colors duration-300 group-hover:bg-[#071d33] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#94a3b8]">
                      CMCS / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative text-[17px] font-bold leading-snug text-[#071d33] transition-colors duration-200 group-hover:text-[#0c3660]">
                    {item.title}
                  </h3>
                  <p className="relative mt-2.5 flex-1 text-[13.5px] leading-[1.65] text-[#52677c] text-justify [text-align-last:left]">
                    {item.description}
                  </p>
                  <div className="relative mt-7 flex items-center justify-between border-t border-[#f1f5f9] pt-4">
                    <span className="text-[10px] font-bold tracking-[0.12em] text-[#94a3b8]">
                      MARINE EXPERTISE
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071d33] text-white transition-colors duration-300 group-hover:bg-[#0c3660]">
                      <ArrowRight size={13} aria-hidden="true" />
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
