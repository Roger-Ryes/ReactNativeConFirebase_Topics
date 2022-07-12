# Conceptos Basicos
## Boton
    import { StyleSheet, Text, View, Button, Alert } from 'react-native';
    // funcion
    let greeting = () => {
        Alert.alert("Title","Hello since funcion");
    }

     <View style={styles.container}>
        {/* Iniciar boton */}
        <Button title={nameButton}
                onPress={()=>{ Alert.alert("Title","Hello word") }}/> {/* Llamar funcion metodo1 */}

        <Button title="OK"
                onPress={()=>{ greeting() }}/> {/* Llamar funcion metodo2 */}
    </View>


## Variables de estado
Archivo TS
    
    import { useState } from 'react';

    // Inicializar variables de estado
    const [counterUS, setcounterUS]=useState(5);

    // Asignar valor a variable de estado
    setcounterUS( counterUS+1 )

    // Mostrar en el container
    <Text>CounterUS { counterUS }</Text>

## TextInput

    import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
    var vallueText = "Ingrese nombre"
    var [varName, setvarName] = useState("");

    <TextInput
            value={varName}
            placeholder={vallueText}
            style={styles.textBox}
            onChangeText={(val) => {
            (val.includes('!'))?Alert.alert("Info", "No agregar '!'"):setvarName(val)
            }}
            onEndEditing={()=>{ greeting() }}
            />

    const styles = StyleSheet.create({
    textBox: {
        borderColor: "gray",
        borderWidth: 1,
        height: 40,
        margin: 12,
        padding: 10,
    }
    });

# DESTRUCTURING
    let persona = {
        nombre = "pepe",
        apellido = "Lopez",
        cedula = "123456798"
    }

    // Sin Destructuring
    let nombre = persona.nombre;
    let apellido = persona.apellido;

    // Con Destructuring
    let {nombre, apellido} = persona;

Tambien se puede aplicar en arreglos

    let numeros = [0,1,2,3,4];
    // Sin Destructurin
    let a = numeros[0];
    let b = numeros[1];

    // Con Destructurin
    let [a,b] = numeros;


# React Native core components
https://reactnative.dev/docs/components-and-apis


# React Navigation
https://reactnavigation.org/docs/getting-started/#installation

# React Navigation/Native Stack
https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator