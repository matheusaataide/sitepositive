const Express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const server = Express();

require('dotenv').config({
    path: __dirname + `${process.env.NODE_ENV === "development" ? "/.env.development" : "/.env"}`
});
// const mailer = require('./contact');

// middlewares
server.use(
    helmet(),
    bodyParser.urlencoded({ limit: '25mb', extended: true }),
    bodyParser.json({ limit: '25mb' }),
    cors(),
    morgan(process.env.NODE_ENV === "development" ? 'dev' : 'combined')
);

// Definindo banco de dados
// server.database = database;

// Fazendo roteamento
server.use('/api', routes);

server.use(Express.static('public'));

module.exports = server;