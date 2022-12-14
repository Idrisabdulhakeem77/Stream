import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineClose ,AiTwotoneLike , AiFillHeart ,   } from "react-icons/ai";
import { LazyLoadImage } from 
"react-lazy-load-image-component";
import { db } from "../../../shared/firebase";
import {BsEmojiLaughingFill} from 'react-icons/bs'
import {FaSurprise , FaSadTear , FaAngry} from "react-icons/fa"


interface UserWhoReactedProps {
  docData: any;
  setIsShowReactionData: any;
  isShowReactionData: boolean;
}

const UserWhoReacted = ({
  docData,
  setIsShowReactionData,
  isShowReactionData,
}: UserWhoReactedProps) => {
  const [infoReactionUser, setInfoReactionUser] = useState<
    { user: any; reaction: string }[]
  >([]);

  useEffect(() => {
    const infoReactionUser = Object.entries(docData.reactions).map(
      async (entry) => {
        const dataSnap = await getDoc(doc(db, "users", entry[0]));

        return {
          user: {
            firstName: dataSnap.data()?.fullname,
            photoUrl: dataSnap.data()?.photoUrl,
          },

          reaction: entry[1],
        };
      }
    );

    const reactionInfo = [] as any;

    infoReactionUser.forEach(async (promise) => {
      reactionInfo.push(await promise);
    });

    setInfoReactionUser(reactionInfo);
  }, [docData.reactions]);

  return (
    <>
      {isShowReactionData && (
        <>
          <div
            onClick={() => setIsShowReactionData(false)}
            className="w-full h-full absolute top-0 left-0 bg-dark/50 z-40"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-dark-lighten-2 px-4 py-3 rounded-xl max-w-[350px] w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <p className="text-white text-lg font-medium">
                  People's reaction to this info
                </p>

                <button onClick={() => setIsShowReactionData(false)}>
                  <AiOutlineClose
                    size={20}
                    className="text-white hover:brightness-75 transition duration-300"
                  />
                </button>
              </div>

              <ul className="flex flex-col gap-3">
                {infoReactionUser.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <LazyLoadImage
                        src={item.user.photoUrl}
                        effect="opacity"
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <p className="text-gray-300 max-w-[225px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.user.fullname}
                      </p>
                    </div>
                    <div>
                        {item.reaction === "like" && (
                          <AiTwotoneLike className="text-blue-500" size={20} />
                        )}
                        {item.reaction === "love" && (
                          <AiFillHeart className="text-red-500" size={20} />
                        )}
                        {item.reaction === "haha" && (
                          <BsEmojiLaughingFill
                            className="text-yellow-500"
                            size={20}
                          />
                        )}
                        {item.reaction === "wow" && (
                          <FaSurprise className="text-green-500" size={20} />
                        )}
                        {item.reaction === "sad" && (
                          <FaSadTear className="text-purple-500" size={20} />
                        )}
                        {item.reaction === "angry" && (
                          <FaAngry className="text-orange-500" size={20} />
                        )}
                      </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserWhoReacted;
