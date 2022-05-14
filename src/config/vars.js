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
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  }
};