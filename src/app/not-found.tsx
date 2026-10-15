import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[75vh] flex-col items-center justify-center px-5 text-center text-white bg-linear-to-b from-midnight via-[#07243c] to-midnight overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marine/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-md mx-auto">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-aqua/30 bg-deep-ocean/80 text-aqua shadow-[0_0_25px_rgba(73,197,229,0.3)]">
          <Compass size={40} className="animate-pulse" />
        </div>
        <h1 className="text-7xl font-extrabold tracking-tight text-white sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-ice">
          Course Not Found
        </h2>
        <p className="mt-3 text-sm text-silver leading-relaxed">
          The maritime route or page you are looking for has been moved or does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-aqua to-marine px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-midnight shadow-[0_4px_20px_rgba(73,197,229,0.4)] transition hover:scale-105"
        >
          <ArrowLeft size={16} /> Return to Home Port
        </Link>
      </div>
    </main>
  );
}
