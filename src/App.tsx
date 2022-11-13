import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useAppDispatch } from "./store/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./shared/firebase";
import { setCurrentUser } from "./store/slice/userSlice";
import userEvent from "@testing-library/user-event";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "./shared/firebase";
import Anime from "./pages/Animes";
import { getAnime } from "./services/anime";
import Movies from "./pages/Movies";

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
        <Route path="auth" element={<Auth />} />
        <Route path="anime" element={<Anime />} />
      </Routes>
    </div>
  );
}

export default App;
