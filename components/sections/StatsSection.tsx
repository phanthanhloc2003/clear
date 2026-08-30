"use client";

import { Users, Clock, ThumbsUp, Award, Shield, Star } from "lucide-react";
import CounterNumber from "@/components/ui/CounterNumber";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const STATS = [
  {
    value: 5000,
    suffix: "+",
    label: "Khách Hàng Hài Lòng",
    description: "Phục vụ khắp TP Đà Nẵng và các tỉnh lân cận",
    icon: <Users className="w-full h-full" />,
    duration: 2200,
  },
  {
    value: 8,
    suffix: "+",
    label: "Năm Kinh Nghiệm",
    description: "Đội ngũ chuyên nghiệp, tay nghề cao",
    icon: <Clock className="w-full h-full" />,
    duration: 1500,
  },
  {
    value: 98,
    suffix: "%",
    label: "Tỷ Lệ Hài Lòng",
    description: "Đánh giá từ khách hàng thực tế",
    icon: <ThumbsUp className="w-full h-full" />,
    duration: 1800,
  },
  {
    value: 100,
    suffix: "%",
    label: "Cam Kết Sạch Sâu",
    description: "Hoàn tiền nếu không hài lòng",
    icon: <Award className="w-full h-full" />,
    duration: 1600,
  },
];

const WHY_US = [
  {
    icon: "🔬",
    title: "Công nghệ hiện đại",
    desc: "Máy móc nhập khẩu, dung dịch an toàn chứng nhận quốc tế",
  },
  {
    icon: "👨‍🔧",
    title: "Đội ngũ được đào tạo",
    desc: "Kỹ thuật viên được đào tạo bài bản, có chứng chỉ nghề",
  },
  {
    icon: "⏰",
    title: "Đúng hẹn, nhanh chóng",
    desc: "Cam kết đúng giờ, hoàn thành dịch vụ trong ngày",
  },
  {
    icon: "💚",
    title: "An toàn & Thân thiện",
    desc: "Sản phẩm sinh học, an toàn cho trẻ em và thú cưng",
  },
  {
    icon: "📞",
    title: "Hỗ trợ 24/7",
    desc: "Luôn sẵn sàng tư vấn và xử lý mọi vấn đề phát sinh",
  },
  {
    icon: "🏆",
    title: "Bảo hành dịch vụ",
    desc: "Bảo hành 7 ngày, làm lại miễn phí nếu chưa hài lòng",
  },
];

/**
 * Stats & Why Us section.
 * Features animated counters and benefit cards.
 * Uses a mesh gradient background with particle accents.
 */
export default function StatsSection() {
  return (
    <section
      id="why-us"
      className="section-py relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 section-pattern opacity-50" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Tại Sao Chọn Chúng Tôi
          </div>

          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Con Số{" "}
            <span className="gradient-text">Nói Lên Tất Cả</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Hơn 8 năm kinh nghiệm, hàng nghìn khách hàng tin tưởng.
            Chúng tôi tự hào về chất lượng dịch vụ của mình.
          </p>
        </AnimatedSection>

        {/* Counter stats */}
        <AnimatedSection
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
          stagger
        >
          {STATS.map((stat, i) => (
            <AnimatedItem key={stat.label}>
              <div
                className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(20,184,166,0.12)" }}
              >
                <CounterNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                  icon={stat.icon}
                  duration={stat.duration}
                />
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Why Us grid */}
        <AnimatedSection className="mb-8" variant="fade-up">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Lý Do Khách Hàng{" "}
            <span className="gradient-text">Tin Tưởng</span> Chúng Tôi
          </h3>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger
        >
          {WHY_US.map((item, i) => (
            <AnimatedItem key={item.title}>
              <motion.div
                className="group flex gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ border: "1px solid #f1f5f9" }}
                whileHover={{ borderColor: "rgba(20,184,166,0.3)" }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-teal-50 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Trust logos / certifications */}
        <AnimatedSection className="mt-16 text-center" variant="fade-up" delay={0.2}>
          <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-5">
            Chứng nhận & đối tác
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Shield,     text: "ISO 9001:2015" },
              { icon: Star,       text: "5⭐ Google Review" },
              { icon: Award,      text: "Top 10 Dịch Vụ Uy Tín" },
              { icon: ThumbsUp,   text: "Đối Tác Tin Cậy" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-500"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <Icon className="w-3.5 h-3.5 text-teal-500" />
                {text}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
