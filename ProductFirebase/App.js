import { StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { loanConfiguration } from './app/utils/FirebaseConfig';
import { ProductForm } from './app/screens/ProductForm';
import { ListProducts } from './app/screens/ListProductsForm';
import { LoginForm } from './app/screens/LoginForm';
import { SignOut } from './app/services/AuthenticationServices';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Login = createNativeStackNavigator();
const NavigationRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={styles.route}>
      <Stack.Screen
        name="ListProductsForm"
        component={ListProducts}
        options={{
          title: 'Lista Producto',
          headerRight: () => (
            <Button
              onPress={() => { SignOut() }}
              title="Cerrar"
              color="red"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{
          title: 'Producto',
          headerRight: () => (
            <Button
              onPress={() => { SignOut() }}
              title="Cerrar"
              color="red"
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
const LoginApp = () => {
  return (
    <Login.Navigator
      screenOptions={styles.route}>
      <Login.Screen
        name="LoginForm"
        component={LoginForm}
        options={{ title: 'Login' }}
      ></Login.Screen>
    </Login.Navigator>
  )
}

export default function App() {
  const [logIn, setLogIn] = useState(global.state)
  loanConfiguration();

  if (!global.state) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        global.state = true;
        setLogIn(true);
      } else {
        global.state = false;
        setLogIn(false);
      }
    })
  }

  return (
    <NavigationContainer>
      {
        (!logIn) ? (
          <LoginApp></LoginApp>
        ) : (
          <NavigationRoute></NavigationRoute>
        )
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  route: {
    headerStyle: { backgroundColor: '#333', },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold', },
  }
});
