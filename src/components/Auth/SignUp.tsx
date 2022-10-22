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
      <div id="form-child" className="flex flex-col items-center mb-6 mt-12">
        <div className="leading-none mb-4">Create An Account For Free</div>
        <div>
          <button>
            <FcGoogle />
          </button>
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaLinkedinIn />
          </button>
        </div>

        <div> or use Your Email for Registration</div>
      </div>
    </div>
  );
};

export default SignUp;
