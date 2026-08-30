"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SERVICES = [
  {
    icon: "🛋️",
    title: "GIẶT SOFA",
    description:
      "Làm sạch sâu từng lớp vải, loại bỏ bụi bẩn và mùi khó chịu. Phục hồi màu sắc và kết cấu vải sô pha như mới.",
    features: [
      "Làm sạch sâu toàn bộ bề mặt",
      "Khử khuẩn, diệt vi khuẩn",
      "Xử lý vết bẩn cứng đầu",
      "Bảo vệ màu sắc & vải",
    ],
  },
  {
    icon: "🛏️",
    title: "GIẶT NỆM",
    description:
      "Loại bỏ bụi, mồ hôi và các tác nhân gây mùi. Tiêu diệt mạt giường, vi khuẩn để giấc ngủ ngon hơn.",
    features: [
      "Hút bụi siêu sâu 3 lớp",
      "Tiêu diệt mạt giường, nấm mốc",
      "Khử mùi bằng enzyme sinh học",
      "Sấy khô hoàn toàn trước bàn giao",
    ],
  },
  {
    icon: "🚗",
    title: "VỆ SINH GHẾ Ô TÔ",
    description:
      "Làm sạch ghế, khử mùi và phục hồi vẻ ngoài. Xử lý vết ố vàng, mùi khói và bụi bẩn trong nội thất xe.",
    features: [
      "Làm sạch da & vải ghế",
      "Khử mùi ô nhiễm toàn xe",
      "Phục hồi màu da, dưỡng ẩm",
      "Vệ sinh trần, vách cánh cửa",
    ],
  },
  {
    icon: "💺",
    title: "GHẾ VĂN PHÒNG",
    description:
      "Giữ không gian làm việc sạch sẽ và chuyên nghiệp. Tăng năng suất, loại bỏ vi khuẩn và bụi tích tụ.",
    features: [
      "Phù hợp ghế lưới & da",
      "Khử khuẩn an toàn cho văn phòng",
      "Không gián đoạn công việc",
      "Vệ sinh hàng loạt, tiết kiệm chi phí",
    ],
  },
];

/**
 * Services section – 2x2 grid on desktop, 1-col on mobile.
 * Each card has staggered fade-up animation on scroll entry.
 */
export default function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="section-py section-pattern bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14" variant="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(20,184,166,0.08)",
              border: "1px solid rgba(20,184,166,0.2)",
              color: "#0f766e",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Dịch Vụ
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Dịch Vụ{" "}
            <span className="gradient-text">Của Chúng Tôi</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Mọi thứ bạn cần để không gian luôn{" "}
            <span className="font-semibold text-teal-600">sạch và tươi mới</span>.
            Phục vụ tận nơi với thiết bị hiện đại.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              index={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              onBook={scrollToContact}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-14" variant="fade-up" delay={0.2}>
          <p className="text-slate-500 mb-5 text-sm">
            Không tìm thấy dịch vụ phù hợp?{" "}
            <span className="font-semibold text-teal-600">Liên hệ chúng tôi ngay</span>
          </p>
          <button
            onClick={scrollToContact}
            id="services-cta-btn"
            className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-teal-400/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Đặt Lịch Ngay – Miễn Phí Tư Vấn
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
