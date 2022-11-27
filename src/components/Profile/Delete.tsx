import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

interface DeleteProps {
  setIsShowPromptReAuthFor: any;
}

const Delete = ({ setIsShowPromptReAuthFor }: DeleteProps) => {
  const [isShowPrompt, setIsShowPrompt] = useState(true);
  return (
    <>
      {isShowPrompt && (
        <>
          <div className="fixed top-[30%] md:left-[40%] left-[5%] right-[5%] md:w-[390px] z-50 bg-dark-lighten rounded-md min-h-[100px] shadow-md px-3 py-5">
            <div className="mx-auto mb-7 h-16 w-16 rounded-full border-[3px] border-red-500 tw-flex-center">
              <AiOutlineDelete size={40} />
            </div>
            <p className="text-white text-xl text-center font-medium mb-4">
              You are about to delete this account
            </p>
            <p className="text-center mb-[2px]">
              This will remove your account and cannot recover
            </p>
            <p className="text-center ">Are you sure?</p>
          </div>

          <div
            onClick={() => setIsShowPrompt(false)}
            className="z-[5] fixed h-full w-full top-0 left-0 bg-dark/60"
          >
            {" "}
          </div>
        </>
      )}
    </>
  );
};

export default Delete;
