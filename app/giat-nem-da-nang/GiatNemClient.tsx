"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Star, ChevronDown, ArrowRight, Shield } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceHero from "@/components/ui/ServiceHero";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

/* ── JSON-LD Schema ── */
function GiatNemSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vesinhsachdanang.vn/giat-nem-da-nang#service",
        name: "Giặt Nệm Đà Nẵng Tận Nơi",
        description:
          "Dịch vụ giặt nệm lò xo, nệm bông, nệm cao su tận nơi tại Đà Nẵng. Diệt mạt giường, khử khuẩn 99,9%.",
        url: "https://vesinhsachdanang.vn/giat-nem-da-nang",
        provider: { "@id": "https://vesinhsachdanang.vn/#business" },
        areaServed: { "@type": "City", name: "Đà Nẵng" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          priceRange: "200000-500000",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://vesinhsachdanang.vn" },
          { "@type": "ListItem", position: 2, name: "Giặt Nệm Đà Nẵng", item: "https://vesinhsachdanang.vn/giat-nem-da-nang" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Giặt nệm tại Đà Nẵng giá bao nhiêu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Giá giặt nệm tại CleanPro VN từ 200.000đ – 500.000đ tùy kích thước: nệm đơn từ 200k, nệm đôi từ 300k, nệm king size từ 450k. Báo giá miễn phí qua 096 9135 304.",
            },
          },
          {
            "@type": "Question",
            name: "Giặt nệm tại nhà bao lâu thì khô?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sau khi giặt, nệm thường khô hoàn toàn trong 4–6 tiếng nếu thời tiết tốt. CleanPro VN sử dụng máy sấy nhiệt chuyên dụng giúp rút ngắn thời gian khô đáng kể.",
            },
          },
          {
            "@type": "Question",
            name: "Mạt giường có thể bị tiêu diệt hoàn toàn không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hơi nước nóng 100°C của chúng tôi tiêu diệt 99,9% mạt giường, vi khuẩn và nấm mốc. Đây là phương pháp hiệu quả nhất được WHO khuyến nghị để diệt mạt giường.",
            },
          },
          {
            "@type": "Question",
            name: "Giặt nệm có làm hỏng lò xo không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Không. Công nghệ phun hơi nước và hút ngược của chúng tôi chỉ làm sạch bề mặt và phần vỏ nệm mà không thấm sâu vào lõi lò xo, đảm bảo kết cấu nệm nguyên vẹn.",
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
  { type: "Nệm đơn (0,9m × 2m)", price: "200.000đ – 250.000đ" },
  { type: "Nệm đôi (1,2m × 2m)", price: "280.000đ – 330.000đ" },
  { type: "Nệm đôi lớn (1,6m × 2m)", price: "330.000đ – 380.000đ" },
  { type: "Nệm king size (1,8m × 2m)", price: "400.000đ – 500.000đ" },
  { type: "Gối (mỗi cái)", price: "50.000đ – 80.000đ" },
];

const WARNING_SIGNS = [
  "Ngủ dậy hay hắt hơi, ngứa mắt, chảy nước mũi",
  "Da bị nổi mẩn đỏ hoặc ngứa vào buổi sáng",
  "Nệm có mùi hôi hoặc ẩm mốc khó chịu",
  "Trẻ nhỏ hay quấy khóc, ngủ không ngon giấc",
  "Nệm chưa được giặt hơn 6 tháng",
  "Nhà có thú cưng hay ở gần khu vực ẩm ướt",
];

const PROCESS_STEPS = [
  { step: "01", title: "Kiểm tra & phân loại nệm", desc: "Xác định loại nệm (lò xo, bông, latex), mức độ bẩn và các vết ố để lên phương án xử lý phù hợp." },
  { step: "02", title: "Hút bụi 3 lớp siêu sâu", desc: "Dùng máy hút bụi công suất cao hút sạch bụi mịn, lông thú, vảy da chết và bào tử nấm mốc trong nệm." },
  { step: "03", title: "Phun enzyme khử khuẩn", desc: "Phun dung dịch enzyme sinh học thân thiện môi trường lên toàn bộ bề mặt nệm, diệt khuẩn và phân giải vết bẩn hữu cơ." },
  { step: "04", title: "Giặt bằng hơi nước nóng 100°C", desc: "Hơi nước nóng 100°C kết hợp máy hút ngược làm sạch sâu và tiêu diệt 99,9% mạt giường, vi khuẩn, nấm mốc." },
  { step: "05", title: "Sấy khô & khử mùi", desc: "Sấy khô bằng máy thổi nhiệt, phun nước hoa tự nhiên. Bàn giao nệm thơm tho, sạch sẽ ngay trong ngày." },
];

