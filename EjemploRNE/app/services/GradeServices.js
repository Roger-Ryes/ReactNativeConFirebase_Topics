let grades = [
    {
        subject: 'Math',
        grades: '0.0'
    },
    {
        subject: 'Phisic',
        grades: '0.0'
    }
]

export const saveGrades = (val) =>{
    return grades.push(val);
}

export const getGrades = () =>{
    return grades;
}