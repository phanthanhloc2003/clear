import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon 32×32 – CleanPro VN
 *
 * Thiết kế: giọt nước trắng căn giữa hoàn hảo trên nền teal gradient,
 * sparkle 4 cánh góc phải, gold shimmer trong giọt nước.
 * Nhất quán với Logo component và Apple Touch Icon.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 55%, #06b6d4 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Inner top highlight overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 14,
            background: "rgba(255,255,255,0.10)",
            borderRadius: "8px 8px 0 0",
            display: "flex",
          }}
        />

        {/* SVG: water drop (centered) + sparkle star + gold shimmer */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          {/* === Gradient defs === */}
          <defs>
            <linearGradient id="dropG" x1="13" y1="2" x2="13" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.93" />
            </linearGradient>
            <linearGradient id="goldG" x1="8" y1="13" x2="11" y2="21" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* === Water drop – perfectly centered at (13, 13) === */}
          <path
            d="M13 2 C13 2 6 10.5 6 16 C6 19.87 9.13 23 13 23 C16.87 23 20 19.87 20 16 C20 10.5 13 2 13 2Z"
            fill="url(#dropG)"
          />

          {/* Gold shimmer reflection inside drop */}
          <path
            d="M10 14.5 C10 14.5 9 16.5 9 18 C9 19.5 10 21 11 21.5"
            stroke="url(#goldG)"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* Highlight dot top-left of drop */}
          <circle cx="10.5" cy="10.5" r="1.4" fill="white" fillOpacity="0.5" />

          {/* === Sparkle star (4-point) – top right === */}
          {/* Vertical bar */}
          <path d="M22 4 L22 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
          {/* Horizontal bar */}
          <path d="M19.5 6.5 L24.5 6.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
          {/* Small satellite dot */}
          <circle cx="21" cy="3" r="0.8" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