const REVIEWS = [
  {
    name: "Chị Minh – Cẩm Lệ",
    rating: 5,
    text: "Con mình hay bị dị ứng mà không biết tại sao, sau khi giặt nệm tại CleanPro VN thì hết hẳn. Kỹ thuật viên làm rất nhanh và sạch, nệm thơm như mới.",
  },
  {
    name: "Anh Dũng – Sơn Trà",
    rating: 5,
    text: "Nhà có 3 cái nệm, gọi CleanPro ra giặt hết chỉ tốn hơn 900k. So với chất lượng thì rất xứng đáng. Đặc biệt mùi hôi của thú cưng đã biến mất hoàn toàn.",
  },
  {
    name: "Chị Thu – Liên Chiểu",
    rating: 5,
    text: "Dịch vụ đúng giờ, làm việc chuyên nghiệp. Cán bộ kỹ thuật đi bao giày vào nhà, cẩn thận với đồ đạc. Sẽ đặt lịch định kỳ 6 tháng/lần.",
  },
];

const FAQ_LIST = [
  {
    q: "Giặt nệm tại Đà Nẵng giá bao nhiêu?",
    a: "Giá giặt nệm tại CleanPro VN từ 200.000đ – 500.000đ tùy kích thước: nệm đơn từ 200k, nệm đôi từ 300k, nệm king size từ 450k. Báo giá miễn phí qua 096 9135 304.",
  },
  {
    q: "Giặt nệm tại nhà bao lâu thì khô?",
    a: "Sau khi giặt, nệm thường khô hoàn toàn trong 4–6 tiếng. CleanPro VN sử dụng máy sấy nhiệt chuyên dụng giúp rút ngắn thời gian. Nếu đặt lịch buổi sáng, bạn có thể dùng nệm tối hôm đó.",
  },
  {
    q: "Mạt giường có thể bị tiêu diệt hoàn toàn không?",
    a: "Hơi nước nóng 100°C tiêu diệt 99,9% mạt giường, vi khuẩn và nấm mốc. Đây là phương pháp hiệu quả nhất được WHO khuyến nghị. Giặt định kỳ 6 tháng/lần để duy trì hiệu quả.",
  },
  {
    q: "Giặt nệm có làm hỏng lò xo không?",
    a: "Không. Công nghệ phun hơi và hút ngược chỉ làm sạch bề mặt và phần vỏ nệm, không thấm sâu vào lõi lò xo. Kết cấu nệm hoàn toàn nguyên vẹn sau khi giặt.",
  },
  {
    q: "Có giặt nệm trẻ em an toàn không?",
    a: "Có. Chúng tôi sử dụng enzyme sinh học 100% an toàn, không chứa chất độc hại. Hoàn toàn phù hợp cho nệm trẻ sơ sinh và trẻ nhỏ.",
  },
];

