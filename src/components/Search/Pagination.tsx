import { FunctionComponent } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => string;
  maxPage: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage,
  maxPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-3 items-center">
      {currentPage > 1 && (
        <Link to={onPageChange(currentPage - 1)}>
          <MdArrowBackIos size={25} />
        </Link>
      )}

      {currentPage < 5 ? (
        <>
          {new Array(maxPage < 5 ? maxPage : 5).fill(" ").map((_, index) => (
            <Link to={onPageChange(currentPage + 1)} key={index}>
              {index + 1}
            </Link>
          ))}

          {maxPage < 5 && (
            <>
              {maxPage < 6 ? <span>...</span> : null}
              <Link to={onPageChange(maxPage)}>{maxPage}</Link>
            </>
          )}
        </>
      ) : currentPage < maxPage - 4 ? (
        <>
          <Link to={onPageChange(1)}>1</Link>
          <span>...</span>
          {new Array(5).map((_, index) => (
            <Link to={onPageChange(maxPage - 4 + index)}>
              {maxPage - 4 + index}
            </Link>
          ))}
        </>
      ) : (
        <>
          <Link
            to={onPageChange(1)}
            className={`tw-pagination-btn ${
              currentPage === 1 && "!bg-primary text-white"
            }`}
          >
            1
          </Link>
          <span>...</span>
          {new Array(5).fill("").map((_, index) => (
            <Link key={index} to={onPageChange(currentPage - 2 + index)}>
              {currentPage - 2 + index}
            </Link>
          ))}
          <span>...</span>
          <Link to={onPageChange(maxPage)}>{maxPage}</Link>
        </>
      )}

      {currentPage < maxPage && (
        <Link to={onPageChange(currentPage + 1)}>
          <MdArrowForwardIos size={25} />
        </Link>
      )}
       </div>
    </div>
  );
};

export default Pagination;
