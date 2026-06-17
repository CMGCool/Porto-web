export default function Footer() {
  return (
    <footer
      className="desktop-bg"
      style={{ paddingBottom: 16, paddingTop: 8 }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto 0",
          padding: "0 16px",
        }}
      >
        <div
          className="win-frame"
          style={{ padding: 0 }}
        >
          <div className="win-statusbar" style={{ justifyContent: "space-between" }}>
            <span className="win-statusbar-item">
              © {new Date().getFullYear()} Randi Andhika Djaja
            </span>
            <span className="win-statusbar-item">
              Built with Next.js + Tailwind CSS
            </span>
            <span className="win-statusbar-item">
              🟢 Online
            </span>
          </div>
        </div>
      </div>
      {/* Taskbar spacer */}
      <div style={{ height: 4 }} />
    </footer>
  );
}