export default function GiatNemClient() {
  return (
    <ServicePageLayout breadcrumbs={[{ label: "Giặt Nệm Đà Nẵng" }]}>
      <GiatNemSchema />

      {/* HERO - dùng shared animated component */}
      <ServiceHero
        titlePart1="Giặt Nệm"
        titleHighlight="Đà Nẵng"
        titlePart2="Tận Nơi"
        description="Chuyên giặt nệm lò xo, nệm bông, nệm cao su tại nhà tại Đà Nẵng. Diệt 99,9% mạt giường và vi khuẩn bằng hơi nước nóng 100°C – giúp gia đình bạn ngủ ngon và khoẻ mạnh hơn."
        badges={["Diệt mạt giường 99,9%", "Nệm khô trong ngày", "Không thấm ướt lõi nệm"]}
        theme="indigo"
        callBtnId="nem-hero-call-btn"
      />

      {/* NỘI DUNG */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 min-w-0">

              <AnimatedSection variant="fade-up">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Dịch Vụ Giặt Nệm Tận Nơi Tại Đà Nẵng
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <strong>Giặt nệm Đà Nẵng</strong> tại CleanPro VN là giải pháp vệ sinh nệm
                  chuyên nghiệp, an toàn và tiện lợi nhất cho các gia đình tại Đà Nẵng.
                  Chúng tôi sử dụng công nghệ phun hơi nước nóng kết hợp máy hút chuyên dụng
                  để làm sạch sâu bề mặt nệm mà không làm ướt phần lõi bên trong.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Theo nghiên cứu của Đại học Manchester (UK), một chiếc nệm 10 năm tuổi có thể
                  chứa tới <strong>10 triệu con mạt giường</strong>. Phân và xác của mạt giường
                  là nguyên nhân hàng đầu gây viêm mũi dị ứng, hen suyễn, và dị ứng da.
                </p>
              </AnimatedSection>

              {/* Warning signs */}
              <AnimatedSection variant="slide-left" delay={0.1}>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-amber-800">Dấu Hiệu Nệm Cần Giặt Ngay</h3>
                  </div>
                  <AnimatedSection stagger>
                    <ul className="space-y-2">
                      {WARNING_SIGNS.map((s) => (
                        <AnimatedItem key={s} variant="fade-up">
                          <li className="flex items-start gap-2 text-amber-800 text-sm">
                            <span className="text-amber-500 mt-0.5">⚠️</span>
                            {s}
                          </li>
                        </AnimatedItem>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Các Loại Nệm Chúng Tôi Giặt
                </h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-3 mb-8">
                {[
                  ["🛏️ Nệm lò xo túi / lò xo liên kết", "Làm sạch bề mặt không thấm ướt phần lò xo, giữ nguyên kết cấu."],
                  ["🛏️ Nệm bông / nệm polyester", "Hút sạch bụi sâu, diệt khuẩn, khử mùi hôi ẩm."],
                  ["🛏️ Nệm cao su (latex)", "Làm sạch nhẹ nhàng bằng enzyme, không làm hỏng cấu trúc cao su tự nhiên."],
                  ["🛏️ Nệm foam / nệm visco", "Phương pháp đặc biệt kiểm soát độ ẩm, tránh làm biến dạng foam."],
                  ["🛏️ Nệm trẻ em, nệm cũi", "Ưu tiên hoá chất an toàn sinh học 100%, không mùi, không kích ứng."],
                ].map(([t, d]) => (
                  <AnimatedItem key={t as string} variant="slide-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-800">{t as string}</span>
                        <span className="text-slate-500 text-sm"> – {d as string}</span>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Process steps */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                  Quy Trình Giặt Nệm 5 Bước Chuẩn Y Tế
                </h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-5 mb-10">
                {PROCESS_STEPS.map((s) => (
                  <AnimatedItem key={s.step} variant="fade-up">
                    <div className="flex gap-4 items-start">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-white font-black text-sm flex items-center justify-center shadow-md"
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

              {/* CTA mid */}
              <AnimatedSection variant="scale">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-600 text-white text-center mb-10">
                  <p className="font-bold text-lg mb-2">Đặt Lịch Giặt Nệm – Phục Vụ Trong Ngày</p>
                  <p className="text-white/80 text-sm mb-4">Gọi trước 10:00, có mặt trong buổi chiều. Cam kết nệm khô trước 20:00.</p>
                  <motion.a
                    href="tel:+84969135304"
                    id="nem-mid-cta-btn"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-700 font-bold text-sm"
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Khách Hàng Nói Gì Về Dịch Vụ Giặt Nệm?
                </h3>
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
                      <p className="text-slate-600 text-sm leading-relaxed mb-3 italic">
                        &ldquo;{r.text}&rdquo;
                      </p>
                      <p className="text-xs font-bold text-teal-700">{r.name}</p>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                  Câu Hỏi Thường Gặp Về Giặt Nệm Đà Nẵng
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
                    { href: "/giat-sofa-da-nang", label: "🛋️ Giặt Sofa Đà Nẵng" },
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

            {/* Sidebar – fix: không dùng sticky trên mobile, chỉ sticky trên lg */}
            <aside className="space-y-6 lg:col-span-1">
              <AnimatedSection variant="slide-right" delay={0.3} className="rounded-2xl border border-slate-200 overflow-hidden lg:sticky lg:top-24">
                <div className="bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-4">
                  <h3 className="text-white font-bold text-base">Bảng Giá Giặt Nệm</h3>
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
                    id="nem-sidebar-call-btn"
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

              <AnimatedSection variant="slide-right" delay={0.45} className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Cam Kết Của Chúng Tôi</h4>
                <ul className="space-y-2">
                  {[
                    "✅ Diệt 99,9% mạt giường",
                    "✅ Nệm khô trước khi bàn giao",
                    "✅ Hoá chất an toàn cho trẻ em",
                    "✅ Không làm hỏng kết cấu nệm",
                  ].map((c) => (
                    <li key={c} className="text-indigo-800 text-sm">{c}</li>
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
