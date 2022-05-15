const router = require('express').Router();
const PostController = require('../controllers/post.controller');
const PostMiddleware = require('../middlewares/post.middleware');

router.get('/post', PostMiddleware.getPost, PostController.getPost);
router.post('/post', PostMiddleware.createPost, PostController.createPost);

module.exports = router;