const Joi = require('joi');

class PostValidator {
  createPost = () => {
    return Joi.object().keys({
      name: Joi.string().optional().default('Anonymous'),
      title: Joi.string().required(),
      description: Joi.string().required().max(250),
      beachName: Joi.string().required(),
      fileName: Joi.string().required(),
  }).options({ allowUnknown: true, stripUnknown: true });
}

getPost = () => {
  return Joi.object().keys({
    id: Joi.number().optional(),
  }).options({ allowUnknown: true, stripUnknown: true });
}
}

module.exports = new PostValidator();