"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import WaterRippleText from "@/components/ui/WaterRippleText";
import "./HeroOcean.css";

type HeroSlide = {
  image: string;
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  accentLine: string;
  description: string;
};

const slides: HeroSlide[] = [
  {
    image: "/images/hero/cmcs-cinematic-ship-1.webp",
    eyebrow: "Independent Marine Expertise",
    firstLine: "Reliable Marine",
    secondLine: "Consultancy & Surveying",
    thirdLine: "Services",
    accentLine: "Worldwide.",
    description:
      "Providing reliable marine consultancy and surveying services worldwide, backed by independent expertise, professional integrity, and a commitment to excellence.",
  },
  {
    image: "/images/hero/ship.webp",
    eyebrow: "Worldwide Reach • Reliable Marine Solutions",
    firstLine: "Independent Marine",
    secondLine: "Expertise & Support",
    thirdLine: "Anytime,",
    accentLine: "Anywhere.",
    description:
      "Your maritime operations deserve expertise you can trust. Responsive marine surveying and consultancy services, wherever your vessels operate.",
  },
];

/** Decorative shipping network, not a live tracking map. */
function RouteMap() {
  return (
    <svg
      className="cmcs3d-route-map"
      viewBox="0 0 900 460"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="cmcs3d-map-dots"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2.2" cy="2.2" r="1.15" fill="#D4F5FF" opacity="0.75" />
        </pattern>
      </defs>
      <path
        d="M102 128 138 79 193 73 233 91 252 133 229 168 264 210 248 260 206 310 164 298 142 246 97 232 76 168ZM299 82 347 51 407 56 442 84 473 74 525 90 548 123 524 158 487 151 458 174 448 211 414 225 391 192 358 166 342 130ZM542 70 626 45 703 80 766 72 799 113 776 146 729 139 698 190 644 207 615 187 574 150 553 116ZM384 250 425 233 464 266 455 329 420 376 391 345 363 296Z"
        fill="url(#cmcs3d-map-dots)"
        opacity="0.55"
      />
      <path
        className="cmcs3d-route-line"
        d="M154 145 C280 49 351 65 442 161 S620 278 707 124"
        stroke="#A0E7FF"
        opacity="0.8"
        strokeWidth="1.8"
        strokeDasharray="3 11"
      />
      <path
        className="cmcs3d-route-line cmcs3d-route-line--second"
        d="M154 145 C315 293 389 286 520 166 S640 87 707 124"
        stroke="#B0EFFF"
        opacity="0.65"
        strokeWidth="1.4"
        strokeDasharray="3 9"
      />
      {[
        [154, 145],
        [442, 161],
        [707, 124],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="17" fill="#67CFFB" opacity="0.12" />
          <circle cx={x} cy={y} r="7" fill="#8DDEFF" opacity="0.28" />
          <circle cx={x} cy={y} r="3.5" fill="#CCF6FF" />
        </g>
      ))}
      <g className="cmcs3d-map-tags">
        <rect x="109" y="105" width="93" height="26" rx="13" />
        <text x="155" y="122">
          EUROPE
        </text>
        <rect x="397" y="121" width="90" height="26" rx="13" />
        <text x="442" y="138">
          ASIA
        </text>
        <rect x="650" y="83" width="121" height="26" rx="13" />
        <text x="710" y="100">
          AMERICAS
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  // Automatic slideshow: continues even when the pointer is over the hero.
  // No arrow buttons. The small progress segments are optional direct navigation.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  // Shared state: background image and all slide copy change together.
  const slide = slides[active];

  return (
    <section
      className="cmcs3d-hero"
      aria-label="Constellation Marine consultancy hero"
    >
      {/* Each slide owns a full-size photo. The active index controls
          BOTH the image crossfade and the heading/description below. */}
      <div className="cmcs3d-photo-stage" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            key={item.image}
            data-slide={index + 1}
            className={`cmcs3d-photo${index === active ? " is-active" : ""}`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="cmcs3d-photo-image"
            />
          </div>
        ))}
      </div>
      <div className="cmcs3d-shade" aria-hidden="true" />
      <div className="cmcs3d-bottom-darkening" aria-hidden="true" />
      <div className="cmcs3d-sunset-glow" aria-hidden="true" />
      <RouteMap />

      <div className="cmcs3d-shell">
        <div className="cmcs3d-grid">
          <div className="cmcs3d-copy">
            <div className="cmcs3d-slide-copy-content" key={active}>
              <div className="cmcs3d-eyebrow">
                <span aria-hidden="true" />
                {slide.eyebrow}
              </div>
              <h1 className="cmcs3d-headline">
                <span className="cmcs3d-title-line">
                  <WaterRippleText text={slide.firstLine} />
                </span>
                <span className="cmcs3d-title-line">
                  <WaterRippleText text={slide.secondLine} />
                </span>
                <span className="cmcs3d-title-line">
                  <WaterRippleText text={slide.thirdLine} />{" "}
                  <WaterRippleText text={slide.accentLine} accent />
                </span>
              </h1>
              <p className="cmcs3d-description">{slide.description}</p>
              <div className="cmcs3d-actions">
                <Link
                  href="/contact"
                  className="cmcs3d-button cmcs3d-button--primary"
                >
                  Request a Survey <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="cmcs3d-button cmcs3d-button--outline"
                >
                  Explore Our Services{" "}
                  <ArrowRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div
              className="cmcs3d-progress"
              role="group"
              aria-label="Hero slide controls"
            >
              <span className="cmcs3d-progress-count">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
              <div className="cmcs3d-progress-track">
                {slides.map((item, index) => (
                  <button
                    key={item.image}
                    aria-label={`Go to hero slide ${index + 1}`}
                    aria-pressed={index === active}
                    onClick={() => setActive(index)}
                    className={
                      index === active
                        ? "cmcs3d-progress-segment is-current"
                        : "cmcs3d-progress-segment"
                    }
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
