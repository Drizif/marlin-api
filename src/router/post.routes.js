const router = require('express').Router();
const PostController = require('../controllers/post.controller');
const multer = require('multer');

const PostMiddleware = require('../middlewares/post.middleware');

const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

router.get('/post', PostMiddleware.getPost, PostController.getPost);
router.post('/post', PostMiddleware.createPost, uploadStrategy, PostController.createPost);


module.exports = router;