"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Star, ChevronDown, ArrowRight } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceHero from "@/components/ui/ServiceHero";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

/* ── JSON-LD Schema ── */
function GiatSofaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vesinhsachdanang.vn/giat-sofa-da-nang#service",
        name: "Giặt Sofa Đà Nẵng Tận Nơi",
        description:
          "Dịch vụ giặt sofa da, sofa nỉ, sofa vải bố tận nơi tại Đà Nẵng. Công nghệ hơi nước nóng, khử khuẩn 99.9%.",
        url: "https://vesinhsachdanang.vn/giat-sofa-da-nang",
        provider: { "@id": "https://vesinhsachdanang.vn/#business" },
        areaServed: { "@type": "City", name: "Đà Nẵng" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          priceRange: "150000-600000",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://vesinhsachdanang.vn" },
          { "@type": "ListItem", position: 2, name: "Giặt Sofa Đà Nẵng", item: "https://vesinhsachdanang.vn/giat-sofa-da-nang" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Giặt sofa Đà Nẵng giá bao nhiêu tiền?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Giá giặt sofa tại CleanPro VN dao động từ 150.000đ – 600.000đ tùy loại: sofa đơn từ 150k, sofa đôi từ 250k, sofa góc L từ 400k. Liên hệ 096 9135 304 để được báo giá miễn phí.",
            },
          },
          {
            "@type": "Question",
            name: "Giặt sofa tại nhà có mất nhiều thời gian không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thời gian giặt sofa thường từ 60–120 phút tùy kích thước. Sofa khô nhanh sau 3–4 giờ nhờ công nghệ sấy nhiệt chuyên dụng của CleanPro VN.",
            },
          },
          {
            "@type": "Question",
            name: "CleanPro VN có giặt sofa da không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có. Chúng tôi giặt và phục hồi sofa da bằng dung dịch chuyên dụng an toàn, không làm bong tróc hay mất màu da. Sau khi giặt, da được dưỡng ẩm, phục hồi độ bóng tự nhiên.",
            },
          },
          {
            "@type": "Question",
            name: "Dịch vụ có đến tận nơi không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có. CleanPro VN phục vụ tận nhà toàn TP Đà Nẵng. Bạn không cần tháo hay vận chuyển sofa, kỹ thuật viên sẽ mang thiết bị đến làm sạch ngay tại chỗ.",
            },
          },
          {
            "@type": "Question",
            name: "Giặt sofa vải bố có bị nhăn không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Không. Quy trình giặt hơi nước nóng của chúng tôi được kiểm soát nhiệt độ và áp suất phù hợp với từng loại vải, đảm bảo vải không bị nhăn, không co rút sau khi giặt.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const PRICE_TABLE = [
  { type: "Sofa đơn (1 chỗ)", price: "150.000đ – 200.000đ" },
  { type: "Sofa đôi (2 chỗ)", price: "200.000đ – 300.000đ" },
  { type: "Sofa ba (3 chỗ)", price: "280.000đ – 380.000đ" },
  { type: "Sofa góc L / U", price: "400.000đ – 600.000đ" },
  { type: "Sofa da (phụ thu)", price: "+50.000đ – 100.000đ" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Kiểm tra & báo giá", desc: "Kỹ thuật viên đến tận nơi kiểm tra loại vải, tình trạng vết bẩn và báo giá minh bạch trước khi làm." },
  { step: "02", title: "Hút bụi siêu sâu", desc: "Dùng máy hút bụi công suất lớn loại bỏ bụi mịn, lông thú, bào tử nấm mốc ẩn sâu trong thớ vải." },
  { step: "03", title: "Xử lý vết bẩn & khử khuẩn", desc: "Phun dung dịch enzyme sinh học, tác động vào từng vết bẩn cứng đầu. Khử khuẩn bằng hơi nước nóng 100°C." },
  { step: "04", title: "Giặt bằng máy chuyên dụng", desc: "Máy phun hơi nước nóng kết hợp hút ngược, làm sạch sâu đến từng thớ vải mà không thấm ướt phần lõi." },
  { step: "05", title: "Sấy khô & hoàn thiện", desc: "Sấy khô bề mặt bằng máy thổi nhiệt. Kiểm tra lại toàn bộ và bàn giao sofa sạch bóng cho khách hàng." },
];

const BENEFITS = [
  { icon: "🦠", title: "Khử khuẩn 99,9%", desc: "Loại bỏ vi khuẩn, nấm mốc, mạt bụi gây bệnh" },
  { icon: "🌬️", title: "Khử mùi triệt để", desc: "Mùi thú cưng, mùi ẩm mốc biến mất hoàn toàn" },
  { icon: "🎨", title: "Phục hồi màu sắc", desc: "Màu vải tươi sáng, sợi vải không bị xơ cứng" },
  { icon: "⏳", title: "Tăng tuổi thọ sofa", desc: "Sofa được giặt định kỳ bền hơn 2–3 lần" },
];

const REVIEWS = [
  {
    name: "Chị Hương – Ngũ Hành Sơn",
    rating: 5,
    text: "Sofa nhà mình bị mèo cào và có mùi hôi lâu ngày, sau khi CleanPro giặt thì như mới luôn! Kỹ thuật viên làm rất cẩn thận, không để lại dấu ướt gì cả.",
  },
  {
    name: "Anh Tuấn – Hải Châu",
    rating: 5,
    text: "Đặt lịch qua điện thoại, 2 tiếng sau đã có người đến làm. Sofa da của mình được vệ sinh và đánh bóng lại trông đẹp hơn lúc mới mua. Rất hài lòng!",
  },
  {
    name: "Chị Lan – Thanh Khê",
    rating: 5,
    text: "Dịch vụ chuyên nghiệp, đúng giờ, giá cả hợp lý. Sofa vải bố của mình được làm sạch triệt để, mùi thú cưng biến mất hoàn toàn. Sẽ dùng lại!",
  },
];

const FAQ_LIST = [
  {
    q: "Giặt sofa Đà Nẵng giá bao nhiêu tiền?",
    a: "Giá giặt sofa tại CleanPro VN dao động từ 150.000đ – 600.000đ tùy loại: sofa đơn từ 150k, sofa đôi từ 250k, sofa góc L từ 400k. Liên hệ 096 9135 304 để được báo giá miễn phí.",
  },
  {
    q: "Giặt sofa tại nhà có mất nhiều thời gian không?",
    a: "Thời gian giặt sofa thường từ 60–120 phút tùy kích thước. Sofa khô nhanh sau 3–4 giờ nhờ công nghệ sấy nhiệt. Bạn có thể sử dụng sofa ngay trong ngày.",
  },
  {
    q: "CleanPro VN có giặt sofa da không?",
    a: "Có. Chúng tôi giặt và phục hồi sofa da bằng dung dịch chuyên dụng an toàn, không làm bong tróc hay mất màu. Sau giặt, da được dưỡng ẩm, phục hồi độ bóng.",
  },
  {
    q: "Dịch vụ có đến tận nơi không?",
    a: "Có. CleanPro VN phục vụ tận nhà toàn TP Đà Nẵng. Bạn không cần tháo hay vận chuyển sofa.",
  },
  {
    q: "Giặt sofa vải bố có bị nhăn không?",
    a: "Không. Quy trình giặt hơi nước nóng được kiểm soát nhiệt độ và áp suất phù hợp với từng loại vải, đảm bảo vải không bị nhăn, không co rút.",
  },
];

export default function GiatSofaClient() {
  return (
    <ServicePageLayout breadcrumbs={[{ label: "Giặt Sofa Đà Nẵng" }]}>
      <GiatSofaSchema />

      <ServiceHero
        titlePart1="Giặt Sofa"
        titleHighlight="Đà Nẵng"
        titlePart2="Tận Nơi"
        description="Chuyên giặt sofa da, sofa nỉ và sofa vải bố tận nhà tại Đà Nẵng. Công nghệ hơi nước nóng 100°C, khử khuẩn 99,9% – sạch sâu mà không cần vận chuyển."
        badges={["Phục vụ 7 ngày/tuần", "Đến tận nơi miễn phí", "Cam kết sạch 100%"]}
        theme="teal"
        callBtnId="sofa-hero-call-btn"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 min-w-0">

              <AnimatedSection variant="fade-up">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Dịch Vụ Giặt Sofa Tại Đà Nẵng – CleanPro VN
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <strong>Giặt sofa Đà Nẵng</strong> tại CleanPro VN là dịch vụ vệ sinh sofa chuyên nghiệp
                  hàng đầu tại Đà Nẵng, phục vụ toàn bộ các quận Ngũ Hành Sơn, Hải Châu, Thanh Khê,
                  Liên Chiểu, Sơn Trà, Cẩm Lệ. Chúng tôi mang thiết bị và hoá chất chuyên dụng
                  đến tận nhà bạn, giúp sofa sạch sâu từng thớ vải mà không cần vận chuyển.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Theo nghiên cứu, bề mặt sofa có thể chứa tới <strong>200.000 vi khuẩn trên mỗi cm²</strong> – nhiều hơn cả bồn cầu. Đây là nguyên nhân gây ra các bệnh về đường hô hấp, dị ứng da, đặc biệt nguy hiểm cho trẻ nhỏ.
                </p>
              </AnimatedSection>

              {/* Loại sofa */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Các Loại Sofa Chúng Tôi Giặt</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-3 mb-8">
                {[
                  ["🛋️ Sofa vải bố / nỉ", "Loại phổ biến nhất. Làm sạch sâu vào từng thớ sợi, khử mùi và vết bẩn cứng đầu."],
                  ["🪑 Sofa da thật / da tổng hợp (PU)", "Vệ sinh bằng dung dịch chuyên dụng, làm bóng và dưỡng ẩm da."],
                  ["🛋️ Sofa vải nhung / velvet", "Làm sạch nhẹ nhàng, giữ nguyên độ bông mịn của vải nhung."],
                  ["💺 Sofa góc L, sofa U, sofa bed", "Làm sạch toàn bộ các góc, khe và phần ngăn kéo."],
                  ["🪑 Ghế sofa văn phòng", "Vệ sinh hàng loạt nhanh chóng, ít ảnh hưởng đến giờ làm việc."],
                ].map(([title, desc]) => (
                  <AnimatedItem key={title as string} variant="slide-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-800">{title as string}</span>
                        <span className="text-slate-500 text-sm"> – {desc as string}</span>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Lợi ích */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Tại Sao Nên Giặt Sofa Định Kỳ?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nhiều gia đình tại Đà Nẵng chỉ lau bề mặt sofa mà bỏ qua lớp bụi bẩn ẩn sâu bên trong.
                  Việc giặt sofa định kỳ 6 tháng/lần mang lại những lợi ích thiết thực:
                </p>
              </AnimatedSection>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {BENEFITS.map((item) => (
                  <AnimatedItem key={item.title} variant="scale">
                    <motion.div
                      className="flex items-start gap-3 p-4 rounded-2xl bg-teal-50 border border-teal-100"
                      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(20,184,166,0.15)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Quy trình */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Quy Trình Giặt Sofa 5 Bước Chuẩn Chuyên Nghiệp</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-5 mb-10">
                {PROCESS_STEPS.map((s) => (
                  <AnimatedItem key={s.step} variant="fade-up">
                    <div className="flex gap-4 items-start">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        {s.step}
                      </motion.div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">{s.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Khu vực */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Khu Vực Phục Vụ Giặt Sofa Tại Đà Nẵng</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CleanPro VN cung cấp dịch vụ <strong>giặt sofa tại nhà Đà Nẵng</strong> toàn thành phố, bao gồm các quận:
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Ngũ Hành Sơn", "Hải Châu", "Thanh Khê", "Liên Chiểu", "Sơn Trà", "Cẩm Lệ", "Hòa Vang"].map((q) => (
                    <motion.span
                      key={q}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium cursor-default"
                      whileHover={{ backgroundColor: "#ccfbf1", color: "#0f766e", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {q}
                    </motion.span>
                  ))}
                </div>
              </AnimatedSection>

              {/* CTA mid */}
              <AnimatedSection variant="scale">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center mb-10">
                  <p className="font-bold text-lg mb-2">Đặt Lịch Giặt Sofa Ngay Hôm Nay</p>
                  <p className="text-white/80 text-sm mb-4">Kỹ thuật viên có mặt trong 2–4 giờ. Giá cả minh bạch, không phát sinh.</p>
                  <motion.a
                    href="tel:+84969135304"
                    id="sofa-mid-cta-btn"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-teal-700 font-bold text-sm"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    Gọi ngay: 096 9135 304
                  </motion.a>
                </div>
              </AnimatedSection>

              {/* Reviews */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Đánh Giá Từ Khách Hàng Thực Tế</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-4 mb-10">
                {REVIEWS.map((r) => (
                  <AnimatedItem key={r.name} variant="slide-right">
                    <motion.div
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-100"
                      whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3 italic">&ldquo;{r.text}&rdquo;</p>
                      <p className="text-xs font-bold text-teal-700">{r.name}</p>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6" id="faq">
                  Câu Hỏi Thường Gặp Về Giặt Sofa Đà Nẵng
                </h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-4">
                {FAQ_LIST.map((faq) => (
                  <AnimatedItem key={faq.q} variant="fade-up">
                    <details className="group border border-slate-200 rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                        {faq.q}
                        <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                      </summary>
                      <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </details>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Internal links */}
              <AnimatedSection variant="fade-up" className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Xem thêm các dịch vụ khác</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { href: "/giat-nem-da-nang", label: "🛏️ Giặt Nệm Đà Nẵng" },
                    { href: "/ve-sinh-ghe-o-to-da-nang", label: "🚗 Vệ Sinh Ghế Ô Tô" },
                    { href: "/ve-sinh-ghe-van-phong-da-nang", label: "💺 Ghế Văn Phòng" },
                  ].map((link) => (
                    <motion.div key={link.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-all"
                      >
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-1">
              <AnimatedSection variant="slide-right" delay={0.3} className="rounded-2xl border border-slate-200 overflow-hidden lg:sticky lg:top-24">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-4">
                  <h3 className="text-white font-bold text-base">Bảng Giá Giặt Sofa</h3>
                  <p className="text-white/70 text-xs mt-1">Cập nhật 09/2026 – Giá đã gồm công & hoá chất</p>
                </div>
                <div id="bang-gia" className="divide-y divide-slate-100">
                  {PRICE_TABLE.map((row, i) => (
                    <motion.div
                      key={row.type}
                      className="flex justify-between items-center px-5 py-3.5 hover:bg-slate-50 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <span className="text-slate-700 text-sm">{row.type}</span>
                      <span className="font-bold text-teal-700 text-sm whitespace-nowrap ml-3">{row.price}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="p-5 bg-slate-50 space-y-3">
                  <motion.a
                    href="tel:+84969135304"
                    id="sofa-sidebar-call-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-sm shadow-lg"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(20,184,166,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="w-4 h-4" />
                    Gọi báo giá miễn phí
                  </motion.a>
                  <p className="text-center text-xs text-slate-500">
                    ☎ 096 9135 304 – Phục vụ 7:00 – 20:00 mỗi ngày
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="slide-right" delay={0.45} className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
                <h4 className="font-bold text-teal-800 mb-3">Cam Kết Của Chúng Tôi</h4>
                <ul className="space-y-2">
                  {[
                    "✅ Sạch sâu hoặc làm lại miễn phí",
                    "✅ Báo giá trước – không phát sinh",
                    "✅ Kỹ thuật viên có chứng chỉ",
                    "✅ Bảo hiểm tài sản khách hàng",
                  ].map((c) => (
                    <li key={c} className="text-teal-800 text-sm">{c}</li>
                  ))}
                </ul>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
