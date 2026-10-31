import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRight, Headphones, Phone, Mail } from "lucide-react";
import { site } from "@/config/site";

export default function ContactCTA() {
  return (
    <section className="cmcs-contact-cta bg-white px-4 py-12 text-white sm:px-6 md:py-16">
      <Container>
        <Reveal variant="soft">
          <div className="cmcs-contact-card relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl border border-[#1a3c61] bg-[#071d33] p-7 shadow-[0_12px_32px_rgba(7,29,51,0.2)] sm:p-9 md:p-12 lg:flex-row lg:items-center">
            <Image
              src="/images/hero/ship.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1400px"
              className="pointer-events-none absolute inset-0 z-0 object-cover object-right opacity-20"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#071d33] via-[#071d33]/95 to-[#071d33]/65" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#70bfff]/30 bg-[#0b2b4c]/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#70bfff]">
                <Headphones size={13} className="text-[#70bfff]" />
                24/7 Global Maritime Support
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Need a Professional <span className="text-[#70bfff]">Marine Survey?</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#cbd5e1]">
                Get in touch with our team of certified marine surveyors and
                consultants for independent, accurate, and rapid technical
                assessments worldwide.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[#e7f0f6]">
                <a
                  href={"tel:" + site.phones[0].replaceAll(" ", "")}
                  className="flex items-center gap-2.5 transition hover:text-[#70bfff]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b2b4c] text-[#70bfff]">
                    <Phone size={14} />
                  </div>
                  <span>{site.phones[0]}</span>
                </a>
                <a
                  href={"mailto:" + site.email}
                  className="flex items-center gap-2.5 transition hover:text-[#70bfff]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b2b4c] text-[#70bfff]">
                    <Mail size={14} />
                  </div>
                  <span>{site.email}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 flex w-full shrink-0 flex-col items-stretch gap-3.5 sm:flex-row sm:items-center lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-[#071d33] shadow-xs transition-all duration-300 hover:bg-[#70bfff]"
              >
                Request a Survey <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
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
