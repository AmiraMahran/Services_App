
import { initializeApp } from "firebase/app";

import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

import {getFirestore,collection} from 'firebase/firestore'


import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyCFfGCsnXBokPUKBuRTnVaWkwZwdKrp_X0",
    authDomain: "homeservice-cab80.firebaseapp.com",
    projectId: "homeservice-cab80",
    storageBucket: "homeservice-cab80.appspot.com",
    messagingSenderId: "837297059373",
    appId: "1:837297059373:web:50a15ca07f1bc289156aa4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =initializeAuth(app,{
    projectId:getReactNativePersistence(AsyncStorage)
});

export const db =getFirestore(app);

export const usersRef=collection(db,'users');