"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Clock,
  Ban,
  Handshake,
  Scale,
  RefreshCw,
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

/* ─── Dữ liệu ─── */
const SERVICES_LIST = [
  { icon: "🛋️", name: "Giặt Sofa Vải / Nỉ / Da", desc: "Mọi chất liệu sofa, kể cả da bò và da công nghiệp" },
  { icon: "🛏️", name: "Vệ Sinh Nệm Lò Xo / Foam", desc: "Nệm lò xo, nệm memory foam, nệm bông ép, nệm cao su" },
  { icon: "💺", name: "Giặt Ghế Văn Phòng", desc: "Ghế lưới, ghế da, ghế nỉ, ghế gaming văn phòng" },
  { icon: "🚗", name: "Vệ Sinh Ghế Ô Tô", desc: "Ghế da, ghế nỉ nội thất ô tô mọi dòng xe" },
];

const CUSTOMER_OBLIGATIONS = [
  "Cung cấp thông tin chính xác khi đặt lịch (họ tên, số điện thoại, địa chỉ, loại dịch vụ).",
  "Đảm bảo người có mặt tại địa điểm để tiếp nhận và bàn giao dịch vụ đúng giờ hẹn.",
  "Thông báo trước ít nhất 2 giờ nếu cần dời lịch hoặc hủy lịch hẹn.",
  "Mô tả trung thực tình trạng sản phẩm (vết bẩn đặc biệt, hư hỏng sẵn có) trước khi dịch vụ bắt đầu.",
  "Thanh toán đầy đủ theo báo giá đã thỏa thuận sau khi hoàn tất dịch vụ.",
];

const COMPANY_OBLIGATIONS = [
  "Thực hiện dịch vụ đúng loại, đúng giờ hẹn đã xác nhận với khách hàng.",
  "Sử dụng hóa chất vệ sinh an toàn, được kiểm định, không gây hại sức khỏe con người và vật nuôi.",
  "Kỹ thuật viên mặc đồng phục, có thể nhận dạng và mang theo thiết bị đầy đủ.",
  "Bảo mật thông tin cá nhân khách hàng theo Chính sách Bảo mật của CleanPro VN.",
  "Xử lý khiếu nại trong vòng 24–48 giờ và cam kết làm lại hoặc hoàn tiền theo chính sách.",
];

const PROHIBITED_ACTS = [
  "Yêu cầu kỹ thuật viên thực hiện dịch vụ ngoài phạm vi đã đặt mà không thỏa thuận thêm.",
  "Cung cấp thông tin giả mạo nhằm mục đích gian lận hoặc trục lợi chính sách hoàn tiền.",
  "Quay phim, chụp ảnh nhân viên mà không có sự đồng ý nhằm mục đích bôi nhọ.",
  "Có hành vi đe dọa, xúc phạm hoặc cản trở nhân viên trong quá trình thực hiện công việc.",
];

const LIMITATION_CASES = [
  { icon: "🐾", title: "Hư hỏng do vật nuôi / trẻ em", desc: "Trách nhiệm của CleanPro VN không bao gồm thiệt hại xảy ra sau thời điểm bàn giao dịch vụ." },
  { icon: "🧵", title: "Vật liệu kém chất lượng sẵn có", desc: "Da bong tróc, vải mục, foam đã hỏng từ trước – không thuộc phạm vi bảo đảm chất lượng." },
  { icon: "⚡", title: "Sự kiện bất khả kháng", desc: "Thiên tai, dịch bệnh, mất điện diện rộng hoặc các sự kiện nằm ngoài tầm kiểm soát hợp lý." },
  { icon: "📝", title: "Thông tin sai lệch từ khách hàng", desc: "Nếu khách cung cấp sai địa chỉ, loại dịch vụ khiến kỹ thuật viên không thể thực hiện đúng." },
];

const PAYMENT_INFO = [
  { icon: "💵", method: "Tiền mặt", desc: "Thanh toán trực tiếp cho kỹ thuật viên ngay sau khi hoàn tất dịch vụ." },
  { icon: "🏦", method: "Chuyển khoản", desc: "Chuyển khoản ngân hàng theo thông tin được cung cấp trước khi hoặc sau dịch vụ." },
  { icon: "📱", method: "Ví điện tử", desc: "Momo, ZaloPay, VNPay – thanh toán nhanh qua mã QR của kỹ thuật viên." },
];

