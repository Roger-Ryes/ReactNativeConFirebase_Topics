import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const values = [
    { data: "data 1", val: "va" },
    { data: "data 2", val: "vb" },
    { data: "data 2", val: "vb" },
  ]
  const dataText = (obj) => {
    return (<Text style={styles.secondItem}>{obj.item.data}</Text>)
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
    padding: 10,
    backgroundColor: "brown",
  },
  footer: {
    flex: 0,
    backgroundColor: "cornflowerblue",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignContent: "center"
  }
});
