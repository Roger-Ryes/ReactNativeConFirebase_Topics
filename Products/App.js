import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Producto</Text>
      <Products></Products>
      <StatusBar style="auto" />
    </View>
  );
}

function Products() {
  let productos = [
    { nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
    { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
    { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
    { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
    { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 }
  ]

  let products = (obj) => {
    return (
      <View style={styles.borderContent}>
        <Text>{obj.item.nombre} ({obj.item.categoria})</Text>
        <Text>USD {obj.item.precioVenta}</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        style={styles.list}
        data={productos}
        renderItem={products}
        keyExtractor={(item) => { item.id }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 50,
    marginBottom: 50,
  },
  textMain: {
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    paddingTop: 10
  },
  borderContent: {
    borderColor: "#5f9ea0",
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  }
});
