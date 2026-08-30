/**
 * CleanPro VN – Brand Logo Component
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
  const textColor = theme === "light" ? "#ffffff" : "#0f172a";
  const subColor  = theme === "light" ? "rgba(255,255,255,0.65)" : "#0d9488";

  if (variant === "icon") {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="CleanPro VN Logo"
        role="img"
      >
        <LogoIcon />
      </svg>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${className}`}
      style={{ height }}
      aria-label="CleanPro VN"
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
        <LogoIcon />
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1, userSelect: "none" }}>
        <div
          style={{
            fontSize: height * 0.45,
            fontWeight: 800,
            color: textColor,
            letterSpacing: "-0.03em",
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          CleanPro
          <span style={{ color: "#14b8a6", marginLeft: 1 }}>VN</span>
        </div>
        <div
          style={{
            fontSize: height * 0.22,
            fontWeight: 600,
            color: subColor,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: height * 0.06,
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          Premium Cleaning
        </div>
      </div>
    </div>
  );
}

/**
 * The icon mark – a water droplet with a sofa silhouette inside,
 * rendered on a teal gradient rounded square.
 */
function LogoIcon() {
  return (
    <>
      {/* Gradient defs */}
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0d9488" />
          <stop offset="55%"  stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="dropGrad" x1="0" y1="0" x2="14" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect width="40" height="40" rx="10" fill="url(#bgGrad)" />

      {/* Inner highlight overlay */}
      <rect width="40" height="20" rx="10" fill="white" fillOpacity="0.08" />

      {/* Water droplet */}
      <g filter="url(#dropShadow)" transform="translate(8, 5)">
        {/* Main drop shape */}
        <path
          d="M12 1 C12 1 4.5 10 4.5 16.5 C4.5 20.64 7.92 24 12 24 C16.08 24 19.5 20.64 19.5 16.5 C19.5 10 12 1 12 1Z"
          fill="url(#dropGrad)"
        />
        {/* Gold shimmer reflection inside drop */}
        <path
          d="M9.5 13 C9.5 13 7.5 15.5 7.5 17.5 C7.5 19.2 8.5 20.5 10 21.5"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
        {/* Highlight dot */}
        <circle cx="9" cy="10" r="1.8" fill="white" fillOpacity="0.55" />
      </g>

      {/* Sparkle dots top-right */}
      <circle cx="31" cy="8"  r="2"   fill="white" fillOpacity="0.55" />
      <circle cx="34" cy="13" r="1.2" fill="white" fillOpacity="0.35" />
      <circle cx="28" cy="6"  r="1.2" fill="#fcd34d" fillOpacity="0.7" />

      {/* Bottom border shimmer */}
      <rect x="6" y="36" width="28" height="1.5" rx="0.75" fill="white" fillOpacity="0.20" />
    </>
  );
}
