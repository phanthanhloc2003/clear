"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#home" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process" },
  { label: "Kết quả", href: "#results" },
  { label: "Liên hệ", href: "#contact" },
];

/**
 * Sticky header with transparent → frosted glass transition on scroll.
 * Mobile: hamburger menu with slide-in drawer.
 * Includes a CTA booking button with glow pulse.
 */
export default function Header() {
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
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
  }, []);

  const scrollToSection = (href: string) => {
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
          background: isScrolled
            ? "rgba(255,255,255,0.88)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          boxShadow: isScrolled
            ? "0 1px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(226,232,240,0.6)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="cursor-pointer hover:opacity-85 transition-opacity duration-200"
              aria-label="CleanPro VN - Trang chủ"
            >
              <Logo
                variant="full"
                theme={isScrolled ? "dark" : "light"}
                height={36}
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Menu chính">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${activeLink === link.href
                    ? isScrolled
                      ? "text-teal-600"
                      : "text-teal-300"
                    : isScrolled
                      ? "text-slate-600 hover:text-teal-600"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-teal-50"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone (desktop) */}
              <a
                href="tel:096 9135 304"
                className={`hidden lg:flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${isScrolled ? "text-slate-700 hover:text-teal-600" : "text-white/90 hover:text-white"
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
                className={`md:hidden p-2 rounded-xl transition-colors duration-200 cursor-pointer ${isScrolled
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
                  href="tel:0909123456"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  0909 123 456
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
