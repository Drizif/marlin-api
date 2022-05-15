const postService = require('../services/post.service');

class PostController {
  createPost = async (req, res) => {
    try {
      const data = await postService.createPost(req.post);

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

  getPost = async (req, res) => {
    try {
      const { id } = req.post;

      const data = await postService.getPost(id);

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

module.exports = new PostController();
