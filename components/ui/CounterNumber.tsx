"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CounterNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  duration?: number;
}

/**
 * Animated number counter card.
 * Starts counting when element enters viewport via useCountUp hook.
 */
export default function CounterNumber({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  icon,
  duration = 2200,
}: CounterNumberProps) {
  const { count, ref } = useCountUp(value, duration);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-2 group"
    >
      {/* Icon */}
      <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-200/40 group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
        <div className="text-teal-600 w-7 h-7">{icon}</div>
      </div>

      {/* Number */}
      <div className="flex items-baseline gap-0.5 mb-2">
        {prefix && (
          <span className="text-2xl font-bold text-teal-700">{prefix}</span>
        )}
        <span className="text-4xl sm:text-5xl font-extrabold gradient-text tabular-nums">
          {count.toLocaleString("vi-VN")}
        </span>
        {suffix && (
          <span className="text-2xl font-bold text-teal-700">{suffix}</span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-1">
        {label}
      </p>

      {/* Description */}
      {description && (
        <p className="text-xs text-slate-500 max-w-[140px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
