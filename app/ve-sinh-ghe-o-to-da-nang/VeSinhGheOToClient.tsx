"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Star, ChevronDown, ArrowRight } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceHero from "@/components/ui/ServiceHero";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

function VeSinhGheOToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang#service",
        name: "Vệ Sinh Ghế Ô Tô Đà Nẵng Tận Nơi",
        description: "Dịch vụ vệ sinh nội thất ghế ô tô tận nơi tại Đà Nẵng. Làm sạch ghế da, ghế vải, khử mùi toàn bộ nội thất xe.",
        url: "https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang",
        provider: { "@id": "https://vesinhsachdanang.vn/#business" },
        areaServed: { "@type": "City", name: "Đà Nẵng" },
        offers: { "@type": "Offer", priceCurrency: "VND", priceRange: "300000-800000", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://vesinhsachdanang.vn" },
          { "@type": "ListItem", position: 2, name: "Vệ Sinh Ghế Ô Tô Đà Nẵng", item: "https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Vệ sinh ghế ô tô tại Đà Nẵng giá bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "Giá vệ sinh ghế ô tô tại CleanPro VN từ 300.000đ – 800.000đ tùy loại xe và mức độ bẩn." } },
          { "@type": "Question", name: "Có cần mang xe đến xưởng không?", acceptedAnswer: { "@type": "Answer", text: "Không. CleanPro VN đến tận nơi – tại nhà riêng, chung cư hoặc bãi đỗ xe." } },
          { "@type": "Question", name: "Vệ sinh ghế ô tô mất bao lâu?", acceptedAnswer: { "@type": "Answer", text: "Từ 2–4 giờ tùy số chỗ và mức độ bẩn. Ghế cần thêm 1–2 giờ để khô hoàn toàn." } },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const PRICE_TABLE = [
  { type: "Xe 4 chỗ (sedan, hatchback)", price: "300.000đ – 450.000đ" },
  { type: "Xe 7 chỗ (MPV, SUV)", price: "450.000đ – 600.000đ" },
  { type: "Xe bán tải / pick-up", price: "400.000đ – 550.000đ" },
  { type: "Xe 16 chỗ / van", price: "600.000đ – 800.000đ" },
  { type: "Phụ thu ghế da (dưỡng da)", price: "+100.000đ – 150.000đ" },
];

const CLEANING_INCLUDES = [
  "Vệ sinh & khử khuẩn toàn bộ mặt ghế da/vải",
  "Làm sạch khe ghế, đường chỉ may",
  "Dưỡng ẩm và phục hồi màu ghế da",
  "Vệ sinh thảm sàn xe",
  "Làm sạch trần xe, vách cửa",
  "Khử mùi bằng máy ozone chuyên dụng",
  "Làm sạch bảng điều khiển, vô-lăng",
  "Kháng nấm mốc 30 ngày",
];

const BENEFITS = [
  { icon: "🦠", title: "Loại bỏ vi khuẩn & nấm mốc", desc: "Ngăn ngừa bệnh hô hấp và dị ứng cho cả gia đình" },
  { icon: "🌬️", title: "Khử mùi triệt để", desc: "Mùi thuốc lá, mùi thức ăn, mùi thú cưng biến mất hoàn toàn" },
  { icon: "🪑", title: "Bảo vệ vật liệu ghế", desc: "Ghế da được dưỡng ẩm, không nứt nẻ theo thời gian" },
  { icon: "💰", title: "Tăng giá trị xe khi bán", desc: "Nội thất sạch đẹp giúp xe bán được giá cao hơn 10–15%" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Kiểm tra & lên phương án", desc: "Đánh giá loại vật liệu ghế (da, vải, alcantara), mức độ ố bẩn và mùi để chọn hoá chất phù hợp." },
  { step: "02", title: "Hút bụi toàn bộ nội thất", desc: "Máy hút bụi công suất lớn hút sạch bụi, cát, vụn thức ăn trong khe ghế, thảm sàn và góc khuất." },
  { step: "03", title: "Xử lý vết bẩn cứng đầu", desc: "Dùng bàn chải mềm và enzyme chuyên dụng để xử lý vết cà phê, kem, mứ, ố vàng trên ghế." },
  { step: "04", title: "Phun hơi nước nóng & hút ngược", desc: "Máy phun hơi nước nóng kết hợp hút sạch dung dịch bẩn ngay lập tức, không để lại vết ẩm." },
  { step: "05", title: "Dưỡng da & khử mùi ozone", desc: "Phủ lớp dưỡng ẩm bảo vệ da, khử mùi thuốc lá, mùi hôi bằng máy phát ozone – sạch 100%." },
];

const REVIEWS = [
  { name: "Anh Phúc – Ngũ Hành Sơn", rating: 5, text: "Xe SUV 7 chỗ có 2 bé nhỏ hay để đồ ăn nên rất bẩn. CleanPro làm sạch hoàn toàn, mùi thức ăn và mùi khói lạnh biến mất. Giờ xe như mới!" },
  { name: "Anh Khoa – Hải Châu", rating: 5, text: "Ghế da của xe đã bị ố vàng và bong tróc nhẹ. Sau khi CleanPro vệ sinh và đánh bóng, màu da phục hồi gần như mới. Giá rất hợp lý." },
  { name: "Chị Ngọc – Thanh Khê", rating: 5, text: "Đặt lịch tối hôm trước, sáng hôm sau là có người đến. Làm rất nhanh, chỉ 2.5 tiếng cho xe 7 chỗ. Nhân viên lịch sự, bảo quản xe cẩn thận." },
];

const FAQ_LIST = [
  { q: "Vệ sinh ghế ô tô tại Đà Nẵng giá bao nhiêu?", a: "Giá từ 300.000đ – 800.000đ tùy loại xe và mức độ bẩn: xe 4 chỗ từ 300k, xe 7 chỗ từ 450k, xe 16 chỗ từ 600k." },
  { q: "Có cần mang xe đến xưởng không?", a: "Không. CleanPro VN đến tận nơi – tại nhà riêng, chung cư hoặc bãi đỗ xe. Bạn chỉ cần để xe tại chỗ và chúng tôi xử lý toàn bộ." },
  { q: "Vệ sinh ghế ô tô mất bao lâu?", a: "Từ 2–4 giờ tùy số chỗ và mức độ bẩn. Ghế cần thêm 1–2 giờ để khô hoàn toàn trước khi ngồi." },
  { q: "Có vệ sinh được ghế alcantara / velvet không?", a: "Có, nhưng cần xử lý đặc biệt bằng máy hơi nhẹ và bàn chải mềm. Hãy thông báo loại vật liệu khi đặt lịch để được tư vấn đúng." },
  { q: "Sau bao lâu nên vệ sinh nội thất ô tô một lần?", a: "Nên vệ sinh nội thất ô tô 3–6 tháng/lần. Gia đình có trẻ nhỏ hoặc thú cưng nên làm mỗi 3 tháng." },
];

export default function VeSinhGheOToClient() {
  return (
    <ServicePageLayout breadcrumbs={[{ label: "Vệ Sinh Ghế Ô Tô Đà Nẵng" }]}>
      <VeSinhGheOToSchema />

      <ServiceHero
        titlePart1="Vệ Sinh Ghế Ô Tô"
        titleHighlight="Đà Nẵng"
        description="Dịch vụ vệ sinh nội thất ghế ô tô tận nơi tại Đà Nẵng – không cần mang xe đến xưởng. Làm sạch ghế da, ghế vải, khử mùi thuốc lá và vi khuẩn, phục hồi nội thất như mới."
        badges={["Không cần mang xe đến xưởng", "Phục vụ tại nhà & bãi đỗ xe", "Khử mùi bằng máy ozone"]}
        theme="teal"
        callBtnId="oto-hero-call-btn"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 min-w-0">

              <AnimatedSection variant="fade-up">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Vệ Sinh Ghế Ô Tô Tận Nơi Tại Đà Nẵng
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <strong>Vệ sinh ghế ô tô tại Đà Nẵng</strong> là dịch vụ đang được hàng trăm chủ xe tại Đà Nẵng tin dùng bởi sự tiện lợi và chuyên nghiệp. CleanPro VN mang thiết bị chuyên dụng đến tận nơi đậu xe của bạn.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Theo khảo sát, vô-lăng ô tô bẩn hơn bồn cầu tới <strong>9 lần</strong>. Ghế ô tô bẩn không chỉ gây mùi khó chịu mà còn tiềm ẩn nguy cơ gây bệnh cho cả gia đình, nhất là trẻ em.
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-5">Dịch Vụ Bao Gồm Những Gì?</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {CLEANING_INCLUDES.map((item) => (
                  <AnimatedItem key={item} variant="fade-up">
                    <div className="flex items-center gap-2.5 text-slate-700 text-sm p-3 rounded-xl bg-slate-50">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {item}
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Tại Sao Nên Vệ Sinh Ghế Ô Tô Định Kỳ?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Vệ sinh nội thất ô tô không chỉ là vấn đề thẩm mỹ mà còn ảnh hưởng trực tiếp đến sức khoẻ và tuổi thọ của xe:
                </p>
              </AnimatedSection>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {BENEFITS.map((item) => (
                  <AnimatedItem key={item.title} variant="scale">
                    <motion.div
                      className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-50 border border-cyan-100"
                      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(6,182,212,0.15)" }}
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

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Quy Trình Vệ Sinh Ghế Ô Tô 5 Bước</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-5 mb-10">
                {PROCESS_STEPS.map((s) => (
                  <AnimatedItem key={s.step} variant="fade-up">
                    <div className="flex gap-4 items-start">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white font-black text-sm flex items-center justify-center shadow-md"
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

              <AnimatedSection variant="scale">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center mb-10">
                  <p className="font-bold text-lg mb-2">Đặt Lịch Vệ Sinh Ô Tô Ngay Hôm Nay</p>
                  <p className="text-white/80 text-sm mb-4">Kỹ thuật viên đến tận nơi trong 2–4 giờ. Hoàn thành trong 1 buổi.</p>
                  <motion.a
                    href="tel:+84969135304"
                    id="oto-mid-cta-btn"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-cyan-700 font-bold text-sm"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    Gọi ngay: 096 9135 304
                  </motion.a>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Khách Hàng Nói Gì?</h3>
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

              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Câu Hỏi Thường Gặp</h3>
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

              <AnimatedSection variant="fade-up" className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Xem thêm các dịch vụ khác</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { href: "/giat-sofa-da-nang", label: "🛋️ Giặt Sofa Đà Nẵng" },
                    { href: "/giat-nem-da-nang", label: "🛏️ Giặt Nệm Đà Nẵng" },
                    { href: "/ve-sinh-ghe-van-phong-da-nang", label: "💺 Ghế Văn Phòng" },
                  ].map((link) => (
                    <motion.div key={link.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Link href={link.href} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-all">
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <aside className="space-y-6 lg:col-span-1">
              <AnimatedSection variant="slide-right" delay={0.3} className="rounded-2xl border border-slate-200 overflow-hidden lg:sticky lg:top-24">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 px-5 py-4">
                  <h3 className="text-white font-bold text-base">Bảng Giá Vệ Sinh Ô Tô</h3>
                  <p className="text-white/70 text-xs mt-1">Cập nhật 09/2026 – Giá trọn gói</p>
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
                    id="oto-sidebar-call-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-sm shadow-lg"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(20,184,166,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="w-4 h-4" />
                    Gọi báo giá miễn phí
                  </motion.a>
                  <p className="text-center text-xs text-slate-500">☎ 096 9135 304 – Phục vụ 7:00 – 20:00 mỗi ngày</p>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="slide-right" delay={0.45} className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                <h4 className="font-bold text-cyan-800 mb-3">Cam Kết Của Chúng Tôi</h4>
                <ul className="space-y-2">
                  {[
                    "✅ Đến tận nơi – không cần lái xe đến",
                    "✅ Khử mùi hoàn toàn bằng ozone",
                    "✅ Không làm xước hay hỏng nội thất",
                    "✅ Bảo hành kết quả 7 ngày",
                  ].map((c) => (
                    <li key={c} className="text-cyan-800 text-sm">{c}</li>
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
