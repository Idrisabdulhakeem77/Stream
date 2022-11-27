import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../shared/firebase";

interface EmailVerificationProps {
  setIsUpdating: any;
}

const EmailVerificatin = ({ setIsUpdating }: EmailVerificationProps) => {
  const user = useAppSelector((state) => state.user.user);
  const [isShowSendButton, setIsShowSendButton] = useState(true);
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const firebaseUser = auth.currentUser;
  return (
    <>
      <ToastContainer />

      {isEmailVerificationSent && (
        <>
          <div className="px-5 py-3 rounded-md z-10 bg-dark-lighten-2 md:w-[500px] fixed top-[35%] md:left-[35%] left-[5%] right-[5%] min-h-[150px]">
            <p className="text-white text-lg text-center">
              We've sent a email of verification to your email,
              <span className="text-primary"> {user?.email}</span>. Check
              it out!
            </p>
            <button
              onClick={() => setIsEmailVerificationSent(false)}
              className="px-6 py-1 bg-dark-lighten rounded-full mt-7 tw-absolute-center-horizontal hover:brightness-75 transition duration-300"
            >
              OK
            </button>
          </div>

          <div
            onClick={() => setIsEmailVerificationSent(false)}
           className="fixed z-10 top-0 left-0 h-full w-full bg-dark/60"></div>
        </>
      )}
    </>
  );
};

export default EmailVerificatin;
