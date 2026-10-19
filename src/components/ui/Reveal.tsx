"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

type RevealVariant = "heading" | "card" | "image" | "soft";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

const variants: Record<RevealVariant, Variants> = {
  heading: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  card: {
    hidden: { opacity: 0, y: 20, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  image: {
    hidden: { opacity: 0, y: 20, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  soft: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  },
};

/**
 * Declarative hydration-safe entrance: SSR and the first client render
 * generate the same Motion markup. No DOM attribute injection, observers or
 * timer-based changes outside React. Animates once as each element enters view.
 */
export default function Reveal({
  children,
  variant = "soft",
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={`cmcs-reveal-motion ${className}`.trim()}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
      transition={{
        duration: variant === "card" ? 0.62 : 0.58,
        delay: Math.max(0, Math.min(delay, 0.32)),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
