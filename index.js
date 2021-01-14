const server = require('./server.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

console.log(process.env.HOST)

server.listen(port, () => {
    console.log(`API Server is running on http://${host}:${port}/api`);
});