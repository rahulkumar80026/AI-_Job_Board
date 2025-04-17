export const getSuggestedJobs = (resumeText, jobs) => {
    const keywords = resumeText.toLowerCase();
    return jobs.filter((job) =>
      job.tags.some((tag) => keywords.includes(tag.toLowerCase()))
    );
  };
  