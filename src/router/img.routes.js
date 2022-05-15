const router = require('express').Router();
const multer = require('multer');

const ImgController = require('../controllers/img.controller');
const ImgMiddleware = require('../middlewares/img.middleware');

const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

router.post('/img', ImgMiddleware.uploadImg, uploadStrategy, ImgController.uploadImg);
router.get('/img', ImgMiddleware.getImg, ImgController.getImg);


module.exports = router;