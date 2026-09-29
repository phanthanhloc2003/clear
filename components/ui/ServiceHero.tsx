"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown, CheckCircle } from "lucide-react";

export interface ServiceHeroProps {
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  badges: [string, string, string];
  theme?: "teal" | "indigo" | "emerald";
  priceAnchor?: string;
  callBtnId: string;
  badgeLabel?: string;
}

const themeMap = {
  teal: {
    blob1: "bg-teal-500/20",
    blob2: "bg-cyan-500/15",
    badge: "bg-teal-500/20 border-teal-400/30 text-teal-300",
    dot: "bg-teal-400",
    gradient: "from-slate-900 via-teal-900 to-slate-900",
    cta: "from-teal-500 to-cyan-500",
    check: "text-teal-400",
    highlight: "from-teal-300 to-cyan-300",
  },
  indigo: {
    blob1: "bg-indigo-500/20",
    blob2: "bg-teal-500/15",
    badge: "bg-indigo-500/20 border-indigo-400/30 text-indigo-300",
    dot: "bg-indigo-400",
    gradient: "from-slate-900 via-indigo-900 to-slate-900",
    cta: "from-teal-500 to-cyan-500",
    check: "text-teal-400",
    highlight: "from-teal-300 to-cyan-300",
  },
  emerald: {
    blob1: "bg-emerald-500/20",
    blob2: "bg-teal-500/15",
    badge: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300",
    dot: "bg-emerald-400",
    gradient: "from-slate-900 via-emerald-900 to-slate-900",
    cta: "from-emerald-500 to-teal-500",
    check: "text-emerald-400",
    highlight: "from-emerald-300 to-teal-300",
  },
};

export default function ServiceHero({
  titlePart1,
  titleHighlight,
  titlePart2 = "",
  description,
  badges,
  theme = "teal",
  priceAnchor = "#bang-gia",
  callBtnId,
  badgeLabel = "Dịch Vụ Tại Đà Nẵng",
}: ServiceHeroProps) {
  const t = themeMap[theme];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${t.gradient} text-white py-20 md:py-28`}
    >
      {/* Animated blobs */}
      <motion.div
        className={`absolute top-0 right-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full ${t.blob1} blur-3xl pointer-events-none`}
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 25, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-0 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full ${t.blob2} blur-3xl pointer-events-none`}
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -15, 0], scale: [1, 0.97, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border ${t.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${t.dot} animate-pulse`} />
            {badgeLabel}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          >
            {titlePart1}{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.highlight}`}>
              {titleHighlight}
            </span>
            {titlePart2 && <>{" "}{titlePart2}</>}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="tel:+84969135304"
              id={callBtnId}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${t.cta} text-white font-bold text-base shadow-lg`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20,184,166,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Gọi ngay: 096 9135 304
            </motion.a>
            <motion.a
              href={priceAnchor}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.5)" }}
              transition={{ duration: 0.2 }}
            >
              Xem bảng giá
              <ChevronDown className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 sm:gap-6 mt-10 text-sm text-white/70"
          >
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${t.check} flex-shrink-0`} />
                {b}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
