"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Animation variant preset */
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  /** Delay in seconds */
  delay?: number;
  /** Stagger children */
  stagger?: boolean;
  /** Once or every time */
  once?: boolean;
}

const presets: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/**
 * Wrapper component that animates children on scroll entry using Framer Motion.
 * Uses IntersectionObserver via `useInView` hook.
 */
export default function AnimatedSection({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  stagger = false,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px -80px 0px" });

  const variants = presets[variant];

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out expo
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger item – use inside AnimatedSection with stagger=true */
export function AnimatedItem({
  children,
  className = "",
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof presets;
}) {
  return (
    <motion.div
      className={className}
      variants={presets[variant]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
