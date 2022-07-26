import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIal5_BVCo-twj1g1aX83Kqp80rLJZn3c",
  authDomain: "fir-rn-7c834.firebaseapp.com",
  projectId: "fir-rn-7c834",
  storageBucket: "fir-rn-7c834.appspot.com",
  messagingSenderId: "213370933626",
  appId: "1:213370933626:web:09bef5c015032ac3a5c6c3"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// export const getAuth = () => {
//   return app.auth()
// }

export const getDataDB = async () => {
  const querySnapshot = await getDocs(collection(this.db, "Personas"));
  console.log(querySnapshot);
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
}

export const addDataDB = async () => {
  try {
    const docRef = await addDoc(collection(db, "Personas"), {
      nombre: "Alan",
      apellido: "Mathison",
      cedula: 1912
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}