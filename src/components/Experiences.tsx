"use client";

import WinWindow from "@/components/WinWindow";

const experiences = [
  {
    role: "IT Staff Internship — Kampus Merdeka Batch 7",
    company: "PT Jasa dan Kepariwisataan Jawa Barat (Perseroda)",
    period: "September 2024 — December 2024",
    points: [
      "Developed the D'Journey extranet website as a dashboard for open trip operator partners.",
      "Ensured the extranet website has appropriate functions and features and operates correctly.",
      "Created incoming/outgoing mail features for the board of commissioners on the Memo and Digital Letter websites.",
      "Contributed to helpdesk (IT Support) management at PT. Jaswita Jabar and its subsidiaries.",
    ],
  },
  {
    role: "IT Staff Internship — Kampus Merdeka Batch 6",
    company: "PT Jasa dan Kepariwisataan Jawa Barat (Perseroda)",
    period: "January 2024 — June 2024",
    points: [
      "Contributed to creating the invoicing feature for the PT Jaswita asset data website.",
      "Ensured the invoicing feature runs as intended.",
      "Created letter drafting menus (generate PDF templates) for the PT Jaswita digital memo website.",
      "Contributed to helpdesk (IT Support) at PT Jaswita.",
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="desktop-bg" style={{ padding: "24px 16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <WinWindow id="experience-win" title="Work Experience" icon="💼">
          <div className="win-body" style={{ padding: 12 }}>
            {experiences.map((exp, i) => (
              <div key={exp.role} style={{ marginBottom: i < experiences.length - 1 ? 16 : 0 }}>
                <div
                  style={{
                    backgroundColor: "var(--win-navy)",
                    color: "var(--win-white)",
                    fontFamily: "var(--font-system)",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "3px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 4,
                    letterSpacing: "0.5px",
                  }}
                >
                  <span>{exp.role}</span>
                  <span style={{ fontWeight: 400, fontFamily: "var(--font-mono)", fontSize: 11 }}>
                    {exp.period}
                  </span>
                </div>

                <div className="bevel-in" style={{ backgroundColor: "var(--win-white)", padding: 8 }}>
                  <div style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 11, marginBottom: 6, color: "var(--win-dark-gray)" }}>
                    @ {exp.company}
                  </div>
                  <ul style={{ paddingLeft: 16 }}>
                    {exp.points.map((point, pi) => (
                      <li
                        key={pi}
                        style={{ fontFamily: "var(--font-system)", fontSize: 12, lineHeight: "18px", listStyleType: "square", marginBottom: 3 }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {i < experiences.length - 1 && <hr className="win-separator" style={{ marginTop: 16 }} />}
              </div>
            ))}
          </div>

          <div className="win-statusbar">
            <span className="win-statusbar-item">{experiences.length} experience(s)</span>
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
