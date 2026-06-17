"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="win-btn"
      style={{
        position: "fixed",
        bottom: 44,
        right: 16,
        zIndex: 2100,
        minWidth: "auto",
        padding: "4px 8px",
        fontSize: 14,
      }}
    >
      ▲
    </button>
  );
}
