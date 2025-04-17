import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 space-y-3 border border-gray-200">
      {/* Job Title */}
      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>

      {/* Company + Location */}
      <p className="text-gray-600">
        <span className="font-medium">Company-{job.company}</span> <br />
        Location- {job.location}
      </p>

      {/* Salary */}
      <p className="text-green-600 font-medium">💰 {job.salary}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <div className="pt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
