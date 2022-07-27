import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { loanConfiguration } from './app/utils/FirebaseConfig';
import { ProductForm } from './app/screens/ProductForm';
import { ListProducts } from './app/screens/ListProductsForm';

const Stack = createNativeStackNavigator();

export default function App() {
  loanConfiguration();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#333', },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', },
        }}>
        <Stack.Screen
          name="ListProductsForm"
          component={ListProducts}
          options={{ title: 'Lista Producto' }}
        />
        <Stack.Screen
          name="ProductForm"
          component={ProductForm}
          options={{ title: 'Formulario Producto' }}
        />
      </Stack.Navigator>
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
});
