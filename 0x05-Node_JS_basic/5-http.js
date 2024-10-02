const http = require('http');
const fs = require('fs');

const FILE = process.argv.length > 2 ? process.argv[2] : '';

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
const port = 1245;
const host = 'localhost';
const text = 'Hello Holberton School!';

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(text);
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(FILE); // Wait for the student data
      res.statusCode = 200;
      res.end(`This is the list of our students:\n${data}`);
    } catch (error) {
      res.statusCode = 500; // Internal Server Error
      res.end('Cannot load the database\n');
    }
  } else {
    res.statusCode = 404; // Not Found
    res.end('404 Not Found\n');
  }
});

app.listen(port, host, () => {
  console.log(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
