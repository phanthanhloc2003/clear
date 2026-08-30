"use client";

import { useEffect, useState } from "react";

/**
 * Hook theo dõi vị trí scroll để điều khiển header appearance.
 * Trả về: isScrolled (boolean) và scrollProgress (0-1)
 */
export function useScrollProgress() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 60);
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, scrollProgress };
}
