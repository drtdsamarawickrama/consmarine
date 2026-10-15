import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import "@/components/ui/reveal-motion.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consmarinems.com"),
  title: {
    default: "Constellation Marine | Independent Marine Expertise",
    template: "%s | Constellation Marine",
  },
  description:
    "Independent marine surveying and consultancy from Sri Lanka. Professional inspections and 24/7 support.",
  openGraph: {
    type: "website",
    title: "Constellation Marine",
    description: "Independent Marine Expertise – Anytime, Anywhere",
    images: ["/images/hero/cmcs-cinematic-ship-1.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
