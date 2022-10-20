import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <div className="App">
        <SignIn setIsSignedIn={null} isSignedIn={true}/> 

        <SignUp setIsSignedIn={null} isSignedIn={true}/>     
    </div>
  );
}

export default App;
