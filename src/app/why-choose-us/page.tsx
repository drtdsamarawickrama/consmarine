import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import WhyPreview from "@/components/home/WhyPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why international shipowners, charterers, and marine insurers trust Constellation Marine for independent surveying and technical consultancy.",
};

const portHubs = [
  {
    name: "Port of Colombo",
    desc: "South Asia's primary transshipment container hub with comprehensive ship services and bunkering berths.",
  },
  {
    name: "Hambantota International Port",
    desc: "Strategically located alongside the main East-West sea route for rapid deep-water survey attendance.",
  },
  {
    name: "Port of Galle",
    desc: "Convenient southern offshore anchorage ideal for crew changes, supply, and off-port-limit inspections.",
  },
  {
    name: "Port of Trincomalee",
    desc: "World-class natural deep-water harbor supporting dry docking, layups, and specialized marine operations.",
  },
];

export default function WhyPage() {
  return (
    <main className="bg-soft-white text-midnight">
      <PageBanner
        title="Why Choose Us"
        eyebrow="Our Competitive Advantage"
        subtitle="Independent Expertise. Global Perspective. Reliable Results."
        image="/images/hero/ship.webp"
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />

      {/* Comprehensive Strengths Grid */}
      <WhyPreview full />

      {/* Strategic Location Advantage: Sri Lanka Maritime Crossroads — Deep Ocean Navy */}
      <section className="relative isolate border-y border-white/10 bg-[#04182A] py-16 text-white lg:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="heading">
              <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-aqua-light">
                <span className="h-0.5 w-6 rounded-full bg-aqua" />
                Geographic Advantage
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Strategic Hub at the Crossroads of Global Shipping
              </h2>

              <p className="mt-6 text-base leading-relaxed text-silver">
                Located in Sri Lanka directly along the world&apos;s busiest
                maritime east-west corridor, CMCS offers unparalleled response
                times for commercial vessels traversing the Indian Ocean.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-mist">
                Whether your vessel requires immediate damage surveying, on-hire
                assessment, bunker verification, or routine classification
                audits, our surveyors can attend at anchor or alongside across
                all principal Sri Lankan ports.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="cmcs-card-dark p-4">
                  <div className="text-2xl font-extrabold text-[#70BFFF]">24/7</div>
                  <div className="mt-1 text-xs text-silver">
                    Immediate Surveyor Dispatch
                  </div>
                </div>
                <div className="cmcs-card-dark p-4">
                  <div className="text-2xl font-extrabold text-[#70BFFF]">
                    4 Major
                  </div>
                  <div className="mt-1 text-xs text-silver">
                    Sri Lankan Commercial Ports
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="cmcs-button inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[#071D33] transition-colors hover:bg-[#E8EEF3]"
                >
                  Appoint a Surveyor <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>

            {/* Ports Breakdown Grid */}
            <Reveal variant="card" delay={0.1} className="space-y-4">
              {portHubs.map((hub) => (
                <div
                  key={hub.name}
                  className="cmcs-card-dark p-5 transition-colors hover:bg-[#12476B]"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <MapPin size={18} className="text-aqua" />
                    <h3 className="text-sm font-bold text-white">{hub.name}</h3>
                  </div>
                  <p className="pl-7 text-xs text-silver leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
