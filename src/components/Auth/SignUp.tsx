import { useState, FunctionComponent } from "react";

import { FaGoogle } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Field, Form, Formik, ErrorMessage } from "formik";

import * as Yup from "yup";

import { useAppSelector } from "../../store/hooks";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../shared/firebase";
import { doc, setDoc } from "firebase/firestore";
import { convertErrorCodeToMessage, getRandomAvatar } from "../../shared/utils";
import { SignInWithProvder } from "./signInWithProvider";
import ModalNotification from "./ModalNotfication";

interface SignUpProps {
  setIsSignedIn: any;
  isSignedIn: boolean;
}

const SignUp: FunctionComponent<SignUpProps> = ({
  setIsSignedIn,
  isSignedIn,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const currentUser = useAppSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const SignUpHandler = async (values: { [key: string]: string }) => {
    try {
      setLoading(true);

      const user = (
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        )
      ).user;

      setDoc(doc(db, "users", user.uid), {
        displayName: values.fullname,
        photoUrl: getRandomAvatar(),
        bookmarks: [],
        recentlyWatch: [],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SignUpSchema = Yup.object({
    fullname: Yup.string().required("Required").max(30, "Must be a 30 or less"),
    email: Yup.string().required("Require").email(),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be six characters or more"),
  });

  return (
    <>
      {currentUser && (
        <ModalNotification type="success" message="Signed Up successfully 🤓" />
      )}
      {loading && (
        <div className="mt-20 mb-20 mx-auto h-10 w-10 rounded-full border-[5px] border-dark-darken border-t-transparent animate-spin"></div>
      )}
      {error && (
        <ModalNotification
          type="error"
          message="Something went Wrong 😵 try again later"
        />
      )}
      <div className="max-w-xl w-full min-h-[500px]   absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-white">
        <div className="flex flex-col items-center mb-6 mt-12">
          <div className="leading-none mb-4 text-[40px] font-light text-primary">
            Create An Account For Free
          </div>
          <div className="flex gap-3 mb-4">
            <button
              className="h-10 w-10 rounded-full tw-flex-center hover:brightness-75 transition duration-300"
              onClick={() =>
                SignInWithProvder(new GoogleAuthProvider(), "google")
              }
            >
              <FaGoogle size={30} />
            </button>
          </div>

          <div className="text-lg"> or use your email for Registration</div>
        </div>

        <Formik
          initialValues={{
            fullname: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={SignUpHandler}
        >
          <Form>
            <div className="px-2 py-3">
              <div className="relative mb-3">
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer  text-white "
                />
                <label
                  htmlFor="fullname"
                  className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                `}
                >
                  Full name
                </label>
                <BsFillPersonFill
                  size={25}
                  className="absolute top-1/2 -translate-y-2/3 right-4"
                />
                <p>
                  <ErrorMessage name="fullname" />
                </p>
              </div>

              <div className="relative mb-3">
                <Field
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
                <p>
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="relative mb-3">
                <Field
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
                <ErrorMessage name="password" />
              </div>
              <button
                type="submit"
                className="px-12 py-3  rounded-full text-xl font-medium hover:bg-primary transition duration-300  absolute left-1/2 -translate-x-1/2 mt-3 border-2 white"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
        <p className="text-xl flex gap-2 mt-32 justify-center">
          <span>Already a member?</span>
          <button
            type="submit"
            onClick={() => setIsSignedIn(!isSignedIn)}
            className=" underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUp;
