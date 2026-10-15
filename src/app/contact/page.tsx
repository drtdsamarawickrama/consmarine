import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/config/site";
import { Mail, Phone, MapPin, ExternalLink, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Constellation Marine Consultant Services (Pvt) Ltd for independent marine surveys, inspections, and 24/7 global maritime assistance.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F7F7F4] text-midnight">
      <PageBanner
        title="Contact Us"
        eyebrow="24/7 Global Desk"
        subtitle="Get in Touch with Our Certified Marine Surveyors and Technical Experts."
        image="/images/gallery/g4.jpeg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="relative isolate py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Contact Cards & Map — Light Architectural */}
            <Reveal variant="heading" className="lg:col-span-5 space-y-6">
              <div>
                <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
                  <span className="h-0.5 w-6 rounded-full bg-maritime" />
                  Direct Channels
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
                  We Are Here to Assist Your Fleet
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-graphite/80">
                  Whether appointing a surveyor for an urgent vessel attendance
                  or requesting technical advice, our team is accessible 24
                  hours a day, 7 days a week.
                </p>
              </div>

              {/* Contact Info Cards — White with subtle border */}
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_4px_16px_rgba(6,29,50,0.05)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-[#E8EFF1] text-maritime">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-maritime">
                      Headquarters &amp; Operations
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-midnight">
                      Sri Lanka
                    </p>
                    <p className="text-xs text-graphite/70 mt-0.5">
                      Strategic maritime coverage for Colombo, Hambantota, Galle
                      &amp; Trincomalee.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_4px_16px_rgba(6,29,50,0.05)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-[#E8EFF1] text-maritime">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-maritime">
                      Duty Surveyor Hotlines
                    </h3>
                    <div className="mt-1 space-y-1">
                      {site.phones.map((phone) => (
                        <a
                          key={phone}
                          href={"tel:" + phone.replaceAll(" ", "")}
                          className="block text-sm font-semibold text-midnight hover:text-maritime transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_4px_16px_rgba(6,29,50,0.05)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-[#E8EFF1] text-maritime">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-maritime">
                      Survey Appointments Email
                    </h3>
                    <a
                      href={"mailto:" + site.email}
                      className="mt-1 block text-sm font-semibold text-midnight hover:text-maritime transition-colors"
                    >
                      {site.email}
                    </a>
                    <span className="text-xs text-graphite/70 mt-0.5 block">
                      Rapid acknowledgment within 60 minutes.
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_4px_16px_rgba(6,29,50,0.05)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-[#E8EFF1] text-maritime">
                    <Clock3 size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-maritime">
                      Availability
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-midnight">
                      24 Hours / 7 Days a Week / 365 Days
                    </p>
                    <p className="text-xs text-graphite/70 mt-0.5">
                      Ready for offshore boarding and emergency response.
                    </p>
                  </div>
                </div>
              </div>

              {/* Styled Embedded Google Map */}
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-[0_6px_24px_rgba(6,29,50,0.08)]">
                <iframe
                  title="Constellation Marine Location on Google Maps"
                  src="https://maps.google.com/maps?q=6.8053374%2C79.8848017&z=15&output=embed"
                  className="h-[240px] w-full rounded-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 text-xs font-bold text-maritime hover:text-midnight transition-colors"
                >
                  <span>Open Coordinates in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>

            {/* Right Column: Contact Form — Deep Navy Glass (7 cols) */}
            <Reveal variant="card" delay={0.12} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
