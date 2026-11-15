"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Star,
  FileText,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const GUARANTEED_SERVICES = [
  { icon: "🛋️", name: "Giặt Sofa Vải / Nỉ", desc: "Sofa vải, sofa nỉ, sofa bố – tất cả chất liệu vải" },
  { icon: "🛋️", name: "Giặt Sofa Da / Giả Da", desc: "Sofa da bò, sofa da PU, sofa da công nghiệp" },
  { icon: "🛏️", name: "Vệ Sinh Nệm Lò Xo", desc: "Nệm lò xo, nệm túi, nệm Pocketed Spring" },
  { icon: "🛏️", name: "Vệ Sinh Nệm Bông / Foam", desc: "Nệm bông ép, nệm memory foam, nệm cao su" },
  { icon: "💺", name: "Giặt Ghế Văn Phòng", desc: "Ghế lưới, ghế da, ghế nỉ văn phòng" },
  { icon: "🚗", name: "Vệ Sinh Ghế Ô Tô", desc: "Ghế da, ghế nỉ nội thất ô tô các loại" },
];

const REFUND_CASES = [
  {
    color: "teal",
    icon: CheckCircle,
    title: "Hoàn 100% nếu kết quả không đạt",
    desc: "Sau khi vệ sinh, nếu sản phẩm vẫn còn vết bẩn cứng đầu hoặc mùi hôi không được xử lý như đã cam kết – chúng tôi hoàn trả toàn bộ tiền dịch vụ.",
    items: [
      "Vết ố, vết bẩn không được loại bỏ dù đã xử lý",
      "Mùi hôi, mùi ẩm mốc vẫn còn sau khi vệ sinh",
      "Chất lượng thực tế khác xa so với cam kết ban đầu",
    ],
  },
  {
    color: "blue",
    icon: RefreshCw,
    title: "Làm lại miễn phí trước khi hoàn tiền",
    desc: "CleanPro VN ưu tiên cử kỹ thuật viên đến làm lại hoàn toàn miễn phí trong vòng 24–48 giờ. Nếu lần 2 vẫn không đạt, hoàn tiền ngay lập tức.",
    items: [
      "Cử kỹ thuật viên đến làm lại trong 24–48h",
      "Không tính thêm bất kỳ phí nào",
      "Vẫn không đạt → hoàn tiền ngay không điều kiện",
    ],
  },
  {
    color: "amber",
    icon: AlertCircle,
    title: "Hoàn tiền do lỗi vận hành",
    desc: "Trường hợp nhân viên đến trễ hơn 60 phút so với lịch hẹn mà không có thông báo trước, hoặc hủy lịch đột ngột – khách hàng được hoàn 100%.",
    items: [
      "Nhân viên đến trễ > 60 phút không báo trước",
      "Hủy lịch đột ngột không có lý do chính đáng",
      "Nhân viên không đủ thiết bị/dụng cụ cần thiết",
    ],
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Liên hệ ngay", desc: "Gọi hotline 096 9135 304 hoặc nhắn tin Zalo/Facebook trong vòng 24 giờ sau khi nhận bàn giao.", icon: Phone },
  { step: "02", title: "Mô tả vấn đề", desc: "Chụp ảnh / quay video vết bẩn còn lại và mô tả vấn đề cụ thể để CleanPro VN ghi nhận.", icon: FileText },
  { step: "03", title: "Xác nhận & xử lý", desc: "Chúng tôi xác nhận trong 2–4 giờ và sắp xếp làm lại hoặc hoàn tiền trong vòng 1–3 ngày làm việc.", icon: ShieldCheck },
  { step: "04", title: "Nhận hoàn tiền", desc: "Tiền được chuyển khoản ngân hàng hoặc hoàn tiền mặt trong vòng 1–3 ngày làm việc sau khi xác nhận.", icon: CheckCircle },
];

const NOT_COVERED = [
  "Hư hỏng do đặc tính vật liệu (da bong tróc sẵn, vải cũ mục, v.v.)",
  "Vết bẩn do khách hàng gây ra sau khi bàn giao",
  "Yêu cầu hoàn tiền sau 72 giờ kể từ thời điểm bàn giao",
  "Hủy dịch vụ sau khi kỹ thuật viên đã đến địa điểm",
  "Thay đổi yêu cầu dịch vụ so với ban đầu sau khi hoàn thành",
  "Hư hỏng do vật nuôi, trẻ em, hoặc sự cố bất khả kháng",
];

export default function ChinhSachHoanTienClient() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "linear-gradient(135deg,#0f766e 0%,#0369a1 100%)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
              Cam Kết Chất Lượng
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Chính Sách Hoàn Tiền
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              CleanPro VN cam kết hoàn tiền 100% nếu dịch vụ vệ sinh nệm, sofa không đạt kết quả như đã thỏa thuận.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                Hoàn tiền 100% không điều kiện
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                Xử lý trong 1–3 ngày làm việc
              </div>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-800 font-medium">Chính Sách Hoàn Tiền</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">

          {/* Intro */}
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Chính sách này áp dụng cho tất cả dịch vụ vệ sinh đồ nội thất tại{" "}
            <strong className="text-teal-700">CleanPro VN</strong>. Chúng tôi đặt sự hài lòng của bạn lên hàng đầu.
          </motion.p>

          {/* Dịch vụ được bảo đảm */}
          <section aria-labelledby="dichvu-heading">
            <motion.h2 id="dichvu-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Dịch Vụ Được Bảo Đảm Chất Lượng
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              Tất cả dịch vụ dưới đây đều được bảo đảm hoàn tiền nếu không đạt yêu cầu
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUARANTEED_SERVICES.map((svc, i) => (
                <motion.div key={svc.name} variants={fadeUp} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-teal-200 hover:bg-teal-50/40 transition-colors">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{svc.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{svc.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Các trường hợp hoàn tiền */}
          <section aria-labelledby="truonghop-heading">
            <motion.h2 id="truonghop-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Các Trường Hợp Được Hoàn Tiền
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              CleanPro VN hoàn tiền trong 3 trường hợp cụ thể sau
            </motion.p>
            <div className="space-y-5">
              {REFUND_CASES.map((c, i) => {
                const styles: Record<string, { border: string; bg: string; badge: string; iconColor: string }> = {
                  teal:  { border: "border-teal-200",  bg: "bg-teal-50",  badge: "bg-teal-500",  iconColor: "text-teal-600" },
                  blue:  { border: "border-blue-200",  bg: "bg-blue-50",  badge: "bg-blue-500",  iconColor: "text-blue-600" },
                  amber: { border: "border-amber-200", bg: "bg-amber-50", badge: "bg-amber-500", iconColor: "text-amber-600" },
                };
                const cls = styles[c.color];
                return (
                  <motion.div key={c.title} variants={fadeUp} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`rounded-2xl border-2 ${cls.border} ${cls.bg} p-6 sm:p-7`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full ${cls.badge} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <c.icon className={`w-5 h-5 ${cls.iconColor}`} />
                          <h3 className="font-bold text-slate-900 text-base sm:text-lg">{c.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{c.desc}</p>
                        <ul className="space-y-1.5">
                          {c.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Quy trình */}
          <section aria-labelledby="quitrinh-heading">
            <motion.h2 id="quitrinh-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Quy Trình Yêu Cầu Hoàn Tiền
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-10">
              Đơn giản – Nhanh chóng – Minh bạch
            </motion.p>
            <div className="relative">
              <div className="hidden sm:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 mx-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div key={step.step} variants={fadeUp} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-lg mb-4 relative z-10">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <p className="text-xs font-bold text-teal-600 mb-1 tracking-widest uppercase">Bước {step.step}</p>
                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Không áp dụng */}
          <motion.section aria-labelledby="khong-hoan-heading"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <h2 id="khong-hoan-heading" className="text-xl font-bold text-slate-900">
                Các Trường Hợp Không Áp Dụng Hoàn Tiền
              </h2>
            </div>
            <p className="text-slate-600 text-sm mb-5">
              Để đảm bảo công bằng cho cả hai bên, chính sách hoàn tiền không áp dụng trong các trường hợp sau:
            </p>
            <ul className="space-y-3">
              {NOT_COVERED.map((item, i) => (
                <motion.li key={item} variants={fadeUp} custom={i * 0.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Thời hạn */}
          <motion.section aria-labelledby="thoihan-heading"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <h2 id="thoihan-heading" className="text-xl font-bold text-slate-900">Thời Hạn & Hình Thức Hoàn Tiền</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { time: "72 giờ", label: "Thời hạn tối đa yêu cầu hoàn tiền sau bàn giao", icon: "⏰" },
                { time: "2–4 giờ", label: "Thời gian CleanPro VN xác nhận yêu cầu", icon: "✅" },
                { time: "1–3 ngày", label: "Thời gian hoàn tiền sau khi xác nhận", icon: "💰" },
              ].map((t) => (
                <div key={t.label} className="text-center p-4 bg-white/60 rounded-xl border border-amber-100">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <p className="text-2xl font-extrabold text-amber-700 mb-1">{t.time}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.label}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🏦", title: "Chuyển khoản ngân hàng", desc: "Hoàn tiền vào tài khoản trong 1–3 ngày làm việc. Áp dụng mọi ngân hàng Việt Nam.", badge: "Phổ biến", badgeColor: "bg-teal-500" },
                { icon: "💵", title: "Tiền mặt trực tiếp", desc: "Nhân viên đến trả tiền mặt tận nơi kết hợp lần làm lại hoặc lịch hẹn thuận tiện.", badge: "Linh hoạt", badgeColor: "bg-blue-500" },
              ].map((m) => (
                <div key={m.title} className="p-5 rounded-xl bg-white border border-slate-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-slate-900 text-sm">{m.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${m.badgeColor}`}>{m.badge}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            aria-labelledby="lienhe-heading"
            className="rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0f766e 0%,#0369a1 100%)" }}>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-white/5" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h2 id="lienhe-heading" className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Cần Hỗ Trợ Ngay?
              </h2>
              <p className="text-white/80 mb-7 max-w-lg mx-auto text-base leading-relaxed">
                Đội ngũ CleanPro VN luôn sẵn sàng lắng nghe và xử lý yêu cầu của bạn 7 ngày/tuần.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a href="tel:+84969135304" id="policy-call-btn"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-700 font-bold shadow-xl">
                  <Phone className="w-4 h-4" />
                  096 9135 304
                </motion.a>
                <motion.a href="mailto:conghaupham147@gmail.com" id="policy-email-btn"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white font-bold border border-white/30 hover:bg-white/25 transition-colors">
                  <Mail className="w-4 h-4" />
                  conghaupham147@gmail.com
                </motion.a>
              </div>
              <p className="text-white/60 text-xs mt-5">
                Hotline hoạt động 7:00 – 20:00 mỗi ngày, kể cả Chủ Nhật và ngày lễ.
              </p>
            </div>
          </motion.section>

          {/* Ngày hiệu lực */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Chính sách có hiệu lực từ <strong>01/09/2026</strong>. CleanPro VN có quyền cập nhật và sẽ thông báo trước ít nhất 7 ngày.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
