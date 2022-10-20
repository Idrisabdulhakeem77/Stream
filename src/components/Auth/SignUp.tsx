import React , {useState , FunctionComponent} from "react"
import {FcGoogle } from "react-icons/fc"

import {FaFacebook , FaTwitter , FaLinkedinIn} from "react-icons/fa"


interface SignUpProps {
   setIsSignedIn : any ;
    isSignedIn : boolean ;
}

const SignUp : FunctionComponent<SignUpProps> =({ setIsSignedIn , isSignedIn}) => {
    return (
         <div className="flex  items-center justify-center bg-black">
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
         </div>
    )
}




export default SignUp;