import { QuerySnapshot, DocumentData } from "firebase/firestore";

interface CommentUserContentProps {
  commentData: QuerySnapshot<DocumentData> | null;
  sortType: string;
  commentLimit: number;
  media_type: string;
  id?: number | string;
  role: string;
}

const CommentUserContent = ({ commentData , commentLimit , media_type ,role , sortType , id}: CommentUserContentProps) => {
  return <div></div>;
};

export default CommentUserContent;
