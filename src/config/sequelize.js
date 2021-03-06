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

const testConnection = async () => {
  const result = await sequelize.query('select getdate() as data', { type: Sequelize.QueryTypes.SELECT });
  return result[0].data;
}

(async () => {
  try {
    sequelize.authenticate();
    console.log((`DB Connected | ${await testConnection()}`))
  } catch (error) {
    console.log(error);
  }
})();

module.exports = {
  db: sequelize,
  options: {
    type: 'SELECT',
    raw: true,
    plain: false,
  }
};