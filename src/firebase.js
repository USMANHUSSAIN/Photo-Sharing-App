// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMGtnGdwKrP1NzJCRzF3I-j8jcPnTM2_E",
  authDomain: "photo-sharing-app-1a304.firebaseapp.com",
  projectId: "photo-sharing-app-1a304",
  storageBucket: "photo-sharing-app-1a304.appspot.com",
  messagingSenderId: "93718539830",
  appId: "1:93718539830:web:33b917b872ba058d913297"
};

// Your web app's Firebase configuration
/** 
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
}; 
**/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

export default app;