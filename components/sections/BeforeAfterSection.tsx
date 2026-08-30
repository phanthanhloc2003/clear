"use client";

import { BeforeAfterGallery } from "@/components/ui/BeforeAfterSlider";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ImageIcon } from "lucide-react";

/**
 * Before/After section – showcases 4 service comparison sliders.
 * Clean white background with subtle decoration.
 */
export default function BeforeAfterSection() {
  return (
    <section
      id="results"
      className="section-py bg-white overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12" variant="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(20,184,166,0.08)",
              border: "1px solid rgba(20,184,166,0.2)",
              color: "#0f766e",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Kết Quả Thực Tế
          </div>

          <h2
            id="results-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Trước &{" "}
            <span className="gradient-text">Sau Khi Vệ Sinh</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Hình ảnh minh bạch và ấn tượng –{" "}
            <span className="font-semibold text-teal-600">Kết quả thực tế</span>{" "}
            từ những dịch vụ chúng tôi đã thực hiện.
          </p>
        </AnimatedSection>

        {/* Instructions hint */}
        <AnimatedSection className="flex items-center justify-center gap-2 mb-8" variant="fade-in" delay={0.15}>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-slate-500"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
          >
            <span>👆</span>
            <span>Kéo thanh giữa để so sánh</span>
            <span className="text-slate-300">|</span>
            <ImageIcon className="w-4 h-4" />
            <span>Chọn tab để xem loại dịch vụ</span>
          </div>
        </AnimatedSection>

        {/* Before/After slider gallery */}
        <AnimatedSection variant="scale" delay={0.1}>
          <BeforeAfterGallery />
        </AnimatedSection>

        {/* Stats row below */}
        <AnimatedSection
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          variant="fade-up"
          delay={0.2}
        >
          {[
            { value: "500+", label: "Sofa đã giặt", icon: "🛋️" },
            { value: "1.200+", label: "Nệm đã vệ sinh", icon: "🛏️" },
            { value: "300+", label: "Ô tô đã vệ sinh", icon: "🚗" },
            { value: "800+", label: "Ghế VP đã giặt", icon: "💺" },
          ].map(({ value, label, icon }) => (
            <div
              key={label}
              className="text-center p-4 rounded-2xl"
              style={{
                background: "rgba(20,184,166,0.05)",
                border: "1px solid rgba(20,184,166,0.12)",
              }}
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-xl font-extrabold gradient-text">{value}</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
