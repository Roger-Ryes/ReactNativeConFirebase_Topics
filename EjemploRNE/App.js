import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from "@rneui/themed";
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Input
        value={name}
        onChangeText={(val) => { setName(val) }}
        placeholder="Ingresar Nombre" />
      <Text>{name}</Text>
      <Button
        title="Solid Button"
        icon={{
          name: 'baidu',
          type: 'entypo',
          size: 15,
          color: 'white',
        }}
        onPress={() => { Alert.alert("Info", "Su nombre es " + name) }} />
      <Button
        title="Ok"
        icon={{
          name: 'steam',
          type: 'zocial',
          size: 15,
          color: 'black',
        }} />
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
