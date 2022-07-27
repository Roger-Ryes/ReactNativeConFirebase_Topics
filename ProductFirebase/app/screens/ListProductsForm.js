import { FlatList, View, StyleSheet } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed'

import { getDataProducts } from '../services/ProductServices';
import { useState } from 'react';
import { Button, FAB } from '@rneui/base';


export const ListProducts = ({ navigation }) => {
    const [product, setProduct] = useState([]);

    const loadData = () => {
        getDataProducts().then(resp => {
            setProduct(resp);
        })
    }
    const renderItem = ({ item }) => {
        return (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>Precio: {item.price}</ListItem.Subtitle>
                    <ListItem.Subtitle>Codigo: {item.code}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View style={styles.container}>
            <Button
                title="Cargar"
                onPress={loadData}
                color="green">
            </Button>
            <FlatList
                data={product}
                renderItem={renderItem}>
            </FlatList>
            <FAB
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color="#333"
                onPress={() => {
                    navigation.navigate("ProductForm")
                }}>
            </FAB>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});