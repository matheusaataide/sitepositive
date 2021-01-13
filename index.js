const server = require('./server.js');

const host = process.env.URI || 'localhost';
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`API Server is running on http://${host}:${port}/api`);
});