import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const popularServices = services.slice(0, 6);

  return (
    <footer className="relative isolate overflow-hidden border-t border-aqua/15 bg-linear-to-b from-midnight to-[#020c17] text-white">
      {/* Subtle background ambient light */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(73,197,229,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="flex h-[46px] w-[98px] shrink-0 items-center justify-center rounded-full bg-white/95 px-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
                <Image
                  src="/logo/company-logo-trimmed.png"
                  width={80}
                  height={40}
                  alt="Constellation Marine company logo"
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-base font-extrabold uppercase tracking-tight text-white group-hover:text-aqua transition-colors">
                  Constellation Marine
                </h2>
                <p className="text-[10px] font-bold uppercase tracking-wider text-aqua-light">
                  Consultant Services (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-silver">
              Independent marine surveying and consultancy services worldwide.
              Backed by extensive industry expertise, professional integrity,
              and 24/7 responsiveness from Sri Lanka’s strategic maritime
              corridor.
            </p>

            <div className="space-y-3 pt-2 text-sm text-silver">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-dark/30 text-aqua border border-aqua/20">
                  <MapPin size={15} />
                </div>
                <span>Sri Lanka (Global Maritime Operations)</span>
              </div>

              {site.phones.map((p) => (
                <a
                  className="flex items-center gap-3 transition-colors hover:text-aqua"
                  key={p}
                  href={"tel:" + p.replaceAll(" ", "")}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-dark/30 text-aqua border border-aqua/20">
                    <Phone size={15} />
                  </div>
                  <span>{p}</span>
                </a>
              ))}

              <a
                className="flex items-center gap-3 transition-colors hover:text-aqua"
                href={"mailto:" + site.email}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-dark/30 text-aqua border border-aqua/20">
                  <Mail size={15} />
                </div>
                <span>{site.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-silver">
              {navigation.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-aqua"
                  >
                    <span className="text-aqua/60 text-xs">›</span>
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Core
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-silver">
              {popularServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-aqua line-clamp-1"
                    title={s.title}
                  >
                    <span className="text-aqua/60 text-xs">›</span>
                    {s.title.length > 28
                      ? s.title.slice(0, 26) + "..."
                      : s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 pt-1 text-xs font-bold text-aqua hover:underline"
                >
                  View All 17 Services <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Affiliations & Port Information */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Affiliations
            </h3>

            <a
              href="https://www.chamber.lk/"
              rel="noopener noreferrer"
              target="_blank"
              className="group block rounded-xl border border-aqua/20 bg-deep-ocean/40 p-3 transition-all hover:border-aqua/50 hover:bg-deep-ocean/70"
            >
              <div className="rounded-lg bg-white p-2">
                <Image
                  src="/images/credentials/ceylon-chamber.png"
                  width={200}
                  height={65}
                  className="h-10 w-auto object-contain mx-auto"
                  alt="Ceylon Chamber of Commerce"
                />
              </div>
              <span className="mt-2 block text-center text-[11px] font-semibold text-silver group-hover:text-white">
                Member of Ceylon Chamber of Commerce
              </span>
            </a>

            <div className="mt-4 rounded-xl border border-aqua/20 bg-deep-ocean/40 p-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-aqua-light">
                Strategic Port Corridors
              </span>
              <p className="mt-1 text-xs text-silver leading-relaxed">
                Operating across Colombo, Hambantota, Galle, and Trincomalee
                ports.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="rounded bg-white p-1">
                  <Image
                    src="/images/credentials/sri-lanka-ports-authority.jpg"
                    width={55}
                    height={38}
                    alt="Sri Lanka Ports Authority"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div className="rounded bg-white p-1">
                  <Image
                    src="/images/credentials/hambantota-port.png"
                    width={70}
                    height={38}
                    alt="Hambantota International Port"
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-aqua/10 bg-[#020a13]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist sm:flex-row">
          <span>
            © {new Date().getFullYear()} Constellation Marine Consultant
            Services (Pvt) Ltd. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-aqua">
              <ShieldCheck size={14} /> Certified Maritime Surveyors
            </span>
            <span className="text-white/20">|</span>
            <span>Strategic Location: Colombo, Sri Lanka</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
