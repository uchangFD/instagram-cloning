const Joi = require('joi');

exports.write = Joi.object().keys({
  username: Joi.string()
    .min(2)
    .max(255)
    .required(),
  phone: Joi.string()
    .min(8)
    .max(140)
    .required(),
  gender: Joi.string()
    .min(4)
    .max(80)
    .required(),
  website: Joi.string(),
  email: Joi.string(),
  password: Joi.string()
    .min(8)
    .max(16)
    .required(),
  profile_photo: Joi.binary(),
  full_name: Joi.string().required(),
  bio: Joi.string(),
});
