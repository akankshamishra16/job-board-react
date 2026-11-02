export default function Navbar({ onOpenPostModal, darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <div className="nav-logo">JB</div>
        <span className="nav-title">DevJobs</span>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="cat-btn"
          style={{ cursor: "pointer" }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button onClick={onOpenPostModal} className="btn-primary">
          Post a Job
        </button>
      </div>
    </header>
  );
}
