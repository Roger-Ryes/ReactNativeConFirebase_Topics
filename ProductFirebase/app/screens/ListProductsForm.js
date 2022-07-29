import { FlatList, View, StyleSheet } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed'

import { getDataProducts } from '../services/ProductServices';
import { SignOut } from '../services/AuthenticationServices';
import { useState, useEffect } from 'react';
import { Button, FAB } from '@rneui/base';

export const ListProducts = ({ navigation }) => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        loadData();
    }, []);

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
                    <ListItem.Subtitle>Precio: {item.price} {"\t\t\t\t"} Codigo: {item.code}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={product}
                renderItem={renderItem}>
            </FlatList>
            <FAB
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color="#333"
                onPress={() => {
                    navigation.navigate("ProductForm", { reloadData: loadData })
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