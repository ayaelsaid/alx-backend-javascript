const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

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
            const students = lines.slice(1); // Remove the header

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

            let result = `${totalStudents}\n`;

            for (const field in countData) {
                result += `Number of students in ${field}: ${countData[field].count}. List: ${countData[field].names.join(', ')}\n`;
            }

            resolve(result.trim());
        });
    });
}

app.get('/', (__, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
    res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (__, res) => {
    const FILE = process.argv.length > 2 ? process.argv[2] : '';

    try {
        const data = await countStudents(FILE); 
        res.setHeader('Content-Type', 'text/plain'); 
        res.status(200).send(`This is the list of our students:\n${data}`);
    } catch (error) {
        res.setHeader('Content-Type', 'text/plain'); 
        res.status(500).send('Cannot load the database\n');
    }
});

app.use((__, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
    res.status(404).send('404 Not Found\n');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
