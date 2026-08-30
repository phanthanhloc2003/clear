import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon (180x180) for iOS home screen.
 * Larger, more detailed version of the favicon.
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
          background: "linear-gradient(135deg, #0f766e 0%, #0d9488 40%, #14b8a6 70%, #06b6d4 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Water drop SVG */}
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 C12 2 4 10.5 4 15.5 C4 19.64 7.58 23 12 23 C16.42 23 20 19.64 20 15.5 C20 10.5 12 2 12 2Z"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M12 7 C12 7 7.5 12.5 7.5 15.5 C7.5 18.0 9.5 20 12 20"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Sparkles */}
            <circle cx="17.5" cy="5" r="2" fill="white" opacity="0.65" />
            <circle cx="19.5" cy="9" r="1.2" fill="white" opacity="0.45" />
            <circle cx="15" cy="3" r="1" fill="#fbbf24" opacity="0.7" />
          </svg>

          {/* Text "CP" */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "white",
              letterSpacing: -1,
              lineHeight: 1,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            CleanPro
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
