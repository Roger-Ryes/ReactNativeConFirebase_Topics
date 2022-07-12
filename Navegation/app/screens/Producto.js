import { View, Text, Button, StyleSheet } from 'react-native';

export const Product = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            <Button
                title='Ir a Home'
                onPress={() => { navigation.navigate("HomeNav") }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});