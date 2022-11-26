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
    <div>
      <div></div>
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
