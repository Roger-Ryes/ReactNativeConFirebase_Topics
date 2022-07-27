import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIal5_BVCo-twj1g1aX83Kqp80rLJZn3c",
    authDomain: "fir-rn-7c834.firebaseapp.com",
    projectId: "fir-rn-7c834",
    storageBucket: "fir-rn-7c834.appspot.com",
    messagingSenderId: "213370933626",
    appId: "1:213370933626:web:3837e02942578a17a5c6c3"
};


export const loanConfiguration = () => {
    console.log("Configuration init");
    const app = initializeApp(firebaseConfig);
    global.DB = getFirestore(app);
}