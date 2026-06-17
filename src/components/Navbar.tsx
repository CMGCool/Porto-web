"use client";

import { useState } from "react";

const navItems = [
  { href: "#projects",     label: "Projects" },
  { href: "#experience",   label: "Experiences" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact",      label: "Contact" },
  { href: "https://drive.google.com/file/d/1WR4t4qiA_jpDP8Ro3_JTXEzUeLBGkbWl/view?usp=sharing", label: "View CV", external: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── TOP MENU BAR ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          backgroundColor: "var(--win-silver)",
          borderBottom: "2px solid var(--bevel-darkest)",
          borderTop: "2px solid var(--bevel-light)",
        }}
      >
        {/* Title row */}
        <div
          style={{
            background: "linear-gradient(to right, var(--win-navy), #1084d0)",
            color: "var(--win-white)",
            fontFamily: "var(--font-system)",
            fontWeight: 700,
            fontSize: 12,
            padding: "3px 8px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ fontSize: 14 }}>💻</span>
          <span>Randi Andhika Djaja — Portfolio v1.0</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
            <button className="win-close-btn" aria-label="minimize">_</button>
            <button className="win-close-btn" aria-label="maximize">□</button>
            <button className="win-close-btn" aria-label="close">✕</button>
          </div>
        </div>

        {/* Menu bar row */}
        <div className="win-menubar" style={{ borderBottom: "1px solid var(--bevel-dark)" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="win-menubar-item"
              style={{ textDecoration: "none" }}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile hamburger */}
          <button
            className="win-btn"
            style={{ marginLeft: "auto", display: "none", fontSize: 10, padding: "1px 6px", minWidth: "auto" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            id="mobile-nav-toggle"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            backgroundColor: "var(--win-silver)",
            borderBottom: "2px solid var(--bevel-darkest)",
            zIndex: 999,
            padding: 4,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "6px 12px",
                fontFamily: "var(--font-system)",
                fontSize: 12,
                color: "var(--win-black)",
                textDecoration: "none",
                borderBottom: "1px solid var(--bevel-dark)",
              }}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Spacer so content isn't hidden under the fixed bar */}
      <div style={{ height: 64 }} />

      <style>{`
        @media (max-width: 640px) {
          #mobile-nav-toggle { display: inline-flex !important; }
          .win-menubar a.win-menubar-item { display: none; }
        }
      `}</style>
    </>
  );
}
