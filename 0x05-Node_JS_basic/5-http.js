const http = require('http');
const countStudents = require('./read_asfiles');

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
            const [countKey, studentsKey] = Object.keys(data); // Dynamically get the keys
            const count = data[countKey]; // Access the value of the "count" key
            const students = data[studentsKey]; // Access the value of the "students" key
          
            res.write(`Number of students in ${field}: ${count}. List: ${students}\n`);
          
            // res.write(`Number of students in ${field}: ${data.count}. List: ${data.students}\n`);
          
          
          }
          res.end();
        })
        .catch((error) => {
          console.error(error.message);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Error: Cannot load the database.');
          res.end();
        });
    } else {
      // Unknown URL
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page not found!');
      res.end();
    }
  });
  
  // Listen on port 1245
  app.listen(1245, () => {
    console.log('Server is running at http://localhost:1245/');
  });
module.exports = app;
