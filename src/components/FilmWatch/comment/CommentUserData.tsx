import {DocumentData , QuerySnapshot } from "firebase/firestore"

interface CommentUserDataProps {
    id?: number | string;
    media_type: string;
    commentLimit: number;
    isLoading: boolean;
    isError: boolean;
    commentData: QuerySnapshot<DocumentData> | null;
    sortType: string;
    role: string;
}


const CommentUserData = ({commentData , id ,commentLimit , isError , isLoading , media_type , role , sortType} : CommentUserDataProps ) => {
    return (
        <div>
            Comment Sect
        </div>
    )  
}

export default CommentUserData