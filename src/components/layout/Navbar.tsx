"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const change = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e8eef3] shadow-[0_3px_16px_rgba(7,29,51,0.08)]"
          : "bg-white border-b border-[#e8eef3]"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Brand Logo & Lockup — natural proportions without awkward square frame */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3.5 transition-opacity hover:opacity-95"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-11 w-[94px] shrink-0 sm:h-12 sm:w-[102px]">
            <Image
              src="/logo/company-logo-trimmed.png"
              alt="Constellation Marine Consultant Services logo"
              fill
              sizes="(max-width:640px) 94px, 102px"
              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span className="leading-tight">
            <strong className="block text-[13px] font-extrabold uppercase tracking-tight text-midnight sm:text-[15px]">
              Constellation Marine
            </strong>
            <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-wider text-maritime sm:text-[10px]">
              Consultant Services (Pvt) Ltd
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex 2xl:gap-8"
        >
          {navigation.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[13.5px] font-bold tracking-wide transition-colors ${
                  isActive
                    ? "text-[#0284c7]"
                    : "text-[#475569] hover:text-[#071d33]"
                }`}
              >
                {n.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#0284c7]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Premium Deep Navy CTA Button */}
        <Link
          href="/contact"
          className="ml-auto hidden shrink-0 items-center gap-2 rounded-full bg-[#071d33] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#0284c7] sm:inline-flex xl:ml-0"
        >
          Request a Survey <ArrowUpRight size={15} className="text-[#70bfff]" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#071d33] shadow-xs transition hover:bg-[#f8fafc] xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100dvh-74px)] overflow-y-auto border-t border-[#e2e8f0] bg-white p-6 shadow-[0_12px_24px_rgba(7,29,51,0.12)] xl:hidden"
        >
          <div className="mx-auto flex max-w-[1500px] flex-col gap-2">
            {navigation.map((n) => {
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-[#f0f9ff] text-[#0284c7]"
                      : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#071d33]"
                  }`}
                >
                  {n.title}
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#071d33] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#0284c7] sm:hidden"
            >
              Request a Survey <ArrowUpRight size={17} className="text-[#70bfff]" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
