import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXD4ujRsBiCuh6hdb7tkt2Qzg66m1mYkY",
  authDomain: "qastore-8c8d4.firebaseapp.com",
  projectId: "qastore-8c8d4",
  storageBucket: "qastore-8c8d4.appspot.com",
  messagingSenderId: "976695207561",
  appId: "1:976695207561:web:7caa18114173c467ecc858",
  measurementId: "G-KGNRJ2QYE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage;

export default app;
