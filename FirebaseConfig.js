// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import {getReactNativePersistence} from "@firebase/auth/dist/rn/index.js"
import { collection, getFirestore } from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH10BeSYI4-Xi0iZwGs_qi_J6YGUqVYvI",
    authDomain: "project-a4c36.firebaseapp.com",
    projectId: "project-a4c36",
    storageBucket: "project-a4c36.appspot.com",
    messagingSenderId: "556720487485",
    appId: "1:556720487485:web:34f33a3a90660e98083e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);
const usersRef = collection(db, 'users');

export { app, auth, db, usersRef };