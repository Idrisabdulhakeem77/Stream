import { db } from "../../../shared/firebase";

import { collection, orderBy, query } from "firebase/firestore";

import { useCollectionQuery } from "../../hooks/useCollectionQuery";
import { useState } from "react";
import CommentUserData from "./CommentUserData";

interface ReplyProps {
  commentId: string;
}

const Reply = ({ commentId }: ReplyProps) => {
  const [commentLimit, setCommentLimit] = useState(5);

  const {
    data: commentData,
    isLoading,
    isError,
  } = useCollectionQuery(
    commentId,
    query(collection(db, `replyTo-${commentId}`), orderBy("createdAt", "desc"))
  );

  return (
    <>
      {commentData && commentData.size > 0 && (
        <div className="mt-5">
          <CommentUserData
            // @ts-ignore
            commentData={commentData}
            commentLimit={commentLimit}
            isError={isError}
            isLoading={isLoading}
            media_type="replyTo"
            role="reply"
            sortType="latest"
            id={commentId}
          />
        </div>
      )}

      {commentData && commentData.size > commentLimit && (
        <button
          className="font-medium mt-3"
          onClick={() => setCommentLimit((prevState) => prevState + 5)}
        >
          Load more Replies ( {commentLimit} / {commentData.size} )
        </button>
      )}
    </>
  );
};

export default Reply;
