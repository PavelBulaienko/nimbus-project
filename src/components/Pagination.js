import { Pagination as PaginationBootstrap } from "react-bootstrap";

const Pagination = ({ perPage, listLength, paginate, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(listLength / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <PaginationBootstrap>
        {pageNumber.map((num) => (
          <PaginationBootstrap.Item
            key={num}
            onClick={() => {
              paginate(num);
            }}
            active={currentPage === num}
          >
            {num}
          </PaginationBootstrap.Item>
        ))}
      </PaginationBootstrap>
    </div>
  );
};

export default Pagination;
