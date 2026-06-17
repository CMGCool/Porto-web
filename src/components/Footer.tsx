"use client";

import { useState } from "react";

// ── Shutdown confirmation dialog ──────────────────────────────
function ShutdownDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <>
      {/* Backdrop — classic Win95 modal is just a full-screen overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 5000,
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dialog box */}
        <div className="win-frame" style={{ width: 320 }}>
          <div className="win-titlebar">
            <span>⚠ Shut Down Windows</span>
            <button className="win-close-btn" onClick={onCancel} aria-label="close">✕</button>
          </div>

          <div className="win-body" style={{ padding: 16 }}>
            {/* Icon + text row */}
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
              {/* Pixel monitor icon */}
              <div style={{ flexShrink: 0, fontSize: 32, lineHeight: 1 }}>🖥️</div>
              <div>
                <div style={{ fontFamily: "var(--font-system)", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>
                  What do you want the computer to do?
                </div>
                {/* Radio-style option — Win95 only had one in this context */}
                <div
                  className="bevel-in"
                  style={{
                    backgroundColor: "var(--win-white)",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-system)",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      width: 12, height: 12,
                      borderRadius: "50%",
                      border: "2px solid var(--bevel-dark)",
                      backgroundColor: "var(--win-white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--win-black)" }} />
                  </div>
                  <span>Shut down</span>
                </div>
              </div>
            </div>

            <hr className="win-separator" />

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
              <button className="win-btn win-btn--primary" onClick={onConfirm}>
                OK
              </button>
              <button className="win-btn" onClick={onCancel}>
                Cancel
              </button>
              <button className="win-btn" onClick={onCancel}>
                Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Shutdown screen ───────────────────────────────────────────
function ShutdownScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 6000,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-system)",
          fontSize: 16,
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        It is now safe to turn off your computer.
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "#888888",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Randi Andhika Djaja
      </div>
      <button
        className="win-btn"
        onClick={onRestart}
        style={{ marginTop: 16 }}
      >
        Restart
      </button>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────
export default function Footer() {
  const [showDialog, setShowDialog] = useState(false);
  const [shuttingDown, setShuttingDown] = useState(false);

  const handleShutdownConfirm = () => {
    setShowDialog(false);
    setShuttingDown(true);
  };

  const handleRestart = () => {
    setShuttingDown(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <>
      {showDialog && (
        <ShutdownDialog
          onConfirm={handleShutdownConfirm}
          onCancel={() => setShowDialog(false)}
        />
      )}
      {shuttingDown && <ShutdownScreen onRestart={handleRestart} />}

      <footer className="desktop-bg" style={{ padding: "24px 16px 52px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>

          {/* ── About This PC window ── */}
          <div className="win-frame">
            <div className="win-titlebar">
              <span> About This PC</span>
              <div style={{ display: "flex", gap: 2 }}>
                <button className="win-close-btn" aria-label="close">✕</button>
              </div>
            </div>

            <div className="win-body" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
              {/* Big pixel monitor */}
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div style={{ fontSize: 56, lineHeight: 1, imageRendering: "pixelated" }}>🖥️</div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--win-dark-gray)",
                    textAlign: "center",
                  }}
                >
                  RANDI-PC
                </div>
              </div>

              {/* Info table */}
              <div style={{ flex: 1, minWidth: 220 }}>
                {/* OS label */}
                <div
                  style={{
                    fontFamily: "var(--font-system)",
                    fontWeight: 900,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    marginBottom: 2,
                  }}
                >
                  Portfolio OS
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--win-dark-gray)",
                    marginBottom: 10,
                  }}
                >
                  Version 1.0 (Build {year})
                </div>

                <hr className="win-separator" style={{ marginBottom: 10 }} />

                {[
                  ["Owner", "Randi Andhika Djaja"],
                  ["Stack", "Next.js + Tailwind CSS"],
                  ["Processor", "React 19 @ 60fps"],
                  ["Memory", "Deployed on Vercel"],
                  ["Built", String(year)],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: "flex", gap: 8, marginBottom: 3 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-system)",
                        fontWeight: 700,
                        fontSize: 11,
                        width: 72,
                        flexShrink: 0,
                        color: "var(--win-black)",
                      }}
                    >
                      {label}:
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--win-black)" }}>
                      {value}
                    </span>
                  </div>
                ))}

                <hr className="win-separator" style={{ marginTop: 10, marginBottom: 10 }} />

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button
                    className="win-btn win-btn--primary"
                    onClick={() => setShowDialog(true)}
                  >
                    Shut Down
                  </button>
                  <button
                    className="win-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Back to Top
                  </button>
                  <a
                    href="https://github.com/CMGcool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn"
                    style={{ textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="win-statusbar" style={{ justifyContent: "space-between" }}>
              <span className="win-statusbar-item">© {year} Randi Andhika Djaja</span>
              <span className="win-statusbar-item">Built with Next.js + Tailwind CSS</span>
              <span className="win-statusbar-item">🟢 Online</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
