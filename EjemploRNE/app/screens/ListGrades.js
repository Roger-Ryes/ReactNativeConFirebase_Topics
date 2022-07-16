import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getGrades } from '../services/GradeServices';
import { FAB, ListItem, Avatar } from "@rneui/themed";
import { useState } from 'react';




export const ListGrades = ({ navigation }) => {
    const [time, setTime] = useState();

    const refreshList = ()=>{
        setTime(new Date().getTime());
    }

    const ItemGrade = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate("GradeForm", { subjectPath: item.subject, gradesPaht: item.grades, post: true, fnRefresh: refreshList }) }}>
                <ListItem bottomDivider>
                    <Avatar
                        size={54}
                        rounded
                        title={item.subject.substring(0, 1)}
                        containerStyle={{ backgroundColor: '#3d4db7' }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.subject}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Subtitle>{item.grades}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text>LISTA DE NOTAS</Text>
            <FlatList
                data={getGrades()}
                renderItem={ItemGrade}
                keyExtractor={(item) => { return item.subject }}
                extraData={time}
            />
            <FAB
                visible={true}
                title="Navigate"
                onPress={() => { navigation.navigate("GradeForm", { post: false, fnRefresh: refreshList }) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
});
