"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useWindowManager } from "@/components/WindowManager";

type Props = {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  style?: React.CSSProperties;
};

export default function WinWindow({ id, title, icon, children, style }: Props) {
  const { register, minimize, close, restore, getState } = useWindowManager();
  const registered = useRef(false);

  useEffect(() => {
    if (!registered.current) {
      register({ id, title, icon });
      registered.current = true;
    }
  }, [id, title, icon, register]);

  const state = getState(id);

  // Closed → fully hidden, takes no space
  if (state === "closed") return null;

  // Minimized → title bar only (collapsed)
  if (state === "minimized") {
    return (
      <div id={id} className="win-frame" style={{ ...style, overflow: "hidden" }}>
        <div className="win-titlebar" style={{ opacity: 0.75 }}>
          <span style={{ fontStyle: "italic" }}>{icon} {title} — (minimized)</span>
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
        <span>{icon} {title}</span>
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
