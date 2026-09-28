import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon 180×180 – CleanPro VN
 *
 * Phiên bản lớn hơn của favicon cho màn hình iOS home screen.
 * Thiết kế nhất quán: giọt nước trắng căn giữa + sparkle star + gold shimmer.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "linear-gradient(135deg, #0f766e 0%, #0d9488 35%, #14b8a6 70%, #06b6d4 100%)",
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
            height: 80,
            background: "rgba(255,255,255,0.09)",
            borderRadius: "40px 40px 0 0",
            display: "flex",
          }}
        />

        {/* Bottom shimmer bar */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 36,
            right: 36,
            height: 3,
            background: "rgba(255,255,255,0.18)",
            borderRadius: 2,
            display: "flex",
          }}
        />

        {/* Main SVG content */}
        <svg
          width="148"
          height="148"
          viewBox="0 0 148 148"
          fill="none"
        >
          <defs>
            <linearGradient id="dropG2" x1="74" y1="10" x2="74" y2="138" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id="goldG2" x1="48" y1="72" x2="64" y2="122" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* === Water drop – perfectly centered === */}
          <path
            d="M74 10 C74 10 34 58 34 90 C34 113.2 51.9 132 74 132 C96.1 132 114 113.2 114 90 C114 58 74 10 74 10Z"
            fill="url(#dropG2)"
            filter="url(#glow)"
          />

          {/* Gold shimmer reflection inside drop */}
          <path
            d="M57 82 C57 82 51 92 51 102 C51 111 57 120 64 124"
            stroke="url(#goldG2)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* Highlight dot top of drop */}
          <circle cx="61" cy="58" r="9" fill="white" fillOpacity="0.45" />
          <circle cx="61" cy="58" r="4.5" fill="white" fillOpacity="0.35" />

          {/* === Sparkle 4-point star – top right === */}
          {/* Vertical bar */}
          <path d="M124 18 L124 46" stroke="white" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.75" />
          {/* Horizontal bar */}
          <path d="M110 32 L138 32" stroke="white" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.75" />
          {/* Small dot accent */}
          <circle cx="118" cy="14" r="4.5" fill="white" fillOpacity="0.5" />
          <circle cx="136" cy="50" r="3" fill="white" fillOpacity="0.38" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
