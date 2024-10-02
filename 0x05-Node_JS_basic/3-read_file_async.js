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
        let countData = {};

        for (const student of students) {
            const eachStudent = student.split(',');
            const studentName = eachStudent[0].trim();
            const fieldName = eachStudent[3].trim();

            if (!countData[fieldName]) {
                countData[fieldName] = { count: 0, names: [] };
            }
            countData[fieldName].count += 1;
            countData[fieldName].names.push(studentName);
        }

        console.log(totalStudents);

for (const field in countData) {
  if (Object.prototype.hasOwnProperty.call(countData, field)) {
    console.log(`Number of students in ${field}: ${countData[field].count}. List: ${countData[field].names.join(', ')}`);
  }
}

        resolve();
    });
}
    )}
module.exports = countStudents;
