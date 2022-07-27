import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from "@rneui/themed";
import { useState } from 'react';
import { save } from '../services/ProductServices'

export const ProductForm = () => {
    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const saveProduct = () => {
        save({ code, name, price: parseFloat(price) });
        clear();
    }
    const clear = ()=>{
        setCode(null);
        setName(null);
        setPrice(null);
    }

    return (
        <View style={styles.container}>
            <Text>Formulario</Text>
            <Input
                value={code}
                label="Codigo"
                keyboardType='numeric'
                placeholder='Ingresar codigo'
                onChangeText={(val) => { setCode(val) }}
                leftIcon={{ name: 'drive-file-rename-outline', type: 'MaterialIcons' }} />
            <Input
                value={name}
                label="Nombre"
                placeholder='Nombre Producto'
                onChangeText={(val) => { setName(val) }}
                leftIcon={{ name: 'idcard', type: 'ant-design' }} />
            <Input
                value={price}
                label="Precio"
                keyboardType='numeric'
                placeholder='Ingresar precio'
                onChangeText={(val) => { setPrice(val) }}
                leftIcon={{ name: 'attach-money', type: 'MaterialIcons' }} />
            <Button
                title="Solid Button"
                onPress={saveProduct} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});