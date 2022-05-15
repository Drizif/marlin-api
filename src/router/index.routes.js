const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');

const routes = express();

routes.use(
  verifyApiKey,
  require('../router/img.routes'),
  require('../router/post.routes')
);

module.exports = routes;
