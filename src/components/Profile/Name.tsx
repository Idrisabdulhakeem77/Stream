import { AiOutlineEdit } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { useAppSelector } from "../../store/hooks";
import { ToastContainer, toast } from "react-toastify";
import { FormEvent } from "react";

interface NameProps {
  setIsUpdatingName: any;
  isUpdatingName: boolean;
  nameValueRef: any;
}

const Name = ({
  setIsUpdatingName,
  isUpdatingName,
  nameValueRef,
}: NameProps) => {
  const user = useAppSelector((state) => state.user.user);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!nameValueRef.current.value.trim().length) {
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

    // setIsShowPromptReAuthFor("email");
  };

  return (
    <>
      <ToastContainer />

      {!isUpdatingName && (
        <>
          <p className="text-lg">Name</p>

          <div className="flex justify-between mt-1">
            <p> {user?.displayName} </p>
            <button onClick={() => setIsUpdatingName(true)}>
              <AiOutlineEdit size={25} />
            </button>
          </div>
        </>
      )}

      {isUpdatingName && (
        <>
          <form className="flex justify-between gap-48 mt-1">
            <input
              type="text"
              autoFocus
              ref={nameValueRef}
              defaultValue={user?.displayName || ""}
              onKeyDown={(e) => {
                if (e.key === "Escape") setIsUpdatingName(false);
              }}
            />
            <button
              className="hover:text-primary transition duration-300"
              onClick={() => setIsUpdatingName(false)}
            >
              <BiSend size={25} />
            </button>
          </form>
          <p> Tap on Esc to cancel </p>
        </>
      )}
    </>
  );
};

export default Name;
