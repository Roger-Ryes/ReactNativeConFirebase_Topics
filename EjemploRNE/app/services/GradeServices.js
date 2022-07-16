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

export const saveGrades = (val) => {
    return grades.push(val);
}

export const getGrades = () => {
    return grades;
}

export const updateGrades = (grade) => {
    const index = findBySubject(grade.subject);
    grades[index].grades =  grade.grades;
}

export const findBySubject = (sub) => {
    let i = -1;
    grades.forEach((val, index) => {
        if (val.subject === sub) { i = index }
    })
    return i;
}