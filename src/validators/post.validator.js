const Joi = require('joi');

class PostValidator {
  createPost = () => {
    return Joi.object().keys({
      name: Joi.string().optional().default('Anonymous'),
      title: Joi.string().required().max(50),
      description: Joi.string().required().max(250),
      state: Joi.string().required(),
      city: Joi.string().required(),
      beachName: Joi.string().optional(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  getPost = () => {
    return Joi.object().keys({
      id: Joi.number().optional(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new PostValidator();