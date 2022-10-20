import React , {useState , FunctionComponent} from "react"



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
         </div>
    )
}




export default SignUp;