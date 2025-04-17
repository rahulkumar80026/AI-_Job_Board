import React, { useState } from "react";
import jobsData from "../data/jobs.json";
import { getSuggestedJobs } from "../utils/aiSuggest";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import ResumeUpload from "../components/ResumeUpload";
import Suggestions from "../components/Suggestions";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [suggestedJobs, setSuggestedJobs] = useState([]);

  const handleFilter = (tag) => {
    const result = jobsData.filter((job) => job.tags.includes(tag));
    setFilteredJobs(result);
  };

  const handleResume = (resumeText) => {
    const suggestions = getSuggestedJobs(resumeText, jobsData);
    setSuggestedJobs(suggestions);
  };

  return (
    <div className="p-6 ">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-4"></h1>
      <ResumeUpload onUpload={handleResume} />
      <FilterBar onFilter={handleFilter} />
      <h2 className="text-xl font-semibold mt-6 mb-2">Job Listings</h2>
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div> 
      {suggestedJobs.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Suggested Jobs (AI)</h2>
          <Suggestions jobs={suggestedJobs} />
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;