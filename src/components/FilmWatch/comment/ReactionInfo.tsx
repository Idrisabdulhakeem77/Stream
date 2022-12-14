import { useState } from "react";
import UserWhoReacted from "./UserWhoReacted";

interface ReactionInfoProps {
  docData: any;
}

const ReactionInfo = ({ docData }: ReactionInfoProps) => {
  const [isShowReactionData, setIsShowReactionData] = useState(false);

  const convertReaction = (reactions: { [key: string]: string }) => {
    const countNumberOfReactions = Object.values(reactions).reduce(
      (acc, current) => {
        acc[current] = 1 + (acc[current] || 0);

        return acc;
      },
      {} as { [key: string]: number }
    );

    const sortedByNumberOfReaction = Object.entries(countNumberOfReactions).sort(
      (a, b) => b[1] - a[1]
    );

    return sortedByNumberOfReaction;
  };

  return (
    <>
      {Object.values(docData.reactions).length > 0 && (
        <>
          <UserWhoReacted
            setIsShowReactionData={setIsShowReactionData}
            docData={docData}
            isShowReactionData={isShowReactionData}
          />
          <button
            onClick={() => setIsShowReactionData(true)}
            className="absolute flex gap-1 items-center -right-10 -bottom-3  bg-dark-lighten-2 px-1 pl-3 py-[2px] rounded-full shadow-md peer hover:brightness-75 transition duration-300"
          ></button>
        </>
      )}
    </>
  );
};

export default ReactionInfo;
