// src/views/auth/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCox00B1WrLPiGBpNnpa0BVP0vd8cfsqd4',
  authDomain: 'almuhajirin-rewwin.firebaseapp.com',
  projectId: 'almuhajirin-rewwin',
  storageBucket: 'almuhajirin-rewwin.appspot.com',
  messagingSenderId: '909848782269',
  appId: '1:909848782269:web:a93aff074f412b0c711ed4',
  measurementId: 'G-QS1CPHN2GK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
