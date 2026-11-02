export default function JobDetailModal({ job, onClose }) {
  if (!job) return null;

  // Check if dark mode is currently active on the body element
  const isDark = document.body.classList.contains("dark-mode");

  // Dynamic styles based on dark mode status
  const currentModalContentStyle = {
    ...modalContentStyle,
    background: isDark ? "#1f2937" : "white",
    color: isDark ? "#f3f4f6" : "#1f2937",
  };

  const subDetailsStyle = {
    display: "flex",
    gap: "1.5rem",
    background: isDark ? "#111827" : "#f9fafb",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    fontSize: "0.875rem",
    color: isDark ? "#9ca3af" : "#4b5563",
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={currentModalContentStyle}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <span
              className="job-badge"
              style={{ display: "inline-block", marginBottom: "8px" }}
            >
              {job.type}
            </span>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: isDark ? "#f9fafb" : "#111827",
              }}
            >
              {job.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: isDark ? "#818cf8" : "#4f46e5",
                marginTop: "4px",
              }}
            >
              {job.company}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.25rem",
              cursor: "pointer",
              padding: "4px",
              color: isDark ? "#9ca3af" : "#4b5563",
            }}
          >
            ✕
          </button>
        </div>

        {/* Sub-details (Location, Salary, Posted Date) */}
        <div style={subDetailsStyle}>
          <div>
            📍{" "}
            <strong style={{ color: isDark ? "#f3f4f6" : "#1f2937" }}>
              Location:
            </strong>{" "}
            {job.location}
          </div>
          <div>
            💰{" "}
            <strong style={{ color: isDark ? "#f3f4f6" : "#1f2937" }}>
              Salary:
            </strong>{" "}
            {job.salary}
          </div>
          <div>
            🕒{" "}
            <strong style={{ color: isDark ? "#f3f4f6" : "#1f2937" }}>
              Posted:
            </strong>{" "}
            {job.postedDate}
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: isDark ? "#f9fafb" : "#111827",
            }}
          >
            About the Role
          </h3>
          <p
            style={{
              color: isDark ? "#9ca3af" : "#4b5563",
              lineHeight: "1.6",
              fontSize: "0.95rem",
            }}
          >
            {job.description}
          </p>
        </div>

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: isDark ? "#f9fafb" : "#111827",
              }}
            >
              Requirements
            </h3>
            <ul
              style={{
                paddingLeft: "1.25rem",
                color: isDark ? "#9ca3af" : "#4b5563",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {job.requirements.map((req, index) => (
                <li key={index} style={{ fontSize: "0.95rem" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            borderTop: `1px solid ${isDark ? "#374151" : "#f3f4f6"}`,
            paddingTop: "1rem",
          }}
        >
          <button onClick={onClose} className="cat-btn">
            Close
          </button>
          <button
            onClick={() => alert("Application submitted successfully!")}
            className="btn-primary"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusing consistent modal styling
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "1rem",
};

const modalContentStyle = {
  padding: "2rem",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "650px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  transition: "background-color 0.2s ease, color 0.2s ease",
};
