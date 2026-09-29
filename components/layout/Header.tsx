"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "#services", isDropdown: true },
  { label: "Quy trình", href: "#process" },
  { label: "Kết quả", href: "#results" },
  { label: "Liên hệ", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "🛋️ Giặt Sofa Đà Nẵng", href: "/giat-sofa-da-nang" },
  { label: "🛏️ Giặt Nệm Đà Nẵng", href: "/giat-nem-da-nang" },
  { label: "🚗 Vệ Sinh Ghế Ô Tô", href: "/ve-sinh-ghe-o-to-da-nang" },
  { label: "💺 Vệ Sinh Ghế Văn Phòng", href: "/ve-sinh-ghe-van-phong-da-nang" },
];

/**
 * Sticky header with transparent → frosted glass transition on scroll.
 * Mobile: hamburger menu with slide-in drawer.
 * Includes a CTA booking button with glow pulse.
 */
export default function Header() {
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Trên các trang service (không phải trang chủ), header luôn hiển thị
  // với nền frosted glass – không phụ thuộc vào scroll position.
  // Điều này đảm bảo logo và nav luôn readable trên mọi hero background.
  const useWhiteHeader = !isHomePage || isScrolled;

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Track active section (only on home page)
  useEffect(() => {
    if (!isHomePage) return;
    const sections = ["home", "services", "process", "results", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: useWhiteHeader
            ? "rgba(255,255,255,0.92)"
            : "transparent",
          backdropFilter: useWhiteHeader ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: useWhiteHeader ? "blur(20px) saturate(180%)" : "none",
          boxShadow: useWhiteHeader
            ? "0 1px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(226,232,240,0.6)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="cursor-pointer hover:opacity-85 transition-opacity duration-200"
              aria-label="CleanPro VN - Trang chủ"
            >
              <Logo
                variant="full"
                theme={useWhiteHeader ? "dark" : "light"}
                height={36}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Menu chính">
              {NAV_LINKS.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.href} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center gap-1 relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${useWhiteHeader ? "text-slate-600 hover:text-teal-600" : "text-white/80 hover:text-white"}`}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                          >
                            {SERVICE_LINKS.map((svc) => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors font-medium"
                              >
                                {svc.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                // Regular link
                const isActive = link.href === "/" ? pathname === "/" : activeLink === link.href;
                return link.href.startsWith("#") ? (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${isActive
                      ? useWhiteHeader ? "text-teal-600" : "text-teal-300"
                      : useWhiteHeader ? "text-slate-600 hover:text-teal-600" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-teal-50"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${isActive
                      ? useWhiteHeader ? "text-teal-600" : "text-teal-300"
                      : useWhiteHeader ? "text-slate-600 hover:text-teal-600" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone (desktop) */}
              <a
                href="tel:+84969135304"
                className={`hidden lg:flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${useWhiteHeader ? "text-slate-700 hover:text-teal-600" : "text-white/90 hover:text-white"
                  }`}
              >
                <Phone className="w-4 h-4" />
                096 9135 304
              </a>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-glow relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-bold shadow-lg hover:shadow-teal-400/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-pulse-glow"
                id="header-cta-btn"
              >
                Đặt lịch ngay
              </button>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 rounded-xl transition-colors duration-200 cursor-pointer ${useWhiteHeader
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
                  }`}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <Logo variant="full" theme="dark" height={32} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 p-5 space-y-1" role="navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${activeLink === link.href
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="p-5 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+84969135304"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  096 9135 304
                </a>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-sm cursor-pointer hover:shadow-lg transition-shadow"
                >
                  Đặt lịch ngay
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
