// AllProjectLayout.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/General/Navbar';
import CountCard from '../components/General/CountCard';
import projects from '../project';
import FilterLayout from './FilterLayout';
import ProjectCard from '../components/HomePage/ProjectCard';
import NoResultFound from '../components/General/NoResultFound';

const AllProjectLayout = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [domainsCount, setDomainsCount] = useState(0);
  const [soloProjectsCount, setSoloProjectsCount] = useState(0);
  const [collaborationsCount, setCollaborationsCount] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const extractUniqueValues = (key) => {
    const uniqueValues = new Set();
    projects.forEach(project => {
      if (key === 'technology') {
        project.technology.forEach(tech => uniqueValues.add(tech.techName));
      } else if (Array.isArray(project[key])) {
        project[key].forEach(item => uniqueValues.add(item));
      } else {
        uniqueValues.add(project[key]);
      }
    });
    return ['All', ...Array.from(uniqueValues)];
  };

  const domains = extractUniqueValues('domains');
  const technologies = extractUniqueValues('technology'); 
  const collaborations = extractUniqueValues('collaboration');

  useEffect(() => {
    const totalProjects = projects.length;
    setProjectsCount(totalProjects);

    let domainSet = new Set();
    projects.forEach(project => {
      if (Array.isArray(project.domains)) {
        project.domains.forEach(domain => domainSet.add(domain));
      }
    });
    setDomainsCount(domainSet.size);

    const soloProjects = projects.filter(project => project.collaboration === 'Solo').length;
    setSoloProjectsCount(soloProjects);

    const collaborationProjects = projects.filter(project => project.collaboration === 'Team').length;
    setCollaborationsCount(collaborationProjects);

    const animateCount = (end, setter) => {
      let start = 0;
      const duration = 1000;
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    };

    animateCount(totalProjects, setProjectsCount);
    animateCount(domainSet.size, setDomainsCount);
    animateCount(soloProjects, setSoloProjectsCount);
    animateCount(collaborationProjects, setCollaborationsCount);

  }, []);

  const handleFilterChange = (filters) => {
    const { domain, technology, collaboration, search } = filters;

    const filtered = projects.filter(project => {
      const matchesDomain = domain === 'All' || (Array.isArray(project.domains) && project.domains.includes(domain));
      const matchesTechnology = technology === 'All' || (Array.isArray(project.technology) && project.technology.some(tech => tech.techName === technology));
      const matchesCollaboration = collaboration === 'All' || project.collaboration.toLowerCase() === collaboration.toLowerCase();
      const matchesSearch = search === '' || project.name.toLowerCase().includes(search.toLowerCase()) || project.shortDescription.toLowerCase().includes(search.toLowerCase()) || project.technology.some(tech => tech.techName.toLowerCase().includes(search.toLowerCase())) || project.domains.some(dom => dom.toLowerCase().includes(search.toLowerCase())) || project.collaboration.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase());

      return matchesDomain && matchesTechnology && matchesCollaboration && matchesSearch;
    });

    setFilteredProjects(filtered);
  };

  const labels = [
    { name: 'Projects', count: projectsCount },
    { name: 'Domains', count: domainsCount },
    { name: 'Solo Projects', count: soloProjectsCount },
    { name: 'Collaboration Projects', count: collaborationsCount }
  ];

  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-10 bg-[url("/images/QuoteWallpaper2.jpg")] font-serif bg-cover bg-center h-64 p-10'>
        <h1 className='text-primary text-center mb-4 text-lg md:text-xl lg:text-2xl px-5 md:px-20 lg:px-40'>
          PROJECTS
        </h1>
      </div>
      <div className='flex items-center justify-around mt-10'>
        {labels.map((label, index) => (
          <CountCard key={index} label={label.name} count={label.count} />
        ))}
      </div>
      <div>
        <FilterLayout
          onFilterChange={handleFilterChange}
          domains={domains}
          technologies={technologies}
          collaborations={collaborations}
        />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8 mt-10'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <ProjectCard 
              key={index} 
              title={item.name}
              shortDescription={item.shortDescription}
              cardImg={item.cardImg}
            />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};

export default AllProjectLayout;
