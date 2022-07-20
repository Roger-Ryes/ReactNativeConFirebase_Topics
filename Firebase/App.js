import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getApp, getAuth } from "./firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";


// const db = getFirestore(getApp());

export default function App() {
  const save = () => {
    const Persona = { nombre: "Angeles", apellido: "Charlie", cedula: "1758968475" };
    // const ref = doc(db, "Personas", "1725408718");
    // setDoc(ref, Persona);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js too  </Text>
      <StatusBar style="auto" />
      <Button
        title='Call DBB'
        onPress={save}
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
