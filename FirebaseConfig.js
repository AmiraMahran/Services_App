
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import {getFirestore,collection} from 'firebase/firestore'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhdw0qQX1reH7CbSzDUxg_h4iCV9PpTLE",
  authDomain: "test-79a5b.firebaseapp.com",
  projectId: "test-79a5b",
  storageBucket: "test-79a5b.appspot.com",
  messagingSenderId: "1091027357392",
  appId: "1:1091027357392:web:03bb13f2324526ffd958d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =initializeAuth(app,{
    projectId:getReactNativePersistence(AsyncStorage)
});

export const db =getFirestore(app);

export const usersRef=collection(db,'users');

export const admin ="MooMg3wYKfPBzUkTWk0T7iY1xsS2"