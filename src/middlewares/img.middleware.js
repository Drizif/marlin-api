const ImgValidator = require('../validators/img.validator');

class ImgMiddleware {
  uploadImg = async (req, res, next) => {
    try {
      req.img = await ImgValidator.uploadImg().validateAsync({ 
        ...req.files
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

  getImg = async (req, res, next) => {
    try {
      req.img = await ImgValidator.getImg().validateAsync({
        ...req.query,
        ...req.params
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new ImgMiddleware();