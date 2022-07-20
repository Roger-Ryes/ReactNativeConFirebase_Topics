import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIal5_BVCo-twj1g1aX83Kqp80rLJZn3c",
  authDomain: "fir-rn-7c834.firebaseapp.com",
  projectId: "fir-rn-7c834",
  storageBucket: "fir-rn-7c834.appspot.com",
  messagingSenderId: "213370933626",
  appId: "1:213370933626:web:09bef5c015032ac3a5c6c3"
};

const app = initializeApp(firebaseConfig);

export const getApp = () => {
  return app;
}

export const getAuth = () => {
  return app.auth()
}
