import React , {useState , FunctionComponent} from "react"
import {FcGoogle } from "react-icons/fc"

import {FaFacebook , FaTwitter , FaLinkedinIn} from "react-icons/fa"

import {Field, Form , Formik} from 'formik'

import  * as Yup from "yup"


interface SignUpProps {
   setIsSignedIn : any ;
    isSignedIn : boolean ;
}

const SignUp : FunctionComponent<SignUpProps> =({ setIsSignedIn , isSignedIn}) => {
    return (
         <div>
              <div>
                  Create An Account For Free
            </div>
            <div>
                 <button>
                     <FcGoogle/>
                 </button>
                 <button>
                   <FaFacebook/>
                 </button>
                 <button>
                     <FaTwitter/>
                 </button>
                 <button>
                     <FaLinkedinIn/>
                 </button>
            </div>

            <p> or use Your Email for Registration</p>
            <Formik
                initialValues={{
                    fullname : "" ,
                    email: "",
                    password: "",
                  }}
                    validationSchema={Yup.object({
                         fullname : Yup.string().required("Required").max(30 , "Must be a 30 or less"),
                        email: Yup.string()
                          .email("Invalid email address")
                          .required("Required"),
                        password: Yup.string()
                          .required("No password provided.")
                          .min(6, "Password is too short - should be 6 chars minimum."),
                      })}

            onSubmit={() => console.log("submitted")}
            >
                <Form>
                    <div>
                        <div>
                            <Field name="fullName"  type="text" placeholder="Full name" />
                                <label htmlFor="fullName">
                                 Full name :
                            </label>

                        </div>
                    </div>
                    
                </Form>

            </Formik>

         </div>
    )
}




export default SignUp;