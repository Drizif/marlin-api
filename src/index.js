const server = require('./config/express');
const { port, timeout } = require('./config/vars').server;

server.listen(port, () => console.info(`server started on http://localhost:${port}`)).setTimeout(timeout);

module.exports = server;