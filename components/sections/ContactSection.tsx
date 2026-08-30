"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
  User,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { bookingSchema, BookingFormData, SERVICE_OPTIONS } from "@/lib/schema";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Floating label input field */
function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700 mb-1.5"
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            role="alert"
          >
            <span>⚠</span> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl text-slate-800 text-sm placeholder-slate-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400";

const INPUT_STYLE = {
  background: "#f8fafc",
  border: "1.5px solid #e2e8f0",
};

const INPUT_STYLE_ERROR = {
  background: "#fff8f8",
  border: "1.5px solid #fca5a5",
};

/** Contact info card */
function ContactCard({
  icon,
  title,
  value,
  sub,
  href,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub?: string;
  href?: string;
  color: string;
}) {
  const Content = (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
      style={{ border: "1px solid #f1f5f9" }}>
      <div
        className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl text-white"
        style={{ background: color }}
      >
        <div className="w-5 h-5">{icon}</div>
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
          {title}
        </p>
        <p className="text-slate-900 font-bold text-sm group-hover:text-teal-600 transition-colors">
          {value}
        </p>
        {sub && <p className="text-slate-400 text-xs mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{Content}</a>;
  }
  return <div>{Content}</div>;
}

/**
 * Contact & Booking section.
 * Left: form with React Hook Form + Zod validation.
 * Right: contact info + Google Maps embed.
 */
export default function ContactSection() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitState("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    console.log("Booking data:", data);
    setSubmitState("success");
    reset();
    setTimeout(() => setSubmitState("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="section-py relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #f8fafc 0%, #f0fdfa 50%, #ffffff 100%)",
        }}
      />
      <div className="absolute inset-0 section-pattern opacity-40" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Đặt Lịch
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Đặt Lịch{" "}
            <span className="gradient-text">Ngay Hôm Nay</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Chỉ mất <span className="font-bold text-teal-600">30 giây</span>{" "}
            – Chúng tôi sẽ liên hệ lại ngay
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ── Form (left / 3 cols) ── */}
          <AnimatedSection
            className="lg:col-span-3"
            variant="slide-left"
            delay={0.1}
          >
            <div
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
              style={{ border: "1px solid rgba(20,184,166,0.12)" }}
            >
              <h3 className="text-lg font-extrabold text-slate-900 mb-6">
                Thông Tin Đặt Lịch
              </h3>

              <AnimatePresence mode="wait">
                {submitState === "success" ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    className="py-12 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <CheckCircle className="w-10 h-10 text-teal-500" />
                    </motion.div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                      Đặt lịch thành công! 🎉
                    </h4>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                      Chúng tôi đã nhận yêu cầu của bạn và sẽ liên hệ lại
                      trong vòng <strong>15 phút</strong>.
                    </p>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        id="name"
                        label="Họ và tên *"
                        error={errors.name?.message}
                      >
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            id="name"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            {...register("name")}
                            className={`${INPUT_CLASS} pl-10`}
                            style={errors.name ? INPUT_STYLE_ERROR : INPUT_STYLE}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                        </div>
                      </FormField>

                      <FormField
                        id="phone"
                        label="Số điện thoại *"
                        error={errors.phone?.message}
                      >
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            id="phone"
                            type="tel"
                            placeholder="0909 123 456"
                            {...register("phone")}
                            className={`${INPUT_CLASS} pl-10`}
                            style={errors.phone ? INPUT_STYLE_ERROR : INPUT_STYLE}
                            aria-invalid={!!errors.phone}
                          />
                        </div>
                      </FormField>
                    </div>

                    {/* Service select */}
                    <FormField
                      id="service"
                      label="Loại dịch vụ *"
                      error={errors.service?.message}
                    >
                      <div className="relative">
                        <select
                          id="service"
                          {...register("service")}
                          className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer`}
                          style={errors.service ? INPUT_STYLE_ERROR : INPUT_STYLE}
                          aria-invalid={!!errors.service}
                        >
                          <option value="">-- Chọn dịch vụ --</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </FormField>

                    {/* Address */}
                    <FormField
                      id="address"
                      label="Địa chỉ vệ sinh *"
                      error={errors.address?.message}
                    >
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <textarea
                          id="address"
                          rows={2}
                          placeholder="Số nhà, đường, phường, quận, thành phố..."
                          {...register("address")}
                          className={`${INPUT_CLASS} pl-10 resize-none`}
                          style={errors.address ? INPUT_STYLE_ERROR : INPUT_STYLE}
                          aria-invalid={!!errors.address}
                        />
                      </div>
                    </FormField>

                    {/* Note */}
                    <FormField
                      id="note"
                      label="Ghi chú (không bắt buộc)"
                      error={errors.note?.message}
                    >
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <textarea
                          id="note"
                          rows={3}
                          placeholder="Kích thước sofa, tình trạng vết bẩn, yêu cầu đặc biệt..."
                          {...register("note")}
                          className={`${INPUT_CLASS} pl-10 resize-none`}
                          style={INPUT_STYLE}
                        />
                      </div>
                    </FormField>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="btn-glow w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-base shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                      whileHover={
                        submitState !== "loading"
                          ? { scale: 1.02 }
                          : {}
                      }
                      whileTap={
                        submitState !== "loading"
                          ? { scale: 0.98 }
                          : {}
                      }
                      id="booking-submit-btn"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Đang gửi…
                        </>
                      ) : (
                        "📅 Gửi Yêu Cầu Đặt Lịch"
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-400">
                      🔒 Thông tin của bạn được bảo mật tuyệt đối
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* ── Info + Map (right / 2 cols) ── */}
          <AnimatedSection
            className="lg:col-span-2 flex flex-col gap-5"
            variant="slide-right"
            delay={0.2}
          >
            {/* Contact cards */}
            <div className="space-y-3">
              <ContactCard
                icon={<Phone className="w-full h-full" />}
                title="Hotline"
                value="0909 123 456"
                sub="Hỗ trợ 8:00 – 21:00 hàng ngày"
                href="tel:0909123456"
                color="linear-gradient(135deg, #14b8a6, #0d9488)"
              />
              <ContactCard
                icon={<MessageSquare className="w-full h-full" />}
                title="Zalo"
                value="0909 123 456"
                sub="Nhắn tin để được tư vấn ngay"
                href="https://zalo.me/0909123456"
                color="linear-gradient(135deg, #0ea5e9, #0284c7)"
              />
              <ContactCard
                icon={<MapPin className="w-full h-full" />}
                title="Địa chỉ"
                value="123 Nguyễn Thị Minh Khai"
                sub="Phường 5, Quận 3, TP. HCM"
                color="linear-gradient(135deg, #f59e0b, #d97706)"
              />
              <ContactCard
                icon={<Clock className="w-full h-full" />}
                title="Giờ làm việc"
                value="8:00 – 21:00"
                sub="Làm việc cả Thứ 7 & Chủ nhật"
                color="linear-gradient(135deg, #8b5cf6, #7c3aed)"
              />
            </div>

            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <iframe
                title="CleanPro VN – Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6868!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjkiTiAxMDbCsDQxJzEyLjUiRQ!5e0!3m2!1svi!2svn!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick booking via Zalo/Phone */}
            <div
              className="rounded-2xl p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.06))",
                border: "1px solid rgba(20,184,166,0.15)",
              }}
            >
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Hoặc liên hệ nhanh qua:
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href="tel:0909123456"
                  id="contact-phone-btn"
                  className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-bold text-center hover:bg-teal-700 transition-colors"
                >
                  📞 Gọi ngay
                </a>
                <a
                  href="https://zalo.me/0909123456"
                  id="contact-zalo-btn"
                  className="flex-1 py-2.5 rounded-xl text-white text-sm font-bold text-center transition-colors"
                  style={{ background: "#0084ff" }}
                >
                  💬 Zalo
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
