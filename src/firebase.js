import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYU2hrq7IdKEGzSOvzNqYF3qk8PHhpH2s",
  authDomain: "nbco-8e664.firebaseapp.com",
  projectId: "nbco-8e664",
  storageBucket: "nbco-8e664.appspot.com",
  messagingSenderId: "150218326206",
  appId: "1:150218326206:web:a69d3f25e6be1d12529eef",
  measurementId: "G-LWH9E13S9W"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, analytics, db };
