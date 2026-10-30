import { useState, useEffect } from "react";
import { initialJobs } from "./data/mockJobs";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import JobCard from "./components/JobCard";
import PostJobModal from "./components/PostJobModal";
import JobDetailModal from "./components/JobDetailModal";

export default function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // Dark mode state (defaults to false)
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove 'dark-mode' class on document body whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleAddJob = (newJob) => {
    setJobs([newJob, ...jobs]);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Navbar
        onOpenPostModal={() => setIsPostModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="container">
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="job-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onSelect={setSelectedJob} />
            ))
          ) : (
            <div className="no-jobs">
              <p>No job listings found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <PostJobModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onAddJob={handleAddJob}
      />

      <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
