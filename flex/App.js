import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const values = [
    { data: "Data 1", val: "Va" },
    { data: "Data 2", val: "Vb" },
    { data: "Data 2", val: "Vb" },
  ]
  const dataText = (obj) => {
    return (
      <View style={styles.secondItem}>
        <View style={styles.areaIndice}>
          <Text>{obj.index}</Text>
        </View>
        <View style={styles.areaContenido}>
          <Text>{obj.item.data}</Text>
          <Text>{obj.item.val}</Text>
        </View>
      </View>

    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.itemPerson}>Flex</Text>
      <FlatList
        data={values}
        renderItem={dataText}
      ></FlatList>
      <Text style={styles.footer}>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemPerson: {
    flex: 1,
    backgroundColor: "blueviolet",
    padding: 10,
  },
  secondItem: {
    flex: 10,
    padding: 5,
    backgroundColor: "brown",
    flexDirection: "row"
  },
  footer: {
    flex: 0,
    backgroundColor: "cornflowerblue",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  areaIndice: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "forestgreen"
  },
  areaContenido: {
    padding: 3,
    backgroundColor: "gold",
    flex: 5
  }
});
