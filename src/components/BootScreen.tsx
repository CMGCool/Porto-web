"use client";

import { useEffect, useState } from "react";

// POST messages that scroll by during boot
const POST_LINES = [
  "BIOS Version 2.0.1  Copyright (C) 1995-2025",
  "CPU: Intel 486 DX2-66MHz  Math Co-Processor: Installed",
  "Memory Test: 640K OK",
  "Extended Memory: 8192K OK",
  "Initializing Plug and Play devices...",
  "Primary IDE Master: ST31200N  1.2GB",
  "Detecting hardware configuration...",
  "Loading PORTFOLIO.SYS...",
  "Loading PROJECTS.DAT...",
  "Loading EXPERIENCE.DAT...",
  "Loading CERTIFICATES.DAT...",
  "Initializing network stack... OK",
  "Starting Windows 95...",
];

const BOOT_PHASES = [
  { label: "BIOS POST Check",            duration: 800  },
  { label: "Detecting Hardware",         duration: 600  },
  { label: "Loading System Files",       duration: 900  },
  { label: "Initializing File System",   duration: 500  },
  { label: "Loading Portfolio Data",     duration: 700  },
  { label: "Starting Desktop",          duration: 400  },
];

type Phase = "bios" | "loading" | "done";

export default function BootScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<Phase>("bios");
  const [biosLines, setBiosLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [currentPhaseLabel, setCurrentPhaseLabel] = useState(BOOT_PHASES[0].label);
  const [fadeOut, setFadeOut] = useState(false);

  // Phase 1: BIOS text scroll
  useEffect(() => {
    if (phase !== "bios") return;
    let i = 0;
    const addLine = () => {
      if (i < POST_LINES.length) {
        setBiosLines((prev) => [...prev, POST_LINES[i]]);
        i++;
        setTimeout(addLine, 90 + Math.random() * 80);
      } else {
        // Short pause then switch to loading screen
        setTimeout(() => setPhase("loading"), 400);
      }
    };
    const t = setTimeout(addLine, 300);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase 2: Progress bar
  useEffect(() => {
    if (phase !== "loading") return;

    let phaseIdx = 0;
    let elapsed = 0;
    const total = BOOT_PHASES.reduce((a, b) => a + b.duration, 0);

    const tick = () => {
      if (phaseIdx >= BOOT_PHASES.length) {
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onFinish, 600);
        }, 400);
        return;
      }

      const currentPhase = BOOT_PHASES[phaseIdx];
      setCurrentPhaseLabel(currentPhase.label);

      const steps = 20;
      const stepDur = currentPhase.duration / steps;
      let step = 0;

      const doStep = () => {
        step++;
        elapsed += currentPhase.duration / steps;
        setProgress(Math.round((elapsed / total) * 100));

        if (step < steps) {
          setTimeout(doStep, stepDur);
        } else {
          phaseIdx++;
          setTimeout(tick, 80);
        }
      };
      doStep();
    };

    const t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [phase, onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: fadeOut ? "opacity 0.6s ease" : "none",
        opacity: fadeOut ? 0 : 1,
        // CRT scanlines
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
      }}
    >
      {/* BIOS POST screen */}
      {phase === "bios" && (
        <div
          style={{
            width: "100%",
            maxWidth: 700,
            padding: "24px 32px",
            fontFamily: "'Courier Prime', 'Courier New', monospace",
            fontSize: 13,
            lineHeight: "20px",
            color: "#cccccc",
          }}
        >
          {/* BIOS header */}
          <div style={{ color: "#ffffff", fontWeight: 700, marginBottom: 16, fontSize: 14 }}>
            Award Modular BIOS v4.51PG, An Energy Star Ally
          </div>
          <div style={{ color: "#cccccc", marginBottom: 16 }}>
            Copyright (C) 1984-95, Award Software, Inc.
          </div>
          <hr style={{ border: "none", borderTop: "1px solid #444", marginBottom: 16 }} />

          {biosLines.map((line, i) => (
            <div
              key={i}
              style={{
                color: i === biosLines.length - 1 ? "#ffffff" : "#aaaaaa",
                animation: i === biosLines.length - 1 ? "none" : "none",
              }}
            >
              {line}
            </div>
          ))}

          {/* Blinking cursor at end */}
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 14,
              backgroundColor: "#cccccc",
              animation: "blink 1s step-end infinite",
              verticalAlign: "text-bottom",
              marginLeft: 2,
            }}
          />
        </div>
      )}

      {/* Windows loading screen */}
      {phase === "loading" && (
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Windows 95 logo text */}
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div
              style={{
                fontFamily: "'Libre Franklin', Arial, sans-serif",
                fontSize: 42,
                fontWeight: 900,
                letterSpacing: 2,
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#ff0000" }}>W</span>
              <span style={{ color: "#00aa00" }}>i</span>
              <span style={{ color: "#0000ff" }}>n</span>
              <span style={{ color: "#ffaa00" }}>d</span>
              <span style={{ color: "#ff0000" }}>o</span>
              <span style={{ color: "#00aa00" }}>w</span>
              <span style={{ color: "#0000ff" }}>s</span>
              <span style={{ color: "#ffffff", fontSize: 28, marginLeft: 8 }}>95</span>
            </div>
            <div
              style={{
                fontFamily: "'Libre Franklin', Arial, sans-serif",
                fontSize: 12,
                color: "#aaaaaa",
                marginTop: 6,
                letterSpacing: 1,
              }}
            >
              Portfolio Edition
            </div>
          </div>

          {/* Progress bar — Win95 style segmented */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 11,
                color: "#888888",
                marginBottom: 6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{currentPhaseLabel}</span>
              <span>{progress}%</span>
            </div>

            {/* Outer track */}
            <div
              style={{
                width: "100%",
                height: 20,
                backgroundColor: "#000000",
                border: "2px solid #888888",
                padding: 2,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Segmented blocks like Win95 */}
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  display: "flex",
                  gap: 2,
                  transition: "width 0.05s linear",
                }}
              >
                {Array.from({ length: Math.floor(progress / 3.5) }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "0 0 10px",
                      height: "100%",
                      backgroundColor: "#000080",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 11,
              color: "#555555",
              textAlign: "center",
            }}
          >
            Please wait while Windows loads your portfolio...
          </div>
        </div>
      )}
    </div>
  );
}
