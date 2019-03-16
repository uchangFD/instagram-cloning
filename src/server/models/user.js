const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
    maxlength: 255,
    minlength: 2,
  },
  phone: {
    type: String,
    maxlength: 140,
    minlength: 8,
  },
  gender: {
    type: String,
    maxlength: 80,
    minlength: 4,
    enum: ['male', 'female'],
  },
  website: String,
  email: String,
  password: String,
  profile_photo: Buffer,
  full_name: String,
  bio: String,
});

module.exports = mongoose.model('User', User);
