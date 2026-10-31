import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Ship,
  Anchor,
  Compass,
  ShieldCheck,
  Handshake,
  Package,
  ArrowUpRight,
} from "lucide-react";

const sectors = [
  {
    title: "Ship Owners",
    description:
      "Protecting asset integrity, verifying vessel condition, and minimizing charter dispute risks.",
    image: "/images/services/vessel-condition.jpg",
    icon: Ship,
  },
  {
    title: "Ship Operators",
    description:
      "Ensuring operational readiness, compliance audits, and rapid 24/7 technical assistance.",
    image: "/images/services/marine-warranty.jpg",
    icon: Anchor,
  },
  {
    title: "Charterers",
    description:
      "Impartial on/off-hire surveys, bunker quantity verification, and hold cleanliness inspections.",
    image: "/images/services/cargo-hold.jpg",
    icon: Compass,
  },
  {
    title: "Marine Insurance",
    description:
      "Objective damage assessments, incident investigations, and evidence gathering for claims.",
    image: "/images/services/damage-survey-official.jpg",
    icon: ShieldCheck,
  },
  {
    title: "P&I Clubs",
    description:
      "Independent condition surveys, cargo dispute evaluations, and reliable technical reporting.",
    image: "/images/services/pi-survey.jpg",
    icon: Handshake,
  },
  {
    title: "Maritime & Logistics",
    description:
      "Cargo lashing certification, draft calculations, and loading/discharge supervision.",
    image: "/images/services/cargo-lashing.jpg",
    icon: Package,
  },
];

export default function IndustriesPreview() {
  return (
    <section className="relative isolate overflow-hidden border-t border-[#e2e8f0] bg-white py-18 text-[#071d33] lg:py-24">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            theme="light"
            eyebrow="Who We Work With"
            title="Industries We Serve"
            description="We deliver independent marine surveying and consultancy services tailored to the specific risk management and operational requirements of every maritime stakeholder."
          />
          <Link
            href="/industries"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#0284c7] transition-colors duration-200 hover:text-[#0369a1] self-start md:self-auto"
          >
            Explore All Sectors <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 6 Clean Mockup Architectural Sector Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Reveal
                key={sector.title}
                variant="card"
                delay={index * 0.05}
                className="h-full min-w-0"
              >
                <Link
                  href="/industries"
                  className="cmcs-card-light group flex h-full flex-col items-center justify-center rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:border-[#071d33] hover:shadow-lg"
                >
                  <div className="mb-3.5 flex h-13 w-13 items-center justify-center rounded-xl bg-[#f0f4f8] text-[#071d33] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#071d33] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[14px] sm:text-[15px] font-bold text-[#071d33] transition-colors group-hover:text-[#0c3660] leading-snug">
                    {sector.title}
                  </h3>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
