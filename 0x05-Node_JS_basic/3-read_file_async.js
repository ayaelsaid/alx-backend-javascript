const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  // Check if the file exists and is a file
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    return reject(new Error('Cannot load the database'));
  }

  // Read the file asynchronously
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Exclude header line

    const totalStudents = `Number of students: ${students.length}`;
    const countData = {};

    // Process each student
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

    // Log total students
    console.log(totalStudents);

    // Log each field's student data
    for (const field in countData) {
      if (Object.prototype.hasOwnProperty.call(countData, field)) {
        console.log(`Number of students in ${field}: ${countData[field].count}. List: ${countData[field].names.join(', ')}`);
      }
    }

    // Resolve with the total students and count data
    return resolve({ totalStudents, countData });
  });
});

// Export the function for use in other files
module.exports = countStudents;
