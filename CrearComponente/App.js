import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';

let esNuevo = true;
let indexPerson;
let cedulaEditable = true;
let footer = "Todos los derechos reservado Roger Reyes ©"
let Personas = [
  { nombre: "Pepe 1", apellido: "Perez 1", cedula: "172060879" },
  { nombre: "Azul 2", apellido: "Zabala 2", cedula: "172059123" },
  { nombre: "Ariana 2", apellido: "Cebilla 3", cedula: "172789456" },
];

export default function App() {
  const [tiCedula, setTiCedula] = useState();
  const [tiNombre, setTiNombre] = useState();
  const [tiApellido, setTiApellido] = useState();
  const [numClientes, setNumClientes] = useState(Personas.length);

  const guardarPersona = () => {
    if (esNuevo) {
      var jva = { nombre: tiNombre, apellido: tiApellido, cedula: tiCedula };
      // console.log(existePersona(tiCedula))
      if (existePersona(tiCedula)) {
        Alert.alert("Usuario ya existe");
        return
      }
      Personas.push(jva);
    } else {
      Personas[indexPerson] = { nombre: tiNombre, apellido: tiApellido, cedula: tiCedula };
    }
    setNumClientes(Personas.length)
    limpiar()
  }
  const limpiar = () => {
    setTiApellido(null);
    setTiNombre(null);
    setTiCedula(null);
    esNuevo = true;
    cedulaEditable = true;
  }
  const editPerson = (person, index) => {
    cedulaEditable = false;
    esNuevo = false;
    indexPerson = index;
    setTiCedula(person.cedula);
    setTiApellido(person.apellido);
    setTiNombre(person.nombre);
  }
  const deletePerson = (index) => {
    Personas.splice(index, 1)
    setNumClientes(Personas.length)
  }
  const existePersona = (cedula) => {
    let value = false;
    for (var i = 0; i < Personas.length; ++i) {
      if (Personas[i].cedula == cedula) { value = true };
    }
    return value;
  }

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
        <View style={styles.areaBtnList}>
          <Button
            title='E'
            color={"green"}
            onPress={() => { editPerson(prop.item, prop.index) }}></Button>
          <Button
            title='X'
            color={"red"}
            onPress={() => { deletePerson(prop.index) }}></Button>
        </View>
      </View>
    )
  };

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
        editable={cedulaEditable}
      ></TextInput>
      <View style={styles.areaBtn}>
        <Button
          onPress={() => { if (tiNombre != null && tiApellido != null && tiCedula != null) { guardarPersona() } }}
          title="Guardar"></Button>
        <Button
          title='Limpiar'
          onPress={() => { limpiar() }}></Button>
      </View>
      <Text>Clientes: {numClientes}</Text>
      <FlatList
        data={Personas}
        renderItem={(obj) => { return <ItemPerson index={obj.index} item={obj.item} /> }}
      ></FlatList>
      <Text style={styles.footer}>{footer}</Text>
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
  },
  areaBtnList: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "red"
  }
});
