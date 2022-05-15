const dbService = require('../services/db.service');
const { storageAccount, containerName } = require('../config/vars').azure;

class PostService {
  getPost = async (id) => {
    try {
      const state = await dbService.rawQuery('SELECT * FROM state');
      const idxState = state.reduce((a, b) => ({ ...a, [b.id_state]: b }), {});

      const city = await dbService.rawQuery('SELECT * FROM city');
      const idxCity = city.reduce((a, b) => ({ ...a, [b.id_city]: b }), {});


      const beach = await dbService.rawQuery('SELECT * FROM beach');
      const idxBeach = beach.reduce((a, b) => ({ ...a, [b.beach_name]: b }), {});


      const post = id ? await dbService.rawQuery('SELECT * FROM post WHERE id_post = ?', [id]) : await dbService.rawQuery('SELECT * FROM post');

      const data = post.map(e => {
        const iBeach = idxBeach[e.beach_name];
        const iCity = idxCity[iBeach.id_city];
        const iState = idxState[iCity.id_state];

        return {
          ...e,
          city_name: iCity.city_name,
          state_name: iState.state_name,
          url: `https://${storageAccount}.blob.core.windows.net/$${containerName}`,
          file_name: undefined
        }
      });

      return data;
    } catch (error) {
      throw error.message || error;
    }
  }

  createPost = async ({ name, title, description, beachName, fileName }) => {
    try {
      const beach = await dbService.rawQuery('SELECT * FROM beach WHERE beach_name = ?', [beachName]);
      if (beach.length === 0) throw 'Beach not found';

      const data = await dbService.rawQuery('INSERT INTO post (name, title, description, beach_name, file_name) VALUES (?, ?, ?, ?, ?)', [name, title, description, beachName, fileName]);
      return data;
    } catch (error) {
      throw error.message || error;
    }
  }
}

module.exports = new PostService();