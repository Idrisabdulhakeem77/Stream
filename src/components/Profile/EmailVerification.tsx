import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../shared/firebase";
import {convertErrorCodeToMessage} from '../../shared/utils'
import {sendEmailVerification} from 'firebase/auth'

interface EmailVerificationProps {
  setIsUpdating: any;
}

const EmailVerificatin = ({ setIsUpdating }: EmailVerificationProps) => {
  const user = useAppSelector((state) => state.user.user);
  const [isShowSendButton, setIsShowSendButton] = useState(true);
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const firebaseUser = auth.currentUser;

  const sendVerificationEmail = () => {
    setIsUpdating(true);
    // @ts-ignore
    sendEmailVerification(firebaseUser)
      .then(() => {
        setIsEmailVerificationSent(true);
        setIsShowSendButton(false);
      })
      .catch((error : any) =>
        toast.error(convertErrorCodeToMessage(error.code), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .finally(() => setIsUpdating(false));
  };

  return (
    <>
      <ToastContainer />

      {isEmailVerificationSent && (
        <>
          <div className="px-5 py-3 rounded-md z-10 bg-dark-lighten-2 md:w-[500px] fixed top-[35%] md:left-[35%] left-[5%] right-[5%] min-h-[150px]">
            <p className="text-white text-lg text-center">
              We've sent a email of verification to your email,
              <span className="text-primary"> {user?.email}</span>. Check it
              out!
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
            className="fixed z-10 top-0 left-0 h-full w-full bg-dark/60"
          ></div>
        </>
      )}

      <div className="mt-10 flex justify-between max-w-[600px]">
        <p className=" text-lg">
          {!user?.emailVerified
            ? "Your email is not verified yet."
            : "Your email is verified."}
        </p>
        {isShowSendButton && (
          <button
           onClick={sendVerificationEmail}
           className="text-primary underline text-lg">
            Send me verification email
          </button>
        )}
        {!isShowSendButton && <p className="text-lg ">Waiting for verify</p>}
      </div>
    </>
  );
};

export default EmailVerificatin;
