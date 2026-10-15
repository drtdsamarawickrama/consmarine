"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [ok, setOk] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("");
    setLoading(true);
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Could not send message.");
      setNotice(
        "Thank you! Your message has been sent successfully. Our duty marine surveyor will respond promptly."
      );
      setOk(true);
      form.reset();
    } catch (err) {
      setOk(false);
      setNotice(err instanceof Error ? err.message : "Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="relative isolate overflow-hidden rounded-3xl border border-aqua/25 bg-linear-to-b from-deep-ocean/80 via-[#07243c]/90 to-midnight/95 p-7 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,10,24,0.6)]"
    >
      {/* Top subtle light accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-aqua/50 to-transparent" />

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-aqua-light">
          Inquiry Form
        </span>
        <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-xs text-silver">
          Submit your vessel inspection or survey requirements. Fields marked * are mandatory.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <label className="text-xs font-bold text-white">
          Full Name *
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            placeholder="e.g. Capt. James Sterling"
            className="mt-2 w-full rounded-xl border border-aqua/30 bg-midnight/70 p-3.5 text-xs text-white placeholder-mist/50 outline-none transition focus:border-aqua focus:shadow-[0_0_15px_rgba(73,197,229,0.3)]"
          />
        </label>

        {/* Email */}
        <label className="text-xs font-bold text-white">
          Email Address *
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="e.g. james@maritimecorp.com"
            className="mt-2 w-full rounded-xl border border-aqua/30 bg-midnight/70 p-3.5 text-xs text-white placeholder-mist/50 outline-none transition focus:border-aqua focus:shadow-[0_0_15px_rgba(73,197,229,0.3)]"
          />
        </label>

        {/* Telephone */}
        <label className="text-xs font-bold text-white">
          Telephone (with country code)
          <input
            name="phone"
            type="tel"
            maxLength={35}
            autoComplete="tel"
            placeholder="e.g. +94 77 123 4567"
            className="mt-2 w-full rounded-xl border border-aqua/30 bg-midnight/70 p-3.5 text-xs text-white placeholder-mist/50 outline-none transition focus:border-aqua focus:shadow-[0_0_15px_rgba(73,197,229,0.3)]"
          />
        </label>

        {/* Subject */}
        <label className="text-xs font-bold text-white">
          Survey Type / Subject *
          <input
            name="subject"
            required
            maxLength={160}
            placeholder="e.g. On-Hire Condition Survey in Colombo"
            className="mt-2 w-full rounded-xl border border-aqua/30 bg-midnight/70 p-3.5 text-xs text-white placeholder-mist/50 outline-none transition focus:border-aqua focus:shadow-[0_0_15px_rgba(73,197,229,0.3)]"
          />
        </label>

        {/* Message */}
        <label className="sm:col-span-2 text-xs font-bold text-white">
          Inspection Details &amp; Vessel Particulars *
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Please detail your vessel name, IMO number, expected port of call, and required survey date..."
            className="mt-2 w-full rounded-xl border border-aqua/30 bg-midnight/70 p-3.5 text-xs text-white placeholder-mist/50 outline-none transition focus:border-aqua focus:shadow-[0_0_15px_rgba(73,197,229,0.3)] resize-none"
          />
        </label>

        {/* Honeypot field */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label>
            Leave blank
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          disabled={loading}
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-aqua to-marine px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-midnight shadow-[0_4px_20px_rgba(73,197,229,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(73,197,229,0.5)] disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={15} />
            </>
          )}
        </button>

        <span className="text-[11px] text-mist">
          🔒 Confidential &amp; Protected Communication
        </span>
      </div>

      {notice && (
        <div
          role="status"
          className={`mt-6 flex items-start gap-3 rounded-xl p-4 text-xs ${
            ok
              ? "border border-emerald-500/30 bg-emerald-950/60 text-emerald-200"
              : "border border-rose-500/30 bg-rose-950/60 text-rose-200"
          }`}
        >
          {ok ? (
            <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle size={18} className="shrink-0 text-rose-400" />
          )}
          <span>{notice}</span>
        </div>
      )}
    </form>
  );
}
