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
      <Products></Products>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

// FORM
const Form = (prop) => {
  const save = () => {
    if (prop.edit) {
      productos.push({ id: prop.code, nombre: prop.name, categoria: prop.category, precioCompra: prop.priceBuy, precioVenta: prop.priceSell });
      prop.setLengthProduct(productos.length);
      prop.onRefresh();
    } else {
      productos[prop.index].nombre = prop.name;
      productos[prop.index].categoria = prop.category;
      productos[prop.index].precioCompra = prop.priceBuy;
      productos[prop.index].precioVenta = prop.priceSell;
    }
    newProduct();
  }
  const newProduct = () => {
    prop.setCode(null);
    prop.setName(null);
    prop.setCategory(null);
    prop.setPriceBuy(null);
    prop.setPriceSell(null);
    prop.setEdit(true)
  }
  const priceProduct = (val) => {
    if (val != null) {
      prop.setPriceBuy(val);
      prop.setPriceSell(String((parseFloat(val) + parseFloat(val) * 0.2).toFixed(2)));
    } else {
      prop.setPriceSell(null)
    }
  }
  const msg_alert = () => {
    Alert.alert("Llenar todos los campos");
  }

  return (
    <ScrollView style={styles.FormContent}>
      <TextInput
        style={styles.txtInputProduct}
        placeholder='CODIGO'
        value={prop.code}
        onChangeText={(val) => { prop.setCode(val) }}
        keyboardType="numeric"
        editable={prop.edit} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='NOMBRE'
        value={prop.name}
        onChangeText={(val) => { prop.setName(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='CATEGORIA'
        value={prop.category}
        onChangeText={(val) => { prop.setCategory(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='PRECIO DE COMPRA'
        value={prop.priceBuy}
        keyboardType="numeric"
        onChangeText={(val) => { priceProduct(val) }} />
      <TextInput
        style={styles.txtInputProduct}
        placeholder='PRECIO DE VENTA'
        value={prop.priceSell}
        onChangeText={(val) => { }}
        editable={false} />
      <View style={styles.areaBtnProduct}>
        <Button
          title='NUEVO'
          onPress={() => { newProduct() }} />
        <Button
          title='GUARDAR'
          onPress={() => {
            if (prop.code != null && prop.name != null && prop.category != null && prop.priceBuy != null) {
              save();
            }
            else { msg_alert() }
          }} />
        <Text>Productos: {prop.lengthProduct}</Text>
      </View>
    </ScrollView>
  )
}

// PRODUCTS LIST
const Products = (prop) => {
  const [isFetching, setIsFetching] = useState(false);
  const [code, setCode] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [priceBuy, setPriceBuy] = useState()
  const [priceSell, setPriceSell] = useState()
  const [edit, setEdit] = useState(true)
  const [index, setIndex] = useState()
  const [lengthProduct, setLengthProduct] = useState(productos.length)
  let disabledBtn = false;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onRefresh = async () => {
    setIsFetching(true);
    await sleep(500);
    setIsFetching(false);
  };
  const editProduct = (index) => {
    setCode((productos[index].id).toString());
    setName(productos[index].nombre);
    setCategory(productos[index].categoria);
    setPriceBuy((productos[index].precioCompra).toString());
    setPriceSell((productos[index].precioVenta).toString());
    setEdit(false);
    setIndex(index);
  }
  const deleteProduct = (index) => {
    productos.splice(index, 1);
    setLengthProduct(productos.length)
    setIndex(null);
  }
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
          <Button
            title='E'
            onPress={() => { editProduct(obj.index) }} />
          <Button
            title='X'
            onPress={() => { deleteProduct(obj.index) }}
            disabled={disabledBtn} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.ProductsListContent}>
      <Form onRefresh={onRefresh}
        code={code} setCode={setCode}
        name={name} setName={setName}
        category={category} setCategory={setCategory}
        priceBuy={priceBuy} setPriceBuy={setPriceBuy}
        priceSell={priceSell} setPriceSell={setPriceSell}
        edit={edit} setEdit={setEdit}
        index={index} setIndex={setIndex}
        lengthProduct={lengthProduct}
        setLengthProduct={setLengthProduct}
      ></Form>
      <FlatList
        style={styles.list}
        data={productos}
        renderItem={products}
        refreshing={isFetching}
        keyExtractor={(item) => { item.id }} />
    </View >
  )
}

// FOOTER
function Footer() {
  return (
    <View style={styles.Footer}>
      <Text>Derechos reservados por Roger Reyes ©</Text>
    </View>
  )
}

// STYLE
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
