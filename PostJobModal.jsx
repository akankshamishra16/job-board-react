import { useState } from "react";

export default function PostJobModal({ isOpen, onClose, onAddJob }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    category: "Engineering",
    salary: "",
    description: "",
    requirements: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format requirements into an array splitting by commas
    const formattedRequirements = formData.requirements
      ? formData.requirements.split(",").map((req) => req.trim())
      : ["General requirements apply"];

    const newJob = {
      id: Date.now(), // Unique ID using current timestamp
      ...formData,
      requirements: formattedRequirements,
      postedDate: "Just now",
    };

    onAddJob(newJob);
    onClose();
  };

  return (
    <div className="modal-overlay" style={modalOverlayStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Post a New Job
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.25rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              Job Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Product Designer"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="search-input"
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Company Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Acme Corp"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="search-input"
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Location
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Remote / Chicago, IL"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="search-input"
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="search-input"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  background: "white",
                }}
              >
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Salary Range
              </label>
              <input
                type="text"
                required
                placeholder="e.g. $120k - $150k"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                className="search-input"
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              Job Description
            </label>
            <textarea
              required
              rows="3"
              placeholder="Describe the role and responsibilities..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="search-input"
              style={{
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              Requirements (separated by commas)
            </label>
            <input
              type="text"
              placeholder="e.g. 3+ years React, Strong communication, Git"
              value={formData.requirements}
              onChange={(e) =>
                setFormData({ ...formData, requirements: e.target.value })
              }
              className="search-input"
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "1rem",
            }}
          >
            <button type="button" onClick={onClose} className="cat-btn">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Publish Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Inline styling for the modal popup container
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "1rem",
};

const modalContentStyle = {
  background: "white",
  padding: "2rem",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};
