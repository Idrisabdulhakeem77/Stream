import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC_-5Ulnr269tKdy-d6pkvGlta4ua-qbGI",
    authDomain: "stream-fb6a6.firebaseapp.com",
    projectId: "stream-fb6a6",
    storageBucket: "stream-fb6a6.appspot.com",
    messagingSenderId: "817011524533",
    appId: "1:817011524533:web:b431caef870c7a78824ffc"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db =  getFirestore(app)