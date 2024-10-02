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

  const count_data = {};

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

  for (const field in count_data) {
    console.log(`Number of students in ${field}: ${count_data[field].count}. List: ${count_data[field].names.join(', ')}`);
  }
}

module.exports = countStudents;
