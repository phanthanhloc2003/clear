"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Star, ChevronDown, ArrowRight, Building2 } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceHero from "@/components/ui/ServiceHero";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

function VeSinhGheVanPhongSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang#service",
        name: "Vệ Sinh Ghế Văn Phòng Đà Nẵng",
        description: "Dịch vụ vệ sinh ghế văn phòng, ghế xoay tại doanh nghiệp Đà Nẵng. Không gián đoạn hoạt động, vệ sinh hàng loạt.",
        url: "https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang",
        provider: { "@id": "https://vesinhsachdanang.vn/#business" },
        areaServed: { "@type": "City", name: "Đà Nẵng" },
        offers: { "@type": "Offer", priceCurrency: "VND", priceRange: "50000-200000", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://vesinhsachdanang.vn" },
          { "@type": "ListItem", position: 2, name: "Vệ Sinh Ghế Văn Phòng Đà Nẵng", item: "https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Vệ sinh ghế văn phòng hàng loạt có giá ưu đãi không?", acceptedAnswer: { "@type": "Answer", text: "Có. CleanPro VN áp dụng mức giá ưu đãi cho đơn hàng từ 10 ghế trở lên. Đơn từ 50 ghế sẽ được giảm thêm 15–20%." } },
          { "@type": "Question", name: "Vệ sinh ghế văn phòng có gián đoạn hoạt động không?", acceptedAnswer: { "@type": "Answer", text: "Không. Chúng tôi có thể làm ngoài giờ làm việc (tối, cuối tuần) hoặc theo từng khu vực trong văn phòng." } },
          { "@type": "Question", name: "Ghế văn phòng bao lâu cần vệ sinh một lần?", acceptedAnswer: { "@type": "Answer", text: "Với cường độ sử dụng văn phòng cao, nên vệ sinh ghế 6 tháng/lần." } },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const PRICE_TABLE = [
  { type: "Ghế lưới văn phòng (mỗi chiếc)", price: "60.000đ – 100.000đ" },
  { type: "Ghế da văn phòng (mỗi chiếc)", price: "100.000đ – 150.000đ" },
  { type: "Ghế giám đốc / da cao cấp", price: "150.000đ – 200.000đ" },
  { type: "Ghế phòng họp (10–20 chiếc)", price: "50.000đ – 80.000đ / ghế" },
  { type: "Hợp đồng dài hạn (>50 ghế)", price: "Liên hệ báo giá riêng" },
];

const CHAIR_TYPES = [
  { icon: "🪑", type: "Ghế lưới (mesh)", desc: "Hút bụi khe lưới, khử khuẩn toàn bộ khung và đệm ngồi." },
  { icon: "💼", type: "Ghế da văn phòng", desc: "Lau sạch, dưỡng da và phục hồi màu sắc cho ghế da CEO, giám đốc." },
  { icon: "🪑", type: "Ghế phòng họp", desc: "Vệ sinh nhanh hàng loạt, phù hợp hội trường 20–100 ghế." },
  { icon: "🛋️", type: "Sofa phòng chờ", desc: "Làm sạch sofa tiếp khách, phòng chờ – tạo ấn tượng tốt với đối tác." },
  { icon: "🪑", type: "Ghế nỉ / fabric", desc: "Giặt chuyên sâu, khử mùi hôi ẩm tích tụ lâu ngày." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Khảo sát & lập kế hoạch", desc: "Đến khảo sát số lượng, loại ghế và lên lịch vệ sinh phù hợp với giờ hoạt động của doanh nghiệp." },
  { step: "02", title: "Hút bụi & làm sạch bề mặt", desc: "Hút bụi toàn bộ bề mặt, khe lưới và chân ghế. Lau sạch khung ghế bằng dung dịch chuyên dụng." },
  { step: "03", title: "Xử lý vết bẩn & khử khuẩn", desc: "Phun enzyme diệt khuẩn, xử lý vết mực, cà phê, dầu mỡ trên đệm ghế." },
  { step: "04", title: "Giặt hơi nước hoặc phun hút", desc: "Tuỳ loại ghế: ghế nỉ/vải dùng phun hút; ghế da dùng lau chuyên dụng kết hợp hơi nước nhẹ." },
  { step: "05", title: "Sấy khô & kiểm tra hoàn thiện", desc: "Sấy khô nhanh bằng máy thổi nhiệt. Kiểm tra từng chiếc và bàn giao theo biên bản." },
];

const REVIEWS = [
  { name: "Anh Hùng – Giám đốc Công ty XD Hải Châu", rating: 5, text: "Văn phòng 40 nhân viên, 50 ghế lưới. CleanPro làm ngoài giờ cuối tuần, thứ 2 đến mọi người ngạc nhiên vì ghế sạch bóng. Giá rất hợp lý với hợp đồng dài hạn." },
  { name: "Chị Lan – Trưởng phòng HC Công ty Logistic Sơn Trà", rating: 5, text: "Phòng họp có 30 ghế da bị ố vàng và có mùi. Sau khi CleanPro vệ sinh, ghế sạch và thơm hẳn. Sếp khen phòng họp trông chuyên nghiệp hơn." },
  { name: "Anh Minh – Chủ chuỗi Cafe Ngũ Hành Sơn", rating: 5, text: "3 cơ sở, mỗi cơ sở khoảng 40 ghế sofa tiếp khách. CleanPro nhận hợp đồng làm theo quý, giá ưu đãi, chất lượng ổn định. Rất hài lòng." },
];

const FAQ_LIST = [
  { q: "Vệ sinh ghế văn phòng hàng loạt có giá ưu đãi không?", a: "Có. CleanPro VN áp dụng giảm 10% cho đơn từ 10–49 ghế và giảm 20% cho đơn từ 50 ghế trở lên. Liên hệ 096 9135 304 để nhận báo giá hợp đồng." },
  { q: "Vệ sinh ghế văn phòng có gián đoạn hoạt động không?", a: "Không. Chúng tôi có thể làm ngoài giờ làm việc (tối, cuối tuần) hoặc theo từng khu vực trong văn phòng. Nhân viên vẫn làm việc bình thường." },
  { q: "Ghế văn phòng bao lâu cần vệ sinh một lần?", a: "Với cường độ sử dụng văn phòng cao, nên vệ sinh 6 tháng/lần. Văn phòng nhiều nhân viên hoặc có thực phẩm nên vệ sinh 3–4 tháng/lần." },
  { q: "CleanPro VN có xuất hoá đơn VAT không?", a: "Có. CleanPro VN xuất hoá đơn VAT đầy đủ theo yêu cầu của doanh nghiệp, hỗ trợ quyết toán thuế và chi phí hoạt động." },
  { q: "Có thể vệ sinh ghế tại coworking space, khách sạn, nhà hàng không?", a: "Có. Chúng tôi nhận vệ sinh ghế cho mọi loại hình doanh nghiệp: văn phòng, khách sạn, nhà hàng, phòng chờ sân bay, bệnh viện, trường học tại Đà Nẵng." },
];

export default function VeSinhGheVanPhongClient() {
  return (
    <ServicePageLayout breadcrumbs={[{ label: "Vệ Sinh Ghế Văn Phòng Đà Nẵng" }]}>
      <VeSinhGheVanPhongSchema />

      <ServiceHero
        titlePart1="Vệ Sinh Ghế"
        titleHighlight="Văn Phòng"
        titlePart2="Đà Nẵng"
        description="Dịch vụ vệ sinh ghế văn phòng, ghế xoay, sofa tiếp khách tại doanh nghiệp Đà Nẵng. Không gián đoạn hoạt động – vệ sinh hàng loạt tiết kiệm chi phí – cam kết không gian làm việc sạch và chuyên nghiệp."
        badges={["Không gián đoạn hoạt động", "Vệ sinh ngoài giờ theo yêu cầu", "Ưu đãi hợp đồng dài hạn"]}
        theme="emerald"
        callBtnId="vanphong-hero-call-btn"
        badgeLabel="Dịch Vụ Doanh Nghiệp – Đà Nẵng"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 min-w-0">

              <AnimatedSection variant="fade-up">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Vệ Sinh Ghế Văn Phòng Chuyên Nghiệp Tại Đà Nẵng
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <strong>Vệ sinh ghế văn phòng tại Đà Nẵng</strong> tại CleanPro VN là dịch vụ được thiết kế đặc biệt cho các doanh nghiệp, công ty và chuỗi cơ sở kinh doanh. Chúng tôi hiểu rằng môi trường làm việc sạch sẽ không chỉ bảo vệ sức khoẻ nhân viên mà còn tạo ấn tượng chuyên nghiệp với khách hàng và đối tác.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Theo nghiên cứu của Đại học Arizona (Mỹ), mặt bàn làm việc và ghế văn phòng có thể chứa tới <strong>400 lần vi khuẩn nhiều hơn bồn cầu</strong>. Ghế ngồi 8 tiếng/ngày tích tụ mồ hôi, tế bào da chết và vi khuẩn rất nhanh.
                </p>
              </AnimatedSection>

              {/* Loại ghế */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-5">Các Loại Ghế Văn Phòng Chúng Tôi Vệ Sinh</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {CHAIR_TYPES.map((item) => (
                  <AnimatedItem key={item.type} variant="scale">
                    <motion.div
                      className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100"
                      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(52,211,153,0.15)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.type}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Lợi ích */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-5">Lợi Ích Khi Vệ Sinh Ghế Văn Phòng Định Kỳ</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Giảm tỷ lệ nghỉ ốm của nhân viên",
                  "Tạo môi trường làm việc tích cực",
                  "Ấn tượng chuyên nghiệp với khách hàng",
                  "Kéo dài tuổi thọ ghế văn phòng",
                  "Khử mùi khó chịu trong không gian kín",
                  "Tuân thủ tiêu chuẩn vệ sinh doanh nghiệp",
                ].map((b) => (
                  <AnimatedItem key={b} variant="fade-up">
                    <div className="flex items-center gap-2.5 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {b}
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Quy trình */}
              <AnimatedSection variant="fade-up">
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Quy Trình Vệ Sinh Ghế Văn Phòng 5 Bước</h3>
              </AnimatedSection>

              <AnimatedSection stagger className="space-y-5 mb-10">
                {PROCESS_STEPS.map((s) => (
                  <AnimatedItem key={s.step} variant="fade-up">
                    <div className="flex gap-4 items-start">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-black text-sm flex items-center justify-center shadow-md"
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

              {/* Contract section */}
              <AnimatedSection variant="slide-left">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6 mb-10">
                  <h3 className="font-bold text-emerald-900 text-lg mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Hợp Đồng Dài Hạn – Ưu Đãi Đặc Biệt
                  </h3>
                  <p className="text-emerald-800 text-sm leading-relaxed mb-4">Doanh nghiệp ký hợp đồng vệ sinh định kỳ sẽ được hưởng:</p>
                  <ul className="space-y-2 mb-5">
                    {[
                      "🎯 Giảm 10% cho đơn từ 10–49 ghế",
                      "🎯 Giảm 20% cho đơn từ 50 ghế trở lên",
                      "🎯 Ưu tiên đặt lịch vào giờ cao điểm",
                      "🎯 Hỗ trợ khẩn cấp 24/7 cho đối tác",
                      "🎯 Xuất hoá đơn VAT đầy đủ",
                    ].map((item) => (
                      <li key={item} className="text-emerald-800 text-sm">{item}</li>
                    ))}
                  </ul>
                  <motion.a
                    href="tel:+84969135304"
                    id="vanphong-contract-btn"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    Liên hệ ký hợp đồng
                  </motion.a>
                </div>
              </AnimatedSection>

              {/* CTA mid */}
              <AnimatedSection variant="scale">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center mb-10">
                  <p className="font-bold text-lg mb-2">Đặt Lịch Vệ Sinh Văn Phòng</p>
                  <p className="text-white/80 text-sm mb-4">Làm ngoài giờ – không ảnh hưởng hoạt động. Xuất hoá đơn VAT.</p>
                  <motion.a
                    href="tel:+84969135304"
                    id="vanphong-mid-cta-btn"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-bold text-sm"
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Doanh Nghiệp Đà Nẵng Nói Gì?</h3>
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
                    { href: "/ve-sinh-ghe-o-to-da-nang", label: "🚗 Vệ Sinh Ghế Ô Tô" },
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
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-4">
                  <h3 className="text-white font-bold text-base">Bảng Giá Ghế Văn Phòng</h3>
                  <p className="text-white/70 text-xs mt-1">Cập nhật 09/2026 – Chưa gồm VAT</p>
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
                    id="vanphong-sidebar-call-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-lg"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(52,211,153,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="w-4 h-4" />
                    Gọi báo giá miễn phí
                  </motion.a>
                  <p className="text-center text-xs text-slate-500">☎ 096 9135 304 – Phục vụ 7:00 – 20:00 mỗi ngày</p>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="slide-right" delay={0.45} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                <h4 className="font-bold text-emerald-800 mb-3">Cam Kết Của Chúng Tôi</h4>
                <ul className="space-y-2">
                  {[
                    "✅ Không gián đoạn hoạt động VP",
                    "✅ Xuất hoá đơn VAT đầy đủ",
                    "✅ Bảo hành kết quả 7 ngày",
                    "✅ Hợp đồng dài hạn – giá ưu đãi",
                  ].map((c) => (
                    <li key={c} className="text-emerald-800 text-sm">{c}</li>
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
