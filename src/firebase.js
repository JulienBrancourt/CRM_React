// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa1So7YJ4eHRnQGOuV3d1eSFObnBx89SE",
  authDomain: "crm-projet-55a0c.firebaseapp.com",
  projectId: "crm-projet-55a0c",
  storageBucket: "crm-projet-55a0c.appspot.com",
  messagingSenderId: "1095607581931",
  appId: "1:1095607581931:web:fab48b513bbab5f33352ae",
  measurementId: "G-H0TF2Z7N2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

export default db