// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGFF1h8PoxwM7WmqSv0q6QxG3jjXcR7GM",
  authDomain: "filmyduniya-c1b23.firebaseapp.com",
  projectId: "filmyduniya-c1b23",
  storageBucket: "filmyduniya-c1b23.appspot.com",
  messagingSenderId: "289234920906",
  appId: "1:289234920906:web:85adcf0058ad9739fd9b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef = collection(db, "users");

export default app;
export const auth=getAuth(app)