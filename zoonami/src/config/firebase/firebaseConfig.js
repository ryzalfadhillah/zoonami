// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXMBufveUuXo44M_kvDUfw2Io4ESjZX5U",
    authDomain: "zoonami.firebaseapp.com",
    projectId: "zoonami",
    storageBucket: "zoonami.appspot.com",
    messagingSenderId: "246523311170",
    appId: "1:246523311170:web:338a32a6d26d9da22ce9db",
    measurementId: "G-7VFBFSB912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const storage = getStorage(app)