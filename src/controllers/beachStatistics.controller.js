const beachStatisticsService = require('../services/beachStatistics.service');

class BeachStatisticsController {
  getBeachStatistics = async (req, res) => {
    try {
      const data = await beachStatisticsService.getBeachStatistics();

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

module.exports = new BeachStatisticsController();