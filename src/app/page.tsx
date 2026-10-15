import Hero from "@/components/home/Hero";
import WhyPreview from "@/components/home/WhyPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyPreview />
      <ServicesPreview />
      <AboutPreview />
      <IndustriesPreview />
      <GalleryPreview />
      <ContactCTA />
    </main>
  );
}
