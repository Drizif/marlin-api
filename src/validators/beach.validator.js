const Joi = require('joi');

class BeachValidator {
  getBeach = () => {
    return Joi.object().keys({
      id: Joi.number().optional(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new BeachValidator();