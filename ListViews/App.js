import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, SectionList, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.containerFlat]}>
      <Text style={styles.textMain}>List Views</Text>
      <FlatListBasic></FlatListBasic>
      <SectionListBasic></SectionListBasic>
      <StatusBar style="auto" />
    </View>
  );
}

const FlatListBasic = () => {
  let data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>FlatList</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
      >
      </FlatList>
    </View>
  )
}

const SectionListBasic = () => {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  const sectionListRender = ({ item }) => (
    <Text>{item}</Text>
  )
  const sectionHeaderList = ({ section }) => (
    <Text style={styles.textBold}>{section.title}</Text>
  )
  

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>SectionList</Text>
      <SectionList
        sections={DATA}
        renderItem={sectionListRender}
        // renderSectionHeader={ ({section: {title}})=>(<Text style={styles.textBold}>{title}</Text>) } // Metodo 1
        renderSectionHeader={ sectionHeaderList } // Metodo 2
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    justifyContent: "space-around",
    // alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  containerFlat: {
    flex: 1,
    marginBottom: 5
  },
  textMain:{
    fontSize: 20,
    textAlign: "center",
  },
  textBold:{
    fontSize: 18,
    color: "red"
  }
});
