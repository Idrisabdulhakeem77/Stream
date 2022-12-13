import { useAutoAnimate } from "@formkit/auto-animate/react";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
import { useState, useRef, Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CommentDataType } from "../../../shared/types";
import { useAppSelector } from "../../../store/hooks";

interface CommentUserContentProps {
  commentData: QuerySnapshot<DocumentData> | null;
  sortType: string;
  commentLimit: number;
  media_type: string;
  id?: number | string;
  role: string;
}

const CommentUserContent = ({
  commentData,
  commentLimit,
  media_type,
  role,
  sortType,
  id,
}: CommentUserContentProps) => {
  const [parent] = useAutoAnimate();
  const currentUser = useAppSelector((state) => state.user.user);
  const [commentHidden, setCommentHidden] = useState<string[]>([]);
  const [showOptionFor, setShowOptionFor] = useState<string | undefined>(
    undefined
  );
  const [editingCommentFor, setEditingCommentFor] = useState<
    string | undefined
  >();
  const editValueRef = useRef<HTMLInputElement>(null!);
  const [isReplyingFor, setIsReplyingFor] = useState<string | undefined>();

  const sortComment = (
    commentData: QuerySnapshot<DocumentData> | null,
    type: string
  ) => {
    if (!commentData) return undefined;

    if (type === "popular") {
      return commentData.docs
        .slice()
        .sort(
          (a, b) =>
            Object.values(b.data()?.reactions).length -
            Object.values(a.data()?.reactions).length
        );
    } else if (type === "latest") {
      return commentData.docs;
    }
  };

  return (
    <ul
      //@ts-ignore
      ref={parent}
    >
      {sortComment(commentData, sortType)
        ?.slice(0, commentLimit)
        .map((doc) => {
          const docData = doc.data() as CommentDataType;

          return (
            <Fragment key={doc.id}>
              {!commentHidden.includes(doc.id) && (
                <li className="mb-6 flex md:gap-4 gap-2 items-start last:mb-0">
                  <div className="w-[44px] h-[44px] shrink-0">
                    <LazyLoadImage
                      alt="comment user"
                      src={docData.user.photoURL as string}
                      effect="opacity"
                      className="w-11 h-11 object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div
                    className={`peer ${
                      editingCommentFor === doc.id && "flex-1"
                    }`}
                  >
                    <div
                      className={`relative bg-dark-lighten px-4 py-2 rounded-2xl ${
                        editingCommentFor === doc.id ? "block" : "inline-block"
                      }`}
                    >
                        
                    </div>
                  </div>
                </li>
              )}
            </Fragment>
          );
        })}
    </ul>
  );
};

export default CommentUserContent;
