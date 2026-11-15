"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Database,
  Trash2,
  Phone,
  Mail,
  ChevronRight,
  FileText,
  AlertTriangle,
  CheckCircle,
  Globe,
  Clock,
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

/* ─── Dữ liệu thông tin thu thập ─── */
const DATA_COLLECTED = [
  {
    icon: UserCheck,
    title: "Thông tin định danh",
    color: "teal",
    items: [
      "Họ và tên đầy đủ của khách hàng",
      "Số điện thoại liên hệ (Zalo / Hotline)",
      "Địa chỉ nhà / địa điểm cần vệ sinh tại Đà Nẵng",
      "Email (nếu khách hàng cung cấp tự nguyện)",
    ],
  },
  {
    icon: FileText,
    title: "Thông tin dịch vụ",
    color: "blue",
    items: [
      "Loại dịch vụ đặt (giặt sofa, vệ sinh nệm, ghế ô tô...)",
      "Số lượng và chủng loại sản phẩm cần vệ sinh",
      "Lịch hẹn, ngày giờ thực hiện dịch vụ",
      "Ghi chú đặc biệt về tình trạng sản phẩm",
    ],
  },
  {
    icon: Globe,
    title: "Thông tin kỹ thuật",
    color: "violet",
    items: [
      "Địa chỉ IP khi truy cập website (ẩn danh)",
      "Loại thiết bị và trình duyệt sử dụng",
      "Trang đã xem và thời gian truy cập (Google Analytics)",
      "Dữ liệu cookie phiên truy cập (không lưu thông tin cá nhân)",
    ],
  },
];

const DATA_PURPOSES = [
  { icon: "📅", title: "Xác nhận & quản lý lịch hẹn", desc: "Liên hệ xác nhận, nhắc nhở lịch dịch vụ vệ sinh nệm, sofa và thông báo khi kỹ thuật viên đang di chuyển." },
  { icon: "💰", title: "Thanh toán & hóa đơn", desc: "Xuất hóa đơn dịch vụ, xác nhận thanh toán và xử lý yêu cầu hoàn tiền theo chính sách của CleanPro VN." },
  { icon: "🛠️", title: "Hỗ trợ sau dịch vụ", desc: "Liên hệ để xử lý khiếu nại, yêu cầu làm lại và chăm sóc khách hàng sau khi thực hiện dịch vụ." },
  { icon: "📊", title: "Cải thiện chất lượng", desc: "Phân tích ẩn danh để hiểu nhu cầu khách hàng, cải thiện quy trình vệ sinh và nâng cao chất lượng dịch vụ." },
  { icon: "📢", title: "Khuyến mãi & ưu đãi", desc: "Gửi thông tin chương trình giảm giá, ưu đãi đặc biệt về dịch vụ giặt sofa, vệ sinh nệm (chỉ khi khách hàng đồng ý)." },
];

const USER_RIGHTS = [
  { icon: Eye, title: "Quyền truy cập", desc: "Bạn có quyền yêu cầu xem toàn bộ dữ liệu cá nhân mà CleanPro VN đang lưu trữ về bạn." },
  { icon: FileText, title: "Quyền chỉnh sửa", desc: "Yêu cầu cập nhật, bổ sung thông tin nếu dữ liệu không chính xác hoặc đã lỗi thời." },
  { icon: Trash2, title: "Quyền xóa dữ liệu", desc: "Yêu cầu xóa toàn bộ dữ liệu cá nhân, trừ trường hợp cần giữ theo quy định pháp luật." },
  { icon: Lock, title: "Quyền giới hạn xử lý", desc: "Hạn chế việc sử dụng dữ liệu của bạn trong khi chờ xử lý khiếu nại hoặc xem xét yêu cầu." },
  { icon: Shield, title: "Quyền phản đối", desc: "Từ chối nhận tin nhắn tiếp thị, email khuyến mãi hoặc các hình thức liên hệ không mong muốn." },
  { icon: Database, title: "Quyền chuyển dữ liệu", desc: "Yêu cầu nhận bản sao dữ liệu ở định dạng có thể đọc được để chuyển sang dịch vụ khác." },
];

