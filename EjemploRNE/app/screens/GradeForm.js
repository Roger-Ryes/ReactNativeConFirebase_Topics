import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base'
import { useState } from 'react';
import { saveGrades } from '../services/GradeServices';
export const GradeForm = () => {
    const [subject, setSubject] = useState();
    const [grade, setGrade] = useState();
    const [errorGrade, setErrorGrade] = useState();
    const [errorSubject, setErrorSubject] = useState();

    const saveBtn = () => {
        cleanErrors();
        if (!validation()) {
            let index = saveGrades({ subject, grade });
        }
    }
    const validation = () => {
        if (subject == null) { setErrorSubject('Debe ingresar una materia') }
        if (isNaN(parseFloat(grade))) { setErrorGrade('Debe ingresar la nota') }
        let msgNum = (parseFloat(grade) > 10) ? 'Mayor a 10' :
            (parseFloat(grade) < 0) ? 'Menor a 0' : null;
        if (msgNum != null) { setErrorGrade(msgNum); }
        if (subject == null || grade == null || msgNum != null) {
            return true
        }
        return false
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
                errorMessage={errorSubject} />
            <Input
                value={grade}
                onChangeText={setGrade}
                placeholder="0 - 10"
                label="Nota"
                errorMessage={errorGrade}
                keyboardType='numeric' />
            <Button
                title="Guardar"
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
