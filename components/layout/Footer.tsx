"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import Logo from "@/components/ui/Logo";

/* ---------- Inline SVG Social Icons (lucide-react does not include brand icons) ---------- */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

/* ---------- Data ---------- */
const FOOTER_LINKS = {
  services: [
    { label: "Giặt Sofa Đà Nẵng", href: "/giat-sofa-da-nang" },
    { label: "Giặt Nệm Đà Nẵng", href: "/giat-nem-da-nang" },
    { label: "Vệ Sinh Ghế Ô Tô", href: "/ve-sinh-ghe-o-to-da-nang" },
    { label: "Ghế Văn Phòng", href: "/ve-sinh-ghe-van-phong-da-nang" },
  ],
  company: [
    { label: "Về Chúng Tôi", href: "/#home" },
    { label: "Quy Trình", href: "/#process" },
    { label: "Kết Quả Thực Tế", href: "/#results" },
    { label: "Liên Hệ", href: "/#contact" },
  ],
  legal: [
    { label: "Chính Sách Bảo Mật", href: "#" },
    { label: "Điều Khoản Dịch Vụ", href: "#" },
    { label: "Chính Sách Hoàn Tiền", href: "#" },
  ],
};

/* Sử dụng component SVG thay vì biến từ lucide */
const SOCIAL_LINKS = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/cong.hau.916575", label: "Facebook", color: "#1877f2" },
  { Icon: InstagramIcon, href: "#", label: "Instagram", color: "#e4405f" },
  { Icon: YoutubeIcon, href: "#", label: "Youtube", color: "#ff0000" },
];

/**
 * Premium footer – dark background, multi-column links, social icons, contact info.
 */
export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Logo variant="full" theme="light" height={38} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Chuyên gia vệ sinh chuyên nghiệp – Mang lại không gian sạch sâu,
              tươi mới cho mọi gia đình và doanh nghiệp.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-slate-400 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Dịch Vụ
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Công Ty
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Hotline</p>
                  <a href="tel:+84969135304" className="text-sm text-slate-300 hover:text-teal-400 font-semibold transition-colors">
                    096 9135 304
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <a href="mailto:conghaupham147@gmail.com" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">
                    conghaupham147@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Địa chỉ</p>
                  <p className="text-sm text-slate-300">
                    lô 03 Võ Chí Công<br />Ngũ Hành Sơn , Đà Nẵng
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} CleanPro VN. Tất cả quyền được bảo lưu.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {FOOTER_LINKS.legal.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <a href={link.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </a>
                {i < FOOTER_LINKS.legal.length - 1 && (
                  <span className="w-px h-3 bg-slate-700" />
                )}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-current" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
