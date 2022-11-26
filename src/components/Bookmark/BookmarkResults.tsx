import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Items } from "../../shared/types";

interface BookmarkResultsProps {
  films: Items[];
  isEditting: boolean;
  pageType: string;
  selections: number[];
  setSelection: any;
  isLoading: boolean;
}

const BookmarkResults: FunctionComponent<BookmarkResultsProps> = ({
  films,
  isEditting,
  isLoading,
  pageType,
  selections,
  setSelection,
}) => {
  return (
    <>
      {films.length === 0 && !isLoading && (
        <div className="text-white text-2xl text-center col-span-full mt-10">
          <div className=" flex justify-center">
            <LazyLoadImage
              src="/error.png"
              effect="opacity"
              alt="error"
              className="w-[600px] object-cover"
            />
          </div>
          <p className="mt-5">
            {pageType === "bookmark"
              ? "Your bookmark list for this type is Empty Empty."
              : "Your recently watched films for this type is empty. "}
          </p>
        </div>
      )}
    </>
  );
};

export default BookmarkResults;
