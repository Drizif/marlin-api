const beachService = require('../services/beach.service');

class BeachController {
  getBeachStatistics = async (req, res) => {
    try {
      const data = await beachService.getBeachStatistics();

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

  getBeach = async (req, res) => {
    try {
      const data = await beachService.getBeach(req.beach.id);

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
}

module.exports = new BeachController();