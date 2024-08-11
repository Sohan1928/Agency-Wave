import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6sydOH7aTxTymy1zag03QzAA_Jtgudag",
  authDomain: "agencewave-ea348.firebaseapp.com",
  projectId: "agencewave-ea348",
  storageBucket: "agencewave-ea348.appspot.com",
  messagingSenderId: "31736440277",
  appId: "1:31736440277:web:54540acae2b4fd861fc95c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
