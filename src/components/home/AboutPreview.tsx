import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight, Ship, ShieldCheck, Globe2, Clock3 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[#e8eef3] bg-white py-20 text-[#10233b] lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image" className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[5px] border border-[#142b42] bg-[#e8eef3] shadow-[0_12px_30px_rgba(7,29,51,.12)]">
              <Image
                src="/images/gallery/g1.jpeg"
                alt="Constellation Marine vessel operations and maritime inspection"
                fill
                sizes="(max-width:1024px) 100vw,50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 border border-[#142b42] bg-white px-4 py-3 shadow-lg sm:right-7 sm:px-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#e8eef3] text-[#12476b]">
                <Ship size={22} strokeWidth={1.8} />
              </div>
              <div>
                <strong className="block text-xl font-extrabold leading-tight text-[#071d33]">10+</strong>
                <span className="text-xs font-medium text-[#52677c]">Years of Marine Surveying</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="heading" delay={0.12}>
            <div className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#12476b]">
              <span className="h-0.5 w-7 bg-[#1686c4]" />
              Our Company
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071d33] sm:text-4xl lg:text-[42px]">
              A Global Marine Consultancy Built on Integrity and Expertise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#52677c]">
              At Constellation Marine Consultant Services (Pvt) Ltd (CMCS), we
              bring confidence, precision, and professionalism to the maritime
              industry. Based in Sri Lanka, we provide independent marine
              inspection, surveying, and consultancy services to shipowners,
              operators, insurers, and charterers worldwide.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#52677c]">
              Our strength lies in our commitment to accuracy, integrity, and
              protecting our clients’ operational and commercial interests
              through 24/7 responsiveness and rigorous international standards.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 border-y border-[#d5e0e8] py-5 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "Independent & Impartial" },
                { icon: Globe2, label: "Worldwide Reach" },
                { icon: Clock3, label: "24/7 Availability" },
                { icon: Ship, label: "Strategic Hub: Sri Lanka" },
              ].map(({ icon: Icon, label }) => (
                <div className="flex items-center gap-3" key={label}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[#142b42] bg-[#f7fafc] text-[#12476b]">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-semibold text-[#10233b]">{label}</span>
                </div>
              ))}
            </div>

            <div className="cmcs-about-actions mt-7 flex flex-wrap items-center gap-3">
              <Link href="/about-us" className="cmcs-about-button cmcs-about-button-primary">
                Our Story <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="cmcs-about-button cmcs-about-button-secondary">
                Speak with Our Surveyors
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
