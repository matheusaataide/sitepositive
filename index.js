const server = require('./server.js');

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`API Server is running on http://${process.env.URI}:${process.env.PORT}/api`);
});