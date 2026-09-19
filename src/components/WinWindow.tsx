"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useWindowManager } from "@/components/WindowManager";
import PixelIcon, { PixelIconName } from "@/components/PixelIcon";

type Props = {
  id: string;
  title: string;
  icon?: string;
  children: ReactNode;
  style?: React.CSSProperties;
};

const isKnownPixelIcon = (ic: string): ic is PixelIconName => {
  return [
    "profile", "skills", "projects", "experience", "certificates",
    "contact", "cv", "github", "restore", "computer", "shutdown",
    "warning", "status-online"
  ].includes(ic);
};

export default function WinWindow({ id, title, icon = "", children, style }: Props) {
  const { register, minimize, close, restore, getState } = useWindowManager();
  const registered = useRef(false);

  useEffect(() => {
    if (!registered.current) {
      register({ id, title, icon });
      registered.current = true;
    }
  }, [id, title, icon, register]);

  const state = getState(id);

  const renderIcon = (size = 14) => {
    if (!icon) return null;
    if (isKnownPixelIcon(icon)) {
      return <PixelIcon name={icon} size={size} style={{ marginRight: 6 }} />;
    }
    return <span style={{ marginRight: 6 }}>{icon}</span>;
  };

  // Closed → fully hidden, takes no space
  if (state === "closed") return null;

  // Minimized → title bar only (collapsed)
  if (state === "minimized") {
    return (
      <div id={id} className="win-frame" style={{ ...style, overflow: "hidden" }}>
        <div className="win-titlebar" style={{ opacity: 0.75 }}>
          <span style={{ fontStyle: "italic", display: "flex", alignItems: "center" }}>
            {renderIcon(13)}
            {title} — (minimized)
          </span>
          <div style={{ display: "flex", gap: 2 }}>
            <button
              className="win-close-btn"
              aria-label="restore"
              onClick={() => restore(id)}
              title="Restore"
            >
              □
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Open → full window
  return (
    <div id={id} className="win-frame" style={style}>
      <div className="win-titlebar">
        <span style={{ display: "flex", alignItems: "center" }}>
          {renderIcon(14)}
          {title}
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          <button
            className="win-close-btn"
            aria-label="minimize"
            onClick={() => minimize(id)}
            title="Minimize"
          >
            _
          </button>
          <button
            className="win-close-btn"
            aria-label="maximize"
            title="Already full width"
            style={{ cursor: "default" }}
          >
            □
          </button>
          <button
            className="win-close-btn"
            aria-label="close"
            onClick={() => close(id)}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
