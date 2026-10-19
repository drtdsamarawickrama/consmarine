import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRight, Headphones, Phone, Mail } from "lucide-react";
import { site } from "@/config/site";

export default function ContactCTA() {
  return (
    <section className="cmcs-contact-cta bg-white px-4 py-10 text-white sm:px-6 md:py-14">
      <Container>
        <Reveal variant="soft">
          <div className="cmcs-contact-card relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden border border-[#35536c] bg-[#04182a] p-7 shadow-[0_12px_32px_rgba(7,29,51,0.2)] sm:p-9 md:p-11 lg:flex-row lg:items-center">
            <Image
              src="/images/hero/ship.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1400px"
              className="pointer-events-none absolute inset-0 z-0 object-cover object-right opacity-25"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#04182a] via-[#04182a]/95 to-[#04182a]/65" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-[5px] border border-[#70bfff]/50 bg-[#12476b]/55 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b8dcf2]">
                <Headphones size={14} className="text-[#70bfff]" />
                24/7 Global Maritime Support
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Need a Professional <span className="text-[#70bfff]">Marine Survey?</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-silver">
                Get in touch with our team of certified marine surveyors and
                consultants for independent, accurate, and rapid technical
                assessments worldwide.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[#e7f0f6]">
                <a
                  href={"tel:" + site.phones[0].replaceAll(" ", "")}
                  className="flex items-center gap-2 transition hover:text-[#70bfff]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#12476b] text-[#70bfff]">
                    <Phone size={14} />
                  </div>
                  <span>{site.phones[0]}</span>
                </a>
                <a
                  href={"mailto:" + site.email}
                  className="flex items-center gap-2 transition hover:text-[#70bfff]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#12476b] text-[#70bfff]">
                    <Mail size={14} />
                  </div>
                  <span>{site.email}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 flex w-full shrink-0 flex-col items-stretch gap-4 sm:flex-row sm:items-center lg:w-auto">
              <Link
                href="/contact"
                className="cmcs-button inline-flex items-center justify-center gap-2 rounded-[5px] bg-white px-7 py-3.5 text-sm font-extrabold text-[#071d33] shadow-sm transition-all duration-300 hover:bg-[#70bfff]"
              >
                Request a Survey <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/services"
                className="cmcs-button inline-flex items-center justify-center gap-2 rounded-[5px] border border-white/65 bg-[#04182a]/60 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#70bfff] hover:bg-[#12476b]"
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
