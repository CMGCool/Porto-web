"use client";

import { useState } from "react";
import WinWindow from "@/components/WinWindow";

const projects = [
  {
    title: "LunchPolicy.ID",
    desc: "A web-based sentiment analysis platform monitoring public responses to the Indonesian government's free lunch policy. Works in real-time using a BERT deep learning model to analyze opinions from social media and presents results in interactive visualizations.",
    images: ["/LunchPolicy.png", "/Dashboard.png", "/Scraping Setup.png", "/Arsitektur Sistem.png"],
    technologies: ["Python", "Flask", "Bootstrap", "MySQL", "Selenium", "IndoBERT", "Hugging Face"],
    githubUrl: "https://github.com/CMGCool/LuchPolicyID",
  },
  {
    title: "Point of Sales System",
    desc: "A simple point of sales system built with CodeIgniter 3, AdminLTE 3, and Bootstrap 5, used to manage sales for Becuko — a UMKM store in Indonesia.",
    images: ["/becukoPOS.png"],
    technologies: ["CodeIgniter 3", "AdminLTE 3", "Bootstrap 5", "MySQL", "PHP"],
    githubUrl: "https://github.com/CMGCool/projectPOS",
  },
  {
    title: "Sea Glide UAV",
    desc: "An autonomous underwater buoyancy glider that operates without a tether or propeller. Movement is based on pitch and buoyancy changes, using wings to generate lift and propel forward through water.",
    images: ["/Bouyancy engine.jpg", "/seaglide.jpg"],
    technologies: ["Embedded", "Arduino Pro Mini", "C++", "3D Printing"],
    githubUrl: "https://github.com/CMGCool/SeaGlide-UAV",
  },
  {
    title: "Extranet Website — D'Journey",
    desc: "Extranet dashboard for open trip operators on the D'Journey tourism portal (West Java Province). Features service management, fund withdrawal, customer management, review monitoring, and reporting.",
    images: ["/Extranet-djourney.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "jQuery", "Midtrans"],
    githubUrl: "",
  },
  {
    title: "Invoicing Feature — Asset Data Website",
    desc: "Handles transaction billing for customers renting Jaswita assets. Generates invoices, sends them via email, and organizes customers by rented assets and payment transactions.",
    images: ["/Invoicing.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "jQuery"],
    githubUrl: "",
  },
  {
    title: "PDF Drafting — Digital Memo Website",
    desc: "Generates legal documents (Lease Agreements, NDAs, MoUs) on the Jaswita digital memo website. Standardizes and generalizes document templates used across the organization.",
    images: ["/PDF Generate1.png", "/PDF Generate2.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "PDFmake"],
    githubUrl: "",
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const [imgIdx, setImgIdx] = useState<Record<number, number>>({});

  const perPage = 2;
  const totalPages = Math.ceil(projects.length / perPage);
  const visible = projects.slice(page * perPage, page * perPage + perPage);

  const prevImg = (projectIndex: number, imagesLen: number) => {
    const globalId = page * perPage + projectIndex;
    const cur = imgIdx[globalId] ?? 0;
    setImgIdx({ ...imgIdx, [globalId]: cur === 0 ? imagesLen - 1 : cur - 1 });
  };
  const nextImg = (projectIndex: number, imagesLen: number) => {
    const globalId = page * perPage + projectIndex;
    const cur = imgIdx[globalId] ?? 0;
    setImgIdx({ ...imgIdx, [globalId]: (cur + 1) % imagesLen });
  };

  return (
    <section id="projects" className="desktop-bg" style={{ padding: "24px 16px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <WinWindow id="projects-win" title="Projects" icon="">
          {/* Toolbar */}
          <div
            style={{
              backgroundColor: "var(--win-silver)",
              borderBottom: "1px solid var(--bevel-dark)",
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
            }}
          >
            <button
              className="win-btn"
              style={{ minWidth: 60, padding: "2px 8px" }}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              ◀ Back
            </button>
            <button
              className="win-btn"
              style={{ minWidth: 60, padding: "2px 8px" }}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              Next ▶
            </button>
            <span style={{ color: "var(--win-black)", marginLeft: 8 }}>
              Page {page + 1} of {totalPages} — {projects.length} items
            </span>
          </div>

          <div
            className="win-body"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 12 }}
          >
            {visible.map((project, pi) => {
              const globalId = page * perPage + pi;
              const curImg = imgIdx[globalId] ?? 0;

              return (
                <div key={project.title} className="win-frame" style={{ margin: 0 }}>
                  <div className="win-titlebar" style={{ fontSize: 11 }}>
                    <span> {project.title}</span>
                  </div>

                  <div style={{ position: "relative" }}>
                    <div className="win-viewport" style={{ height: 200, margin: "6px 6px 0" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.images[curImg]}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>

                    {project.images.length > 1 && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 8,
                          left: 0,
                          right: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 14px",
                        }}
                      >
                        <button
                          className="win-btn"
                          style={{ padding: "1px 6px", minWidth: "auto", fontSize: 10 }}
                          onClick={() => prevImg(pi, project.images.length)}
                        >◀</button>
                        <span style={{ backgroundColor: "var(--win-silver)", padding: "1px 6px", fontSize: 10, fontFamily: "var(--font-mono)", border: "1px solid var(--win-black)" }}>
                          {curImg + 1}/{project.images.length}
                        </span>
                        <button
                          className="win-btn"
                          style={{ padding: "1px 6px", minWidth: "auto", fontSize: 10 }}
                          onClick={() => nextImg(pi, project.images.length)}
                        >▶</button>
                      </div>
                    )}
                  </div>

                  <div className="win-body" style={{ paddingTop: 8 }}>
                    <p style={{ fontFamily: "var(--font-system)", fontSize: 12, lineHeight: "16px", marginBottom: 8 }}>
                      {project.desc}
                    </p>
                    <hr className="win-separator" />
                    <div style={{ marginTop: 6, marginBottom: 8 }}>
                      <span style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 11, display: "block", marginBottom: 4 }}>
                        Technologies:
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        {project.technologies.map((t) => (
                          <span key={t} className="win-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                    {project.githubUrl && (
                      <>
                        <hr className="win-separator" />
                        <div style={{ marginTop: 6 }}>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="win-btn" style={{ textDecoration: "none" }}>
                             View on GitHub
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="win-statusbar">
            <span className="win-statusbar-item">
              Showing {page * perPage + 1}–{Math.min(page * perPage + perPage, projects.length)} of {projects.length}
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>
              {projects.length} project(s)
            </span>
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
