import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import WhyPreview from "@/components/home/WhyPreview";
import ContactCTA from "@/components/home/ContactCTA";
import {
  aboutParagraphs,
  vision,
  mission,
  chairmanMessage,
} from "@/data/about";
import {
  Compass,
  Target,
  Gem,
  Ship,
  CheckCircle2,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Constellation Marine Consultant Services (Pvt) Ltd (CMCS). Independent marine surveying, technical consultancy, vision, mission, and leadership.",
};

const values = [
  {
    title: "Independence & Impartiality",
    desc: "Uncompromising objectivity protecting our clients' true interests in every survey and report.",
  },
  {
    title: "Technical Precision",
    desc: "Meticulous documentation and adherence to international maritime classification standards.",
  },
  {
    title: "Global Responsiveness",
    desc: "24/7 round-the-clock availability for emergency surveys and rapid worldwide deployment.",
  },
  {
    title: "Professional Integrity",
    desc: "Transparent communication, ethical conduct, and long-term client trust.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-soft-white text-midnight">
      {/* Cinematic Page Banner */}
      <PageBanner
        title="About Us"
        eyebrow="Our Company"
        subtitle="Trusted Expertise. Global Perspective. Professional Integrity."
        image="/images/hero/cmcs-cinematic-ship-1.webp"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. Company Story & Integrity — Architectural Soft White */}
      <section className="relative isolate py-20 lg:py-28 overflow-hidden bg-[#FAFBFC] text-midnight">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Offset Photography Frame */}
            <Reveal
              variant="image"
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-3xl border border-stone-200 bg-stone-100/60 blur-[1px] transform -rotate-1 hidden sm:block" />

              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-stone-200 shadow-[0_15px_40px_rgba(6,29,50,0.12)]">
                <Image
                  src="/images/gallery/g1.jpeg"
                  alt="Constellation Marine vessel operations"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Badge — Deep Ocean Navy */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 rounded-2xl border border-aqua/30 bg-midnight/95 p-4 sm:p-5 text-white backdrop-blur-xl shadow-[0_15px_35px_rgba(6,29,50,0.3)] flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-aqua to-teal-dark text-midnight shadow-md">
                  <Ship size={24} strokeWidth={2} />
                </div>
                <div>
                  <strong className="block text-2xl font-extrabold text-white sm:text-3xl">
                    10+
                  </strong>
                  <span className="text-xs font-semibold text-silver">
                    Years of Marine Surveying
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: Authentic Company Story */}
            <Reveal variant="heading" delay={0.12}>
              <div className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
                <span className="h-0.5 w-6 rounded-full bg-maritime" />
                Our Story
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl lg:text-5xl leading-tight">
                A Global Marine Consultancy Built on Integrity and Expertise
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite/85">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-midnight px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-deep-ocean hover:shadow-lg"
                >
                  Request a Survey <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-bold text-midnight shadow-xs transition-all duration-300 hover:border-maritime hover:text-maritime"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Vision, Mission & Values Grid — Deep Ocean Navy */}
      <section className="relative isolate py-20 lg:py-24 bg-linear-to-b from-midnight via-[#07243c] to-midnight text-white border-y border-aqua/15">
        <Container>
          <Reveal
            variant="heading"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-aqua-light">
              <span className="h-0.5 w-6 rounded-full bg-aqua" />
              Core Foundations
              <span className="h-0.5 w-6 rounded-full bg-aqua" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Vision, Mission &amp; Guiding Principles
            </h2>
            <p className="mt-4 text-base text-silver">
              The core principles and commitments that define CMCS as an
              international benchmark in marine surveying.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Vision */}
            <Reveal variant="card" className="h-full">
              <div className="group relative flex flex-col rounded-2xl border border-aqua/25 bg-linear-to-b from-deep-ocean/80 to-midnight/95 p-8 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,10,24,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:shadow-[0_20px_45px_rgba(0,10,24,0.8),0_0_25px_rgba(73,197,229,0.25)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-aqua/30 bg-teal-dark/40 text-aqua shadow-[0_0_15px_rgba(73,197,229,0.2)]">
                  <Compass size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-aqua-light transition-colors">
                  Our Vision
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver">
                  {vision}
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal variant="card" delay={0.09} className="h-full">
              <div className="group relative flex flex-col rounded-2xl border border-aqua/25 bg-linear-to-b from-deep-ocean/80 to-midnight/95 p-8 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,10,24,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:shadow-[0_20px_45px_rgba(0,10,24,0.8),0_0_25px_rgba(73,197,229,0.25)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-aqua/30 bg-teal-dark/40 text-aqua shadow-[0_0_15px_rgba(73,197,229,0.2)]">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-aqua-light transition-colors">
                  Our Mission
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver">
                  {mission}
                </p>
              </div>
            </Reveal>

            {/* Values */}
            <Reveal variant="card" delay={0.18} className="h-full">
              <div className="group relative flex flex-col rounded-2xl border border-aqua/25 bg-linear-to-b from-deep-ocean/80 to-midnight/95 p-8 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,10,24,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:shadow-[0_20px_45px_rgba(0,10,24,0.8),0_0_25px_rgba(73,197,229,0.25)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-aqua/30 bg-teal-dark/40 text-aqua shadow-[0_0_15px_rgba(73,197,229,0.2)]">
                  <Gem size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-aqua-light transition-colors">
                  Our Values
                </h3>
                <div className="mt-4 space-y-3">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="border-b border-aqua/10 pb-2.5 last:border-0 last:pb-0"
                    >
                      <strong className="block text-xs font-bold text-white">
                        {v.title}
                      </strong>
                      <span className="text-[11px] text-silver leading-tight block mt-0.5">
                        {v.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Leadership & Professional Accountability — Architectural Light Stone */}
      <section className="relative isolate py-20 lg:py-28 bg-[#E8EFF1] text-midnight">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] items-start">
            <Reveal variant="heading">
              <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
                <span className="h-0.5 w-6 rounded-full bg-maritime" />
                Executive Leadership
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
                Guiding with Experience and Vision
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-graphite/85">
                {chairmanMessage.filter(Boolean).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Credibility and Affiliations Panel */}
            <Reveal
              variant="card"
              delay={0.12}
              className="rounded-2xl border border-stone-300 bg-white p-7 shadow-[0_10px_30px_rgba(6,29,50,0.08)]"
            >
              <h3 className="text-lg font-bold text-midnight flex items-center gap-2">
                <Award size={20} className="text-maritime" /> Verified
                Credentials
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-graphite/75">
                CMCS personnel maintain training credentials and professional
                associations with recognized maritime institutions.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    file: "mclarens-maritime-academy.jpg",
                    name: "McLarens Maritime Academy",
                  },
                  { file: "lanka-academy.jpg", name: "Lanka Academy" },
                  {
                    file: "nautical-institute.jpg",
                    name: "The Nautical Institute",
                  },
                ].map(({ file, name }) => (
                  <div
                    key={file}
                    className="flex items-center gap-3 rounded-xl border border-stone-200 bg-[#FAFBFC] p-2.5"
                  >
                    <div className="relative h-12 w-16 shrink-0 rounded bg-white p-1 border border-stone-200">
                      <Image
                        src={"/images/credentials/" + file}
                        alt={name}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-midnight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-maritime/20 bg-maritime/5 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-maritime">
                  <CheckCircle2 size={16} className="text-maritime" />
                  <span>Licensed Marine Consultancy</span>
                </div>
                <p className="mt-1 text-[11px] text-graphite/75">
                  All inspections adhere to international maritime safety, ISM,
                  and ISPS frameworks.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Strengths */}
      <WhyPreview full />

      {/* Concluding CTA */}
      <ContactCTA />
    </main>
  );
}
