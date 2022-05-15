const Joi = require('joi');

class ImgValidator {
  uploadImg = () => {
    return Joi.object().keys({
      imgFile: Joi.object().keys({
        name: Joi.string().required(),
        data: Joi.binary().required(),
        size: Joi.number().required(),
        encoding: Joi.string().required(),
        tempFilePath: Joi.string().optional().allow(''),
        truncated: Joi.boolean().required(),
        mimetype: Joi.string().required().valid('image/jpeg', 'image/png'),
        md5: Joi.string().required(),
      }).required()
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  getImg = () => {
    return Joi.object().keys({
      fileName: Joi.string().required(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new ImgValidator();