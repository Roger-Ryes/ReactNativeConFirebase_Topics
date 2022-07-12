import { View, Text, StyleSheet, Button } from 'react-native';

export const Contacts = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
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