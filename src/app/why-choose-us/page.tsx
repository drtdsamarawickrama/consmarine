import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import WhyPreview from "@/components/home/WhyPreview";
import ContactCTA from "@/components/home/ContactCTA";
import {
  MapPin,
  ArrowUpRight,
  Anchor,
  Clock,
  Compass,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why international shipowners, charterers, and marine insurers trust Constellation Marine for independent surveying and technical consultancy.",
};

const portHubs = [
  {
    name: "Port of Colombo",
    badge: "Primary Transshipment Hub",
    coords: "06° 57' N, 79° 51' E",
    desc: "South Asia's leading deep-water container transshipment hub with comprehensive container terminals, dry docks, and 24/7 bunkering berths.",
    coverage: "Immediate attendance inside harbor & outer anchorage",
  },
  {
    name: "Hambantota International Port",
    badge: "East-West Shipping Lane",
    coords: "06° 07' N, 81° 06' E",
    desc: "Positioned directly on the primary Indian Ocean trunk route. Ideal for rapid deep-water survey response, RORO, bulk, and bunker verification.",
    coverage: "Direct deep-water berth & southern sea lane access",
  },
  {
    name: "Port of Galle",
    badge: "Offshore & OPL Terminal",
    coords: "06° 02' N, 80° 13' E",
    desc: "Prime southern offshore roadstead optimal for speedy crew transfers, provision delivery, and swift Off-Port-Limit (OPL) marine inspections.",
    coverage: "Fast-boat offshore dispatch & continuous anchorage watch",
  },
  {
    name: "Port of Trincomalee",
    badge: "Natural Deep-Water Basin",
    coords: "08° 34' N, 81° 14' E",
    desc: "One of the world's finest natural sheltered harbors, perfectly equipped for long-term vessel layups, heavy salvage support, and ship-to-ship transfers.",
    coverage: "Protected natural waters & sheltered anchorage berths",
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

      {/* Strategic Location Advantage: Sri Lanka Maritime Crossroads — Next Level Oceanic Showcase */}
      <section className="relative isolate overflow-hidden border-y border-aqua/15 bg-linear-to-b from-[#020b14] via-[#041a2e] to-[#020b14] py-20 text-white lg:py-28">
        {/* Subtle Ambient Glow Elements */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(73,197,229,0.14)_0%,_transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-aqua/5 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Top Tier: Strategic Overview & Featured Aerial Showcase */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading & Strategic Value */}
            <div className="lg:col-span-7">
              <Reveal variant="heading">
                <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-aqua/30 bg-aqua/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-aqua-light shadow-[0_0_15px_rgba(73,197,229,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                  </span>
                  Geographic Advantage
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
                  Strategic Hub at the{" "}
                  <span className="bg-linear-to-r from-white via-aqua-light to-aqua bg-clip-text text-transparent">
                    Crossroads of Global Shipping
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-silver sm:text-lg">
                  Positioned in Sri Lanka directly along the world&apos;s
                  busiest maritime East-West corridor, CMCS delivers
                  unrivaled response speeds for commercial fleets traversing the
                  vital Indian Ocean sea lanes.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Whether your vessel requires emergency damage surveying,
                  rigorous on-hire inspection, precision bunker quantity audits,
                  or routine classification verification, our certified surveyors
                  attend at anchor or alongside across all four commercial ports.
                </p>

                {/* Performance Metrics Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="group rounded-2xl border border-aqua/20 bg-deep-ocean/50 p-5 backdrop-blur-md transition-all duration-300 hover:border-aqua/50 hover:bg-deep-ocean/80 hover:shadow-[0_8px_30px_rgba(73,197,229,0.12)]">
                    <div className="flex items-center gap-2.5 text-aqua">
                      <Clock size={20} className="shrink-0" />
                      <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        24/7
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-aqua-light">
                      Immediate Surveyor Dispatch
                    </div>
                    <p className="mt-1 text-[11px] text-silver leading-normal">
                      Round-the-clock emergency and routine attendance across Sri Lankan waters.
                    </p>
                  </div>

                  <div className="group rounded-2xl border border-aqua/20 bg-deep-ocean/50 p-5 backdrop-blur-md transition-all duration-300 hover:border-aqua/50 hover:bg-deep-ocean/80 hover:shadow-[0_8px_30px_rgba(73,197,229,0.12)]">
                    <div className="flex items-center gap-2.5 text-aqua">
                      <Anchor size={20} className="shrink-0" />
                      <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        4 Major
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-aqua-light">
                      Commercial Port Hubs
                    </div>
                    <p className="mt-1 text-[11px] text-silver leading-normal">
                      Direct surveyor deployment in Colombo, Hambantota, Galle, and Trincomalee.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-aqua px-6 py-3.5 text-sm font-bold text-midnight shadow-[0_4px_20px_rgba(73,197,229,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_6px_25px_rgba(255,255,255,0.4)]"
                  >
                    <span>Appoint a Surveyor</span>
                    <ArrowUpRight size={17} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-aqua/50 hover:bg-white/10"
                  >
                    <span>View Inspection Capabilities</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Original Aerial Port Showcase */}
            <div className="lg:col-span-5">
              <Reveal variant="card" delay={0.15}>
                <div className="relative group overflow-hidden rounded-3xl border border-aqua/30 bg-deep-ocean/60 p-2.5 shadow-[0_20px_60px_rgba(2,11,20,0.8)] backdrop-blur-xl transition-all duration-500 hover:border-aqua/60 hover:shadow-[0_25px_70px_rgba(73,197,229,0.2)]">
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/strategic-port-hub.jpg"
                      alt="Sri Lanka Strategic Port Hub - Aerial view of container terminal and Indian Ocean maritime corridor"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      priority
                    />

                    {/* Gradient Overlay for Contrast */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#020b14]/90 via-[#020b14]/20 to-transparent" />

                    {/* Floating Top Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-midnight/80 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md">
                        <Navigation size={13} className="text-aqua" />
                        <span>Indian Ocean East-West Axis</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-aqua/40 bg-deep-ocean/90 px-2.5 py-1 text-[10px] font-semibold text-aqua-light backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Readiness
                      </div>
                    </div>

                    {/* Floating Bottom Card */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl border border-white/15 bg-midnight/85 p-3.5 shadow-xl backdrop-blur-md">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span className="flex items-center gap-1.5">
                          <Compass size={14} className="text-aqua" />
                          Sri Lanka Maritime Gateway
                        </span>
                        <span className="text-[11px] text-aqua-light font-mono">
                          06° 57&apos; N | 79° 51&apos; E
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-silver leading-snug">
                        Immediate surveyor mobilization across Colombo, Hambantota, Galle, and Trincomalee.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom Tier: 4 Major Commercial Ports Grid */}
          <div className="mt-16 lg:mt-20">
            <Reveal variant="heading">
              <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-aqua" />
                    Four Principal Commercial Ports
                  </h3>
                  <p className="mt-1 text-xs text-silver">
                    Strategic coastal footprint ensuring rapid on-site surveyor availability
                  </p>
                </div>
                <span className="text-xs font-semibold text-aqua-light">
                  Active Coverage Throughout Sri Lankan Territorial Waters
                </span>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {portHubs.map((hub, idx) => (
                <Reveal key={hub.name} variant="card" delay={0.08 * (idx + 1)}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-aqua/15 bg-deep-ocean/45 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-aqua/50 hover:bg-deep-ocean/80 hover:shadow-[0_12px_35px_rgba(73,197,229,0.15)]">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="inline-flex rounded-md border border-aqua/25 bg-aqua/10 px-2 py-0.5 text-[10px] font-bold text-aqua-light">
                          {hub.badge}
                        </span>
                        <span className="text-[10px] font-mono text-mist">
                          {hub.coords}
                        </span>
                      </div>

                      {/* Port Title */}
                      <h4 className="text-base font-bold text-white group-hover:text-aqua transition-colors flex items-center gap-1.5">
                        <MapPin size={16} className="text-aqua shrink-0" />
                        <span>{hub.name}</span>
                      </h4>

                      {/* Port Description */}
                      <p className="mt-2.5 text-xs text-silver leading-relaxed">
                        {hub.desc}
                      </p>
                    </div>

                    {/* Operational Coverage Footer */}
                    <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-medium text-aqua-light/90 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua/80" />
                      <span>{hub.coverage}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