const SECURITY_MEASURES = [
  { icon: "🔒", title: "Mã hóa SSL/TLS", desc: "Toàn bộ dữ liệu truyền tải qua website được mã hóa bằng SSL 256-bit." },
  { icon: "🛡️", title: "Kiểm soát truy cập", desc: "Chỉ nhân viên được ủy quyền mới có thể truy cập dữ liệu khách hàng, với xác thực hai lớp." },
  { icon: "💾", title: "Sao lưu định kỳ", desc: "Dữ liệu được sao lưu tự động và lưu trữ an toàn, chống mất mát do sự cố kỹ thuật." },
  { icon: "🔍", title: "Kiểm tra bảo mật", desc: "Hệ thống được kiểm tra định kỳ để phát hiện và vá các lỗ hổng bảo mật tiềm ẩn." },
];

export default function ChinhSachBaoMatClient() {
  const colorMap: Record<string, { border: string; bg: string; iconBg: string; iconColor: string; bullet: string }> = {
    teal:   { border: "border-teal-200",   bg: "bg-teal-50",   iconBg: "bg-teal-100",   iconColor: "text-teal-600",   bullet: "bg-teal-500" },
    blue:   { border: "border-blue-200",   bg: "bg-blue-50",   iconBg: "bg-blue-100",   iconColor: "text-blue-600",   bullet: "bg-blue-500" },
    violet: { border: "border-violet-200", bg: "bg-violet-50", iconBg: "bg-violet-100", iconColor: "text-violet-600", bullet: "bg-violet-500" },
  };

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "linear-gradient(135deg,#312e81 0%,#0f766e 100%)" }}>
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-32"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))" }} />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              Bảo Mật Thông Tin
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Chính Sách Bảo Mật
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              CleanPro VN cam kết bảo vệ thông tin cá nhân của bạn với tiêu chuẩn
              bảo mật cao nhất. Dữ liệu của bạn chỉ được dùng để cung cấp dịch vụ
              vệ sinh nệm, sofa tốt nhất tại Đà Nẵng.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: Lock, text: "Mã hóa SSL 256-bit" },
                { icon: Clock, text: "Cập nhật: 15/11/2026" },
                { icon: CheckCircle, text: "Tuân thủ Luật ATTT Việt Nam" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm">
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Breadcrumb ── */}
        <div className="border-b border-slate-100 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-800 font-medium">Chính Sách Bảo Mật</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">

          {/* Giới thiệu */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border border-indigo-100 bg-indigo-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Phạm Vi Áp Dụng</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Chính sách bảo mật này áp dụng cho tất cả thông tin cá nhân được thu thập khi bạn sử dụng
                  website <strong>vesinhsachdanang.vn</strong>, đặt lịch dịch vụ <strong>giặt sofa, vệ sinh nệm,
                  ghế ô tô, ghế văn phòng</strong> tại CleanPro VN qua mọi kênh liên hệ (website, Zalo, điện thoại,
                  Facebook). Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản trong chính sách này.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Thông tin thu thập */}
          <section aria-labelledby="thongtin-heading">
            <motion.h2 id="thongtin-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Thông Tin Chúng Tôi Thu Thập
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              Chỉ thu thập dữ liệu cần thiết để cung cấp dịch vụ – không thu thập thừa
            </motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {DATA_COLLECTED.map((category, i) => {
                const cls = colorMap[category.color];
                return (
                  <motion.div key={category.title} variants={fadeUp} custom={i * 0.5}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`rounded-2xl border ${cls.border} ${cls.bg} p-5`}>
                    <div className={`w-10 h-10 rounded-full ${cls.iconBg} flex items-center justify-center mb-3`}>
                      <category.icon className={`w-5 h-5 ${cls.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${cls.bullet} flex-shrink-0 mt-1.5`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Mục đích sử dụng */}
          <section aria-labelledby="mucdich-heading">
            <motion.h2 id="mucdich-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Mục Đích Sử Dụng Thông Tin
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              Dữ liệu của bạn chỉ được sử dụng cho 5 mục đích rõ ràng sau
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DATA_PURPOSES.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp} custom={i * 0.3}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{p.icon}</span>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
              {/* Cam kết KHÔNG làm */}
              <motion.div variants={fadeUp} custom={5 * 0.3}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-5 rounded-2xl border-2 border-red-100 bg-red-50 col-span-1 sm:col-span-2 lg:col-span-1">
                <span className="text-3xl mb-3 block">🚫</span>
                <h3 className="font-bold text-red-800 text-sm mb-2">Chúng Tôi KHÔNG BAO GIỜ</h3>
                <ul className="space-y-1.5">
                  {["Bán thông tin cho bên thứ ba", "Dùng dữ liệu ngoài mục đích đã nêu", "Chia sẻ địa chỉ nhà cho bên không liên quan", "Lưu trữ thông tin thẻ ngân hàng"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-red-700">
                      <span className="font-bold">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Chia sẻ thông tin */}
          <section aria-labelledby="chiase-heading">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <h2 id="chiase-heading" className="text-xl font-bold text-slate-900">
                  Chia Sẻ Thông Tin Với Bên Thứ Ba
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                CleanPro VN <strong>không bán, không cho thuê</strong> thông tin cá nhân của khách hàng.
                Thông tin chỉ được chia sẻ trong các trường hợp giới hạn sau:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "👥", title: "Kỹ thuật viên nội bộ", desc: "Thông tin địa chỉ và lịch hẹn được chia sẻ cho kỹ thuật viên thực hiện dịch vụ." },
                  { icon: "📊", title: "Công cụ phân tích", desc: "Google Analytics thu thập dữ liệu ẩn danh về lượt truy cập website, không gắn với danh tính." },
                  { icon: "⚖️", title: "Yêu cầu pháp lý", desc: "Trường hợp cơ quan có thẩm quyền yêu cầu theo đúng quy định pháp luật Việt Nam." },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-white/60 rounded-xl border border-amber-100">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Quyền của người dùng */}
          <section aria-labelledby="quyen-heading">
            <motion.h2 id="quyen-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Quyền Của Bạn Đối Với Dữ Liệu
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              Bạn có toàn quyền kiểm soát thông tin cá nhân của mình
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USER_RIGHTS.map((right, i) => (
                <motion.div key={right.title} variants={fadeUp} custom={i * 0.3}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mb-3">
                    <right.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{right.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{right.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-center text-sm text-slate-500 mt-6">
              Để thực hiện bất kỳ quyền nào ở trên, vui lòng liên hệ:{" "}
              <a href="mailto:conghaupham147@gmail.com" className="text-teal-600 font-semibold hover:underline">
                conghaupham147@gmail.com
              </a>{" "}
              – Chúng tôi phản hồi trong vòng <strong>5 ngày làm việc</strong>.
            </motion.p>
          </section>

          {/* Biện pháp bảo mật */}
          <section aria-labelledby="baomat-heading">
            <motion.h2 id="baomat-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Biện Pháp Bảo Mật Dữ Liệu
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-500 text-center mb-8">
              Hệ thống bảo mật nhiều lớp bảo vệ thông tin của bạn 24/7
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECURITY_MEASURES.map((m, i) => (
                <motion.div key={m.title} variants={fadeUp} custom={i * 0.3}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white hover:border-indigo-200 transition-colors">
                  <span className="text-3xl flex-shrink-0">{m.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{m.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cookie & Thời hạn lưu trữ */}
          <section className="grid sm:grid-cols-2 gap-5" aria-label="Cookie và thời hạn lưu trữ">
            {/* Cookie */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🍪</span>
                <h2 className="text-lg font-bold text-slate-900">Chính Sách Cookie</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Website sử dụng cookie kỹ thuật để duy trì phiên truy cập và cookie phân tích
                (Google Analytics) để hiểu hành vi truy cập ẩn danh. Không có cookie nào lưu
                thông tin cá nhân nhận dạng được.
              </p>
              <ul className="space-y-2">
                {[
                  "Cookie phiên: tự xóa khi đóng trình duyệt",
                  "Cookie phân tích: lưu tối đa 26 tháng (ẩn danh)",
                  "Bạn có thể tắt cookie trong cài đặt trình duyệt",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Thời hạn lưu trữ */}
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">Thời Hạn Lưu Trữ Dữ Liệu</h2>
              </div>
              <div className="space-y-3">
                {[
                  { type: "Thông tin đặt lịch dịch vụ", duration: "2 năm", note: "Kể từ ngày thực hiện dịch vụ" },
                  { type: "Hồ sơ khách hàng thường xuyên", duration: "5 năm", note: "Hoặc đến khi yêu cầu xóa" },
                  { type: "Giao dịch tài chính / hoàn tiền", duration: "7 năm", note: "Theo quy định pháp luật kế toán" },
                  { type: "Dữ liệu phân tích ẩn danh", duration: "26 tháng", note: "Tự động xóa bởi Google Analytics" },
                ].map(item => (
                  <div key={item.type} className="flex items-start justify-between gap-3 p-2.5 bg-white/60 rounded-lg border border-teal-100">
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{item.type}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                    <span className="text-sm font-bold text-teal-700 flex-shrink-0">{item.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Cập nhật chính sách */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            aria-labelledby="capnhat-heading"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 id="capnhat-heading" className="text-xl font-bold text-slate-900 mb-3">
              📝 Cập Nhật Chính Sách
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              CleanPro VN có thể cập nhật chính sách bảo mật này theo thời gian để phù hợp với
              thay đổi pháp luật hoặc cải tiến dịch vụ. Khi có thay đổi quan trọng, chúng tôi sẽ
              thông báo qua <strong>website</strong>, <strong>email</strong> hoặc <strong>Zalo/Facebook</strong>{" "}
              trước ít nhất <strong>7 ngày</strong>. Phiên bản hiện tại có hiệu lực từ ngày{" "}
              <strong>15/11/2026</strong>.
            </p>
          </motion.section>

          {/* CTA Liên hệ */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            aria-labelledby="lienhe-privacy-heading"
            className="rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#312e81 0%,#0f766e 100%)" }}>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-white/5" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 id="lienhe-privacy-heading" className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Có Thắc Mắc Về Quyền Riêng Tư?
              </h2>
              <p className="text-white/80 mb-7 max-w-lg mx-auto text-base leading-relaxed">
                Liên hệ ngay với CleanPro VN để được giải đáp về dữ liệu cá nhân
                hoặc thực hiện các quyền của bạn theo chính sách bảo mật này.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a href="tel:+84969135304" id="privacy-call-btn"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold shadow-xl">
                  <Phone className="w-4 h-4" />
                  096 9135 304
                </motion.a>
                <motion.a href="mailto:conghaupham147@gmail.com" id="privacy-email-btn"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white font-bold border border-white/30 hover:bg-white/25 transition-colors">
                  <Mail className="w-4 h-4" />
                  conghaupham147@gmail.com
                </motion.a>
              </div>
              <p className="text-white/60 text-xs mt-5">
                Phản hồi trong vòng 5 ngày làm việc. Hotline 7:00 – 20:00 mỗi ngày.
              </p>
            </div>
          </motion.section>

          {/* Ngày hiệu lực */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Phiên bản 1.0 – Có hiệu lực từ <strong>15/11/2026</strong>. Chính sách áp dụng cho{" "}
              <strong>CleanPro VN</strong>, 15/03 Võ Chí Công, Ngũ Hành Sơn, Đà Nẵng.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
