const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ALX!');
    res.end();
  } else if (req.url === '/students') {
    // Students URL
    countStudents('./data.csv')
      .then(({ studentData, studentCount }) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students:\n');
        res.write(`Number of students: ${studentCount}\n`);

        for (const [field, data] of Object.entries(studentData)) {
          res.write(
            `Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}\n`
          );
        }

        res.end();
      })
      .catch((error) => {
        console.error(error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(`Error: Cannot load the database. Details: ${error.message}`);
        res.end();
      });
  } else {
    // Unknown URL
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found! Please visit / or /students.');
    res.end();
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running at http://localhost:1245/');
});

module.exports = app;
