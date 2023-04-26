const Pagination = ({
  currentPage,
  setCurrentPage,
  totalComments,
  limit,
  componentRef,
}) => {
  const lastPage = Math.ceil(totalComments / limit);

  const nextPage = (componentRef) => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
      componentRef.current.scrollIntoView();
    }
  };

  const prevPage = (componentRef) => {
    setCurrentPage((prev) => prev - 1);
    componentRef.current.scrollIntoView();
  };

  return (
    <div className="pagination-container">
      <button
        onClick={() => prevPage(componentRef)}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        Prev Page
      </button>

      <p className="pagination__page-of-pages">
        Page {currentPage} of {lastPage}
      </p>

      <button
        onClick={() => nextPage(componentRef)}
        disabled={currentPage === lastPage}
        className="pagination-btn"
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
