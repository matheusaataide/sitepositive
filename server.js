const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const server = Express();

require('dotenv').config({
    path: __dirname + `${process.env.NODE_ENV === "development" ? "/.env.dev" : "/.env"}`
});

// middlewares
server.use(
    helmet(),
    bodyParser.urlencoded({ limit: '25mb', extended: true }),
    bodyParser.json({ limit: '25mb' }),
    cors(),
    morgan(process.env.NODE_ENV === "development" ? 'dev' : 'combined')
);

// Fazendo roteamento de rotas da API
server.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    const baseDir = `${__dirname}/build/`
    server.use(Express.static(`${baseDir}`));
    
    server.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }));
    server.get('*', (req, res) => {
        res.sendFile('index.html', { root: baseDir });
    });
}


module.exports = server;