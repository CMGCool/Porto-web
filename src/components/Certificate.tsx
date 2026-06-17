"use client";

import WinWindow from "@/components/WinWindow";

const certificates = [
  {
    title: "IC3 Digital Literacy GS6",
    issuer: "Certiport",
    image: "/certiport.png",
    url: "https://www.credly.com/badges/7fdd8a58-9824-4f8f-8001-27b6e388a47f/public_url",
    date: "2023",
  },
  {
    title: "Mikrotik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    image: "/MikroTik_Logo.png",
    url: "https://drive.google.com/file/d/1UN1g3D1lAz2Ib00wltonBw41J4mHIOgN/view?usp=sharing",
    date: "2025",
  },
  {
    title: "PTESOL — Proficiency Test of English",
    issuer: "Balai Bahasa UPI",
    image: "/Logo UPI.png",
    url: "https://balaibahasa.upi.edu/member/certificate_check/2521074",
    date: "2025",
  },
];

export default function Certificate() {
  return (
    <section id="certificates" className="desktop-bg" style={{ padding: "24px 16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <WinWindow id="certificates-win" title="Certificates" icon="">
          <div
            className="win-body"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}
          >
            {certificates.map((cert) => (
              <div key={cert.title} className="win-frame" style={{ margin: 0 }}>
                <div className="win-titlebar" style={{ fontSize: 11 }}>
                  <span> Certificate</span>
                </div>

                <div className="win-body" style={{ padding: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div
                      className="win-viewport"
                      style={{ width: 40, height: 40, backgroundColor: "var(--win-white)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 2 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cert.image} alt={cert.issuer} style={{ width: 30, height: 30, objectFit: "contain" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 11, lineHeight: "14px" }}>
                        {cert.issuer}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--win-dark-gray)" }}>
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <div
                    className="bevel-in"
                    style={{ backgroundColor: "var(--win-white)", padding: "4px 6px", fontFamily: "var(--font-system)", fontSize: 11, lineHeight: "15px", marginBottom: 8 }}
                  >
                    {cert.title}
                  </div>

                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="win-btn" style={{ textDecoration: "none", width: "100%", fontSize: 11 }}>
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="win-statusbar">
            <span className="win-statusbar-item">{certificates.length} certificate(s)</span>
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
