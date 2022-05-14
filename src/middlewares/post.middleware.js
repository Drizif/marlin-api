const PostValidator = require('../validators/post.validator');

class PostMiddleware {
  createPost = async (req, res, next) => {
    try {
      req.post = await PostValidator.createPost().validateAsync({ 
        ...req.body,
        ...req.files
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

  getPost = async (req, res, next) => {
    try {
      req.post = await PostValidator.getPost().validateAsync({
        ...req.query,
        ...req.params
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new PostMiddleware();