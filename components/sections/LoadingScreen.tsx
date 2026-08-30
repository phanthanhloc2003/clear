"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

interface LoadingScreenProps {
  onComplete: () => void;
}

/** Soap bubble particle */
function Bubble({
  delay,
  x,
  size,
  duration,
}: {
  delay: number;
  x: string;
  size: number;
  duration: number;
}) {
  return (
    <div
      className="bubble absolute bottom-0 pointer-events-none"
      style={{
        left: x,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

/** Floating sparkle dot */
function SparkDot({
  x,
  y,
  size,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(20,184,166,0.8) 0%, transparent 70%)",
      }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const MESSAGES = [
  "Đang làm sạch không gian…",
  "Loại bỏ bụi bẩn & vi khuẩn…",
  "Khử mùi chuyên sâu…",
  "Sẵn sàng tươi mới ✨",
];

/* Pre-generate stable random values to avoid SSR mismatch */
const BUBBLES = [
  { x: "8%",  size: 22, delay: 0,    duration: 3.2 },
  { x: "18%", size: 15, delay: 0.4,  duration: 2.8 },
  { x: "27%", size: 30, delay: 0.8,  duration: 3.6 },
  { x: "38%", size: 12, delay: 0.2,  duration: 2.5 },
  { x: "48%", size: 25, delay: 1.1,  duration: 4.0 },
  { x: "57%", size: 18, delay: 0.6,  duration: 3.1 },
  { x: "65%", size: 35, delay: 0.9,  duration: 3.8 },
  { x: "73%", size: 14, delay: 0.3,  duration: 2.6 },
  { x: "82%", size: 28, delay: 1.4,  duration: 3.4 },
  { x: "90%", size: 20, delay: 0.7,  duration: 3.0 },
  { x: "4%",  size: 16, delay: 1.6,  duration: 2.9 },
  { x: "32%", size: 10, delay: 1.8,  duration: 2.4 },
  { x: "52%", size: 40, delay: 2.0,  duration: 4.2 },
  { x: "78%", size: 13, delay: 1.2,  duration: 2.7 },
  { x: "93%", size: 24, delay: 0.5,  duration: 3.3 },
];

const SPARKS = [
  { x: "15%", y: "20%", size: 6, delay: 0 },
  { x: "75%", y: "15%", size: 4, delay: 0.7 },
  { x: "40%", y: "70%", size: 8, delay: 1.3 },
  { x: "85%", y: "60%", size: 5, delay: 0.4 },
  { x: "20%", y: "80%", size: 7, delay: 1.8 },
  { x: "60%", y: "25%", size: 4, delay: 0.9 },
];

/**
 * Full-page premium loading screen.
 * Features animated soap bubbles, circular progress ring,
 * sparkle particles, and a fluid fade-out exit.
 */
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const DURATION = 3000;
  const STEPS = 80;
  const STEP_MS = DURATION / STEPS;

  // Progress animation with ease-out
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / STEPS, 3);
      setProgress(Math.round(eased * 100));

      if (step >= STEPS) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 700);
        }, 350);
      }
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Rotate messages at timed intervals
  useEffect(() => {
    const timings = [0, 900, 1900, 2700];
    const timers = timings.map((ms, i) =>
      setTimeout(() => setMessageIndex(i), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // SVG circle progress
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, #0b1629 0%, #0f3a38 25%, #0d5c58 45%, #0a2f5c 75%, #080e1f 100%)",
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
            transition: { duration: 0.65, ease: "easeInOut" },
          }}
        >
          {/* Animated mesh overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 80%, rgba(20,184,166,0.35) 0%, transparent 40%),
                radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.25) 0%, transparent 40%),
                radial-gradient(ellipse at 55% 50%, rgba(15,118,110,0.18) 0%, transparent 55%)
              `,
            }}
          />

          {/* Slow-spinning light ray */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              background:
                "conic-gradient(from 200deg at 30% 40%, transparent 0deg, rgba(20,184,166,0.5) 30deg, transparent 60deg, transparent 120deg, rgba(6,182,212,0.4) 150deg, transparent 180deg)",
              animation: "spin-slow 25s linear infinite",
            }}
          />

          {/* Bubble particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {BUBBLES.map((b, i) => (
              <Bubble key={i} {...b} />
            ))}
          </div>

          {/* Sparkle dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {SPARKS.map((s, i) => (
              <SparkDot key={i} {...s} />
            ))}
          </div>

          {/* Water shimmer top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400/0 via-teal-300/70 to-teal-400/0 animate-shimmer" />

          {/* Main Content */}
          <div className="relative flex flex-col items-center gap-7 px-6">
            {/* Logo mark with 3D float */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon container */}
              <motion.div
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25), 0 0 30px rgba(20,184,166,0.20)",
                }}
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 8, -8, 0],
                  rotateX: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-5xl select-none">✨</span>
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    boxShadow: "0 0 0 0 rgba(20,184,166,0.4)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(20,184,166,0.4)",
                      "0 0 0 14px rgba(20,184,166,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Brand name */}
              <div className="text-center">
                <Logo variant="full" theme="light" height={42} />
              </div>
            </motion.div>

            {/* Circular progress ring */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.5, type: "spring" }}
            >
              <svg
                className="w-28 h-28 -rotate-90"
                viewBox="0 0 100 100"
                aria-label={`Đang tải: ${progress}%`}
              >
                {/* Background track */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="4.5"
                />
                {/* Glow filter */}
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#5eead4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Progress arc */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  filter="url(#glow)"
                  style={{ transition: "stroke-dashoffset 0.08s ease" }}
                />
              </svg>

              {/* Percentage display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-extrabold text-white tabular-nums tracking-tight">
                  {progress}%
                </span>
              </div>
            </motion.div>

            {/* Animated status message */}
            <div className="h-7 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  className="text-teal-200/90 text-sm font-medium tracking-wide"
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                >
                  {MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Service icons */}
            <motion.div
              className="flex gap-5 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {["🛋️", "🛏️", "🚗", "💺"].map((icon, i) => (
                <motion.div
                  key={i}
                  className="text-2xl select-none"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.45, 1, 0.45],
                  }}
                  transition={{
                    duration: 2.0,
                    delay: i * 0.28,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 90" fill="none" className="w-full">
              <path
                d="M0 45C240 85 480 5 720 45C960 85 1200 5 1440 45V90H0V45Z"
                fill="rgba(20,184,166,0.10)"
              />
              <path
                d="M0 62C240 25 480 80 720 62C960 44 1200 76 1440 62V90H0V62Z"
                fill="rgba(20,184,166,0.06)"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
