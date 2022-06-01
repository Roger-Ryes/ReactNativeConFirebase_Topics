import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>IMC</Text>
      <CalculadoraImc></CalculadoraImc>
    </View>
  );
}


const CalculadoraImc = (prop) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  let weightText = "Peso";
  let heightText = "Altura";
  let dataText = "0";

  let calcuImc = () => {
    let weightInt = parseInt(weight), heightInt = parseInt(height)
    let imc = weightInt / ((heightInt / 100) ** 2);
    bodyComposition(imc)
  }
  let bodyComposition = (imc) => {
    let msg =
      (imc < 18.5) ? "Peso inferior al normal" :
        (imc > 18.5 && imc < 24.9) ? "Normal" :
          (imc > 25.0 && imc < 29.9) ? "Peso superior al normal" :
            (imc > 30.0) ? "Obesidad!!!" : "";
    setMessage(msg)
  }
  let clean = () => {
    setHeight(0); setWeight(0); setMessage(""); dataText = "";
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle]}>IMC</Text>
      <View style={styles.flexRow}>
        <View style={styles.flexRow}>
          <TextInput style={[styles.textSub]}
            keyboardType="numeric"
            value={weight.toString()}
            placeholder={weightText}
            onChangeText={(val) => { setWeight(val) }}
          ></TextInput>
          <Text style={[styles.textSub]}>kg</Text>
        </View>
        <View style={styles.flexRow}>
          <TextInput style={[styles.textSub]}
            keyboardType="numeric"
            value={height.toString()}
            placeholder={heightText}
            onChangeText={(val) => { setHeight(val) }}
          ></TextInput>
          <Text style={[styles.textSub]}>cm</Text>
        </View>
      </View>
      <View style={styles.flexColumn}>
        <Button
          title='Calcular'
          onPress={() => { calcuImc() }}
        />
        <Button
          title='Nuevo'
          onPress={() => { clean() }}
        />
      </View>
      <StatusBar style="auto" />
      <Text style={[styles.info]}> {message} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: 'center',
    // alignItems: "center",
  },
  textTitle: {
    color: "#999",
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },
  textSub: {
    color: "#666",
    padding: 10,
  },
  info: {
    color: "#999",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: "center",
    margin: 15
  },
  flexColumn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // margin: 10
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch",
    flexWrap: "wrap",
    margin: 10
  }

});
