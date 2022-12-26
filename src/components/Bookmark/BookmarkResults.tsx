import { FunctionComponent } from "react";
import { HiCheck } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Items } from "../../shared/types";
import AnimeItem from "../Common/AnimeItem";
import FilmItem from "../Common/FilmItem";

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
      {/* Error Message  */}
      {films?.length === 0 && !isLoading && (
        <div className="text-white text-2xl text-center col-span-full mt-10">
          <div className=" flex justify-center">
            <LazyLoadImage
              src="/Images/error.png"
              effect="opacity"
              alt="error"
              className="w-[600px] object-cover"
            />
          </div>
          <p className="mt-5">
            {pageType === "bookmark"
              ? "Your bookmark list for this type is Empty Empty."
              : "Your recently watched films for this type is empty. "}

            {pageType === "recent"
              ? "Your recently watched films for this type is empty. "
              : null}
          </p>
        </div>
      )}

      {films?.length > 0 &&
        films.map((item) => (
          <li key={item.id} className="relative">
            <FilmItem item={item} />

            {isEditting && (
              <button
                onClick={() =>
                  setSelection((prev: number[]) =>
                    prev.includes(item.id)
                      ? prev.filter((id: number) => id !== item.id)
                      : prev.concat(item.id)
                  )
                }
                className="w-6 h-6 border-primary border-[3px] tw-absolute-center-horizontal mt-2 tw-flex-center"
              >
                <HiCheck
                  size={20}
                  className={`${
                    selections.includes(item.id) ? "opacity-100" : "opacity-0"
                  } transition duration-300 text-white`}
                />
              </button>
            )}
          </li>
        ))}
    </>
  );
};

export default BookmarkResults;
