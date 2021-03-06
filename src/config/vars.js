require('dotenv').config();

module.exports = {
  server: {
    apiKeyName: process.env.API_KEY_NAME,
    apiKeyValue: process.env.API_KEY_VALUE,
    limit: process.env.LIMIT,
    port: process.env.PORT,
    debug: process.env.DEBUG,
    cors_allowed: process.env.CORS_ALLOWED,
    fileSize: process.env.FILE_SIZE,
    tempFileDir: process.env.TEMP_FILE_DIR,
    safeFileNames: process.env.SAFE_FILE_NAMES,
    preserveExtension: process.env.PRESERVE_EXTENSION,
    timeout: parseInt(process.env.SERVER_TIMEOUT),
  },
  db: {
    host: process.env.DBSERVER,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    dialect: process.env.DBDIALECT,
    pool: {
      max: process.env.DBPOOLMAX,
      min: process.env.DBPOOLMIN,
      acquire: process.env.DBPOOLACQUIRE,
      idle: process.env.DBPOOLIDLE
    }
  },
  azure: {
    storageCStr: process.env.AZURE_STORAGE_CONNECTION_STRING,
    storageAccount: process.env.AZURE_STORAGE_ACCOUNT,
    containerName: process.env.AZURE_CONTAINER_NAME,
  }
};