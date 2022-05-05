import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  // Inicializar variables de estado
  const [counterUS, setcounterUS]=useState(5);

  let addCont=()=>{
    // Asignar valor a variable de estado
    setcounterUS( counterUS+1 )
    console.log("counterUS: "+ counterUS);
  }
  let reduceCont=()=>{
    // Asignar valor a variable de estado
    if(counterUS<=0){ 
      Alert.alert("NO puede ser menor a cero")
      return }
    setcounterUS( counterUS-1 )
  }

  return (
    <View style={styles.container}>
      {/* App */}
      <Text>CounterUS: { counterUS }</Text>
      <StatusBar style="auto" />

      <Button title='Contador'
              onPress={ addCont }/>

      <Button title='Reducir'
              onPress={ reduceCont }/>
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
