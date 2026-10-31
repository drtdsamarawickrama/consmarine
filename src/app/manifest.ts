import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Constellation Marine Consultant Services",
    short_name: "Constellation Marine",
    description:
      "Independent marine surveying and consultancy company based in Sri Lanka providing 24/7 global support.",
    start_url: "/",
    display: "standalone",
    background_color: "#071d33",
    theme_color: "#071d33",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

