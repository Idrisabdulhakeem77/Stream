import { db } from "../../../shared/firebase";

import { Timestamp , getDoc , collection } from 'firebase/firestore'

import { useCollectionQuery } from "../../hooks/useCollectionQuery";



interface ReplyProps { 
      commentId : string  
}


const Reply = ({ commentId } : ReplyProps) => {
     return (
         <div>
            Reply
         </div>
     )
}


export default Reply