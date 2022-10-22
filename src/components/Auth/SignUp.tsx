import React, { useState, FunctionComponent } from "react";
import { FcGoogle } from "react-icons/fc";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Field, Form, Formik } from "formik";

import * as Yup from "yup";

interface SignUpProps {
  setIsSignedIn: any;
  isSignedIn: boolean;
}

const SignUp: FunctionComponent<SignUpProps> = ({
  setIsSignedIn,
  isSignedIn,
}) => {
  return (
    <div
      id="form"
      className="max-w-xl w-full min-h-[500px]   absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
    >
      <div  className="flex flex-col items-center mb-6 mt-12">
        {/* Add Font weight */}
        <div className="leading-none mb-4 text-[30px] font-extralight">
          Create An Account For Free
        </div>
        <div className="flex gap-3 mb-4">
          <button className="h-10 w-10 rounded-full tw-flex-center bg-black  hover:brightness-75 transition duration-300">
            <FcGoogle />
          </button>
          <button className="h-10 w-10 rounded-full tw-flex-center  hover:brightness-75 transition duration-300">
            <FaFacebook />
          </button>
          <button className="h-10 w-10 rounded-full tw-flex-center  hover:brightness-75 transition duration-300">
            <FaTwitter />
          </button>
          <button className="h-10 w-10 rounded-full tw-flex-center  hover:brightness-75 transition duration-300">
            <FaLinkedinIn />
          </button>
        </div>

        <div className="text-sm"> or use your email for Registration</div>
      </div>

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required("Required")
            .max(30, "Must be a 30 or less"),
          email: Yup.string().required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 6 chars minimum."),
        })}
        onSubmit={() => console.log("Submitted")}
      >
        <Form>
          <div id="form-child" >
            <div className="relative mb-12">
              <Field name="fullName" type="text" placeholder="Full name"  className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer   text-white "/>
              <label htmlFor="fullName" className="`absolute left-5 text-black transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                `}">Full name</label>
              <BsFillPersonFill />
            </div>

            <div>
              <Field name="email" type="email" placeholder="Email Address" className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white" />
              <label
                htmlFor="email"
                className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
                translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
                `}
              >
                Email
              </label>
              <MdEmail  className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" className="w-full bg-dark-lighten px-5 py-4 pr-12 rounded-xl outline-none peer text-white" />
              <label htmlFor="pasword" className="">Password</label>
              <AiFillEyeInvisible />
              <button type="submit"> Sign Up </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
