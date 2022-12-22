import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { User } from "../../../shared/types";
import { useAppSelector } from "../../../store/hooks";
import { db } from "../../../shared/firebase";
import { MdSend } from "react-icons/md";

interface ReplyBoxProps {
  commentId: string;
}

const ReplyBox = ({ commentId }: ReplyBoxProps) => {
  const currentUser = useAppSelector((state) => state.user.user);

  const [replyInputValue, setReplyInputValue] = useState("");

  const [isSendingReply, setIsSendingReply] = useState(false);

  const commentHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!replyInputValue) return;

    setIsSendingReply(true);

    addDoc(collection(db, `replyTo-${commentId}`), {
      user: currentUser,
      value: replyInputValue.trim().slice(0, 500),
      reactions: {},
      createdAt: serverTimestamp(),
    }).finally(() => setIsSendingReply(false));

    setReplyInputValue("");
  };

  return (
    <form
      onSubmit={commentHandler}
      className="flex gap-4 items-center mt-4 relative z-20 mb-10 last:mb-0"
    >
      <LazyLoadImage
        src={(currentUser as User).photoURL as string}
        effect="opacity"
        alt="User"
        referrerPolicy="no-referrer"
        className="w-11 h-11 object-cover rounded-full shrink-0"
      />
      <input
        type="text"
        value={replyInputValue}
        onChange={(e) => setReplyInputValue(e.target.value)}
        placeholder="Write Reply...."
        className="py-3 flex-1 bg-dark-lighten outline-none rounded-full px-4 text-white"
      />

      {isSendingReply ? (
        <div className="w-10 h-10 rounded-full border-[3px] border-t-transparent border-primary animate-spin"></div>
      ) : (
        <button>
          <MdSend size={30} className="text-primary " />
        </button>
      )}
    </form>
  );
};

export default ReplyBox;
