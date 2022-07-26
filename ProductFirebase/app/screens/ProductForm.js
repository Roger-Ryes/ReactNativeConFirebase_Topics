import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from "@rneui/themed";
import { useState } from 'react';

export const ProductForm = () => {
    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const saveProduct = ()=>{
        console.log("Hi");
    }


    return (
        <View style={styles.container}>
            <Text>Formulario</Text>
            <Input
                value={code}
                label="Codigo"
                keyboardType='numeric'
                placeholder='Ingresar codigo'
                leftIcon={{ name: 'drive-file-rename-outline', type: 'MaterialIcons' }} />
            <Input
                value={name}
                label="Nombre"
                placeholder='Nombre Producto'
                leftIcon={{ name: 'idcard', type: 'ant-design' }} />
            <Input
                value={price}
                label="Precio"
                keyboardType='numeric'
                placeholder='Ingresar precio'
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