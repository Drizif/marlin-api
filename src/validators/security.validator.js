const Joi = require('joi');

const { apiKeyName, apiKeyValue } = require('../config/vars').server;

class SecurityValidator {
  verifyApiKey = () => {
    const securityObj = {};
    securityObj[`${apiKeyName}`] = Joi.string().required().valid(apiKeyValue);
    return Joi.object().keys({ ...securityObj }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new SecurityValidator();