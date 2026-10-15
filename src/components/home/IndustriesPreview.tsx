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
    <section className="relative isolate overflow-hidden bg-[#F7F7F4] py-20 lg:py-28 text-midnight border-t border-stone-200/70">
      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0b3555_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            theme="light"
            eyebrow="Industries We Serve"
            title="Supporting a Wide Range of Maritime Sectors"
            description="We deliver independent marine surveying and consultancy services tailored to the specific risk management and operational requirements of every maritime stakeholder."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-xs font-bold text-midnight shadow-xs transition-all duration-300 hover:border-aqua hover:bg-midnight hover:text-white hover:shadow-md shrink-0 self-start md:self-auto"
          >
            Explore All Sectors <ArrowUpRight size={15} className="text-aqua" />
          </Link>
        </div>

        {/* 6 Refined Architectural Sector Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Reveal
                key={sector.title}
                variant="card"
                delay={(index % 3) * 0.09}
                className="h-full min-w-0"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_6px_24px_rgba(6,29,50,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-aqua/50 hover:shadow-[0_20px_40px_rgba(6,29,50,0.12)]">
                  {/* Photo Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-midnight">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Subtle realistic maritime gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-midnight/70 via-midnight/20 to-transparent" />

                    {/* Floating Icon badge */}
                    <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-midnight/90 text-aqua shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-aqua group-hover:text-midnight">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg font-bold text-midnight transition-colors duration-200 group-hover:text-maritime">
                        {sector.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-graphite/75 font-normal">
                        {sector.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-xs font-bold text-maritime transition-colors group-hover:text-aqua">
                      <span className="group-hover:underline">
                        Sector Solutions
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
