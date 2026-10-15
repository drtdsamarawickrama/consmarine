import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRight, Headphones, Phone, Mail } from "lucide-react";
import { site } from "@/config/site";

export default function ContactCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-r from-midnight via-deep-ocean to-midnight py-16 md:py-20 text-white border-y border-aqua/20">
      {/* Background Lighting Effects */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-marine/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-aqua/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal variant="soft">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-aqua/30 bg-linear-to-br from-deep-ocean/80 via-[#07243c]/90 to-midnight/95 p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,10,24,0.6)] lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aqua/40 bg-teal-dark/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua-light">
                <Headphones size={14} className="text-aqua" />
                24/7 Global Maritime Support
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Need a Professional Marine Survey?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-silver">
                Get in touch with our team of certified marine surveyors and
                consultants for independent, accurate, and rapid technical
                assessments worldwide.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-ice">
                <a
                  href={"tel:" + site.phones[0].replaceAll(" ", "")}
                  className="flex items-center gap-2 transition hover:text-aqua"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-dark/60 text-aqua">
                    <Phone size={14} />
                  </div>
                  <span>{site.phones[0]}</span>
                </a>
                <a
                  href={"mailto:" + site.email}
                  className="flex items-center gap-2 transition hover:text-aqua"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-dark/60 text-aqua">
                    <Mail size={14} />
                  </div>
                  <span>{site.email}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-aqua to-marine px-8 py-4 text-sm font-extrabold text-midnight shadow-[0_4px_25px_rgba(73,197,229,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(73,197,229,0.6)]"
              >
                Request a Survey <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-aqua/40 bg-deep-ocean/60 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-aqua hover:bg-teal-dark/50"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
