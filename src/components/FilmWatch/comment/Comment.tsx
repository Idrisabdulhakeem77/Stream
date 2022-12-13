import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdSend } from "react-icons/md";
import {
  addDoc,
  updateDoc,
  doc,

  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../shared/firebase";

interface CommentProps {
  id?: number;
  media_type: string;
}

const Comment = ({ media_type, id }: CommentProps) => {
  const currentUser = useAppSelector((state) => state.user.user);
  const location = useLocation();

  const [sortType, setSortType] = useState("latest");
  const [commentLimit, setCommentLimit] = useState(5);
  const [isSendingComment, setIsSendingComment] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const commentHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!currentUser) return;
    setIsSendingComment(true);

    addDoc(collection(db, `${media_type}-${id as number}`), {
      user: currentUser,
      value: commentValue.trim().slice(0, 500),
      reactions: {},
      createdAt: serverTimestamp(),
      isEdited: false,
    }).finally(() => setIsSendingComment(false));

    setCommentValue("");
  };


  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <p className=""></p>
        </div>
      </div>

      <div className="md:px-4 px-1">
        <div className="mb-12">
          {!currentUser && (
            <p className="text-lg text-center">
              You need to
              <Link
                to={`/auth?redirect=${encodeURIComponent(location.pathname)}`}
                className="text-primary font-medium"
              >
                {" login "}
              </Link>
              to comment.
            </p>
          )}

          {currentUser && (
            <form onSubmit={commentHandler} className="flex items-center gap-2">
              <LazyLoadImage
                src={currentUser.photoURL as string}
                effect="opacity"
                alt="User"
                className="w-12 h-12 object-cover shrink-0 rounded-full"
                referrerPolicy="no-referrer"
              />
              <input
                type="text"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                className=" py-2 outline-none flex-1 px-2 bg-dark  text-white border-b-2 border-gray-200 focus:border-white transtion duration-300 placeholder:text-gray-500 "
                placeholder="Add comment"
              />
              {isSendingComment ? (
                <div className="w-10 h-10 rounded-full border-[3px] border-t-transparent border-primary animate-spin"></div>
              ) : (
                <button>
                  <MdSend size={30} className="text-primary " />
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
