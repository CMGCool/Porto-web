"use client";

import { useState, useEffect } from "react";
import { useWindowManager } from "@/components/WindowManager";

function TaskbarClock() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const [time, setTime] = useState(fmt);

  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="win-statusbar-item"
      style={{ fontFamily: "var(--font-mono)", fontSize: 11, flexShrink: 0, marginLeft: 4 }}
    >
      {time}
    </div>
  );
}

export default function Taskbar() {
  const { allWindows, getState, restore, minimize } = useWindowManager();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        backgroundColor: "var(--win-silver)",
        borderTop: "2px solid var(--bevel-light)",
        height: 36,
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "0 6px",
      }}
    >
      {/* "Start" button */}
      <div
        className="win-btn"
        style={{
          fontWeight: 900,
          fontSize: 12,
          padding: "3px 10px",
          marginRight: 6,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <span>💻</span>
        <span>Start</span>
      </div>

      {/* Vertical divider */}
      <div
        style={{
          width: 2,
          height: 24,
          borderLeft: "1px solid var(--bevel-dark)",
          borderRight: "1px solid var(--bevel-light)",
          flexShrink: 0,
        }}
      />

      {/* Window buttons */}
      <div
        style={{
          display: "flex",
          gap: 3,
          flex: 1,
          overflowX: "auto",
          alignItems: "center",
          scrollbarWidth: "none",
        }}
      >
        {allWindows.map((win) => {
          const state = getState(win.id);
          const isActive = state === "open";
          const isClosed = state === "closed";

          return (
            <button
              key={win.id}
              onClick={() => (state === "open" ? minimize(win.id) : restore(win.id))}
              title={
                isClosed
                  ? `${win.title} (closed — click to reopen)`
                  : isActive
                  ? `${win.title} — click to minimize`
                  : `${win.title} — click to restore`
              }
              style={{
                fontFamily: "var(--font-system)",
                fontSize: 11,
                backgroundColor: "var(--win-silver)",
                color: "var(--win-black)",
                border: "2px solid",
                borderColor: isActive
                  ? "var(--bevel-darkest) var(--bevel-light) var(--bevel-light) var(--bevel-darkest)"
                  : "var(--bevel-light) var(--bevel-darkest) var(--bevel-darkest) var(--bevel-light)",
                padding: isActive ? "4px 8px 2px 10px" : "2px 8px",
                cursor: "default",
                display: "flex",
                alignItems: "center",
                gap: 4,
                whiteSpace: "nowrap",
                maxWidth: 140,
                overflow: "hidden",
                textOverflow: "ellipsis",
                opacity: isClosed ? 0.55 : 1,
                flexShrink: 0,
              }}
            >
              <span style={{ flexShrink: 0 }}>{win.icon}</span>
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {win.title}
              </span>
              {isClosed && (
                <span style={{ fontSize: 9, color: "var(--win-gray)", flexShrink: 0 }}>✕</span>
              )}
            </button>
          );
        })}
      </div>

      {/* System clock */}
      <TaskbarClock />
    </div>
  );
}
