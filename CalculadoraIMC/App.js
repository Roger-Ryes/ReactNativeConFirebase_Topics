import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  weightText = "Peso";
  heightText = "Altura";

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
    setHeight(0); setWeight(0); setMessage("")
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle]}>IMC</Text>
      <View style={styles.flexRow}>
        <TextInput style={[styles.textSub]}
          keyboardType="numeric"
          value={weight.toString() | "0"}
          placeholder={weightText}
          onChangeText={(val) => { setWeight(parseInt(val)) }}
        ></TextInput>
        <Text style={[styles.textSub]}>kg</Text>
      </View>
      <View style={styles.flexRow}>
        <TextInput style={[styles.textSub]}
          keyboardType="numeric"
          value={height.toString() | "0"}
          placeholder={heightText}
          onChangeText={(val) => { setHeight(val) }}
        ></TextInput>
        <Text style={[styles.textSub]}>cm</Text>
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
  info:{
    color: "#999",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: "center",
    margin:15
  },
  flexColumn: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    // margin: 10
  },
  flexRow:{
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch",
    flexWrap: "wrap",
    margin: 10
  }
  
});
