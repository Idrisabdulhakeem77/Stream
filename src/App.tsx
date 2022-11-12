import React, { useEffect, useState } from 'react';
import { Route  , Routes, useLocation } from 'react-router-dom';

import Explore from './pages/Explore';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useAppDispatch } from './store/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './shared/firebase';
import {setCurrentUser} from './store/slice/userSlice'

function App() {
   
  const [isSignedIn , setIsSignedIn] = useState( Number(localStorage.getItem("isSignedIn")) ? true : false)
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
     onAuthStateChanged(auth , ( user) => {
         if(!user) {
           dispatch(setCurrentUser(null))
           setIsSignedIn(false)
            localStorage.setItem("isSignedIn" , "0")
            return
         }

         
         setIsSignedIn(true)
         localStorage.setItem("isSignedIn" , "1")
     })

   } , [])
  return (
    <div className="App">
         <Routes>
             <Route path='/' element={<Home/>}/> 
             <Route path='explore' element={<Explore/>} />
             <Route path="auth" element={<Auth />} />
         </Routes>
         
    </div>
  );
}

export default App;
