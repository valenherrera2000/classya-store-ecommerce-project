// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs65fDop-Pn1GuGbv0lIYI4l0zI0VpznQ",
  authDomain: "classya-store.firebaseapp.com",
  projectId: "classya-store",
  storageBucket: "classya-store.appspot.com",
  messagingSenderId: "826244931187",
  appId: "1:826244931187:web:b90c766b5218bf06ca9406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);