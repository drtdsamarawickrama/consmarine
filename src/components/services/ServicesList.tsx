"use client";

import { useState, useMemo } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import type { MarineService } from "@/data/services";
import { Search, Filter } from "lucide-react";

const categories = [
  { id: "all", label: "All 17 Services" },
  { id: "vessel", label: "Vessel Surveys" },
  { id: "cargo", label: "Cargo & Hold" },
  { id: "valuation", label: "Valuation & Risk" },
  { id: "audit", label: "Compliance & Audit" },
];

export default function ServicesList({
  services,
  variant = "light",
}: {
  services: MarineService[];
  variant?: "light" | "navy";
}) {
  const [selectedCat, setSelectedCat] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesSearch =
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());

      if (!matchesSearch) return false;
      if (selectedCat === "all") return true;

      const title = s.title.toLowerCase();
      if (selectedCat === "vessel") {
        return (
          title.includes("vessel") ||
          title.includes("pre-purchase") ||
          title.includes("condition") ||
          title.includes("compass") ||
          title.includes("warranty") ||
          title.includes("gas-free")
        );
      }
      if (selectedCat === "cargo") {
        return (
          title.includes("cargo") ||
          title.includes("draft") ||
          title.includes("loading") ||
          title.includes("container") ||
          title.includes("grain") ||
          title.includes("lashing")
        );
      }
      if (selectedCat === "valuation") {
        return (
          title.includes("valuation") ||
          title.includes("damage") ||
          title.includes("p&i") ||
          title.includes("bunker")
        );
      }
      if (selectedCat === "audit") {
        return (
          title.includes("ism") ||
          title.includes("isps") ||
          title.includes("ultrasonic") ||
          title.includes("agm")
        );
      }
      return true;
    });
  }, [services, selectedCat, query]);

  return (
    <div>
      {/* Search and Category Filter Toolbar */}
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-stone-200 pb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((c) => {
            const isActive = selectedCat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCat(c.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-midnight text-white shadow-md"
                    : "border border-stone-300 bg-white text-graphite/85 hover:border-maritime hover:text-midnight shadow-2xs"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-maritime"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search marine services..."
            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-11 pr-4 text-xs font-medium text-midnight placeholder-graphite/50 outline-none transition focus:border-maritime focus:shadow-sm"
          />
        </div>
      </div>

      {/* Services Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} variant={variant} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-stone-200 bg-white py-16 text-center shadow-xs">
          <Filter size={36} className="mx-auto text-maritime/60 mb-3" />
          <p className="text-base font-bold text-midnight">No services found</p>
          <p className="mt-1 text-xs text-graphite/75">
            Try adjusting your search query or select another category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCat("all");
              setQuery("");
            }}
            className="mt-4 rounded-full bg-midnight px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-deep-ocean transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
