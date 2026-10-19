import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import ContactCTA from "@/components/home/ContactCTA";
import {
  Ship,
  Anchor,
  Compass,
  ShieldCheck,
  Handshake,
  Package,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Explore how Constellation Marine serves ship owners, operators, charterers, marine insurers, P&I clubs, and port authorities.",
};

const sectorsDetailed = [
  {
    title: "Ship Owners & Managers",
    icon: Ship,
    image: "/images/services/vessel-condition.jpg",
    summary:
      "Protecting vessel asset valuation, verifying physical condition, and maintaining continuous operational compliance.",
    solutions: [
      "Vessel On-Hire / Off-Hire condition documentation",
      "Pre-purchase surveys and independent condition appraisals",
      "Ultrasonic hatch cover thickness and watertightness tests",
      "ISM & ISPS internal safety audits and compliance verification",
    ],
  },
  {
    title: "Charterers & Traders",
    icon: Compass,
    image: "/images/services/cargo-hold.jpg",
    summary:
      "Safeguarding cargo integrity, mitigating disputes, and independently certifying bunker fuel quantities.",
    solutions: [
      "Draft surveys for bulk cargo loading and discharge verification",
      "General cargo hold and grain cleanliness inspections",
      "Bunker fuel 221B quantity measurement and sludge surveys",
      "Container interchange and condition verification",
    ],
  },
  {
    title: "Marine Underwriters & Insurers",
    icon: ShieldCheck,
    image: "/images/services/damage-survey-official.jpg",
    summary:
      "Providing unbiased, evidence-based casualty assessments and technical cause-of-damage determinations.",
    solutions: [
      "Hull and machinery damage inspections with forensic evidence",
      "Pre-risk condition evaluations and risk mitigation recommendations",
      "Salvage, collision, and grounding assessment reporting",
      "Independent repair cost verification and quote evaluation",
    ],
  },
  {
    title: "P&I Clubs",
    icon: Handshake,
    image: "/images/services/pi-survey.jpg",
    summary:
      "Delivering objective, prompt third-party investigation for cargo damage claims, personal injury, and liability.",
    solutions: [
      "Prompt incident investigation and photographic evidence logging",
      "Cargo contamination and water ingress evaluations",
      "Third-party liability assessments and witness interviews",
      "Comprehensive factual reports for legal and dispute settlement",
    ],
  },
  {
    title: "Ports & Terminal Operators",
    icon: Anchor,
    image: "/images/services/marine-warranty.jpg",
    summary:
      "Facilitating safe berth operations, towage approvals, and environmental compliance at terminal facilities.",
    solutions: [
      "Marine warranty surveys and towage plan approvals",
      "Gas-free inspections for tank entry and hot work permits",
      "Jetty, quay, and mooring damage inspections",
      "Sludge and waste disposal monitoring under environmental guidelines",
    ],
  },
  {
    title: "Logistics & Freight Forwarders",
    icon: Package,
    image: "/images/services/cargo-lashing.jpg",
    summary:
      "Ensuring secure cargo transport through systematic lashing approvals and loading supervision.",
    solutions: [
      "Cargo lashing and securing inspections for heavy lifts & project cargo",
      "Tally surveys during critical loading and discharge stages",
      "Container rework and cargo restowing oversight",
      "Out-of-gauge (OOG) cargo handling safety supervision",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-soft-white text-midnight">
      <PageBanner
        title="Industries We Serve"
        eyebrow="Market Sectors"
        subtitle="Supporting a Wide Range of Maritime Sectors Worldwide."
        image="/images/gallery/g4.jpeg"
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="relative isolate bg-[#F7FAFC] py-16 lg:py-20">
        <Container>
          <Reveal variant="heading" className="mb-12 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
              <span className="h-0.5 w-6 rounded-full bg-maritime" />
              Tailored Sector Capabilities
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl lg:text-5xl leading-tight">
              Specialized Marine Consulting for Every Maritime Stakeholder
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite/85">
              Every maritime sector operates under unique commercial pressures,
              regulatory requirements, and risk profiles. At CMCS, we deliver
              customized surveying solutions designed to protect your
              operational assets and financial interests.
            </p>
          </Reveal>

          {/* Detailed Sector Cards Grid — Architectural White */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {sectorsDetailed.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Reveal
                  key={sector.title}
                  variant="card"
                  delay={(index % 3) * 0.075}
                  className="h-full min-w-0"
                >
                  <div className="cmcs-card-light group flex h-full flex-col justify-between overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1">
                    {/* Card body with border and padding */}
                    <div className="p-6">
                      {/* Header: Icon badge + Title */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[#D6E0E8] bg-[#F7FAFC] text-maritime transition-colors duration-300 group-hover:bg-[#E8EEF3]">
                          <Icon size={22} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-base font-bold text-midnight transition-colors leading-snug group-hover:text-maritime">
                          {sector.title}
                        </h3>
                      </div>

                      <p className="text-xs leading-relaxed text-graphite/75 mb-5">
                        {sector.summary}
                      </p>

                      {/* Solutions Checklist */}
                      <div className="space-y-2.5 border-t border-stone-100 pt-4">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-maritime mb-2">
                          Common Survey Assignments:
                        </span>
                        {sector.solutions.map((sol, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-graphite/70"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-maritime shrink-0 mt-0.5"
                            />
                            <span className="leading-tight">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-1 flex items-center justify-between border-t border-[#E8EEF3] px-6 py-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-maritime hover:text-midnight transition-colors group-hover:underline"
                      >
                        Discuss Requirements <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
