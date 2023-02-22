// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHhwzuggEbUCYvqimMTDRV3Nz7YQowGBs",
  authDomain: "diario-de-viaje-9dd2a.firebaseapp.com",
  projectId: "diario-de-viaje-9dd2a",
  storageBucket: "diario-de-viaje-9dd2a.appspot.com",
  messagingSenderId: "221180623375",
  appId: "1:221180623375:web:cbe5ec4cbdd0bdac40017a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginWhithGoogle = () => {
  const googleProvider  = new GoogleAuthProvider();
  return signInWithPopup (auth,googleProvider);
}
export const logOut = () => {
  return signOut(auth)
}
export const db = getFirestore(app);