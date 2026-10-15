import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPreview({ all = false }: { all?: boolean }) {
  const displayServices = all ? services : services.slice(0, 8);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#d8e3e7] bg-[#e8eff1] py-20 lg:py-28">
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Our Services"
            title={
              all
                ? "Comprehensive Marine Surveying & Consultancy"
                : "Marine Consultancy & Surveying Services"
            }
            description="Independent inspections, technical consultancy, condition evaluations, and comprehensive marine survey solutions worldwide."
            theme="light"
          />

          {!all && (
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-maritime/30 bg-white px-6 py-3 text-xs font-bold text-midnight shadow-sm transition-all duration-300 hover:border-maritime hover:shadow-md md:self-auto"
            >
              View All 17 Services
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        {/* Consistent premium light cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="light" />
          ))}
        </div>

        {!all && (
          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-midnight px-7 py-3.5 text-sm font-bold text-white shadow-lg"
            >
              Explore All 17 Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
