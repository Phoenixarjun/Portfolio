import React, { useState, useEffect } from 'react';
import CountCard from '../components/General/CountCard';
import certifications from '../certification';
import CertificateCard from '../components/General/CertificateCard';
import FilterLayout from './FilterLayout';
import NoResultFound from '../components/General/NoResultFound';

const CertificationLayout = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [platformCount, setPlatformCount] = useState(0);
  const [specializationCount, setSpecializationCount] = useState(0);
  const [internCount, setInternCount] = useState(0);
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);

  const extractUniqueValues = (key) => {
    const uniqueValues = new Set();
    certifications.forEach(cert => {
      if (Array.isArray(cert[key])) {
        cert[key].forEach(item => uniqueValues.add(item));
      } else {
        uniqueValues.add(cert[key]);
      }
    });
    return ['All', ...Array.from(uniqueValues)];
  };

  const types = extractUniqueValues('category');
  const platforms = extractUniqueValues('platforms');
  const languages = extractUniqueValues('language');

  useEffect(() => {
    const countCourses = () => {
      let count = 0;
      certifications.forEach(cert => {
        if (cert.category === 'Course') {
          count++;
        }
      });
      return count;
    };

    const countPlatforms = () => {
      let platformSet = new Set();
      certifications.forEach(cert => {
        cert.platforms.forEach(platform => platformSet.add(platform));
      });
      return platformSet.size;
    };

    const countSpecializations = () => {
      return 5; 
    };

    const countInternships = () => {
      let count = 0;
      certifications.forEach(cert => {
        if (cert.category === 'Intern') {
          count++;
        }
      });
      return count;
    };

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

    animateCount(countCourses(), setCourseCount);
    animateCount(countPlatforms(), setPlatformCount);
    animateCount(countSpecializations(), setSpecializationCount);
    animateCount(countInternships(), setInternCount);
  }, []);

  const handleFilterChange = (filters) => {
    const { type, platform, language, search } = filters;
    const filtered = certifications.filter(cert => {
      const matchesType = type === 'All' || cert.category.toLowerCase() === type.toLowerCase();
      const matchesPlatform = platform === 'All' || cert.platforms.some(p => p.toLowerCase() === platform.toLowerCase());
      const matchesLanguage = language === 'All' || cert.language.some(l => l.toLowerCase() === language.toLowerCase());
      const matchesSearch = search === '' || cert.name.toLowerCase().includes(search.toLowerCase()) || cert.description.toLowerCase().includes(search.toLowerCase()) || cert.language.some(l => l.toLowerCase().includes(search.toLowerCase()));

      return matchesType && matchesPlatform && matchesLanguage && matchesSearch;
    });
    setFilteredCertifications(filtered);
  };

  const labels = [
    {
      name: "Courses",
      count: courseCount,
    },
    {
      name: "Platforms",
      count: platformCount,
    },
    {
      name: "Specializations",
      count: specializationCount, 
    },
    {
      name: "Internships",
      count: internCount,
    }
  ];

  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-10 bg-[url("/images/QuoteWallpaper2.jpg")] font-serif bg-cover bg-center h-64 p-10'>
        <h1 className='text-primary text-center mb-4 text-lg md:text-xl lg:text-2xl px-5 md:px-20 lg:px-40'>
          CERTIFICATIONS
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
          types={types}
          platforms={platforms}
          languages={languages}
        />
      </div>
      <div className='flex flex-col gap-8 mt-10'>
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((certification, index) => (
            <CertificateCard key={index} certification={certification} />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};

export default CertificationLayout;
