import React, { useState, FunctionComponent, useRef, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SignInWithProvder } from "./signInWithProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";

import { GoogleAuthProvider } from "firebase/auth";
import { useAppSelector } from "../../store/hooks";
import ModalNotification from "./ModalNotfication";
import { auth } from "../../shared/firebase";

interface SignUpProps {
  setIsSignedIn: any;
  isSignedIn: boolean;
}

const SignIn: FunctionComponent<SignUpProps> = ({
  setIsSignedIn,
  isSignedIn,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [Loading, setisLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const currentUser = useAppSelector((state) => state.user.user);
  const [error, setError] = useState("");

  const signInHandler = (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email.trim() || !password.trim()) {
      toast.error("You Have to Enter Something", {
        autoClose: 3000,
        pauseOnHover: true,
        closeOnClick: true,
      });

      return;
    }

    setisLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        toast.error("Invaldie Credentials", {
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      })
      .finally(() => setisLoading(false));
  };

  return (
    <>
      <ToastContainer />
      {currentUser && (
        <ModalNotification message="Sign In succesfully" type="success" />
      )}

      {/* Add Loader to App */}
      {Loading && (
        <div className="mt-20 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-darken border-t-transparent animate-spin"></div>
      )}
      {error && (
        <ModalNotification
          message="Couldnt Sign in"
          type="error"
          setError={setError}
        />
      )}
      <div
        id="form"
        className="max-w-xl w-full min-h-[500px]   absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-white"
      >
        <div className="flex flex-col items-center mb-6 mt-12">
          <div className="leading-none mb-4 text-[40px] font-extralight text-primary">
            Login to Anime Stream
          </div>
          <div className="flex gap-3 mb-4">
            <button
              onClick={() =>
                SignInWithProvder(new GoogleAuthProvider(), "google")
              }
              className="h-10 w-10 rounded-full tw-flex-centehover:brightness-75 transition duration-300"
            >
              <FaGoogle size={30} />
            </button>
          </div>

          <div className="text-lg"> or use your email to Login:</div>
        </div>

        <form onSubmit={signInHandler}>
          <div className="px-2 py-3">
            <div className="relative mb-3">
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
              />
              <label
                htmlFor="email"
                className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                `}
              >
                Email
              </label>
              <MdEmail
                size={25}
                className="absolute top-1/2 -translate-y-2/3 right-4"
              />
            </div>

            <div className="relative mb-3">
              <input
                ref={passwordRef}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white"
              />
              <label
                htmlFor="pasword"
                className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                `}
              >
                Password
              </label>
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword(!showPassword)}
                  size={25}
                  className="absolute top-1/2 -translate-y-2/3 right-4"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                  size={25}
                  className="absolute top-1/2 -translate-y-2/3 right-4"
                />
              )}
            </div>
            <button
              type="submit"
              className="px-12 py-3  rounded-full text-xl font-medium hover:bg-dark-lighten transition duration-300  absolute left-1/2 -translate-x-1/2 mt-4 border-2 white"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="text-xl flex gap-2 mt-32 justify-center">
          <span>Not a member yet?</span>
          <button
            type="submit"
            onClick={() => setIsSignedIn(!isSignedIn)}
            className="underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  );
};

export default SignIn;
