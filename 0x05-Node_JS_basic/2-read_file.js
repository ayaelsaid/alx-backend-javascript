const fs = require('fs');

function countStudents(file) {
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(file).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(file, 'utf8');
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const countData = {};

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

  for (const field in countData) {
    if (Object.prototype.hasOwnProperty.call(countData, field)) {
      console.log(`Number of students in ${field}: ${countData[field].count}. List: ${countData[field].names.join(', ')}`);
    }
  }
}

module.exports = countStudents;
