const http = require('http');

const port = 1245;
const host = 'localhost';
const text = 'Hello Holberton School!';

const app = http.createServer((req, res) => {
    res.statusCode = 200;  
    res.setHeader('Content-Type', 'text/plain');
    res.end(text); 
});

app.listen(port, host, () => {
    console.log(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;

