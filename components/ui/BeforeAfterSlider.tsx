"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterPair {
  id: string;
  label: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor: string; // CSS gradient for before
  afterColor: string;  // CSS gradient for after
  beforeIcon: string;
  afterIcon: string;
  beforeText: string;
  afterText: string;
}

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
}

/**
 * Draggable Before/After comparison slider.
 * Uses Framer Motion useMotionValue for smooth 60fps drag.
 * Since we don't have real images, uses gradient placeholder designs.
 */
export function BeforeAfterSlider({ pair }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false); // useRef thay vì useState – không cần re-render
  const position = useMotionValue(50); // percentage 0-100
  const [positionState, setPositionState] = useState(50);

  const handleDrag = useCallback(
    (event: PointerEvent | MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX =
        "touches" in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
      const relX = clientX - rect.left;
      const pct = Math.max(5, Math.min(95, (relX / rect.width) * 100));
      position.set(pct);
      setPositionState(pct);
    },
    [position]
  );

  const startDrag = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;

      const onMove = (ev: PointerEvent) => handleDrag(ev);
      const onUp = () => {
        isDraggingRef.current = false;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [handleDrag]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-xl"
      style={{ touchAction: "none" }}
    >
      {/* AFTER panel (full width, behind) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ background: pair.afterColor }}
      >
        <div className="text-7xl mb-4">{pair.afterIcon}</div>
        <p className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
          {pair.afterText}
        </p>
        {/* After label tag */}
        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {pair.afterLabel ?? "SAU"}
        </div>
      </div>

      {/* BEFORE panel (clip from left by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${positionState}%` }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            background: pair.beforeColor,
            width: `${(100 / positionState) * 100}%`,
            minWidth: "300px",
          }}
        >
          <div className="text-7xl mb-4">{pair.beforeIcon}</div>
          <p className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
            {pair.beforeText}
          </p>
          {/* Before label tag */}
          <div className="absolute top-4 left-4 bg-slate-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {pair.beforeLabel ?? "TRƯỚC"}
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        style={{ left: `${positionState}%` }}
      />

      {/* Handle button */}
      <div
        className="before-after-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
        style={{ left: `${positionState}%` }}
        onPointerDown={startDrag}
      >
        <div className="flex items-center gap-0.5">
          <ChevronLeft className="w-4 h-4 text-teal-600" />
          <ChevronRight className="w-4 h-4 text-teal-600" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Before/After Section with Tabs ---------- */

const PAIRS: BeforeAfterPair[] = [
  {
    id: "sofa",
    label: "Sofa vải",
    beforeIcon: "🛋️",
    afterIcon: "✨",
    beforeText: "Sofa bẩn, ố vàng",
    afterText: "Sạch bóng, thơm mát",
    beforeColor:
      "linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)",
    afterColor:
      "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #06b6d4 100%)",
    beforeLabel: "TRƯỚC",
    afterLabel: "SAU",
  },
  {
    id: "mattress",
    label: "Nệm ngủ",
    beforeIcon: "🛏️",
    afterIcon: "🌟",
    beforeText: "Nệm cũ, nhiều bụi bẩn",
    afterText: "Trắng sạch, khử mùi",
    beforeColor:
      "linear-gradient(135deg, #92400e 0%, #78350f 40%, #6b2c05 100%)",
    afterColor:
      "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
    beforeLabel: "TRƯỚC",
    afterLabel: "SAU",
  },
  {
    id: "car",
    label: "Ghế ô tô",
    beforeIcon: "🚗",
    afterIcon: "💎",
    beforeText: "Ghế bẩn, có mùi",
    afterText: "Sạch sẽ, như mới",
    beforeColor:
      "linear-gradient(135deg, #374151 0%, #1f2937 40%, #111827 100%)",
    afterColor:
      "linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
    beforeLabel: "TRƯỚC",
    afterLabel: "SAU",
  },
  {
    id: "office",
    label: "Ghế VP",
    beforeIcon: "💺",
    afterIcon: "🏆",
    beforeText: "Ghế văn phòng cũ",
    afterText: "Chuyên nghiệp trở lại",
    beforeColor:
      "linear-gradient(135deg, #4b5563 0%, #374151 40%, #1f2937 100%)",
    afterColor:
      "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
    beforeLabel: "TRƯỚC",
    afterLabel: "SAU",
  },
];

export function BeforeAfterGallery() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {PAIRS.map((pair, i) => (
          <button
            key={pair.id}
            onClick={() => setActiveTab(i)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === i
                ? "bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {pair.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <BeforeAfterSlider pair={PAIRS[activeTab]} />
      </motion.div>

      <p className="text-center text-xs text-slate-400 mt-4 italic">
        ← Kéo thanh giữa để so sánh → Hình ảnh minh họa từ dịch vụ thực tế
      </p>
    </div>
  );
}
