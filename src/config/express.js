const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const useragent = require('express-useragent');

const routes = require('../router/index.routes');

const { limit, cors_allowed } = require('./vars').server;

const corsOptions = {
  origin: cors_allowed,
  optionsSuccessStatus: 200
}

const app = express();
app.use(useragent.express());
app.use(express.json({ limit }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(corsOptions));
app.use('/api', routes);

module.exports = app;
