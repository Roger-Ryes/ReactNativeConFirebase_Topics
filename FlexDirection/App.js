import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();


  return (
    <View style={styles.container}>
      <Text>Flex Direction</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        placeholder='Nombre'
        onChangeText={(value) => { setName(value) }}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        value={lastname}
        placeholder='Apellido'
        onChangeText={(value) => { setLastName(value) }}
      ></TextInput>

      <Button style={styles.space} title='btn1' onPress={() => { Alert.alert("Hi") }} />
      <Button style={styles.space} title='btn2' onPress={() => { Alert.alert("Hi") }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column",  // Eje principal "vertical"
    justifyContent: "center", // afecta al eje principal
    alignItems: "stretch",      // afecta al eje secundario
    margin: 10
  },
  space: {
    padding: 20
  },
  textInput: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
    borderColor: "gray",
    borderWidth: 1

  }
});
