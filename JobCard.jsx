export default function JobCard({ job, onSelect }) {
  return (
    <div onClick={() => onSelect(job)} className="job-card">
      <div>
        <div className="job-header">
          <div>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
          </div>
          <span className="job-badge">{job.type}</span>
        </div>
        <p className="job-desc">{job.description}</p>
      </div>

      <div className="job-footer">
        <span>📍 {job.location}</span>
        <span className="job-salary">{job.salary}</span>
      </div>
    </div>
  );
}
