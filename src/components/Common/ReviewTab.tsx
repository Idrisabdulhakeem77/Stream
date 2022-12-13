import { Reviews } from "../../shared/types";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SortReview } from "../FilmDetail/SortReview";
import { LazyLoadImage } from "react-lazy-load-image-component";
import StarRating from '../FilmDetail/StarRating'
import ReadMore from "./ReadMore"
import { calculateTimePassed} from "../../shared/utils"
interface ReviewTabProps {
  reviews: Reviews[];
}

interface ReviewContentProps {
  reviews: Reviews[];
  type: string;
}

const ReviewContent = ({ reviews, type }: ReviewContentProps) => {
  const [parent] = useAutoAnimate();
  return (
    <ul
      // @ts-ignore
      ref={parent}
    >
      {SortReview(reviews, type).map((review) => (
        <li key={review.id} className="flex gap-7">
        <div className="shrink-0 max-w-[60px] w-full h-[60px]">
          <LazyLoadImage
            src="/Images/user.svg"
            alt="reviewer"
            effect="opacity"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <p className="text-white">{review.author}</p>
            <StarRating
              star={Math.round(review.author_details.rating / 2)}
              maxStar={5}
            />
          </div>
          <ReadMore limitTextNumber={150}>{review.content}</ReadMore>
          <p className="text-right text-base">
            {calculateTimePassed(new Date(review.created_at).getTime())}
          </p>
        </div>
      </li>
      ))}
    </ul>
  );
};

const ReviewTab = ({ reviews }: ReviewTabProps) => {
  const [reviewSortType, setReviewSortType] = useState("desc");
  return (
    <>
      <div className="flex gap-4 justify-end -mt-5 mb-10">
        <p>Sort Rating: </p>
        <select
          className="outline-none bg-inherit"
          value={reviewSortType}
          onChange={(e) => setReviewSortType(e.target.value)}
        >
          <option className="bg-dark" value="asc">
            Ascending
          </option>
          <option className="bg-dark" value="desc">
            Descending
          </option>
        </select>
      </div>
      <div>
        {reviews?.length === 0 && (
          <p className="text-center text-white text-lg">
            There is no reviews yet.
          </p>
        )}

        { reviews.length <  0 && (
           <ReviewContent reviews={reviews} type={reviewSortType} />
        )}
      </div>
    </>
  );
};

export default ReviewTab;
