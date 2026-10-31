import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import ContactCTA from "@/components/home/ContactCTA";
import ServicesList from "@/components/services/ServicesList";
import { services } from "@/data/services";
import { ShieldCheck, Clock3, FileCheck2, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Marine Services | Constellation Marine Consultant Services",
  description:
    "Explore 17 certified marine inspection, surveying and consultancy services from Constellation Marine Consultant Services (Pvt) Ltd.",
};

const serviceHighlights = [
  {
    icon: Anchor,
    title: "17 Specialised Services",
    desc: "CMCS-01 to CMCS-17 covering vessel conditions, cargo holds, warranty, compass & audits.",
  },
  {
    icon: ShieldCheck,
    title: "Itemised Survey Scope",
    desc: "Strict protocol-driven inspections following classification standards and IMO conventions.",
  },
  {
    icon: FileCheck2,
    title: "Definitive Deliverables",
    desc: "Classification-grade technical reports, photographic logs, and verified calculation sheets.",
  },
  {
    icon: Clock3,
    title: "Same-Day Briefings",
    desc: "Rapid preliminary findings delivered immediately, backed by 24/7 emergency readiness.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-soft-white text-midnight">
      <PageBanner
        title="Our Services"
        eyebrow="Marine Capabilities"
        subtitle="Comprehensive Marine Consultancy & Surveying Solutions Worldwide."
        image="/images/gallery/g3.jpeg"
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Feature Highlights Grid */}
      <section className="border-b border-[#e2e8f0] bg-white py-10 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-xl border border-stone-200/80 bg-[#f8fafc] p-4 transition-all duration-300 hover:border-[#0284c7]/40 hover:shadow-xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0284c7]/10 text-[#0284c7]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071d33]">{item.title}</h3>
                    <p className="mt-1 text-xs text-[#52677c] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services List Section */}
      <section className="relative isolate py-16 lg:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <Container>
          <Reveal variant="heading" className="mb-10 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              <span className="h-0.5 w-5 rounded-full bg-[#0284c7]" />
              What We Offer
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#071d33] sm:text-4xl lg:text-5xl leading-tight">
              Certified Marine Surveys &amp; Technical Inspections
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#52677c]">
              Constellation Marine Consultant Services delivers independent, accurate, and prompt marine surveying solutions. Select a service below to review its complete survey scope and deliverables.
            </p>
          </Reveal>

          <ServicesList services={services} variant="light" />
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
