"use client";

import { useEffect, useState, useMemo } from "react";
import WinWindow from "@/components/WinWindow";
import PixelIcon from "@/components/PixelIcon";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface PushEventItem {
  id: string;
  repo: string;
  branch: string;
  date: string;
  message?: string;
}

const LEVEL_COLORS = [
  "#d8d8d8", // Level 0: Retro Silver-Gray
  "#9be9a8", // Level 1: Light Green
  "#40c463", // Level 2: Medium Green
  "#30a14e", // Level 3: Deep Green
  "#216e39", // Level 4: Max Green
];

export default function GithubActivity() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [recentPushes, setRecentPushes] = useState<PushEventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hoveredDay, setHoveredDay] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);

  const fetchData = async (isManual = false) => {
    setLoading(true);
    setError(false);
    try {
      // 1. Fetch contribution calendar data directly from internal API (live from GitHub)
      let contData: { total?: { lastYear?: number }; contributions?: ContributionDay[] } | null = null;
      try {
        const query = isManual ? `?force=true&t=${Date.now()}` : "";
        const contRes = await fetch(`/api/github-contributions${query}`);
        if (contRes.ok) {
          contData = await contRes.json();
        }
      } catch {
        // Fallback if internal route is unreachable
      }

      // Fallback to jogruber if needed
      if (!contData || !contData.contributions || contData.contributions.length === 0) {
        const fallbackRes = await fetch("https://github-contributions-api.jogruber.de/v4/CMGCool?y=last");
        if (fallbackRes.ok) {
          contData = await fallbackRes.json();
        }
      }

      if (contData && contData.contributions) {
        setContributions(contData.contributions || []);
        setTotalContributions(contData.total?.lastYear || 0);
      } else {
        throw new Error("Failed to load contributions");
      }

      // 2. Fetch recent public events for push logs
      const eventsRes = await fetch("https://api.github.com/users/CMGCool/events/public");
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        const pushes: PushEventItem[] = [];
        for (const ev of eventsData) {
          if (ev.type === "PushEvent") {
            const branch = ev.payload?.ref?.replace("refs/heads/", "") || "main";
            const firstCommit = ev.payload?.commits?.[0]?.message;
            pushes.push({
              id: ev.id,
              repo: ev.repo?.name || "Repository",
              branch,
              date: ev.created_at,
              message: firstCommit || "Git push commit update",
            });
          }
          if (pushes.length >= 4) break;
        }
        setRecentPushes(pushes);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Group contributions into 52+ columns of 7 days (Sunday - Saturday)
  const weeks = useMemo(() => {
    if (!contributions.length) return [];
    const result: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Pad first week if day of week > 0
    const firstDayOfWeek = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push({ date: "", count: -1, level: -1 });
    }

    contributions.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }

    return result;
  }, [contributions]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formatRelativeTime = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diffSecs = Math.floor((now.getTime() - d.getTime()) / 1000);
    if (diffSecs < 60) return "just now";
    if (diffSecs < 3600) return `${Math.floor(diffSecs / 60)}m ago`;
    if (diffSecs < 86400) return `${Math.floor(diffSecs / 3600)}h ago`;
    return `${Math.floor(diffSecs / 86400)}d ago`;
  };

  return (
    <section id="github-activity" className="desktop-bg" style={{ padding: "16px 16px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <WinWindow id="github-win" title="GitHub Activity — CMGCool" icon="github">

          <div className="win-body" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Header profile & summary bar */}
            <div
              className="bevel-out"
              style={{
                backgroundColor: "var(--win-silver)",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <PixelIcon name="github" size={24} />
                <div>
                  <div style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 13 }}>
                    CMGCool (Randi Andhika Djaja)
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--win-dark-gray)" }}>
                    {loading
                      ? "Querying GitHub telemetry..."
                      : `${totalContributions} contributions in the last year`}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                <button
                  className="win-btn"
                  onClick={() => fetchData(true)}
                  style={{ minWidth: 70, padding: "2px 8px" }}
                  title="Reload GitHub data"
                >
                  Refresh
                </button>
                <a
                  href="https://github.com/CMGCool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-btn win-btn--primary"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* ── CONTRIBUTION MATRIX (KOTAK-KOTAK HIJAU) ── */}
            <div className="win-frame" style={{ margin: 0 }}>
              <div className="win-titlebar" style={{ fontSize: 11 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <PixelIcon name="skills" size={12} />
                  Contribution Matrix — Yearly Activity
                </span>
              </div>

              <div className="win-body" style={{ padding: 10 }}>
                {loading ? (
                  <div
                    className="bevel-in"
                    style={{
                      backgroundColor: "var(--win-white)",
                      padding: 24,
                      textAlign: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                    }}
                  >
                    <div>Connecting to remote server: api.github.com...</div>
                    <div style={{ marginTop: 8, color: "var(--win-dark-gray)" }}>
                      Reading commit blocks [■■■■■■□□□□] 60%
                    </div>
                  </div>
                ) : error ? (
                  <div
                    className="bevel-in"
                    style={{
                      backgroundColor: "var(--win-white)",
                      padding: 16,
                      textAlign: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                    }}
                  >
                    <div style={{ color: "#ba1a1a", marginBottom: 6 }}>
                      ⚠️ Error: Unable to fetch live contribution stream.
                    </div>
                    <button className="win-btn" onClick={() => fetchData(true)}>
                      Retry Connection
                    </button>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    {/* Tooltip hovering over day */}
                    {hoveredDay && (
                      <div
                        style={{
                          position: "fixed",
                          left: hoveredDay.x + 12,
                          top: hoveredDay.y - 30,
                          backgroundColor: "#ffffe1",
                          color: "#000000",
                          border: "1px solid #000000",
                          padding: "2px 6px",
                          fontFamily: "var(--font-system)",
                          fontSize: 11,
                          zIndex: 9999,
                          pointerEvents: "none",
                          whiteSpace: "nowrap",
                          boxShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                        }}
                      >
                        <strong>{hoveredDay.day.count} contribution{hoveredDay.day.count === 1 ? "" : "s"}</strong> on{" "}
                        {formatDate(hoveredDay.day.date)}
                      </div>
                    )}

                    {/* Matrix Viewport with Retro Inset Scroll */}
                    <div
                      className="bevel-in"
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "12px 10px 10px",
                        overflowX: "auto",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          gap: 3,
                          alignItems: "flex-start",
                        }}
                      >
                        {weeks.map((week, wIdx) => (
                          <div
                            key={wIdx}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 3,
                            }}
                          >
                            {week.map((day, dIdx) => {
                              if (day.count === -1) {
                                return (
                                  <div
                                    key={dIdx}
                                    style={{
                                      width: 11,
                                      height: 11,
                                      visibility: "hidden",
                                    }}
                                  />
                                );
                              }

                              const color = LEVEL_COLORS[day.level] || LEVEL_COLORS[0];

                              return (
                                <div
                                  key={day.date}
                                  onMouseEnter={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoveredDay({ day, x: rect.left, y: rect.top });
                                  }}
                                  onMouseLeave={() => setHoveredDay(null)}
                                  style={{
                                    width: 11,
                                    height: 11,
                                    backgroundColor: color,
                                    border: "1px solid rgba(0,0,0,0.18)",
                                    boxSizing: "border-box",
                                    cursor: "pointer",
                                    shapeRendering: "crispEdges",
                                  }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      {/* Legend */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: 4,
                          marginTop: 10,
                          fontSize: 10,
                          fontFamily: "var(--font-mono)",
                          color: "var(--win-dark-gray)",
                        }}
                      >
                        <span>Less</span>
                        {LEVEL_COLORS.map((c, i) => (
                          <div
                            key={i}
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: c,
                              border: "1px solid rgba(0,0,0,0.2)",
                            }}
                          />
                        ))}
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── RECENT PUSH LOG TABLE ── */}
            <div className="win-frame" style={{ margin: 0 }}>
              <div className="win-titlebar" style={{ fontSize: 11 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <PixelIcon name="cv" size={12} />
                  Event Log — Recent Push History
                </span>
              </div>

              <div className="win-body" style={{ padding: 8 }}>
                <div
                  className="bevel-in"
                  style={{
                    backgroundColor: "var(--win-white)",
                    overflowX: "auto",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      textAlign: "left",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "var(--win-silver)",
                          borderBottom: "1px solid var(--bevel-dark)",
                          color: "var(--win-black)",
                        }}
                      >
                        <th style={{ padding: "4px 8px", borderRight: "1px solid var(--bevel-dark)" }}>Event</th>
                        <th style={{ padding: "4px 8px", borderRight: "1px solid var(--bevel-dark)" }}>Repository</th>
                        <th style={{ padding: "4px 8px", borderRight: "1px solid var(--bevel-dark)" }}>Branch</th>
                        <th style={{ padding: "4px 8px", borderRight: "1px solid var(--bevel-dark)" }}>Commit Note</th>
                        <th style={{ padding: "4px 8px" }}>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPushes.length > 0 ? (
                        recentPushes.map((p, idx) => (
                          <tr
                            key={p.id}
                            style={{
                              borderBottom: idx < recentPushes.length - 1 ? "1px solid #eeeeee" : "none",
                              backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fbfbfb",
                            }}
                          >
                            <td style={{ padding: "4px 8px", borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" }}>
                              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                📦 <strong>Push</strong>
                              </span>
                            </td>
                            <td style={{ padding: "4px 8px", borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" }}>
                              <a
                                href={`https://github.com/${p.repo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "var(--win-navy)", textDecoration: "none", fontWeight: 700 }}
                              >
                                {p.repo}
                              </a>
                            </td>
                            <td style={{ padding: "4px 8px", borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" }}>
                              <span className="win-tag" style={{ fontSize: 10 }}>{p.branch}</span>
                            </td>
                            <td style={{ padding: "4px 8px", borderRight: "1px solid #eeeeee", maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {p.message}
                            </td>
                            <td style={{ padding: "4px 8px", color: "var(--win-dark-gray)", whiteSpace: "nowrap" }}>
                              {formatRelativeTime(p.date)}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} style={{ padding: "8px 12px", textAlign: "center", color: "var(--win-dark-gray)" }}>
                            {loading ? "Reading event history..." : "No recent public push events detected."}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar" style={{ justifyContent: "space-between" }}>
            <span className="win-statusbar-item" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <PixelIcon name="status-online" size={7} />
              Host: api.github.com
            </span>
            <span className="win-statusbar-item">{contributions.length} days recorded</span>
            <span className="win-statusbar-item">Ready</span>
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
