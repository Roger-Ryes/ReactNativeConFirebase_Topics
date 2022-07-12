import { View, Text, StyleSheet, Button } from 'react-native';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                style={styles.btn}
                title='Ir a Contact'
                onPress={() => { navigation.navigate('ContactsNav') }}></Button>
            <Button
                style={styles.btn}
                title='Ir a Product'
                onPress={() => { navigation.navigate('ProductNav') }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btn:{
        margin: 10,
        padding: 10
    }
});