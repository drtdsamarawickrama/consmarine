import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPreview({ all = false }: { all?: boolean }) {
  const displayServices = all ? services : services.slice(0, 8);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#e8eef3] bg-[#f7fafc] py-20 lg:py-24">
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
              className="cmcs-button inline-flex shrink-0 items-center gap-2 self-start rounded-[5px] border border-[#142b42] bg-white px-5 py-3 text-xs font-bold text-midnight shadow-sm transition-all duration-300 hover:border-maritime hover:shadow-md md:self-auto"
            >
              View All 17 Services
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        {/* Consistent premium light cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="light" />
          ))}
        </div>

        {!all && (
          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/services"
              className="cmcs-button inline-flex items-center justify-center gap-2 rounded-[5px] bg-midnight px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-maritime"
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
