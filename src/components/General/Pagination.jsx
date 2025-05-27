import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const DOTS = '...';

  const getPages = () => {
    const pages = [];

    pages.push(1); 

    if (currentPage > 3) pages.push(DOTS); 

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage + 1 < totalPages - 1) pages.push(DOTS); 

    if (totalPages > 1) pages.push(totalPages); 

    return pages;
  };

  const pages = getPages();

  return (
    <nav className="inline-flex rounded-md shadow-sm gap-1" aria-label="Pagination">
      <button
        onClick={() => paginate(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-3 py-2 text-sm rounded border ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed border-gray-200 bg-white'
            : 'text-gray-700 hover:bg-gray-100 border-gray-300 bg-white'
        }`}
      >
        Prev
      </button>

      {pages.map((page, idx) =>
        page === DOTS ? (
          <span key={`dots-${idx}`} className="px-2 py-2 text-sm text-gray-500 select-none">
            {DOTS}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={`px-3 py-2 text-sm rounded border ${
              page === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 text-sm rounded border ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed border-gray-200 bg-white'
            : 'text-gray-700 hover:bg-gray-100 border-gray-300 bg-white'
        }`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
