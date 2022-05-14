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
      contaminationLevel: Joi.string().required(),
      imgFile: Joi.object().keys({
        name: Joi.string().required(),
        data: Joi.binary().required(),
        size: Joi.number().required(),
        encoding: Joi.string().required(),
        tempFilePath: Joi.string().optional().allow(''),
        truncated: Joi.boolean().required(),
        mimetype: Joi.string().required().valid('image/jpeg', 'image/png'),
        md5: Joi.string().required(),
      })
  }).options({ allowUnknown: true, stripUnknown: true });
}

getPost = () => {
  return Joi.object().keys({
    id: Joi.number().optional(),
  }).options({ allowUnknown: true, stripUnknown: true });
}
}

module.exports = new PostValidator();