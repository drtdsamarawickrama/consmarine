import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our photographic documentation of marine surveys, vessel condition assessments, cargo operations, and offshore maritime projects.",
};

export default function GalleryPage() {
  return (
    <main className="bg-soft-white text-midnight">
      <PageBanner
        title="Our Gallery"
        eyebrow="Visual Portfolio"
        subtitle="A Glimpse into Our Marine Surveys, Inspections, and Global Maritime Operations."
        image="/images/gallery/g1.jpeg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="relative isolate bg-[#F7FAFC] py-16 lg:py-20">
        <Container>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-maritime">
              <span className="h-0.5 w-6 rounded-full bg-maritime" />
              Field Photography
              <span className="h-0.5 w-6 rounded-full bg-maritime" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              Maritime Projects &amp; Field Operations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite/80">
              High-resolution photographic documentation captured during actual shipboard attendances, cargo lashing inspections, draft measurements, and dry dock examinations.
            </p>
          </div>

          <GalleryGrid />
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
