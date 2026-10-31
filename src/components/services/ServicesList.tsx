"use client";

import { useState, useMemo } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import type { MarineService } from "@/data/services";
import { Search, Filter } from "lucide-react";

const categories = [
  { id: "all", label: "All 17 Services" },
  { id: "vessel", label: "Vessel Surveys" },
  { id: "cargo", label: "Cargo & Hold" },
  { id: "valuation", label: "Valuation & Claims" },
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
    const q = query.trim().toLowerCase();

    return services.filter((s) => {
      const matchesSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        (s.scope && s.scope.some((item) => item.toLowerCase().includes(q))) ||
        (s.deliverables && s.deliverables.some((item) => item.toLowerCase().includes(q)));

      if (!matchesSearch) return false;
      if (selectedCat === "all") return true;

      const code = s.code;
      if (selectedCat === "vessel") {
        return ["CMCS-01", "CMCS-02", "CMCS-03", "CMCS-10", "CMCS-14", "CMCS-16"].includes(code);
      }
      if (selectedCat === "cargo") {
        return ["CMCS-04", "CMCS-09", "CMCS-11", "CMCS-12", "CMCS-13"].includes(code);
      }
      if (selectedCat === "valuation") {
        return ["CMCS-05", "CMCS-06", "CMCS-08", "CMCS-15"].includes(code);
      }
      if (selectedCat === "audit") {
        return ["CMCS-07", "CMCS-17"].includes(code);
      }
      return true;
    });
  }, [services, selectedCat, query]);

  return (
    <div>
      {/* Search and Category Filter Toolbar */}
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-stone-200 pb-8">
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
                    ? "bg-[#071d33] text-white shadow-md"
                    : "border border-stone-300 bg-white text-[#52677c] hover:border-[#0284c7] hover:text-[#071d33] shadow-2xs"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0284c7]"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by code (e.g. CMCS-01), scope or title..."
            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-11 pr-4 text-xs font-medium text-[#071d33] placeholder-[#52677c]/60 outline-none transition focus:border-[#0284c7] focus:shadow-sm"
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
          <Filter size={36} className="mx-auto text-[#0284c7]/60 mb-3" />
          <p className="text-base font-bold text-[#071d33]">No services found</p>
          <p className="mt-1 text-xs text-[#52677c]">
            Try adjusting your search query or select another category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCat("all");
              setQuery("");
            }}
            className="mt-4 rounded-full bg-[#071d33] px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#0c3660] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
