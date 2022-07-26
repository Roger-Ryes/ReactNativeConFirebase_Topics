import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIal5_BVCo-twj1g1aX83Kqp80rLJZn3c",
  authDomain: "fir-rn-7c834.firebaseapp.com",
  projectId: "fir-rn-7c834",
  storageBucket: "fir-rn-7c834.appspot.com",
  messagingSenderId: "213370933626",
  appId: "1:213370933626:web:09bef5c015032ac3a5c6c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log("db: ",db)

export default function App() {
  const saveDoc = async () => {
    const Persona = { nombre: "Nicolas", apellido: "Tesla", cedula: "1726879818" };
    const ref = doc(db, "Personas", "1726879818");
    await setDoc(ref, Persona);
  }
  const addColl = async () => {
    const Persona = { nombre: "Nicolas", apellido: "Copernico", cedula: "1726879818" };
    const refColl = collection(db, "Personas");
    await addDoc(refColl, Persona);
  }
  const getDocDB = async () => {
    const docRef = doc(db, "Personas", "032");
    const docRest = await getDoc(docRef);
    if (docRest.exists()) {
      console.log("Doc", docRest.data());
    } else {
      console.log("NO existe dato");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title='Save Doc'
        onPress={saveDoc}
      ></Button>
      <Button
        title='add Coll'
        onPress={addColl}
      ></Button>
      <Button
        title='Get Data'
        onPress={getDocDB}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
