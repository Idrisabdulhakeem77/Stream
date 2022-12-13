
import { useState } from "react"; 

interface ReactionInfoProps {
     docData : any
}


const ReactionInfo = ( {docData } : ReactionInfoProps) => { 

    const [isShowReactionData, setIsShowReactionData] = useState(false);
     return (
         <div>
            Reaction Info
         </div>
     )
}


export default ReactionInfo