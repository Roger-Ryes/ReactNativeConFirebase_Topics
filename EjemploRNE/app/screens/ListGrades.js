import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getGrades } from '../services/GradeServices';


export const ListGrades = () => {
    const ItemGrade = ({ item }) => {
        return (
            <View>
                <Text>{item.subject} - {item.grades}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>LISTA DE NOTAS</Text>
            <FlatList
                data={getGrades()}
                renderItem={ItemGrade}
                keyExtractor={(item) => { return item.subject }}
            />
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
