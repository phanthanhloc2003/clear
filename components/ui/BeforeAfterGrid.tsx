"use client";

/**
 * BeforeAfterGrid.tsx
 *
 * Grid 2x2 hiển thị 4 cặp ảnh Before & After theo đúng thiết kế mẫu.
 * Desktop: 2 cột × 2 hàng
 * Mobile: 1 cột × 4 hàng
 *
 * Mỗi ô có drag slider hoạt động độc lập.
 */

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export interface GridItem {
  id: string;
  /** Label hiển thị bên dưới slider */
  serviceLabel: string;
  /** Icon dịch vụ */
  serviceIcon?: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeColor?: string;
  afterColor?: string;
  beforeIcon?: string;
  afterIcon?: string;
  beforeText?: string;
  afterText?: string;
}

interface BeforeAfterGridProps {
  items: GridItem[];
  /** Tiêu đề section */
  heading?: string;
  /** Mô tả section */
  description?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function BeforeAfterGrid({ items, heading, description }: BeforeAfterGridProps) {
  if (!items?.length) return null;

  return (
    <div className="w-full">
      {/* Optional header */}
      {(heading || description) && (
        <div className="text-center mb-10">
          {heading && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* 2×2 grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
      >
        {items.slice(0, 4).map((item, i) => (
          <motion.div key={item.id} variants={itemVariants} className="flex flex-col gap-3">
            <BeforeAfterSlider
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
              beforeAlt={item.beforeAlt}
              afterAlt={item.afterAlt}
              beforeColor={item.beforeColor}
              afterColor={item.afterColor}
              beforeIcon={item.beforeIcon}
              afterIcon={item.afterIcon}
              beforeText={item.beforeText}
              afterText={item.afterText}
              priority={i === 0}
            />
            {/* Service label below */}
            <div className="flex items-center gap-2 justify-center">
              {item.serviceIcon && (
                <span className="text-lg" role="img" aria-label={item.serviceLabel}>
                  {item.serviceIcon}
                </span>
              )}
              <span className="text-sm font-semibold text-slate-700">{item.serviceLabel}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Drag hint */}
      <p className="text-center text-xs text-slate-400 mt-6 italic select-none">
        ← Kéo thanh giữa mỗi ảnh để so sánh kết quả trước và sau khi vệ sinh
      </p>
    </div>
  );
}
