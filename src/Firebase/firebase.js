
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD9i5Ad1zRB3UcQaj6E0_15qfEZaJUJmWM",
    authDomain: "shop-val.firebaseapp.com",
    projectId: "shop-val",
    storageBucket: "shop-val.appspot.com",
    messagingSenderId: "1065045578645",
    appId: "1:1065045578645:web:6581725f355c21049edc9c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

