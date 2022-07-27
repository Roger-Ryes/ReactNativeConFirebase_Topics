import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from "@rneui/themed";
import { useState } from 'react';
import { save } from '../services/ProductServices'

export const ProductForm = ({ navigation }) => {
    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const saveProduct = () => {
        save({ code, name, price: parseFloat(price) });
        clear();
        navigation.goBack();
    }
    const clear = () => {
        setCode(null);
        setName(null);
        setPrice(null);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.t1}>Formulario</Text>
            <Input
                style={styles.input}
                value={code}
                label="Codigo"
                keyboardType='numeric'
                placeholder='Ingresar codigo'
                onChangeText={(val) => { setCode(val) }}
                leftIcon={{ name: 'drive-file-rename-outline', type: 'MaterialIcons', color: 'white' }} />
            <Input
                style={styles.input}
                value={name}
                label="Nombre"
                placeholder='Nombre Producto'
                onChangeText={(val) => { setName(val) }}
                leftIcon={{ name: 'idcard', type: 'ant-design', color: 'white' }} />
            <Input
                style={styles.input}
                value={price}
                label="Precio"
                keyboardType='numeric'
                placeholder='Ingresar precio'
                onChangeText={(val) => { setPrice(val) }}
                leftIcon={{ name: 'attach-money', type: 'MaterialIcons', color: 'white' }} />
            <Button
                title="Solid Button"
                onPress={saveProduct}
                color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    t1: {
        fontSize: 25,
        color: "white",
        padding: 5,
    },
    input: {
        padding: 12,
        color: "white"
    }
});