import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  weightText = "Peso";
  heightText = "Altura";

  // let calcuImc = () => {
  //   let imc = weight / (height * height);
  // }

  return (
    <View style={styles.container}>
      <Text>IMC</Text>
      <TextInput
        keyboardType="numeric"
        value={weight}
        placeholder={weightText}
        onChangeText={(val) => { setWeight(val) }}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        value={height}
        placeholder={heightText}
        onChangeText={(val) => { setHeight(val) }}
      ></TextInput>
      <Button
        title='Calcular'
        onPress={() => { }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
});
