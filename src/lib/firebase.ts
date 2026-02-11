import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Bz1cibyDTwMA0FoglGfjeLSFHo4RWjk",
  authDomain: "care-xyz-529ab.firebaseapp.com",
  projectId: "care-xyz-529ab",
  storageBucket: "care-xyz-529ab.firebasestorage.app",
  messagingSenderId: "567675337125",
  appId: "1:567675337125:web:c1ab3e10485cab35e2104c"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();