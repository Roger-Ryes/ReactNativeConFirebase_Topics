import { View, Text, StyleSheet } from 'react-native';

export const ListGrades = () => {
    return(
        <View style={styles.container}>
            <Text>LISTA DE NOTAS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  