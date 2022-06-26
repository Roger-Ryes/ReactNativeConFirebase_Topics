import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';


let Personas = [
  { nombre: "Pepe 1", apellido: "Perez 1", cedula: "172059879" },
  { nombre: "Azul 2", apellido: "Zabala 2", cedula: "172059879" },
  { nombre: "Ariana 2", apellido: "Cebilla 3", cedula: "172059879" },
];


let ItemPerson = (prop) => {
  return (
    <View style={styles.secondItem}>
      <View style={styles.areaIndice}>
        <Text>{prop.index}</Text>
      </View>
      <View style={styles.areaContenido}>
        <Text>{prop.item.nombre} {prop.item.apellido}</Text>
        <Text>{prop.item.cedula}</Text>
      </View>
    </View>
  )
};

export default function App() {
  const [tiCedula, setTiCedula] = useState();
  const [tiNombre, setTiNombre] = useState();
  const [tiApellido, setTiApellido] = useState();

  const guardarPersona = () => {
    var jva = { nombre: tiNombre, apellido: tiApellido, cedula: tiCedula };
    Personas.push(jva);
    limpiar()
  }
  const limpiar = () => {
    setTiApellido(null);
    setTiNombre(null);
    setTiCedula(null);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.itemPerson}>Flex</Text>
      <TextInput style={styles.txtInput}
        value={tiNombre}
        placeholder='Ingrese nombre'
        onChangeText={(val) => { setTiNombre(val) }}
      ></TextInput>
      <TextInput style={styles.txtInput}
        value={tiApellido}
        placeholder='Ingrese apellido'
        onChangeText={(val) => { setTiApellido(val) }}
      ></TextInput>
      <TextInput style={styles.txtInput}
        value={tiCedula}
        placeholder='Ingrese cedula'
        onChangeText={(val) => { setTiCedula(val) }}
        keyboardType="numeric"
      ></TextInput>
      <View style={styles.areaBtn}>
        <Button
          onPress={() => { guardarPersona() }}
          title='Guardar'></Button>
        <Button
          onPress={() => { }}
          title='Limpiar'></Button>
      </View>
      <FlatList
        data={Personas}
        renderItem={(obj) => { return <ItemPerson index={obj.index} item={obj.item} /> }}
      ></FlatList>
      <Text style={styles.footer}>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemPerson: {
    flex: 1,
    // backgroundColor: "blueviolet",
    padding: 10,
  },
  secondItem: {
    flex: 10,
    padding: 5,
    // backgroundColor: "brown",
    flexDirection: "row"
  },
  footer: {
    flex: 0,
    // backgroundColor: "cornflowerblue",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  areaIndice: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // backgroundColor: "forestgreen"
  },
  areaContenido: {
    padding: 3,
    // backgroundColor: "gold",
    flex: 5
  },
  txtInput: {
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: "gray"
  },
  areaBtn: {
    flexDirection: "row",
    flex: 0,
    margin: 10,
    justifyContent: "space-around",
  }
});
