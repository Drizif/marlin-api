const router = require('express').Router();
const BeachStatisticsController = require('../controllers/beachStatistics.controller');

router.get('/beach-statistics', BeachStatisticsController.getBeachStatistics);

module.exports = router;