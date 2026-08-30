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
 * CleanPro VN – Main Landing Page
 *
 * Order of sections:
 * 1. Loading Screen (full page, first visit only)
 * 2. Header (sticky, transparent → frosted on scroll)
 * 3. Hero (full viewport, animated background + parallax)
 * 4. Services (4 cards, 2x2 grid)
 * 5. Process (4-step timeline)
 * 6. Before/After (comparison slider)
 * 7. Stats & Why Us (animated counters + benefits)
 * 8. Contact (booking form + map)
 * 9. Footer
 */
export default function HomePage() {
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

      {/* Main content – rendered but invisible until loading done */}
      <div
        className="transition-opacity duration-500"
        style={{ opacity: hasLoaded ? 1 : 0 }}
        aria-hidden={!hasLoaded}
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
