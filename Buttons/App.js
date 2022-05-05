import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  let nameButton = "Mi boton"
  let greeting = () => {
    Alert.alert("Title", "Hello since funcion");
  }

  return (
    <View style={styles.container}>
      <Text>BasicApp! app perron</Text>
      <StatusBar style="auto" />
      {/* Iniciar boton */}
      <Button title={nameButton}
        onPress={() => {
          Alert.alert("Title", "Hello word")
        }} />

      <Button title="OK"
        onPress={() => { greeting() }} />
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
