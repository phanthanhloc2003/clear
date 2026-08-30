"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Shield, Star, Zap, Sparkles } from "lucide-react";

/** Animated gradient orb in background */
function GradientOrb({
  color,
  size,
  style,
  animDelay = 0,
}: {
  color: string;
  size: number;
  style: React.CSSProperties;
  animDelay?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(80px)",
        opacity: 0.55,
        ...style,
      }}
      animate={{
        scale: [1, 1.15, 1],
        x: [0, 30, -15, 0],
        y: [0, -20, 25, 0],
      }}
      transition={{
        duration: 8 + animDelay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animDelay,
      }}
    />
  );
}

/** Floating particle bubble */
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.28) 0%, rgba(20,184,166,0.12) 50%, transparent 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        ...style,
      }}
    />
  );
}

/** Floating stat badge */
function FloatingBadge({
  icon,
  label,
  value,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl pointer-events-none ${className}`}
      style={{
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        scale: 1,
      }}
      transition={{
        opacity: { delay: delay + 1.3, duration: 0.5 },
        scale: { delay: delay + 1.3, duration: 0.5 },
        y: {
          delay: delay + 1.3,
          duration: 3.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        },
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white font-extrabold text-sm leading-none">{value}</p>
        <p className="text-white/60 text-xs mt-0.5 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

/**
 * Full-viewport hero section.
 * Features: animated gradient orbs, parallax on scroll, floating badge stats,
 * animated headline, dual CTAs, trust indicators, service icon pills.
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero – CleanPro VN"
    >
      {/* ── Animated background layer ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Base dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #07111f 0%, #0a2a27 20%, #0f5a54 42%, #0d3a5a 65%, #0a1a2e 85%, #050b18 100%)",
          }}
        />

        {/* Animated gradient orbs */}
        <GradientOrb
          color="radial-gradient(circle, rgba(20,184,166,0.7) 0%, rgba(6,182,212,0.4) 50%, transparent 80%)"
          size={600}
          style={{ top: "-10%", left: "-5%" }}
          animDelay={0}
        />
        <GradientOrb
          color="radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(15,118,110,0.3) 50%, transparent 80%)"
          size={500}
          style={{ top: "20%", right: "-10%" }}
          animDelay={2}
        />
        <GradientOrb
          color="radial-gradient(circle, rgba(15,118,110,0.6) 0%, rgba(20,184,166,0.3) 50%, transparent 80%)"
          size={450}
          style={{ bottom: "-5%", left: "35%" }}
          animDelay={4}
        />
        <GradientOrb
          color="radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)"
          size={350}
          style={{ top: "40%", left: "60%" }}
          animDelay={1.5}
        />

        {/* Conic light ray */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "conic-gradient(from 200deg at 30% 40%, transparent 0deg, rgba(20,184,166,0.5) 25deg, transparent 55deg, transparent 115deg, rgba(6,182,212,0.35) 145deg, transparent 175deg)",
            animation: "spin-slow 25s linear infinite",
          }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particle bubbles */}
        {[
          { width: 90, height: 90, top: "12%", left: "7%", opacity: 0.12, anim: "float 4s ease-in-out infinite" },
          { width: 55, height: 55, top: "68%", left: "4%", opacity: 0.08, anim: "float-slow 6s ease-in-out infinite 1s" },
          { width: 130, height: 130, top: "28%", left: "83%", opacity: 0.10, anim: "float-slow 7s ease-in-out infinite 0.5s" },
          { width: 45, height: 45, top: "58%", left: "78%", opacity: 0.15, anim: "float 3.5s ease-in-out infinite 1.5s" },
          { width: 70, height: 70, top: "78%", left: "52%", opacity: 0.07, anim: "float 5s ease-in-out infinite 2s" },
          { width: 35, height: 35, top: "18%", left: "62%", opacity: 0.18, anim: "float 3s ease-in-out infinite 0.8s" },
        ].map((p, i) => (
          <Particle
            key={i}
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              opacity: p.opacity,
              animation: p.anim,
            }}
          />
        ))}

        {/* Water shimmer lines */}
        {[12, 32, 52, 72, 88].map((pos) => (
          <div
            key={pos}
            className="absolute inset-y-0 w-px opacity-[0.08]"
            style={{
              left: `${pos}%`,
              background: "linear-gradient(180deg, transparent, rgba(20,184,166,0.9), transparent)",
              animation: `shimmer ${3 + pos * 0.04}s linear infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* ── Overlay gradient ── */}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      {/* ── Floating stat badges ── */}
      <FloatingBadge
        icon={<Star className="w-5 h-5 text-amber-300 fill-amber-300" />}
        value="5.000+"
        label="Khách hàng hài lòng"
        className="top-28 left-[4%] xl:left-[7%]"
        delay={0}
      />
      <FloatingBadge
        icon={<Shield className="w-5 h-5 text-teal-300" />}
        value="100%"
        label="Cam kết sạch sâu"
        className="top-44 right-[4%] xl:right-[7%]"
        delay={0.2}
      />
      <FloatingBadge
        icon={<Zap className="w-5 h-5 text-cyan-300" />}
        value="98%"
        label="Tỷ lệ hài lòng"
        className="bottom-44 left-[4%] xl:left-[7%]"
        delay={0.4}
      />

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Top badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7 text-xs font-bold uppercase tracking-[0.18em]"
            style={{
              background: "rgba(20,184,166,0.12)",
              border: "1px solid rgba(20,184,166,0.35)",
              color: "#5eead4",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-teal-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-3.5 h-3.5" />
            Dịch Vụ Vệ Sinh Chuyên Nghiệp
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Không Gian{" "}
            <span className="gradient-text-hero">Sạch Sâu</span>
            <br />
            <span className="text-white/90">Tươi Mới Mỗi Ngày</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-white/65 leading-relaxed mb-9 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65 }}
          >
            Chuyên gia vệ sinh{" "}
            <span className="text-teal-300 font-semibold">nệm, sofa, ghế ô tô & ghế văn phòng</span>{" "}
            tận nơi.{" "}
            <span className="text-white/80">Công nghệ hiện đại – An toàn – Cam kết sạch sâu.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65 }}
          >
            {/* Primary */}
            <motion.button
              onClick={() => scrollTo("contact")}
              className="btn-glow group flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white shadow-2xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #06b6d4 100%)",
                boxShadow: "0 8px 32px -4px rgba(20,184,166,0.50), 0 2px 8px rgba(0,0,0,0.15)",
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              id="hero-primary-cta"
              aria-label="Đặt lịch vệ sinh ngay"
            >
              <span>Đặt Lịch Ngay</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.button>

            {/* Secondary */}
            <motion.button
              onClick={() => scrollTo("process")}
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-white cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                scale: 1.05,
                background: "rgba(255,255,255,0.14)",
                borderColor: "rgba(255,255,255,0.38)",
              }}
              whileTap={{ scale: 0.96 }}
              id="hero-secondary-cta"
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-3.5 h-3.5 text-white ml-0.5" />
              </motion.div>
              Xem Quy Trình
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              "✓ Miễn phí tư vấn",
              "✓ Cam kết an toàn",
              "✓ Đội ngũ chuyên nghiệp",
              "✓ Phục vụ tận nơi",
            ].map((item) => (
              <span key={item} className="text-white/50 text-sm font-medium tracking-wide">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Service icon pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {[
            { icon: "🛋️", label: "Giặt Sofa" },
            { icon: "🛏️", label: "Giặt Nệm" },
            { icon: "🚗", label: "Ghế Ô Tô" },
            { icon: "💺", label: "Ghế VP" },
          ].map(({ icon, label }) => (
            <motion.button
              key={label}
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                background: "rgba(20,184,166,0.22)",
                borderColor: "rgba(20,184,166,0.55)",
                scale: 1.06,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="text-lg">{icon}</span>
              {label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        aria-label="Cuộn xuống xem dịch vụ"
      >
        <span className="text-white/35 text-[10px] tracking-[0.2em] uppercase font-semibold group-hover:text-white/60 transition-colors">
          Khám phá
        </span>
        <div
          className="w-7 h-11 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "linear-gradient(180deg, #14b8a6, #5eead4)" }}
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ChevronDown className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors -mt-1" />
      </motion.button>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="white"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-20"
        >
          <path d="M0 65 C360 15 720 85 1080 45 C1260 25 1380 60 1440 65 L1440 90 L0 90 Z" />
        </svg>
      </div>
    </section>
  );
}
