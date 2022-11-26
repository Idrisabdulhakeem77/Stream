import { FunctionComponent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../../store/hooks";
import { Items } from "../../shared/types";
import Sidebar from "../Common/Sidebar";
import Skeleton from "../Common/Skeleton";
import { updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../shared/firebase";
import { AiOutlineDelete } from "react-icons/ai";

interface FilmListForBookmarkedAndRecentProps {
  films: Items[];
  pageType: string;
  loading: boolean;
}

const FilmListForBookmarkedAndRecent: FunctionComponent<
  FilmListForBookmarkedAndRecentProps
> = ({ films, loading, pageType }) => {
  const user = useAppSelector((state) => state.user.user);
  const [isShowPrompt, setIsShowPrompt] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);

  const [parent] = useAutoAnimate();
  const [show] = useAutoAnimate();
  const [action] = useAutoAnimate();
  return (
    <>
      <div
        // @ts-ignore
        ref={show}
      >
        {isShowPrompt && (
          <div className="fixed top-[30%] md:left-[40%] left-[5%] right-[5%] md:w-[400px] z-40 bg-dark-lighten rounded-md min-h-[100px] shadow-md px-3 py-5 ">
            <div className="mx-auto mb-7 h-16 w-16 rounded-full border-[3px] border-red-500 tw-flex-center">
              <AiOutlineDelete size={40} className="text-red-600" />
            </div>
            <p className="text-white text-xl text-center font-medium mb-4">
              You are about to remove
              {selections.length === 1 ? " this fil" : " these films"}
            </p>
            <p className="text-center mb-[2px]">
              This will remove your films from this {pageType} list.
            </p>
            <p className="text-center ">Are you sure?</p>
             <div className=" flex justify-end mt-8">
               <button
                 onClick={() => setIsShowPrompt(false)}
               className="px-6 py-1 rounded-md text-white hover:brightness-75 transition duration-300"> 
                  Cancel
               </button>
               <button
               className="px-6 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300">
                  Yes
               </button>
             </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilmListForBookmarkedAndRecent;
