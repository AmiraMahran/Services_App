
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import {getFirestore,collection} from 'firebase/firestore'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpcdgtAPlzQe3kbUfKUay8Uyr8AgmauNE",
  authDomain: "finalproject-1270b.firebaseapp.com",
  projectId: "finalproject-1270b",
  storageBucket: "finalproject-1270b.appspot.com",
  messagingSenderId: "1092599420198",
  appId: "1:1092599420198:web:4396dd5d8fee057c195de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =initializeAuth(app,{
    projectId:getReactNativePersistence(AsyncStorage)
});

export const db =getFirestore(app);

export const usersRef=collection(db,'users');