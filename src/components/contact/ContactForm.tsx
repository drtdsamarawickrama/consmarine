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
      className="cmcs-card-light relative isolate overflow-hidden rounded-[5px] p-6 sm:p-9"
    >
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#12476b]">
          Inquiry Form
        </span>
        <h2 className="mt-1 text-2xl font-extrabold text-[#071d33] sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#52677c]">
          Submit your vessel inspection or survey requirements. Fields marked * are mandatory.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <label className="text-sm font-semibold text-[#10233b]">
          Full Name *
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            placeholder="e.g. Capt. James Sterling"
            className="mt-2 w-full rounded-lg border border-[#e2e8f0] bg-white p-3.5 text-sm text-[#071d33] placeholder-[#94a3b8] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
          />
        </label>

        {/* Email */}
        <label className="text-sm font-semibold text-[#071d33]">
          Email Address *
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="e.g. james@maritimecorp.com"
            className="mt-2 w-full rounded-lg border border-[#e2e8f0] bg-white p-3.5 text-sm text-[#071d33] placeholder-[#94a3b8] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
          />
        </label>

        {/* Telephone */}
        <label className="text-sm font-semibold text-[#071d33]">
          Telephone (with country code)
          <input
            name="phone"
            type="tel"
            maxLength={35}
            autoComplete="tel"
            placeholder="e.g. +94 77 123 4567"
            className="mt-2 w-full rounded-lg border border-[#e2e8f0] bg-white p-3.5 text-sm text-[#071d33] placeholder-[#94a3b8] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
          />
        </label>

        {/* Subject */}
        <label className="text-sm font-semibold text-[#071d33]">
          Survey Type / Subject *
          <input
            name="subject"
            required
            maxLength={160}
            placeholder="e.g. On-Hire Condition Survey in Colombo"
            className="mt-2 w-full rounded-lg border border-[#e2e8f0] bg-white p-3.5 text-sm text-[#071d33] placeholder-[#94a3b8] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
          />
        </label>

        {/* Message */}
        <label className="sm:col-span-2 text-sm font-semibold text-[#071d33]">
          Inspection Details &amp; Vessel Particulars *
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Please detail your vessel name, IMO number, expected port of call, and required survey date..."
            className="mt-2 w-full resize-none rounded-lg border border-[#e2e8f0] bg-white p-3.5 text-sm text-[#071d33] placeholder-[#94a3b8] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#071d33] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[#0284c7] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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

        <span className="text-xs text-[#52677c]">
          Confidential &amp; Protected Communication
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
