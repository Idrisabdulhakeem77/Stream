import { useAppSelector } from "../../store/hooks";
import { ToastContainer, toast } from "react-toastify";
import { BiSend } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import React, { FormEvent } from "react";

interface EmailProps {
  isUpdatingEmail: boolean;
  setIsUpdatingEmail: any;
  emailValueRef: any;
  setIsShowPromptReAuthFor: any;
}

const Email = ({
  isUpdatingEmail,
  setIsUpdatingEmail,
  emailValueRef,
  setIsShowPromptReAuthFor,
}: EmailProps) => {
  const user = useAppSelector((state) => state.user.user);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!emailValueRef.current.value.trim().length) {
      toast.error("You have to type something", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    setIsShowPromptReAuthFor("email");
  };

  return (
    <>
      <ToastContainer />

      <p className="text-lg">Email </p>
      {!isUpdatingEmail && (
        <div className="flex justify-between mt-1">
          <p> {user?.email}</p>
          <button
            className="hover:text-primary transition duration-300"
            onClick={() => setIsUpdatingEmail(true)}
          >
            <AiOutlineEdit size={25} />
          </button>
        </div>
      )}

      {isUpdatingEmail && (
        <>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex justify-between gap-48 mt-1"
          >
            <input
              type="email"
              ref={emailValueRef}
              defaultValue={user?.email || ""}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Escape") setIsUpdatingEmail(false);
              }}
              className="outline-none bg-dark-lighten rounded-md py-1 px-2 w-full"
            />
            <button className="hover:text-primary transition duration-300">
              <BiSend size={25} />
            </button>
          </form>
          <p>Press Esc to cancel</p>
        </>
      )}
    </>
  );
};

export default Email;
