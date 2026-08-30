"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  CalendarDays,
  Droplets,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    step: "01",
    icon: Phone,
    title: "Liên Hệ & Tư Vấn",
    description:
      "Bạn chỉ cần nhắn tin hoặc gọi điện. Chúng tôi tư vấn miễn phí và báo giá nhanh chóng trong vòng 15 phút.",
    color: "from-teal-500 to-emerald-400",
    lightColor: "rgba(20,184,166,0.08)",
    borderColor: "rgba(20,184,166,0.2)",
  },
  {
    step: "02",
    icon: CalendarDays,
    title: "Đặt Lịch & Chuẩn Bị",
    description:
      "Chọn khung giờ phù hợp với lịch của bạn. Đội ngũ mang đầy đủ thiết bị chuyên dụng đến tận nơi đúng giờ.",
    color: "from-cyan-500 to-blue-400",
    lightColor: "rgba(6,182,212,0.08)",
    borderColor: "rgba(6,182,212,0.2)",
  },
  {
    step: "03",
    icon: Droplets,
    title: "Vệ Sinh Chuyên Sâu",
    description:
      "Sử dụng công nghệ hiện đại và dung dịch an toàn, làm sạch từng lớp vải và bề mặt. Loại bỏ mọi vi khuẩn, mùi.",
    color: "from-blue-500 to-indigo-400",
    lightColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.2)",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Kiểm Tra & Bàn Giao",
    description:
      "Kiểm tra cùng bạn, đảm bảo hài lòng tuyệt đối trước khi hoàn tất. Bảo hành dịch vụ 7 ngày sau vệ sinh.",
    color: "from-emerald-500 to-teal-400",
    lightColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.2)",
  },
];

/** Animated connecting line between steps */
function ConnectorLine({ isActive }: { isActive: boolean }) {
  return (
    <div className="hidden lg:flex items-center flex-1 px-4">
      <div className="relative flex-1 h-0.5 bg-slate-200 overflow-hidden rounded-full">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/** Individual step card */
function StepCard({
  step,
  index,
  isLast,
  lineActive,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isLast: boolean;
  lineActive: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:flex-1 min-w-0">
      {/* Step content */}
      <motion.div
        className="flex-1 min-w-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.65,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Desktop layout: icon on top, content below */}
        <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center">
          {/* Icon circle */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto"
              style={{
                background: `linear-gradient(135deg, ${step.color.split(" ").pop()?.replace("to-", "")}, transparent)`,
                backgroundColor: step.lightColor,
                border: `1.5px solid ${step.borderColor}`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className={`w-7 h-7 lg:w-9 lg:h-9 bg-gradient-to-br ${step.color} p-1.5 lg:p-2 rounded-xl`}
              >
                <Icon className="w-full h-full text-white" />
              </div>
            </motion.div>

            {/* Step number badge */}
            <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white border-2 border-teal-400 flex items-center justify-center shadow-sm">
              <span className="text-[9px] lg:text-[10px] font-black text-teal-600">
                {step.step}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:mt-5 lg:px-2 flex-1 min-w-0">
            <h3 className="font-extrabold text-slate-900 text-base lg:text-sm mb-1.5 lg:mb-2 leading-tight">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        {/* Mobile vertical connector */}
        {!isLast && (
          <div className="lg:hidden flex items-center gap-3 mt-4 mb-4 pl-8">
            <div className="w-0.5 h-8 bg-gradient-to-b from-teal-400 to-transparent rounded-full" />
          </div>
        )}
      </motion.div>

      {/* Desktop horizontal connector */}
      {!isLast && <ConnectorLine isActive={lineActive} />}
    </div>
  );
}

/**
 * 4-step process section with animated connecting line.
 * Horizontal on desktop, vertical on mobile.
 */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-py bg-slate-50 section-pattern overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16" variant="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(20,184,166,0.08)",
              border: "1px solid rgba(20,184,166,0.2)",
              color: "#0f766e",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Quy Trình
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Quy Trình{" "}
            <span className="gradient-text">Làm Việc</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Chỉ{" "}
            <span className="font-bold text-teal-600">4 bước đơn giản</span>{" "}
            – Kết quả sạch sâu, hài lòng 100%
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-0 gap-0">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              index={i}
              isLast={i === STEPS.length - 1}
              lineActive={isInView}
            />
          ))}
        </div>

        {/* Bottom guarantee banner */}
        <AnimatedSection className="mt-16" variant="fade-up" delay={0.3}>
          <div
            className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
            style={{
              background:
                "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #0369a1 100%)",
              boxShadow: "0 20px 60px -15px rgba(15,118,110,0.35)",
            }}
          >
            <div className="text-5xl">🛡️</div>
            <div className="flex-1">
              <h3 className="text-white font-extrabold text-xl mb-1">
                Cam kết hài lòng 100%
              </h3>
              <p className="text-teal-100/90 text-sm leading-relaxed">
                Nếu bạn chưa hài lòng sau khi vệ sinh, chúng tôi sẽ làm lại miễn phí. Bảo hành dịch vụ 7 ngày.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex-shrink-0 px-6 py-3 rounded-full bg-white text-teal-700 font-bold text-sm hover:bg-teal-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg cursor-pointer"
            >
              Đặt Lịch Ngay
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
