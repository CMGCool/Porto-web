"use client";

import Typewriter from "@/components/Typewriter";
import WinWindow from "@/components/WinWindow";

const HERO_WORDS = [
  "Fresh graduate in Computer Engineering — Universitas Pendidikan Indonesia.",
  "Fullstack Developer.",
  "AI Enthusiast.",
  "Problem Solver.",
];

export default function Hero() {
  return (
    <section
      className="desktop-bg"
      style={{ padding: "24px 16px 80px", minHeight: "calc(100vh - 64px)" }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* ── Profile Window ── */}
        <WinWindow id="profile" title="Profile — Randi Andhika Djaja" icon="">
          {/* Menu bar */}
          <div className="win-menubar">
            <span className="win-menubar-item">File</span>
            <span className="win-menubar-item">View</span>
            <span className="win-menubar-item">Help</span>
          </div>

          <div className="win-body" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {/* Photo */}
            <div style={{ flexShrink: 0 }}>
              <div className="win-viewport" style={{ width: 120, height: 140 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pas-foto-edited.png"
                  alt="Randi Andhika Djaja"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                    transform: "scale(1.25)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </div>

            {/* Info panel */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div className="win-section-label" style={{ marginBottom: 6 }}>
                Randi Andhika Djaja
              </div>

              <div
                className="bevel-in"
                style={{ padding: "4px 8px", backgroundColor: "var(--win-white)", marginBottom: 8, minHeight: 28 }}
              >
                <Typewriter words={HERO_WORDS} typingSpeed={50} deletingSpeed={30} />
              </div>

              {[
                ["Status", "Open to Work"],
                ["Location", "Bandung, West Java, Indonesia"],
                ["Education", "S1 Computer Engineering — UPI"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: 8, marginBottom: 3, fontSize: 12 }}>
                  <span style={{ fontFamily: "var(--font-system)", fontWeight: 700, width: 80, flexShrink: 0 }}>
                    {label}:
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>{value}</span>
                </div>
              ))}

              <hr className="win-separator" style={{ marginTop: 8 }} />

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                <a
                  href="https://drive.google.com/file/d/1WR4t4qiA_jpDP8Ro3_JTXEzUeLBGkbWl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-btn win-btn--primary"
                >
                  View CV
                </a>
                <a href="#projects" className="win-btn"> Projects</a>
                <a href="#contact" className="win-btn"> Contact</a>
              </div>
            </div>
          </div>

          <div className="win-statusbar">
            <span className="win-statusbar-item">Ready</span>
            <span className="win-statusbar-item"> 1 object selected</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>v1.0.0</span>
          </div>
        </WinWindow>

        {/* ── Skills Window ── */}
        <WinWindow id="skills" title="Skills &amp; Technologies" icon="">
          <div className="win-body">
            {[
              { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Next.js", "Bootstrap", "Tailwind CSS"] },
              { category: "Backend", items: ["CodeIgniter", "Laravel", "Flask", "Node.js"] },
              { category: "Database", items: ["MySQL"] },
              { category: "Tools & Others", items: ["Git", "Arduino", "Selenium", "Hugging Face"] },
            ].map((group) => (
              <div key={group.category} style={{ marginBottom: 10 }}>
                <div style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {group.items.map((item) => (
                    <span key={item} className="win-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
