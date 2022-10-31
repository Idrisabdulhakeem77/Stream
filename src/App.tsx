import React from 'react';
import { Route  , Routes } from 'react-router-dom';
import DataFetch from './components/DataFetchingTest';
import Home from './pages/Home';
// import Auth from './pages/Auth';
// import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <div className="App">
       {/* <Auth/> */}
       {/* <Sidebar/> */}
         {/* <Routes>
             <Route path='/' element={<Home/>}/>
         </Routes> */}
         <DataFetch/>
    </div>
  );
}

export default App;
