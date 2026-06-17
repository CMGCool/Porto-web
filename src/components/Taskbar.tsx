"use client";

import { useState, useEffect, useRef } from "react";
import { useWindowManager } from "@/components/WindowManager";

// ── Start Menu items ──────────────────────────────────────────
const START_MENU_ITEMS = [
  {
    group: null,
    icon: "👤",
    label: "Profile",
    action: "scroll",
    target: "profile",
  },
  {
    group: null,
    icon: "🗂",
    label: "Projects",
    action: "scroll",
    target: "projects",
  },
  {
    group: null,
    icon: "💼",
    label: "Work Experience",
    action: "scroll",
    target: "experience",
  },
  {
    group: null,
    icon: "🏆",
    label: "Certificates",
    action: "scroll",
    target: "certificates",
  },
  {
    group: null,
    icon: "📡",
    label: "Contact",
    action: "scroll",
    target: "contact",
  },
  { group: "divider", icon: "", label: "", action: "", target: "" },
  {
    group: null,
    icon: "📄",
    label: "View CV",
    action: "link",
    target:
      "https://drive.google.com/file/d/1WR4t4qiA_jpDP8Ro3_JTXEzUeLBGkbWl/view?usp=sharing",
  },
  {
    group: null,
    icon: "🐙",
    label: "GitHub",
    action: "link",
    target: "https://github.com/CMGcool",
  },
  { group: "divider", icon: "", label: "", action: "", target: "" },
  {
    group: null,
    icon: "🔄",
    label: "Restore All Windows",
    action: "restore-all",
    target: "",
  },
];

// ── Clock ─────────────────────────────────────────────────────
function TaskbarClock() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className="win-statusbar-item"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        flexShrink: 0,
        marginLeft: 4,
        userSelect: "none",
      }}
    >
      {time}
    </div>
  );
}

// ── Start Menu popup ──────────────────────────────────────────
function StartMenu({
  onClose,
  restoreAll,
}: {
  onClose: () => void;
  restoreAll: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const handleItem = (item: (typeof START_MENU_ITEMS)[number]) => {
    if (item.action === "scroll") {
      const el = document.getElementById(item.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.action === "link") {
      window.open(item.target, "_blank", "noopener,noreferrer");
    } else if (item.action === "restore-all") {
      restoreAll();
    }
    onClose();
  };

  return (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        bottom: 38,
        left: 0,
        zIndex: 3000,
        display: "flex",
        flexDirection: "row",
        // Win95 Start Menu has a vertical side banner
      }}
    >
      {/* Side banner — the classic Win95 rotated text strip */}
      <div
        style={{
          width: 24,
          backgroundColor: "#000080",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 8,
          flexShrink: 0,
          // Win95-style bevel on the outer frame
          borderTop: "2px solid var(--bevel-light)",
          borderLeft: "2px solid var(--bevel-light)",
          borderBottom: "2px solid var(--bevel-darkest)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-system)",
            fontWeight: 900,
            fontSize: 13,
            color: "#ffffff",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            letterSpacing: 1,
            userSelect: "none",
          }}
        >
          <span style={{ color: "#c0c0c0" }}>Windows</span>
          <span style={{ color: "#ffffff" }}> 95</span>
        </span>
      </div>

      {/* Menu items panel */}
      <div
        style={{
          backgroundColor: "var(--win-silver)",
          borderTop: "2px solid var(--bevel-light)",
          borderRight: "2px solid var(--bevel-darkest)",
          borderBottom: "2px solid var(--bevel-darkest)",
          minWidth: 200,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        {START_MENU_ITEMS.map((item, i) => {
          if (item.group === "divider") {
            return (
              <div
                key={i}
                style={{
                  margin: "3px 6px",
                  borderTop: "1px solid var(--bevel-dark)",
                  borderBottom: "1px solid var(--bevel-light)",
                }}
              />
            );
          }

          const isHovered = hovered === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onMouseDown={() => handleItem(item)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 12px 5px 8px",
                backgroundColor: isHovered ? "var(--win-navy)" : "transparent",
                color: isHovered ? "var(--win-white)" : "var(--win-black)",
                cursor: "default",
                userSelect: "none",
              }}
            >
              <span style={{ fontSize: 18, flexShrink: 0, width: 24, textAlign: "center" }}>
                {item.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-system)",
                  fontSize: 12,
                  fontWeight: item.action === "restore-all" ? 700 : 400,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Taskbar ───────────────────────────────────────────────────
export default function Taskbar() {
  const { allWindows, getState, restore, minimize } = useWindowManager();
  const [startOpen, setStartOpen] = useState(false);

  const restoreAll = () => {
    allWindows.forEach((w) => restore(w.id));
  };

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
      {/* Start Menu popup */}
      {startOpen && (
        <StartMenu
          onClose={() => setStartOpen(false)}
          restoreAll={restoreAll}
        />
      )}

      {/* ── Start Button ── */}
      <button
        onClick={() => setStartOpen((o) => !o)}
        style={{
          fontFamily: "var(--font-system)",
          fontWeight: 900,
          fontSize: 12,
          backgroundColor: "var(--win-silver)",
          color: "var(--win-black)",
          border: "2px solid",
          borderColor: startOpen
            ? "var(--bevel-darkest) var(--bevel-light) var(--bevel-light) var(--bevel-darkest)"
            : "var(--bevel-light) var(--bevel-darkest) var(--bevel-darkest) var(--bevel-light)",
          padding: startOpen ? "4px 10px 2px 12px" : "2px 10px",
          marginRight: 6,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 4,
          cursor: "default",
        }}
      >
        <span style={{ fontSize: 14 }}>💻</span>
        <span>Start</span>
      </button>

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
                <span style={{ fontSize: 9, color: "var(--win-gray)", flexShrink: 0 }}>
                  ✕
                </span>
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
