const { storageAccount } = require('../config/vars').azure;
const azureStorageService = require('../services/azureStorage.service');

class PostController {
  createPost = async (req, res) => {
    try {
      const { name, title, description, state, city, beachName, imgFile } = req.post;

      await azureStorageService.uploadFile(imgFile.data, imgFile.mimetype);

      res.status(200).json({
        status: true,
        message: '',
        data: {}
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  getPost = async (req, res) => {
    try {
      const { id } = req.post;

      res.status(200).json({
        status: true,
        message: '',
        data: {
          url: `https://${storageAccount}.blob.core.windows.net/images/${id || null}`
        }
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

}

module.exports = new PostController();
