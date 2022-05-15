const dbService = require('../services/db.service');
const camelCaseUtil = require('../utils/camelCase.util');

class BeachService {
  getBeachStatistics = async () => {
    try {
      const state = await dbService.rawQuery('SELECT * FROM state');
      const idxState = state.reduce((a, b) => ({ ...a, [b.id_state]: b }), {});

      const city = await dbService.rawQuery('SELECT * FROM city');
      const idxCity = city.reduce((a, b) => ({ ...a, [b.id_city]: b }), {});


      const beachStatistics = await dbService.rawQuery('SELECT * FROM beach_statistics');
      const idxBeachStatistics = beachStatistics.reduce((a, b) => ({ ...a, [b.id_beach_statistics]: b }), {});

      const beach = await dbService.rawQuery('SELECT * FROM beach');

      const data = beach.map(e => {
        const iCity = idxCity[e.id_city];
        const iState = idxState[iCity.id_state];
        const iBeachStatistics = idxBeachStatistics[e.id_beach_statistics];

        return camelCaseUtil({
          id_beach: e.id_beach,
          beach_name: e.beach_name,
          state: iState.state_name,
          city: iCity.city_name,
          statistics: {
            ...iBeachStatistics,
            id_beach_statistics: undefined
          }
        });
      });

      return data;
    } catch (error) {
      throw error.message || error;
    }
  }

  getBeach = async (id) => {
    try {
      return (id ? await dbService.rawQuery(`SELECT * FROM beach WHERE id_beach = ${id}`) : await dbService.rawQuery('SELECT * FROM beach')).map(e => {
        return camelCaseUtil(e);
      });

    } catch (error) {
      throw error.message || error;
    }
  }

}

module.exports = new BeachService();