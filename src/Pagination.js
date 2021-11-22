import React, { useState, useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  function goToNextPage() {
    // not yet implemented
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    // not yet implemented
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    // not yet implemented
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="pagination-container">
      <div className="data-container">
        {getPaginatedData().map((d, index) => (
          <RenderComponent posts={d} key={index} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => goToPreviousPage()}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            {item}
          </button>
        ))}

        <button
          className={`next ${currentPage === pages ? "disabled" : ""}`}
          onClick={() => goToNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
