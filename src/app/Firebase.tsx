/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// TypeScript function for signing up a user
const signup = async (name: string, email: string, password: string): Promise<void> => {
  try {
    const res: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      userid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("Signup successful!");
  } catch (error: any) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

// TypeScript function for logging in a user
const login = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error: any) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

// TypeScript function for logging out
const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error: any) {
    console.error(error);
    toast.error("Logout failed.");
  }
};

export { auth, db, login, signup, logOut };
