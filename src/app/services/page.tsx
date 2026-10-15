import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import ContactCTA from "@/components/home/ContactCTA";
import ServicesList from "@/components/services/ServicesList";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Marine Services",
  description:
    "Explore 17 certified marine inspection, surveying and consultancy services from Constellation Marine Consultant Services (Pvt) Ltd.",
};

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

      <section className="relative isolate py-20 lg:py-28 bg-[#E8EFF1]">
        <Container>
          <Reveal variant="heading" className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
              <span className="h-0.5 w-6 rounded-full bg-maritime" />
              Global Survey Portfolio
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              Independent Marine Inspections &amp; Consultancy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite/85">
              We deliver rigorous inspections across hull condition, machinery,
              cargo security, towage approvals, and regulatory compliance. Every
              survey report is prepared with absolute independence and technical
              precision.
            </p>
          </Reveal>

          <ServicesList services={services} variant="light" />
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
