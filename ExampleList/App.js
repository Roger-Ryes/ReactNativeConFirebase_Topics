import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

let person = [
  { name: "Peter", lastname: "Parker", passport: "1232568748" },
  { name: "Jonhy", lastname: "Castro", passport: "48591232" },
  { name: "Elbe", lastname: "Sapi", passport: "7894565234" },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Example List</Text>
      <FlatList
        style={styles.list}
        data={person}
        renderItem={(obj) => {
          return (
            <View style={styles.textList}>
              <Text style={styles.maintext}>{obj.index} {obj.item.name}</Text>
              <Text style={styles.secondtext}>{obj.item.passport}</Text>
            </View>
          )}}
        keyExtractor={(item)=>{ return item.passport }}
      >
      </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#696969",
  },
  list: {
    backgroundColor: "#f0fff0",
  },
  textList: {
    backgroundColor: "#f0e68c",
    marginBottom: 10,
    padding: 10,
  },
  maintext: {
    fontSize: 16,
  },
  secondtext: {
    fontSize: 12,
    fontStyle: "italic"
  },
});
