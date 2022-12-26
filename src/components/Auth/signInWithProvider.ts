import {
  signInWithPopup,
} from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../shared/firebase";

export const SignInWithProvder = (provider: any , type : any) => {
  signInWithPopup(auth, provider).then(async (result) => {
    const user = result.user;
    let isStored = false;

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.id === user.uid) {
        isStored = true;
      }
    });

    if (isStored) return ;

    setDoc(doc(db, "users", user.uid), {
      fullname: user.displayName,
      photoUrl: user.photoURL,
      bookmarks: [],
      recentlyWatch: [],
    });
  }).catch((err) => console.log(err)) ;
};
