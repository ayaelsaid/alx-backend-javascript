const fs = require('fs').promises; // Use the promises  ersion of fs

const countStudents = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8'); // Read the file asynchronously
        const lines = data.trim().split('\n').filter(line => line); // Split and filter empty lines
        const totalStudents = lines.length;
        const countData = {};

        lines.forEach(line => {
            const eachStudent = line.split(',');
            const studentName = eachStudent[0].trim();
            const fieldName = eachStudent[3].trim();

            if (!countData[fieldName]) {
                countData[fieldName] = { count: 0, names: [] };
            }
            countData[fieldName].count += 1;
            countData[fieldName].names.push(studentName);
        });

        // Log total students
        console.log(`Number of students: ${totalStudents}`);

        // Log each field's student data
        for (const field in countData) {
            if (Object.prototype.hasOwnProperty.call(countData, field)) {
                console.log(`Number of students in ${field}: ${countData[field].count}. List: ${countData[field].names.join(', ')}`);
            }
        }

        return { totalStudents, countData };
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;
