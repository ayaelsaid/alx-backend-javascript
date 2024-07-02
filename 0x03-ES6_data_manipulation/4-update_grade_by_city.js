export default function updateStudentGradeByCity(students, city, newGrdes) {
    if (!Array.isArray(students)) {
        return 'Students should be a list'; // Return a message indicating students should be an array
    }
    if (typeof(city) !== 'string') {
        return 'City must be a string';
    }
    if (!Array.isArray(newGrdes)) {
        return 'New grades should be a list'; // Return a message indicating newGrdes should be an array
    }

    let specificCity = students
        .filter(student => student.location === city)
        .map(student => {
            let grade = newGrdes.find(grade => grade.studentId === student.id);
            if (grade) {
                student.grade = grade.grade;
            } else {
                student.grade = 'N/A';
            }
            return student;
        });

    return specificCity;
}