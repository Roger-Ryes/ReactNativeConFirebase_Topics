import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, View, ScrollView, Keyboard, Button } from 'react-native';

let productos = [
  { nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Producto</Text>
      <Form></Form>
      <Products></Products>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const Form = () => {
  const [code, setCode] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [priceBuy, setPriceBuy] = useState()
  const [priceSell, setPriceSell] = useState()

  const save = () => {
    productos.push({ id: code, nombre: name, categoria: category, precioCompra: priceBuy, precioVenta: priceSell });
    this.Products
    newProduct();
  }
  const newProduct = () => {
    // setCode(null);
    setName(null);
    setCategory(null);
    setPriceBuy(null);
    setPriceSell(null);
  }
  const priceProduct = (val) => {
    if (val != null) {
      setPriceBuy(val);
      setPriceSell(String(parseFloat(val) + parseFloat(val) * 0.2));
    } else {
      setPriceSell(null)
    }
  }

  return (
    <ScrollView style={styles.FormContent}>
      <TextInput
        style={styles.txtInputProduct}
        placeholder='CODIGO'
        value={code}
        onChangeText={(val) => { setCode(val) }}
        keyboardType="numeric"
        editable={true} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='NOMBRE'
        value={name}
        onChangeText={(val) => { setName(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='CATEGORIA'
        value={category}
        onChangeText={(val) => { setCategory(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='PRECIO DE COMPRA'
        value={priceBuy}
        keyboardType="numeric"
        onChangeText={(val) => { priceProduct(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='PRECIO DE VENTA'
        value={priceSell}
        onChangeText={(val) => { }}
        editable={false} />
      <View style={styles.areaBtnProduct}>
        <Button
          title='NUEVO'
          onPress={() => { newProduct() }} />
        <Button
          title='GUARDAR'
          onPress={() => { save() }} />
        <Text>Productos: </Text>
      </View>
    </ScrollView>
  )
}

const Products = () => {
  let products = (obj) => {
    return (
      <View style={styles.borderContent}>
        <View style={styles.prodListIndex}>
          <Text>{obj.item.id}</Text>
        </View>
        <View style={styles.prodListElem}>
          <Text>{obj.item.nombre} ({obj.item.categoria})</Text>
          <Text>USD {obj.item.precioVenta}</Text>
        </View>
        <View style={styles.prodListBtn}>
          <Button title='E' />
          <Button title='X' />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.ProductsListContent}>
      <FlatList
        style={styles.list}
        data={productos}
        renderItem={products}
        keyExtractor={(item) => { item.id }}/>
    </View>
  )
}

function Footer() {
  return (
    <View style={styles.Footer}>
      <Text>Derechos reservados por Roger Reyes ©</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    // justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 50,
    marginBottom: 10,
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
    flexDirection: "row",
  },
  txtInputProduct: {
    borderColor: "#a9a9a9",
    borderWidth: 2,
    padding: 5,
    paddingLeft: 10,
    margin: 2,
    borderRadius: 5,
  },
  areaBtnProduct: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  FormContent: {
    // flex: 6
  },
  ProductsListContent: {
    flex: 6
  },
  Footer: {
    flex: 0,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  prodListIndex: {
    flex: 1,
    justifyContent: "center"
  },
  prodListElem: {
    flex: 5
  },
  prodListBtn: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // margin: 2
  }
});
