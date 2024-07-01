import React, { useState, useEffect } from 'react';

const jobs = [
  {
    id: 1,
    JobPosition: 'Software Engineer',
    JobDescription: 'We are looking for a highly skilled software engineer to join our team.',
    Location: 'New York',
    Experience: '3+ years',
  },
  {
    id: 2,
    JobPosition: 'Data Scientist',
    JobDescription: 'We are seeking a data scientist to analyze and interpret complex data sets.',
    Location: 'San Francisco',
    Experience: '5+ years',
  },
  {
    id: 3,
    JobPosition: 'Product Manager',
    JobDescription: 'We are looking for a product manager to lead the development of new products.',
    Location: 'Chicago',
    Experience: '2+ years',
  },
  // Add more jobs here
];

function Career() {
  const [loaded, setloaded] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchTerm = event.target.value.toLowerCase();
    const filteredJobs = jobs.filter((job) => {
      return (
        job.JobPosition.toLowerCase().includes(searchTerm) ||
        job.JobDescription.toLowerCase().includes(searchTerm) ||
        job.Location.toLowerCase().includes(searchTerm) ||
        job.Experience.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredJobs(filteredJobs);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setloaded(true);
    }, 1000); // 1000ms = 1s, the same duration as the loading bar animation

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  return ( 
    <div className='team-container'>
      <div className="image">
      </div>
      <h1>Join Our Creative Team</h1>
      <p>Explore exciting career opportunities with us.</p>
          <input
          className='career-search'
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for jobs"
          />
          
            { loaded && filteredJobs.map((job) => (
              <div className="career-tile" key={job.id}>
                
                  <h2 className='career-title'>{job.JobPosition}</h2>
                  <p>{job.JobDescription}</p>
                  <p>Location: {job.Location}</p>
                  <p>Experience: {job.Experience}</p>
                  <button className='career-apply'>Apply Now</button>
                
              </div>
            ))}          
        
    </div>
  );
}

export default Career;