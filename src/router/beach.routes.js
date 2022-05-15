const router = require('express').Router();
const BeachController = require('../controllers/beach.controller');
const BeachMiddleware = require('../middlewares/beach.middleware');

router.get('/beach/statistics', BeachController.getBeachStatistics);
router.get('/beach', BeachMiddleware.getBeach, BeachController.getBeach);


module.exports = router;