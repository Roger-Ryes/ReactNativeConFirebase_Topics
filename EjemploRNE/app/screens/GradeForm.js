import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base'
import { useState } from 'react';
import { saveGrades, updateGrades } from '../services/GradeServices';


export const GradeForm = ({ navigation, route }) => {
    const { subjectPath, gradesPaht, post } = route.params;

    // console.log(JSON.stringify(gradesPaht))
    const [subject, setSubject] = useState((subjectPath) ? subjectPath : "");
    const [grade, setGrade] = useState((gradesPaht) ? gradesPaht : "");
    const [errorGrade, setErrorGrade] = useState();
    const [errorSubject, setErrorSubject] = useState();

    const btn = (post) ? "Editar" : "Guardar";

    const saveBtn = () => {
        cleanErrors();
        if (!validation()) {
            if (post) {
                updateGrades({ subject: subject, grades: grade })
            } else {
                let index = saveGrades({ subject, grades: grade });
            }
            navigation.goBack();
            route.params.fnRefresh();
        }

    }
    const validation = () => {
        let error = false;
        if (subject == null || subject.length == 0) { setErrorSubject('Debe ingresar una materia'); error = true; }
        if (isNaN(parseFloat(grade))) { setErrorGrade('Debe ingresar la nota'); error = true; }
        let msgNum = (parseFloat(grade) > 10) ? 'Mayor a 10' :
            (parseFloat(grade) < 0) ? 'Menor a 0' : null;
        if (msgNum != null) { setErrorGrade(msgNum); error = true; }
        return error;
    }
    const cleanErrors = () => {
        setErrorSubject(null);
        setErrorGrade(null);
    }


    return (
        <View style={styles.container}>
            <Text>FORMULARIOS DE NOTAS</Text>
            <Input
                value={subject}
                onChangeText={setSubject}
                placeholder="Ejemplo"
                label="Material"
                disabled={post}
                errorMessage={errorSubject} />
            <Input
                value={grade}
                onChangeText={setGrade}
                placeholder="0 - 10"
                label="Nota"
                errorMessage={errorGrade}
                keyboardType='numeric' />
            <Button
                title={btn}
                icon={{
                    name: 'save-alt',
                    type: 'MaterialIcons',
                    color: '#fff'
                }}
                buttonStyle={styles.btnSave}
                onPress={saveBtn}
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
    btnSave: {
        backgroundColor: 'green'
    }
});
