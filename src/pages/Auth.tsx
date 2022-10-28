import React , {FunctionComponent, useState } from 'react'
import Title from "../components/Common/Title";
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';


interface Authprops { }

const Auth : FunctionComponent<Authprops> = () => {
    const [isSignedIn , setIsSiggnedIn] = useState(true)
     return (
         <>
           <Title value='Sign In | Anime Stream' />

           <div className="bg-dark text-white min-h-screen">
               {!isSignedIn && <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSiggnedIn} /> }
               {isSignedIn && <SignUp isSignedIn={isSignedIn} setIsSignedIn={setIsSiggnedIn} /> }
            </div>
         
         </>
     )
}

export default Auth 