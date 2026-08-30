import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Dynamic favicon generated via Next.js OG Image API.
 * Renders a premium teal gradient icon with sparkle shape.
 * Automatically served as /favicon.ico and tab icon.
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
          background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #06b6d4 100%)",
          boxShadow: "0 2px 8px rgba(20,184,166,0.4)",
        }}
      >
        {/* Water droplet shape via SVG */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Drop shape */}
          <path
            d="M12 2 C12 2 5 10 5 15 C5 18.86 8.13 22 12 22 C15.87 22 19 18.86 19 15 C19 10 12 2 12 2Z"
            fill="white"
            opacity="0.95"
          />
          {/* Gold inner shimmer */}
          <path
            d="M12 6 C12 6 8 11.5 8 15 C8 17.2 9.8 19 12 19"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Sparkle top */}
          <circle cx="17" cy="5" r="1.5" fill="white" opacity="0.7" />
          <circle cx="19" cy="8" r="1" fill="white" opacity="0.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
