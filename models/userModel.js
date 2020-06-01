const monggoes = require('mongoose');
const validator = require('validator');

const userSchema = new monggoes.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name!'],
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
    required: [true, 'Please provide your email address!']
  },
  photo: [String],
  password: {
    type: String,
    trim: true,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  passwordConfirmation: {
    type: String,
    trim: true,
    required: [true, 'Please cofirm your password']
  }
});

const User = monggoes.model('User', userSchema);

module.exports = User;
