const fs = require('fs');

const countStudents = (file) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
            return reject(new Error('Cannot load the database'));
        }

        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return reject(new Error('Cannot load the database'));
            }

        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);

        const totalStudents = `Number of students: ${students.length}`;
        let count_data = {};

        for (const student of students) {
            const each_student = student.split(',');
            const studentName = each_student[0].trim();
            const fieldName = each_student[3].trim();

            if (!count_data[fieldName]) {
                count_data[fieldName] = { count: 0, names: [] };
            }
            count_data[fieldName].count += 1;
            count_data[fieldName].names.push(studentName);
        }

        console.log(totalStudents);

        for (const field in count_data) {
            console.log(`Number of students in ${field}: ${count_data[field].count}. List: ${count_data[field].names.join(', ')}`);
            }

        resolve();
    });
}
    )}
module.exports = countStudents;
