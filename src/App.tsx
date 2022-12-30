import React, { useCallback, useContext, useEffect } from "react";
import { Route, Routes,  } from "react-router-dom";
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
import Profile from "./pages/Profile";

import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Search from "./pages/Search";
import Protected from "./components/Common/Proctected";
import MovieDetail from "./pages/Movies/MovieDetail";
import Bookmark from "./pages/Bookmarked";
import Recent from "./pages/Recent";
import AnimeDetails from "./pages/Anime/AnimeDetails";
import TvDetails from "./pages/Tv/TvDetails";

import MovieWatch from "./pages/Movies/MovieWatch";
import TvWatch from "./pages/Tv/TvWatch";
import AnimeSearch from "./pages/AnimeSearch";
import { AppContext } from "./context";


function App() {
  

  const {isSignedIn , setIsSignedIn  }   = useContext(AppContext)
  const dispatch = useAppDispatch();

  useCallback(() => {
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
              emailVerified: user.emailVerified,
              photoURL: doc.data()?.photoUrl,
              uid: user.uid,
            })
          );
        });
      }
       else {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          dispatch(
            setCurrentUser({
              email: user.email,
              displayName: doc.data()?.displayName,
              emailVerified: user.emailVerified,
              photoURL: doc.data()?.photoUrl,
              uid: user.uid,
            })
          );
        });
      }
    });
  }, [dispatch , setIsSignedIn]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/:id/watch" element={<MovieWatch />} />
        <Route path="auth" element={<Auth />} />
        <Route path="anime" element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="tv" element={<TvShows />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="tv/:id/watch" element={<TvWatch />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="profile"
          element={
            <Protected isSignedIn={isSignedIn}>
              {" "}
              <Profile />{" "}
            </Protected>
          }
        />
        <Route
          path="bookmarks"
          element={
            <Protected isSignedIn={isSignedIn}>
              {" "}
              <Bookmark />{" "}
            </Protected>
          }
        />
        <Route
          path="recent"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Recent />
            </Protected>
          }
        />
        <Route path="/animesearch" element={<AnimeSearch />} />
      </Routes>
    </div>
  );
}

export default App;
