const { db, options } = require('../config/sequelize');

class DBService {
  formatReplacements(data) {
    Object.keys(data).forEach(key => {
      const type = typeof data[key];
      const value = data[key];
      if (type === 'object' && value !== null) data[key] = JSON.stringify(data[key]);
    });
  }

  async rawQuery(queryString, replacements) {
    try {
      if (replacements) this.formatReplacements(replacements);

      const result = await db.query(queryString + ' as data', {
        replacements,
        ...options
      });

      return result[0].data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DBService();
