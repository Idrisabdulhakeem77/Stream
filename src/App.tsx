import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useAppDispatch } from "./store/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./shared/firebase";
import { setCurrentUser } from "./store/slice/userSlice";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "./shared/firebase";
import Anime from "./pages/Animes";
import  Profile from "./pages/Profile"

import Movies from "./pages/Movies";
import TvShows from './pages/TvShows'
import Protected from "./components/Common/Proctected";
import MovieDetail from "./pages/Movies/MovieDetail";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    Number(localStorage.getItem("isSignedIn")) ? true : false
  );
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(setCurrentUser(null));
        setIsSignedIn(false);
        localStorage.setItem("isSignedIn", "0");
        return;
      }

      setIsSignedIn(true);
      localStorage.setItem("isSignedIn", "1");

      if (user.providerData[0].providerId === "google.com") {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
           console.log(doc.data()?.photoURL)
          dispatch(
            setCurrentUser({
              email: user.email,
              displayName: user.displayName,
              emailVerified: doc.data()?.emailVerified,
              photoURL: doc.data()?.photoURL,
              uid: user.uid,
            })
          );
        });
      } else {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          console.log(doc.data());
          dispatch(
            setCurrentUser({
              email: user.email,
              displayName: user.displayName,
              emailVerified: doc.data()?.emailVerified,
              photoURL: doc.data()?.photoURL,
              uid: user.uid,
            })
          );
        });
      }
    });
  }, [dispatch]);
 


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="auth" element={<Auth />} />
        <Route path="anime" element={<Anime />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv-shows" element={<TvShows/>}/>
        <Route path="profile" element={<Protected isSignedIn={isSignedIn} > <Profile/> </Protected>}/>
      </Routes> 
    </div>
  );
}

export default App;
