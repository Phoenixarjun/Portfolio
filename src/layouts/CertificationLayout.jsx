import React, { useState, useEffect } from 'react';
import CountCard from '../components/General/CountCard';
import certifications from '../certification';
import CertificateCard from '../components/General/CertificateCard';
import FilterLayout from './FilterLayout';
import NoResultFound from '../components/General/NoResultFound';
import Pagination from '../components/General/Pagination';

const CertificationLayout = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [platformCount, setPlatformCount] = useState(0);
  const [specializationCount, setSpecializationCount] = useState(0);
  const [internCount, setInternCount] = useState(0);
  const [filteredCertifications, setFilteredCertifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage] = useState(5);

  const sortCertifications = (certs) => {
    return [...certs].sort((a, b) => {
      const dateA = new Date(a.completionYear);
      const dateB = new Date(b.completionYear);
      if (dateB - dateA !== 0) return dateB - dateA;
      return a.name.localeCompare(b.name);
    });
  };

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
      return certifications.filter(cert => cert.category === 'Course').length;
    };

    const countPlatforms = () => {
      const platformSet = new Set();
      certifications.forEach(cert => {
        cert.platforms.forEach(platform => platformSet.add(platform));
      });
      return platformSet.size;
    };

    const countSpecializations = () => {
      return 5; 
    };

    const countInternships = () => {
      return certifications.filter(cert =>
        cert.category === 'Internship' || cert.category === 'Intern'
      ).length;
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

    setFilteredCertifications(sortCertifications(certifications));
  }, []);

  const matchesSearch = (cert, query) => {
    const normalizedQuery = query.toLowerCase();

    const checkValue = (value) => {
      if (typeof value === 'string') return value.toLowerCase().includes(normalizedQuery);
      if (Array.isArray(value)) return value.some(item => checkValue(item));
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).some(val => checkValue(val));
      }
      return false;
    };

    return Object.values(cert).some(val => checkValue(val));
  };

  const handleFilterChange = (filters) => {
    const { type, platform, language, search } = filters;
    const filtered = certifications.filter(cert => {
      const matchesType = type === 'All' || cert.category.toLowerCase() === type.toLowerCase();
      const matchesPlatform = platform === 'All' || cert.platforms.some(p => p.toLowerCase() === platform.toLowerCase());
      const matchesLanguage = language === 'All' || cert.language.some(l => l.toLowerCase() === language.toLowerCase());
      const matchesSearchInput = search === '' || matchesSearch(cert, search);

      return matchesType && matchesPlatform && matchesLanguage && matchesSearchInput;
    });

    setFilteredCertifications(sortCertifications(filtered));
    setCurrentPage(1);
  };

  const indexOfLastCert = currentPage * certificatesPerPage;
  const indexOfFirstCert = indexOfLastCert - certificatesPerPage;
  const currentCerts = filteredCertifications.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(filteredCertifications.length / certificatesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const labels = [
    { name: "Courses", count: courseCount },
    { name: "Platforms", count: platformCount },
    { name: "Specializations", count: specializationCount },
    { name: "Internships", count: internCount }
  ];

  return (
    <div>
      <div className='flex flex-col items-center justify-center bg-[url("/images/QuoteWallpaper2.jpg")] font-serif bg-cover bg-center h-64 p-10'>
        <h1 className='text-primary text-center mb-4 text-lg md:text-xl lg:text-2xl px-5 md:px-20 lg:px-40'>
          CERTIFICATIONS
        </h1>
      </div>

      <div className='flex flex-col items-center justify-around mt-10 flex-wrap gap-4 p-5 md:flex-row'>
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
          name='Certifications'
        />
      </div>

      <div className='flex flex-col gap-8 mt-10'>
        {currentCerts.length > 0 ? (
          currentCerts.map((certification, index) => (
            <CertificateCard key={index} certification={certification} />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>

      {filteredCertifications.length > certificatesPerPage && (
        <div className="flex justify-center mt-8 mb-12 p-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default CertificationLayout;
