import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  var [res, setRes] = useState(0);

  let sum = () => {
    setRes(parseInt(val1) + parseInt(val2))
  }
  let clean = () => {
    setRes(0);
    setVal1(0);
    setVal2(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calculadora</Text>

      <View style={styles.row}>
        <TextInput
          keyboardType='numeric'
          style={styles.value}
          value={val1.toString()}
          placeholder='Value1'
          onChangeText={(x) => {
            setVal1(x)
          }} />

        <Text style={styles.value}>+</Text>

        <TextInput
          keyboardType='numeric'
          style={styles.value}
          value={val2.toString()}
          placeholder='Value2'
          onChangeText={(y) => {
            setVal2(y)
          }} />
      </View>
      <View style={styles.row}>
        <Button
          title='Sumar'
          onPress={() => { sum() }} />
        <Text> </Text>
        <Button
          title='Limpiar'
          onPress={() => { clean() }} />
      </View>



      <Text style={styles.label}>Resultado: {res}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    margin: 10
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10
  },
  value: {
    margin: 5,
    textAlign: "center",
  },
  btn: {
    width: 100,
    color: "red",
    backgroundColor: "black"
  }
});
