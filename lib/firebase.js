// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmV6Qq8D-pfA_FngsIz3eRTc7h9B1gfDs",
    authDomain: "whitehats-f6014.firebaseapp.com",
    projectId: "whitehats-f6014",
    storageBucket: "whitehats-f6014.appspot.com",
    messagingSenderId: "100452523279",
    appId: "1:100452523279:web:a395a3ef71eca4c808727a",
    measurementId: "G-FJWKRTH1FX",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
