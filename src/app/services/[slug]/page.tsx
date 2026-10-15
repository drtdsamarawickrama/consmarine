import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  FileText,
  Camera,
  Compass,
} from "lucide-react";
import { services } from "@/data/services";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactCTA from "@/components/home/ContactCTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.title ?? "Marine Service",
    description: s?.description,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();

  // Find 3 other related services
  const relatedServices = services
    .filter((item) => item.slug !== s.slug)
    .slice(0, 3);

  const keyDeliverables = [
    {
      icon: FileText,
      title: "Comprehensive Survey Report",
      desc: "Detailed classification-grade documentation with clear factual analysis.",
    },
    {
      icon: Camera,
      title: "High-Resolution Photographic Log",
      desc: "Timestamped inspection photography recording vessel condition.",
    },
    {
      icon: ShieldCheck,
      title: "Independent & Impartial Findings",
      desc: "Unbiased assessments to protect commercial and legal interests.",
    },
    {
      icon: Clock3,
      title: "Rapid Preliminary Briefing",
      desc: "Same-day executive overview followed by complete final report.",
    },
  ];

  const surveyScope = [
    "Comprehensive pre-inspection briefing and scope verification",
    "Onboard visual and instrumental examination by certified surveyors",
    "Detailed documentation of findings, measurements, and deviations",
    "Objective assessment in accordance with international maritime codes",
    "Executive summary and final survey report delivery",
  ];

  return (
    <main className="bg-soft-white text-midnight">
      {/* Cinematic Page Banner with the specific service's photography */}
      <PageBanner
        title={s.title}
        eyebrow="Marine Surveying"
        subtitle="Independent. Accurate. Reliable."
        image={s.image}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: s.title },
        ]}
      />

      {/* Main Service Details Section — Readable Architectural Light Surface */}
      <section className="relative isolate py-16 lg:py-24 bg-[#FAFBFC] text-midnight">
        <Container>
          {/* Back Link */}
          <div className="mb-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-bold text-midnight shadow-2xs transition-all duration-300 hover:border-maritime hover:bg-midnight hover:text-white"
            >
              <ArrowLeft size={15} /> Back to All Services
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Visual Presentation & Trust Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main Service Photo */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-stone-200 shadow-[0_15px_40px_rgba(6,29,50,0.12)]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight/60 via-transparent to-transparent" />
                
                {/* Floating Service Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-midnight/90 p-3 text-white backdrop-blur-md flex items-center justify-between shadow-md">
                  <span className="text-xs font-bold flex items-center gap-2">
                    <ShieldCheck size={16} className="text-aqua" />
                    Certified Marine Inspection
                  </span>
                  <span className="text-[11px] font-mono text-aqua-light">
                    CMCS-{String(s.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Trust & Benefits Panel — Deep Ocean Navy Card */}
              <div className="rounded-2xl border border-aqua/30 bg-linear-to-b from-deep-ocean to-midnight p-7 text-white backdrop-blur-xl shadow-xl">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <Compass size={18} className="text-aqua" /> Why Choose CMCS?
                </h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-silver">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-aqua shrink-0 mt-0.5" />
                    <span>Independent and impartial reporting with zero conflicts of interest</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-aqua shrink-0 mt-0.5" />
                    <span>Experienced and qualified marine surveyors stationed in Sri Lanka</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-aqua shrink-0 mt-0.5" />
                    <span>24/7 global response capability for emergency vessel appointments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-aqua shrink-0 mt-0.5" />
                    <span>Rapid delivery of preliminary findings followed by full technical report</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Service Information & Scope (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
                  <span className="h-0.5 w-6 rounded-full bg-maritime" />
                  Service Scope &amp; Methodology
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl lg:text-5xl leading-tight">
                  {s.title}
                </h1>

                <p className="mt-6 text-base leading-relaxed text-graphite/85 sm:text-lg">
                  {s.description}
                </p>
              </div>

              {/* What This Survey Covers */}
              <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-[0_4px_20px_rgba(6,29,50,0.05)]">
                <h3 className="text-lg font-bold text-midnight mb-4">
                  Our Survey Scope Typically Includes
                </h3>
                <div className="space-y-3">
                  {surveyScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maritime/10 text-maritime mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <span className="text-sm text-graphite/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Grid */}
              <div>
                <h3 className="text-lg font-bold text-midnight mb-4">
                  Standard Inspection Deliverables
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {keyDeliverables.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={d.title}
                        className="rounded-xl border border-stone-200 bg-white p-4.5 shadow-2xs transition-all duration-300 hover:border-maritime/40 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon size={18} className="text-maritime" />
                          <h4 className="text-xs font-bold text-midnight">{d.title}</h4>
                        </div>
                        <p className="text-xs text-graphite/75 leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-midnight px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-deep-ocean hover:shadow-lg"
                >
                  Request This Survey <ArrowUpRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-4 text-sm font-bold text-midnight shadow-xs transition-all duration-300 hover:border-maritime hover:text-maritime"
                >
                  Ask Technical Questions
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services Section */}
          <div className="mt-24 border-t border-stone-200 pt-16">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-maritime">
                  Complementary Services
                </span>
                <h2 className="text-2xl font-extrabold text-midnight sm:text-3xl mt-1">
                  Related Marine Inspections
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-maritime hover:text-midnight hover:underline"
              >
                View All Services <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} variant="light" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