/* ─── Component ─── */
export default function DieuKhoanClient() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">

        {/* Hero */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "linear-gradient(135deg,#1e1b4b 0%,#0f766e 100%)" }}
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <Scale className="w-4 h-4" />
              Pháp Lý & Cam Kết
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight"
            >
              Điều Khoản Dịch Vụ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Các điều khoản này điều chỉnh mối quan hệ giữa CleanPro VN và khách hàng
              khi sử dụng dịch vụ vệ sinh tận nơi tại Đà Nẵng. Vui lòng đọc kỹ trước khi đặt lịch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {[
                { icon: Handshake, text: "Minh bạch & công bằng" },
                { icon: Clock, text: "Cập nhật: 16/11/2026" },
                { icon: ShieldCheck, text: "Tuân thủ pháp luật Việt Nam" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm">
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-800 font-medium">Điều Khoản Dịch Vụ</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">

          {/* Giới thiệu */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border border-indigo-100 bg-indigo-50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Phạm Vi Áp Dụng</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bằng cách đặt lịch dịch vụ tại <strong>CleanPro VN</strong> qua website{" "}
                  <strong>vesinhsachdanang.vn</strong>, điện thoại, Zalo hoặc Facebook, bạn xác nhận
                  đã đọc, hiểu và đồng ý với toàn bộ các điều khoản dưới đây. Điều khoản này áp dụng
                  cho mọi dịch vụ vệ sinh tận nơi tại Đà Nẵng do CleanPro VN cung cấp.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dịch vụ cung cấp */}
          <section aria-labelledby="dichvu-heading">
            <motion.h2
              id="dichvu-heading"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center"
            >
              Dịch Vụ CleanPro VN Cung Cấp
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8"
            >
              Dịch vụ vệ sinh đồ nội thất tận nơi chuyên nghiệp tại Đà Nẵng
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  variants={fadeUp} custom={i * 0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-3 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-teal-200 hover:bg-teal-50/40 transition-colors"
                >
                  <span className="text-3xl flex-shrink-0">{svc.icon}</span>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">{svc.name}</p>
                    <p className="text-slate-500 text-sm">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Nghĩa vụ hai bên */}
          <section aria-labelledby="nghiavu-heading">
            <motion.h2
              id="nghiavu-heading"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center"
            >
              Quyền & Nghĩa Vụ Các Bên
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8"
            >
              Trách nhiệm rõ ràng giúp dịch vụ diễn ra trơn tru và hiệu quả
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Khách hàng */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">KH</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Nghĩa Vụ Khách Hàng</h3>
                </div>
                <ul className="space-y-3">
                  {CUSTOMER_OBLIGATIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CleanPro VN */}
              <motion.div
                variants={fadeUp} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Cam Kết CleanPro VN</h3>
                </div>
                <ul className="space-y-3">
                  {COMPANY_OBLIGATIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Hành vi bị nghiêm cấm */}
          <motion.section
            aria-labelledby="nghiem-cam-heading"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Ban className="w-5 h-5 text-red-600" />
              </div>
              <h2 id="nghiem-cam-heading" className="text-xl font-bold text-slate-900">
                Hành Vi Bị Nghiêm Cấm
              </h2>
            </div>
            <p className="text-slate-600 text-sm mb-5">
              Các hành vi dưới đây vi phạm điều khoản và CleanPro VN có quyền từ chối cung cấp dịch vụ, giữ nguyên phí đã phát sinh:
            </p>
            <ul className="space-y-3">
              {PROHIBITED_ACTS.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp} custom={i * 0.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Thanh toán */}
          <section aria-labelledby="thanhtoan-heading">
            <motion.h2
              id="thanhtoan-heading"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center"
            >
              Thanh Toán & Báo Giá
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8"
            >
              Linh hoạt và minh bạch – không phát sinh phí ẩn
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {PAYMENT_INFO.map((p, i) => (
                <motion.div
                  key={p.method}
                  variants={fadeUp} custom={i * 0.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-md transition-all text-center"
                >
                  <span className="text-3xl block mb-3">{p.icon}</span>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{p.method}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeUp} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-sm text-slate-700 leading-relaxed"
            >
              <strong className="text-amber-700">📌 Lưu ý về báo giá:</strong> Báo giá cuối cùng được xác nhận sau khi kỹ thuật viên
              kiểm tra thực tế tại chỗ. Trường hợp giá thực tế khác với ước tính ban đầu, kỹ thuật viên
              sẽ thông báo và chờ sự đồng ý của khách hàng <strong>trước khi bắt đầu</strong>.
            </motion.div>
          </section>

          {/* Giới hạn trách nhiệm */}
          <section aria-labelledby="gioihan-heading">
            <motion.h2
              id="gioihan-heading"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center"
            >
              Giới Hạn Trách Nhiệm
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8"
            >
              Các trường hợp nằm ngoài phạm vi trách nhiệm của CleanPro VN
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LIMITATION_CASES.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp} custom={i * 0.3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Hủy lịch & Thay đổi */}
          <motion.section
            aria-labelledby="huylich-heading"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <h2 id="huylich-heading" className="text-xl font-bold text-slate-900">
                Chính Sách Hủy Lịch & Thay Đổi Lịch Hẹn
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  time: "Trước 2 giờ",
                  label: "Hủy hoặc dời lịch miễn phí",
                  note: "Thông báo qua điện thoại hoặc Zalo",
                  color: "bg-green-50 border-green-200 text-green-700",
                  badge: "✅ Miễn phí",
                },
                {
                  time: "Dưới 2 giờ",
                  label: "Hủy sát giờ – phí đi lại",
                  note: "Nếu kỹ thuật viên đã xuất phát, phí đi lại có thể áp dụng",
                  color: "bg-amber-50 border-amber-200 text-amber-700",
                  badge: "⚠️ Có thể phát sinh phí",
                },
                {
                  time: "Sau khi KTV đến nơi",
                  label: "Hủy khi kỹ thuật viên đã có mặt",
                  note: "Phí đi lại và công tác phí sẽ được tính theo thỏa thuận",
                  color: "bg-red-50 border-red-200 text-red-700",
                  badge: "❌ Phát sinh phí",
                },
              ].map((t) => (
                <div key={t.label} className={`p-4 rounded-xl border-2 ${t.color}`}>
                  <p className={`text-xs font-bold mb-1 ${t.color.split(" ").pop()}`}>{t.badge}</p>
                  <p className="text-lg font-extrabold text-slate-800 mb-1">{t.time}</p>
                  <p className="text-xs font-semibold text-slate-700 mb-1">{t.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.note}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Chính sách liên quan */}
          <section aria-labelledby="lienquan-heading">
            <motion.h2
              id="lienquan-heading"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl font-extrabold text-slate-900 mb-6 text-center"
            >
              Các Chính Sách Liên Quan
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/chinh-sach-bao-mat",
                  icon: "🔒",
                  title: "Chính Sách Bảo Mật",
                  desc: "Cách CleanPro VN thu thập, sử dụng và bảo vệ dữ liệu cá nhân của bạn theo Nghị định 13/2023/NĐ-CP.",
                  color: "border-indigo-200 hover:border-indigo-400",
                },
                {
                  href: "/chinh-sach-hoan-tien",
                  icon: "💰",
                  title: "Chính Sách Hoàn Tiền",
                  desc: "Chi tiết các trường hợp được hoàn tiền 100%, quy trình yêu cầu và thời hạn xử lý hoàn tiền.",
                  color: "border-teal-200 hover:border-teal-400",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={fadeUp} custom={i * 0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-start gap-4 p-5 rounded-2xl border-2 bg-white transition-all hover:shadow-md ${item.color}`}
                  >
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-2 text-teal-600 text-xs font-semibold">
                        Xem chi tiết <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cập nhật điều khoản */}
          <motion.section
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            aria-labelledby="capnhat-heading"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h2 id="capnhat-heading" className="text-xl font-bold text-slate-900 mb-3">
              📝 Thay Đổi Điều Khoản
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              CleanPro VN có quyền cập nhật Điều Khoản Dịch Vụ này để phù hợp với thay đổi
              pháp luật hoặc quy trình vận hành. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo
              qua <strong>website</strong>, <strong>Zalo</strong> hoặc <strong>Facebook</strong>{" "}
              trước ít nhất <strong>7 ngày</strong>. Việc tiếp tục sử dụng dịch vụ sau thời điểm đó
              đồng nghĩa với việc bạn chấp nhận điều khoản mới.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            aria-labelledby="lienhe-dieu-khoan-heading"
            className="rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#1e1b4b 0%,#0f766e 100%)" }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-white/5" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h2 id="lienhe-dieu-khoan-heading" className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Có Thắc Mắc Về Điều Khoản?
              </h2>
              <p className="text-white/80 mb-7 max-w-lg mx-auto text-base leading-relaxed">
                Liên hệ ngay CleanPro VN để được giải đáp trước khi đặt lịch dịch vụ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+84969135304"
                  id="terms-call-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold shadow-xl"
                >
                  <Phone className="w-4 h-4" />
                  096 9135 304
                </motion.a>
                <motion.a
                  href="mailto:conghaupham147@gmail.com"
                  id="terms-email-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white font-bold border border-white/30 hover:bg-white/25 transition-colors"
                >
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
              Phiên bản 1.0 – Có hiệu lực từ <strong>16/11/2026</strong>. Điều khoản áp dụng cho{" "}
              <strong>CleanPro VN</strong>, Lô 03 Võ Chí Công, Ngũ Hành Sơn, Đà Nẵng.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
