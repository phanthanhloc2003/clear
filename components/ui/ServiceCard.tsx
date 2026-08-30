"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  features?: string[];
  onBook?: () => void;
}

/**
 * Premium service card.
 * - Glassmorphism-inspired white background with soft shadow
 * - Animated gradient border on hover
 * - 3D icon lift on hover
 * - Staggered fade-up animation on scroll entry
 * - Feature list with check icons
 */
export default function ServiceCard({
  icon,
  title,
  description,
  index,
  features = [],
  onBook,
}: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
      className="group relative bg-white rounded-3xl p-7 sm:p-8 cursor-default overflow-hidden"
      style={{
        boxShadow: "0 4px 32px -6px rgba(15,118,110,0.09), 0 1px 6px rgba(0,0,0,0.05)",
        border: "1.5px solid #e9f5f4",
      }}
    >
      {/* Animated gradient border overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #14b8a6, #06b6d4, #0f766e, #f59e0b)",
          backgroundSize: "300% 300%",
          padding: "1.5px",
          borderRadius: "1.5rem",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: 0,
          animation: "gradient-x 4s ease infinite",
        }}
        variants={{
          hover: { opacity: 1, transition: { duration: 0.35 } },
        }}
      />

      {/* Top glow on hover */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none rounded-t-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.12) 0%, transparent 70%)",
          opacity: 0,
        }}
        variants={{
          hover: { opacity: 1, transition: { duration: 0.4 } },
        }}
      />

      {/* Card index number */}
      <div className="absolute top-6 right-6 text-xs font-black text-teal-500/25 tracking-widest select-none">
        0{index + 1}
      </div>

      {/* Icon wrapper */}
      <div className="relative mb-6 inline-block">
        {/* Icon glow halo */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "radial-gradient(circle, rgba(20,184,166,0.20) 0%, transparent 70%)",
            filter: "blur(12px)",
            opacity: 0,
          }}
          variants={{
            hover: { opacity: 1, scale: 1.3 },
          }}
        />

        {/* Icon container */}
        <motion.div
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
          style={{
            background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
            border: "1.5px solid rgba(20,184,166,0.15)",
          }}
          variants={{
            hover: {
              y: -10,
              scale: 1.12,
              rotate: [0, -6, 6, 0],
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight"
        variants={{
          hover: { color: "#0f766e", transition: { duration: 0.2 } },
        }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Feature list */}
      {features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-5" />

      {/* CTA button */}
      <motion.button
        onClick={onBook}
        className="group/btn flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 cursor-pointer transition-colors"
        variants={{
          hover: { x: 4 },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
      >
        <Calendar className="w-4 h-4" />
        <span>Đặt lịch ngay</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
      </motion.button>
    </motion.div>
  );
}
