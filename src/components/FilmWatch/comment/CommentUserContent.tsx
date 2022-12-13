import { useAutoAnimate } from "@formkit/auto-animate/react";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
import { useState , useRef  } from "react";
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
     commentData : QuerySnapshot <DocumentData> | null  ,
      type : string 
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
    }else if ( type === "latest") {
         return commentData.docs
    }

  }

  return (
      <ul
       //@ts-ignore
       ref={parent}
      >

      </ul>
  );
};

export default CommentUserContent;
