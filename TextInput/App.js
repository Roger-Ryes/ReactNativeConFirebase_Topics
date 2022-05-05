import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  var vallueText = "Ingrese nombre"
  var [varName, setvarName] = useState("");
  var [varLastName, setvarLastName] = useState("");

  let greeting = ()=>{
    Alert.alert("", `Bienvenido ${varName} ${varLastName}`)
  }
  let greetingText = `Bienvenido ${varName} ${varLastName}`;

  return (
    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text>{greetingText}</Text>
      <StatusBar style="auto" />
      <TextInput
        value={varName}
        placeholder={vallueText}
        style={styles.textBox}
        onChangeText={(val) => {
          (val.includes('!'))?Alert.alert("Info", "No agregar '!'"):setvarName(val)
        }}
         onEndEditing={()=>{ greeting() }}
        />
      <TextInput
        value={varLastName}
        placeholder="Ingrese apellido"
        style={styles.textBox}
        onChangeText={(val) => {
          setvarLastName(val)
        }} 
        onEndEditing={()=>{ greeting() }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  textBox: {
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
  }
});
