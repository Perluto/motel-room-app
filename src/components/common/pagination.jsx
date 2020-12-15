import React from "react";
import lodash from "lodash";

const Pagination = (props) => {
  const { itemTotal, pageSize, currentPage, onPageChange } = props;
  const pageCnt = Math.ceil(itemTotal / pageSize);
  if (pageCnt === 1) return null;
  const pages = lodash.range(1, pageCnt + 1);
  return (
    <nav aria-label="Page navigation" className="ml-auto mr-auto">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
              href={"#" + page}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
