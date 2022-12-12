import { Reviews } from "../../shared/types";
import { useState } from "react";
import {} from "react-select";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface ReviewTabProps {
  reviews?: Reviews[]
}

interface ReviewContentProps {
    reviews: Reviews[];
    type: string;
  }
  


const ReviewContent = ( { reviews , type} : ReviewContentProps) => {
     const [parent] = useAutoAnimate()
     return(
         <ul>

         </ul>
     )
     
}

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
        {/* {reviews?.length > 0 && (
          <ReviewContent reviews={reviews} type={reviewSortType} />
        )} */}
      </div>
    </>
  );
};

export default ReviewTab;
