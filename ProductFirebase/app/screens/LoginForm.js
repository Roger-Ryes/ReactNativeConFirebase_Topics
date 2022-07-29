import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from "@rneui/themed";
import { useState } from 'react';

import { LogIn, SignIn, SignOut } from '../services/AuthenticationServices'

export const LoginForm = () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const validateLogin = () => {
        SignIn(user, password);
    }
    const closeSession = () => {
        SignOut();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.t1}>Registrarse</Text>
            <Input
                style={styles.input}
                value={user}
                label="Usuario"
                placeholder='Ingresar email'
                onChangeText={(val) => { setUser(val) }}
                leftIcon={{ name: 'user-o', type: 'font-awesome', color: 'white' }} />
            <Input
                style={styles.input}
                value={password}
                label="Clave"
                placeholder='Ingresar contraseña'
                onChangeText={(val) => { setPassword(val) }}
                leftIcon={{ name: 'key', type: 'entypo', color: 'white' }} />
            <Button
                title="Ingresar"
                onPress={validateLogin}
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
        justifyContent: 'flex-start'
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