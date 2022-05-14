

class PostController {
  createPost = async (req, res) => {
    try {
      const { name, title, description, state, city, beachName } = req.post;

      res.status(200).json({
        status: true,
        message: '',
        data: req.post
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

      const data = req.post;

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