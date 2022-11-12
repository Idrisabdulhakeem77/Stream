import React, { useState } from 'react';
import { Route  , Routes, useLocation } from 'react-router-dom';

import Explore from './pages/Explore';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useAppDispatch } from './store/hooks';

function App() {
   
  const [isSignedIn , setIsSignedIn] = useState( Number(localStorage.getItem("isSIgnedIn") ? true : false))
  const dispatch = useAppDispatch()
  const location = useLocation()

  usEff
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
