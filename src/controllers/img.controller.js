const { storageAccount } = require('../config/vars').azure;
const azureStorageService = require('../services/azureStorage.service');

class ImgController {
  uploadImg = async (req, res) => {
    try {
      const { imgFile } = req.img;

      const data = await azureStorageService.uploadFile(imgFile.data, imgFile.mimetype);

      res.status(200).json({
        status: true,
        message: '',
        data
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  getImg = async (req, res) => {
    try {
      const { id } = req.img;

      res.status(200).json({
        status: true,
        message: '',
        data: `https://${storageAccount}.blob.core.windows.net/images/${id}`
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

module.exports = new ImgController();
