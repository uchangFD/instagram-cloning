const User = require('server/models/user');
const validator = require('server/validator/user');
const Joi = require('joi');

exports.write = async (ctx) => {
  const { body } = ctx.request;

  const writeSchemaValidator = validator.write;

  const result = Joi.validate(body, writeSchemaValidator);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;

    return;
  }

  const user = new User({
    ...body,
  });

  try {
    await user.save();
    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.list = async (ctx) => {
  try {
    const users = await User.find()
      .sort({ id: -1 })
      .exec();

    ctx.body = users;
  } catch (e) {
    ctx.throw(500, e);
  }
};
