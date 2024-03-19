import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6dPD7qbGKNlONkdly14jXBDXNN__jAGo",
  authDomain: "graphql-mern-6ad85.firebaseapp.com",
  projectId: "graphql-mern-6ad85",
  storageBucket: "graphql-mern-6ad85.appspot.com",
  messagingSenderId: "244413868091",
  appId: "1:244413868091:web:0acfb94e1371090108941e",
  measurementId: "G-NXFY1XN61F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
