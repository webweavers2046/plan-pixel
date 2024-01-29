import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeV4PsMc-dH27-oVFhUxMbHf3hejFbuWA",
    authDomain: "sami-taskto.firebaseapp.com",
    projectId: "sami-taskto",
    storageBucket: "sami-taskto.appspot.com",
    messagingSenderId: "818290972194",
    appId: "1:818290972194:web:69049e522acd4120ff9c7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
