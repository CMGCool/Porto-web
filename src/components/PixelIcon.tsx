import React from "react";

export type PixelIconName =
  | "profile"
  | "skills"
  | "projects"
  | "experience"
  | "certificates"
  | "contact"
  | "cv"
  | "github"
  | "restore"
  | "computer"
  | "shutdown"
  | "warning"
  | "status-online";

interface PixelIconProps {
  name: PixelIconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function PixelIcon({
  name,
  size = 16,
  className = "",
  style = {},
}: PixelIconProps) {
  const commonStyle: React.CSSProperties = {
    display: "inline-block",
    verticalAlign: "middle",
    imageRendering: "pixelated",
    shapeRendering: "crispEdges",
    flexShrink: 0,
    ...style,
  };

  switch (name) {
    // ── Yellow Win95 Folder ──
    case "projects":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Folder back tab */}
          <path d="M1 2 h5 v2 h8 v9 h-13 z" fill="#808000" />
          <path d="M2 3 h4 v1 h7 v7 h-11 z" fill="#ffff00" />
          {/* Paper sticking out */}
          <rect x="4" y="2" width="7" height="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
          <line x1="6" y1="4" x2="9" y2="4" stroke="#000080" strokeWidth="1" />
          <line x1="6" y1="6" x2="9" y2="6" stroke="#808080" strokeWidth="1" />
          {/* Folder front flap */}
          <polygon points="1,6 13,6 15,13 3,13" fill="#ffff80" />
          <polygon points="1,6 13,6 15,13 3,13" fill="none" stroke="#000000" strokeWidth="1" />
          <line x1="2" y1="7" x2="12" y2="7" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );

