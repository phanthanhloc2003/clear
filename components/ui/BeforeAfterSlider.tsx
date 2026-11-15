"use client";

/**
 * BeforeAfterSlider.tsx – Drag slider so sánh Before & After
 * Hỗ trợ: chuột, cảm ứng, keyboard, Next.js Image, fallback gradient
 */

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { BeforeAfterImagePair } from "@/lib/beforeAfterData";

/* ─── ImageWithFallback ─── */
interface FallbackImgProps {
  src: string; alt: string; priority?: boolean;
  color?: string; icon?: string; text?: string; sizes?: string;
}
function FallbackImg({ src, alt, priority, color, icon, text, sizes }: FallbackImgProps) {
  const [err, setErr] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const bg = color ?? "linear-gradient(135deg,#64748b,#334155)";
  if (err) return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: bg }} aria-hidden="true">
      {icon && <span className="text-5xl mb-2 drop-shadow">{icon}</span>}
      {text && <p className="text-white text-sm font-semibold text-center px-3 drop-shadow">{text}</p>}
    </div>
  );
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse" style={{ background: bg }} aria-hidden="true">
          {icon && <span className="text-4xl opacity-40">{icon}</span>}
        </div>
      )}
      <Image src={src} alt={alt} fill
        sizes={sizes ?? "(max-width:640px) 100vw,(max-width:1024px) 50vw,560px"}
        className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading={priority ? "eager" : "lazy"} priority={priority} quality={85}
        onLoad={() => setLoaded(true)} onError={() => setErr(true)}
      />
    </>
  );
}

/* ─── BeforeAfterSlider ─── */
export interface BeforeAfterSliderProps {
  beforeSrc: string; afterSrc: string;
  beforeAlt: string; afterAlt: string;
  beforeColor?: string; afterColor?: string;
  beforeIcon?: string; afterIcon?: string;
  beforeText?: string; afterText?: string;
  title?: string; priority?: boolean; initialPosition?: number;
}

export function BeforeAfterSlider({
  beforeSrc, afterSrc, beforeAlt, afterAlt,
  beforeColor, afterColor, beforeIcon, afterIcon, beforeText, afterText,
  title, priority = false, initialPosition = 50,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(initialPosition);
  const dragging = useRef(false);
  const clamp = (v: number) => Math.max(4, Math.min(96, v));

  const updateFromX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setPos(clamp(((clientX - r.left) / r.width) * 100));
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = true;
    const move = (ev: PointerEvent) => { if (dragging.current) updateFromX(ev.clientX); };
    const up = () => {
      dragging.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }, [updateFromX]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos(p => clamp(p - 5));
    if (e.key === "ArrowRight") setPos(p => clamp(p + 5));
  }, []);

  /* Safe width for before clip (avoid division by zero) */
  const beforeImgWidth = pos > 0 ? `${10000 / pos}%` : "100%";

  return (
    <figure className="m-0 relative group select-none" aria-label={title ?? `So sánh: ${beforeAlt} / ${afterAlt}`}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize"
        style={{ touchAction: "none" }}
        onClick={e => updateFromX(e.clientX)}
      >
        {/* AFTER – full width */}
        <div className="absolute inset-0" aria-hidden="true">
          <FallbackImg src={afterSrc} alt={afterAlt} priority={priority}
            color={afterColor} icon={afterIcon} text={afterText} />
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-bold tracking-widest shadow-lg">
            AFTER
          </div>
        </div>

        {/* BEFORE – clipped */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }} aria-hidden="true">
          <div className="absolute inset-0" style={{ width: beforeImgWidth, maxWidth: "none" }}>
            <FallbackImg src={beforeSrc} alt={beforeAlt} priority={priority}
              color={beforeColor} icon={beforeIcon} text={beforeText} />
          </div>
          <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-800/85 text-white text-xs font-bold tracking-widest shadow-lg backdrop-blur-sm">
            BEFORE
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-px bg-white z-20 pointer-events-none"
          style={{ left: `${pos}%`, boxShadow: "0 0 10px rgba(255,255,255,0.9)" }}
          aria-hidden="true"
        />

        {/* Drag handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Kéo để so sánh"
          aria-valuemin={4} aria-valuemax={96} aria-valuenow={Math.round(pos)}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-11 h-11 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-xl ring-[3px] ring-white cursor-ew-resize focus:outline-none focus-visible:ring-teal-300 transition-transform group-hover:scale-110 active:scale-95"
          style={{ left: `${pos}%` }}
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8.5 7L4 12l4.5 5V7zm7 0v10L20 12l-4.5-5z" />
          </svg>
        </div>
      </div>

      {title && (
        <figcaption className="mt-3 text-center text-sm font-semibold text-slate-700">
          {title}
        </figcaption>
      )}
      <span className="sr-only">Trước: {beforeAlt}. Sau: {afterAlt}</span>
    </figure>
  );
}

/* ─── BeforeAfterGallery (tab gallery for single-service pages) ─── */
interface GalleryProps { pairs: BeforeAfterImagePair[]; }

export function BeforeAfterGallery({ pairs }: GalleryProps) {
  const [tab, setTab] = useState(0);
  useEffect(() => { setTab(0); }, [pairs]);
  if (!pairs?.length) return null;
  const active = Math.min(tab, pairs.length - 1);
  const p = pairs[active];

  return (
    <div className="w-full">
      {pairs.length > 1 && (
        <div role="tablist" aria-label="Chọn loại" className="flex flex-wrap gap-2 mb-6 justify-center">
          {pairs.map((pair, i) => (
            <button key={pair.id} role="tab" aria-selected={active === i}
              id={`ba-tab-${pair.id}`} aria-controls={`ba-panel-${pair.id}`}
              onClick={() => setTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                active === i
                  ? "bg-teal-500 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700"
              }`}>
              {pair.label}
            </button>
          ))}
        </div>
      )}
      <div role="tabpanel" id={`ba-panel-${p.id}`} aria-labelledby={`ba-tab-${p.id}`}>
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
            <BeforeAfterSlider
              beforeSrc={p.beforeSrc} afterSrc={p.afterSrc}
              beforeAlt={p.beforeAlt} afterAlt={p.afterAlt}
              beforeColor={p.beforePlaceholderColor} afterColor={p.afterPlaceholderColor}
              beforeIcon={p.beforeIcon} afterIcon={p.afterIcon}
              beforeText={p.beforePlaceholderText} afterText={p.afterPlaceholderText}
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-center text-xs text-slate-400 mt-4 italic select-none">
        ← Kéo thanh giữa để so sánh hoặc dùng phím ← →
      </p>
    </div>
  );
}
