"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { BeforeAfterGallery } from "@/components/ui/BeforeAfterSlider";
import { BeforeAfterGrid, type GridItem } from "@/components/ui/BeforeAfterGrid";
import type { ServiceBeforeAfterData } from "@/lib/beforeAfterData";

/* ─── Props ─── */
interface BeforeAfterSectionProps {
  /**
   * Mode "grid": Hiển thị 2x2 grid (dùng cho trang chủ / trang kết quả)
   * Mode "gallery": Hiển thị tab gallery (dùng cho từng trang dịch vụ)
   */
  mode?: "grid" | "gallery";
  /** Dữ liệu cho mode gallery (1 dịch vụ) */
  data?: ServiceBeforeAfterData;
  /** Dữ liệu cho mode grid (tất cả dịch vụ) */
  gridItems?: GridItem[];
  sectionId?: string;
  headingId?: string;
  badgeLabel?: string;
  heading?: string;
  description?: string;
  /** embedded: dùng trong trang dịch vụ, không có section wrapper thừa */
  embedded?: boolean;
}

export default function BeforeAfterSection({
  mode = "gallery",
  data,
  gridItems,
  sectionId = "ket-qua-thuc-te",
  headingId = "ba-heading",
  badgeLabel = "Kết Quả Thực Tế",
  heading,
  description,
  embedded = false,
}: BeforeAfterSectionProps) {
  const resolvedHeading = heading ?? data?.heading ?? "Kết Quả Thực Tế";
  const resolvedDesc = description ?? data?.description;

  const inner = (
    <>
      {/* Header */}
      <AnimatedSection className="text-center mb-10" variant="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)", color: "#0f766e" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          {badgeLabel}
        </div>

        <h2 id={headingId} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          {resolvedHeading.includes("Thực Tế") ? (
            <>
              {resolvedHeading.replace(" Thực Tế", "")}{" "}
              <span className="gradient-text">Thực Tế</span>
            </>
          ) : resolvedHeading}
        </h2>

        {resolvedDesc && (
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">{resolvedDesc}</p>
        )}
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection variant="fade-up" delay={0.1}>
        {mode === "grid" && gridItems ? (
          <BeforeAfterGrid items={gridItems} />
        ) : data ? (
          <BeforeAfterGallery pairs={data.pairs} />
        ) : null}
      </AnimatedSection>
    </>
  );

  if (embedded) {
    return (
      <div className="w-full" aria-labelledby={headingId}>
        {inner}
      </div>
    );
  }

  return (
    <section id={sectionId} className="section-py bg-slate-50 overflow-hidden" aria-labelledby={headingId}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {inner}
      </div>
    </section>
  );
}
