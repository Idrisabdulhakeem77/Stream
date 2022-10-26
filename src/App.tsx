import React from 'react';
import { Route  , Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Auth from './pages/Auth';
// import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <div className="App">
       {/* <Auth/> */}
       {/* <Sidebar/> */}
         <Routes>
             <Route path='/' element={<Home/>}/>
         </Routes>
    </div>
  );
}

export default App;
