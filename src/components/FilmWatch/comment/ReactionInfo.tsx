
import { useState } from "react"; 
import UserWhoReacted from "./UserWhoReacted";

interface ReactionInfoProps {
     docData : any
}


const ReactionInfo = ( {docData } : ReactionInfoProps) => { 

    const [isShowReactionData, setIsShowReactionData] = useState(false);
     return (
          <>
            {Object.values(docData.reactions).length > 0  && (
                <>
                 <UserWhoReacted
                  setIsShowReactionData={setIsShowReactionData}
                  docData={docData}
                  isShowReactionData= {isShowReactionData}
                 />
                </>
            )}
          </>
     )
}


export default ReactionInfo