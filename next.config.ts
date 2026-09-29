import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── SEO: Redirect www → non-www ── */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vesinhsachdanang.vn" }],
        destination: "https://vesinhsachdanang.vn/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },

  /* ── Security & Performance Headers ── */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* ── Image Optimization ── */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
  },

  /* ── Compression ── */
  compress: true,
};

export default nextConfig;