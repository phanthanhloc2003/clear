"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sections
import LoadingScreen from "@/components/sections/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * HomePageClient – Client Component chứa toàn bộ logic animation/loading.
 *
 * Tách riêng khỏi page.tsx (Server Component) để:
 *  1. page.tsx có thể export metadata dạng static (Server Component).
 *  2. Không ảnh hưởng đến khả năng Google đọc nội dung trang chủ.
 *
 * LƯU Ý QUAN TRỌNG về SEO:
 *  - KHÔNG đặt aria-hidden trên wrapper chứa main content.
 *    Googlebot sẽ bỏ qua hoàn toàn nội dung bên trong aria-hidden=true.
 *  - opacity: 0 chỉ ảnh hưởng đến người dùng, không ảnh hưởng Googlebot.
 */
export default function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if already loaded in this session
    const alreadyLoaded = sessionStorage.getItem("cleanpro-loaded");
    if (alreadyLoaded) {
      setIsLoading(false);
      setHasLoaded(true);
      return;
    }

    // Lock scroll during loading
    document.body.style.overflow = "hidden";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
    // Restore scroll
    document.body.style.overflow = "";
    // Mark as loaded for this session
    try {
      sessionStorage.setItem("cleanpro-loaded", "1");
    } catch {
      // ignore storage errors
    }
  };

  return (
    <>
      {/* Loading Screen – shown on first visit */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/*
       * Main content wrapper.
       * - opacity transition: chỉ cho user experience, không ảnh hưởng Googlebot.
       * - KHÔNG dùng aria-hidden: Googlebot bỏ qua hoàn toàn nội dung trong aria-hidden=true.
       *   Việc ẩn bằng opacity là đủ cho animation mà không làm hại SEO.
       */}
      <div
        className="transition-opacity duration-500"
        style={{ opacity: hasLoaded ? 1 : 0 }}
      >
        {/* Sticky header */}
        <Header />

        <main id="main-content" role="main">
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. Services */}
          <ServicesSection />

          {/* 3. Process */}
          <ProcessSection />

          {/* 4. Before & After */}
          <BeforeAfterSection />

          {/* 5. Stats & Why Us */}
          <StatsSection />

          {/* 6. Contact & Booking */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
