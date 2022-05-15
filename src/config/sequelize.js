const Sequelize = require("sequelize");

const { host, dialect, database, user, password, pool } = require('./vars').db;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

sequelize.authenticate().then(() => {
  console.log('DB Connected');
}).catch(err => {
  console.log('DB Connection Error', err);
});

module.exports = {
  db: sequelize,
  options: {
    type: 'SELECT',
    raw: true,
    plain: false,
  }
};