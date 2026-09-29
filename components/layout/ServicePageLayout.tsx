"use client";

import Link from "next/link";
import { Phone, ChevronRight, Home, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ServicePageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
}

/**
 * Layout wrapper cho tất cả trang dịch vụ.
 * Bao gồm: Header, Breadcrumb, main content, Footer, sticky CTA bar mobile.
 */
export default function ServicePageLayout({
  children,
  breadcrumbs,
}: ServicePageLayoutProps) {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-100 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-teal-600 transition-colors"
              >
                <Home className="w-3 h-3" />
                Trang chủ
              </Link>
            </li>
            {breadcrumbs.map((bc, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-300 flex-shrink-0" />
                {bc.href ? (
                  <Link
                    href={bc.href}
                    className="hover:text-teal-600 transition-colors"
                  >
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 font-semibold">
                    {bc.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <main id="main-content" role="main">
        {children}
      </main>

      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-100 shadow-xl px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+84969135304"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-sm shadow-lg"
        >
          <Phone className="w-4 h-4" />
          Gọi ngay: 096 9135 304
        </a>
        <a
          href="https://www.facebook.com/cong.hau.916575"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-teal-500 text-teal-600 font-bold text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Chat
        </a>
      </div>
      {/* Bottom padding to avoid sticky bar overlap on mobile */}
      <div className="h-20 md:hidden" />
    </>
  );
}
