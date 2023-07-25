// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv59EfuNmLUNc-ULJ9iAWP_wXY1arRdp8",
  authDomain: "northernboxweb.firebaseapp.com",
  projectId: "northernboxweb",
  storageBucket: "northernboxweb.appspot.com",
  messagingSenderId: "447895856186",
  appId: "1:447895856186:web:111d270ac982fdfe8bc103",
  measurementId: "G-80XSX6EHBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);