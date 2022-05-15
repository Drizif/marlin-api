const BeachValidator = require('../validators/beach.validator');

class BeachMiddleware {
  getBeach = async (req, res, next) => {
    try {
      req.beach = await BeachValidator.getBeach().validateAsync({
        ...req.params,
        ...req.query
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new BeachMiddleware();