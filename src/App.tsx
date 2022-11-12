import React, { useState } from 'react';
import { Route  , Routes } from 'react-router-dom';

import Explore from './pages/Explore';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
   
  const [isSignedIn , setIsSignedIn] = useState( Number(localStorage.getItem("isSIgnedIn") ? true : false))
  const 
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
