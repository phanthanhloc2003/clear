/**
 * Vệ Sinh Sạch Đà Nẵng – Brand Logo Component
 *
 * Renders the full logo (icon + wordmark) or icon-only variant.
 * Uses pure SVG — no external dependencies, renders perfectly at any size.
 */

interface LogoProps {
  /** "full" = icon + text | "icon" = icon only */
  variant?: "full" | "icon";
  /** Color theme: "light" = white text (for dark bg) | "dark" = dark text (for light bg) */
  theme?: "light" | "dark";
  /** Height in px – width scales proportionally */
  height?: number;
  className?: string;
}

export default function Logo({
  variant = "full",
  theme = "dark",
  height = 40,
  className = "",
}: LogoProps) {
  const iconSize = height;
  // Dòng 1 "VỆ SINH SẠCH": đen khi dark, trắng khi light
  const line1Color = theme === "light" ? "#ffffff" : "#0f172a";
  // Dòng 2 "ĐÀ NẴNG": xanh teal đậm khi dark, trắng mờ khi light
  const line2Color = theme === "light" ? "rgba(255,255,255,0.90)" : "#166534";
  // Tagline màu xám
  const taglineColor = theme === "light" ? "rgba(255,255,255,0.65)" : "#6b7280";

  if (variant === "icon") {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Vệ Sinh Sạch Đà Nẵng Logo"
        role="img"
      >
        <LogoIcon id="icon-only" />
      </svg>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${className}`}
      style={{ height: variant === "full" && height >= 50 ? "auto" : height }}
      aria-label="Vệ Sinh Sạch Đà Nẵng"
      role="img"
    >
      {/* Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <LogoIcon id="full-logo" />
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1, userSelect: "none" }}>
        {/* Dòng 1: VỆ SINH SẠCH */}
        <div
          style={{
            fontSize: height * 0.42,
            fontWeight: 800,
            color: line1Color,
            letterSpacing: "0.01em",
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          Vệ Sinh Sạch
        </div>
        {/* Dòng 2: ĐÀ NẴNG */}
        <div
          style={{
            fontSize: height * 0.42,
            fontWeight: 800,
            color: line2Color,
            letterSpacing: "0.01em",
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          Đà Nẵng
        </div>
        {/* Tagline – chỉ hiển thị khi height >= 50 */}
        {height >= 50 && (
          <div
            style={{
              fontSize: height * 0.17,
              fontWeight: 400,
              color: taglineColor,
              letterSpacing: "0.01em",
              fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
              lineHeight: 1.3,
              marginTop: height * 0.06,
              whiteSpace: "nowrap",
            }}
          >
            Sạch từng góc nhỏ – An tâm từng không gian
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Icon mark – rounded teal square with 4-pointed sparkle star + small dot
 * matching the brand image.
 */
function LogoIcon({ id }: { id: string }) {
  const bgId   = `bgGrad-${id}`;
  const glowId = `glow-${id}`;
  return (
    <>
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0d9488" />
          <stop offset="60%"  stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0f9d8c" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.18)" />
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect width="40" height="40" rx="9" fill={`url(#${bgId})`} />

      {/* Subtle inner highlight */}
      <rect width="40" height="22" rx="9" fill="white" fillOpacity="0.07" />

      {/* 4-pointed sparkle star – centred at (19, 21) */}
      <g filter={`url(#${glowId})`}>
        {/* Top/bottom cánh dài – path hình thoi mảnh (vertical) */}
        <path
          d="M19 10 C19 10 17.5 18 17.5 21 C17.5 24 19 32 19 32 C19 32 20.5 24 20.5 21 C20.5 18 19 10 19 10Z"
          fill="white"
          fillOpacity="0.95"
        />
        {/* Left/right cánh dài – path hình thoi mảnh (horizontal) */}
        <path
          d="M8 21 C8 21 16 19.5 19 19.5 C22 19.5 30 21 30 21 C30 21 22 22.5 19 22.5 C16 22.5 8 21 8 21Z"
          fill="white"
          fillOpacity="0.95"
        />
        {/* Diagonal NE – cánh ngắn chéo */}
        <path
          d="M19 21 L27.5 12.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        {/* Diagonal SW – cánh ngắn chéo */}
        <path
          d="M19 21 L10.5 29.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        {/* Diagonal NW – cánh ngắn chéo */}
        <path
          d="M19 21 L10.5 12.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        {/* Diagonal SE – cánh ngắn chéo */}
        <path
          d="M19 21 L27.5 29.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </g>

      {/* Small dot – top right corner (like the reference image) */}
      <circle cx="30" cy="10" r="2.8" fill="white" fillOpacity="0.90" />
    </>
  );
}