    // ── Classic Win95 User Profile / Card ──
    case "profile":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Card body */}
          <rect x="1" y="2" width="14" height="12" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
          <rect x="2" y="3" width="12" height="1" fill="#ffffff" />
          <rect x="2" y="3" width="1" height="10" fill="#ffffff" />
          {/* User head */}
          <circle cx="5.5" cy="6.5" r="2" fill="#000080" />
          {/* User bust */}
          <path d="M3 11 c0 -2 5 -2 5 0 z" fill="#000080" />
          {/* Card text lines */}
          <line x1="9" y1="5" x2="13" y2="5" stroke="#000000" strokeWidth="1" />
          <line x1="9" y1="7" x2="13" y2="7" stroke="#808080" strokeWidth="1" />
          <line x1="9" y1="9" x2="12" y2="9" stroke="#808080" strokeWidth="1" />
          <line x1="9" y1="11" x2="13" y2="11" stroke="#808080" strokeWidth="1" />
        </svg>
      );

    // ── Classic Win95 Briefcase (Work Experience) ──
    case "experience":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Handle */}
          <path d="M6 3 h4 v2 h-1 v-1 h-2 v1 h-1 z" fill="#404040" />
          {/* Briefcase main body */}
          <rect x="2" y="5" width="12" height="9" fill="#804000" stroke="#000000" strokeWidth="1" />
          {/* Highlights & shadow */}
          <rect x="3" y="6" width="10" height="1" fill="#c08040" />
          <line x1="2" y1="9" x2="14" y2="9" stroke="#000000" strokeWidth="1" />
          <line x1="2" y1="10" x2="14" y2="10" stroke="#c08040" strokeWidth="1" />
          {/* Gold clasps */}
          <rect x="4" y="8" width="2" height="3" fill="#ffff00" stroke="#808000" strokeWidth="0.5" />
          <rect x="10" y="8" width="2" height="3" fill="#ffff00" stroke="#808000" strokeWidth="0.5" />
        </svg>
      );

    // ── Classic Win95 Certificate / Award ──
    case "certificates":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Certificate paper */}
          <rect x="2" y="1" width="12" height="11" fill="#ffffff" stroke="#000000" strokeWidth="1" />
          <line x1="4" y1="3" x2="10" y2="3" stroke="#808080" strokeWidth="1" />
          <line x1="4" y1="5" x2="12" y2="5" stroke="#808080" strokeWidth="1" />
          <line x1="4" y1="7" x2="8" y2="7" stroke="#808080" strokeWidth="1" />
          {/* Blue Ribbon & Gold Seal */}
          <circle cx="11" cy="9" r="2.5" fill="#ffff00" stroke="#808000" strokeWidth="0.5" />
          <path d="M10 11 l-1 4 l2 -1 l2 1 l-1 -4 z" fill="#000080" />
        </svg>
      );

    // ── Classic Win95 Mail / Contact ──
    case "contact":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Envelope */}
          <rect x="1" y="3" width="14" height="10" fill="#ffffcc" stroke="#000000" strokeWidth="1" />
          {/* Flap lines */}
          <line x1="2" y1="4" x2="8" y2="9" stroke="#808080" strokeWidth="1" />
          <line x1="14" y1="4" x2="8" y2="9" stroke="#808080" strokeWidth="1" />
          <line x1="2" y1="12" x2="6" y2="8" stroke="#a0a0a0" strokeWidth="1" />
          <line x1="14" y1="12" x2="10" y2="8" stroke="#a0a0a0" strokeWidth="1" />
          {/* Stamp */}
          <rect x="11" y="4" width="2" height="3" fill="#ff0000" />
        </svg>
      );

    // ── Skills / Tools (Hammer & Wrench) ──
    case "skills":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Wrench */}
          <path d="M2 12 l4 -4 l2 2 l-4 4 z" fill="#808080" stroke="#000000" strokeWidth="0.5" />
          <circle cx="3" cy="13" r="1.5" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
          <path d="M11 2 a3 3 0 0 0 -3 3 l2 2 a3 3 0 0 0 3 -3 h-2 v-1 h2 z" fill="#000080" stroke="#000000" strokeWidth="0.5" />
          {/* Screwdriver / Hammer cross */}
          <path d="M12 12 l-4 -4 l2 -2 l4 4 z" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
          <rect x="11" y="11" width="3" height="3" fill="#800000" stroke="#000000" strokeWidth="0.5" />
        </svg>
      );

    // ── Notepad Document (CV) ──
    case "cv":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Paper with folded corner */}
          <path d="M3 1 h7 l3 3 v11 h-10 z" fill="#ffffff" stroke="#000000" strokeWidth="1" />
          <polygon points="10,1 10,4 13,4" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
          {/* Text lines */}
          <line x1="5" y1="5" x2="9" y2="5" stroke="#000080" strokeWidth="1" />
          <line x1="5" y1="7" x2="11" y2="7" stroke="#000000" strokeWidth="1" />
          <line x1="5" y1="9" x2="11" y2="9" stroke="#000000" strokeWidth="1" />
          <line x1="5" y1="11" x2="10" y2="11" stroke="#000000" strokeWidth="1" />
          <line x1="5" y1="13" x2="8" y2="13" stroke="#808080" strokeWidth="1" />
        </svg>
      );

    // ── Pixel GitHub Logo ──
    case "github":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          <rect x="2" y="2" width="12" height="12" fill="#000000" rx="2" />
          {/* Pixel cat silhouette */}
          <path
            d="M4 5 l2 1 h4 l2 -1 v3 c0 3 -2 4 -4 4 s-4 -1 -4 -4 z"
            fill="#ffffff"
          />
          <circle cx="6" cy="8" r="0.8" fill="#000000" />
          <circle cx="10" cy="8" r="0.8" fill="#000000" />
          <rect x="7" y="9" width="2" height="1" fill="#000000" />
        </svg>
      );

    // ── Restore Windows (Cascade) ──
    case "restore":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* Back window */}
          <rect x="4" y="1" width="10" height="9" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
          <rect x="5" y="2" width="8" height="2" fill="#808080" />
          {/* Front window */}
          <rect x="1" y="5" width="10" height="9" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
          <rect x="2" y="6" width="8" height="2" fill="#000080" />
          <rect x="3" y="9" width="6" height="4" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
        </svg>
      );

    // ── CRT Computer ──
    case "computer":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          {/* CRT Monitor housing */}
          <rect x="1" y="1" width="14" height="10" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
          <rect x="2" y="2" width="12" height="1" fill="#ffffff" />
          {/* CRT Screen */}
          <rect x="3" y="3" width="10" height="6" fill="#008080" stroke="#404040" strokeWidth="0.5" />
          <rect x="4" y="4" width="3" height="1" fill="#ffffff" opacity="0.8" />
          {/* Power button & LED */}
          <circle cx="12.5" cy="9.5" r="0.6" fill="#00ff00" />
          <rect x="10" y="9" width="1.5" height="1" fill="#808080" />
          {/* Stand */}
          <rect x="6" y="11" width="4" height="1" fill="#808080" />
          <rect x="4" y="12" width="8" height="2" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
        </svg>
      );

    // ── Warning Dialog Icon ──
    case "warning":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          <polygon points="8,1 15,14 1,14" fill="#ffff00" stroke="#000000" strokeWidth="1" />
          <line x1="8" y1="5" x2="8" y2="9" stroke="#000000" strokeWidth="1.5" />
          <rect x="7.25" y="11" width="1.5" height="1.5" fill="#000000" />
        </svg>
      );

    // ── Shutdown Icon ──
    case "shutdown":
      return (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          <rect x="1" y="2" width="14" height="12" fill="#000000" />
          <circle cx="8" cy="8" r="4" fill="none" stroke="#ff0000" strokeWidth="1.5" />
          <line x1="8" y1="3" x2="8" y2="8" stroke="#ff0000" strokeWidth="1.5" />
        </svg>
      );

    // ── Status LED Online (Green 6x6 pixel square) ──
    case "status-online":
      return (
        <svg
          viewBox="0 0 8 8"
          width={size}
          height={size}
          className={className}
          style={commonStyle}
        >
          <rect x="1" y="1" width="6" height="6" fill="#00ff00" stroke="#008000" strokeWidth="1" />
          <rect x="2" y="2" width="2" height="2" fill="#ffffff" />
        </svg>
      );

    default:
      return null;
  }
}
