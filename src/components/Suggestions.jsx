import React from 'react';
import JobCard from './JobCard';

const Suggestions = ({ jobs }) => {
  return (
    <div className="grid gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Suggestions;
