import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight, Ship, ShieldCheck, Globe2, Clock3 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-midnight via-[#05213b] to-midnight py-20 lg:py-28 text-white">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-dark/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Offset Image Frame with 2.5D Depth */}
          <Reveal
            variant="image"
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Background offset decorative border */}
            <div className="absolute -inset-3 rounded-3xl border border-aqua/30 bg-linear-to-br from-teal-dark/20 to-transparent blur-[1px] transform -rotate-1 hidden sm:block" />

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-aqua/40 shadow-[0_20px_50px_rgba(0,10,24,0.7)]">
              <Image
                src="/images/gallery/g2.jpeg"
                alt="Constellation Marine vessel operations and maritime inspection"
                fill
                sizes="(max-width:1024px) 100vw,50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-transparent to-transparent" />
            </div>

            {/* Floating 2.5D Credibility Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 rounded-2xl border border-aqua/40 bg-linear-to-br from-deep-ocean/90 via-[#07243c]/95 to-midnight/95 p-4 sm:p-5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,10,24,0.6)] flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-aqua to-teal-dark text-midnight shadow-[0_0_15px_rgba(73,197,229,0.4)]">
                <Ship size={24} strokeWidth={2} />
              </div>
              <div>
                <strong className="block text-2xl font-extrabold text-white sm:text-3xl">
                  10+
                </strong>
                <span className="text-xs font-semibold text-silver">
                  Years of Global Excellence
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Editorial Information Panel */}
          <Reveal variant="heading" delay={0.12}>
            <div className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-aqua-light">
              <span className="h-0.5 w-6 rounded-full bg-aqua" />
              Our Company
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              A Global Marine Consultancy Built on Integrity and Expertise
            </h2>

            <p className="mt-6 text-base leading-relaxed text-silver">
              At Constellation Marine Consultant Services (Pvt) Ltd (CMCS), we
              bring confidence, precision, and professionalism to the maritime
              industry. Based in Sri Lanka, we provide independent marine
              inspection, surveying, and consultancy services to shipowners,
              operators, insurers, and charterers worldwide.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-mist">
              Our strength lies in our commitment to accuracy, integrity, and
              protecting our clients’ operational and commercial interests
              through 24/7 responsiveness and rigorous international standards.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-aqua/15 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-dark/40 text-aqua border border-aqua/20">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Independent &amp; Impartial
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-dark/40 text-aqua border border-aqua/20">
                  <Globe2 size={18} />
                </div>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Worldwide Reach
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-dark/40 text-aqua border border-aqua/20">
                  <Clock3 size={18} />
                </div>
                <span className="text-xs font-bold text-white sm:text-sm">
                  24/7 Availability
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-dark/40 text-aqua border border-aqua/20">
                  <Ship size={18} />
                </div>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Strategic Hub: Sri Lanka
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about-us" className="cmcs-btn-primary">
                Our Story <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="cmcs-btn-secondary">
                Speak with Our Surveyors
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
