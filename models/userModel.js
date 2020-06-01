const monggoes = require('mongoose');
const bcrypt = require('bcryptjs');
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
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    trim: true,
    required: [true, 'Please cofirm your password'],
    validate: {
      // This is only works on CREATE and SAVE
      validator: function(el) {
        return el === this.password;
      },
      message: 'Password are not the same!'
    }
  }
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = monggoes.model('User', userSchema);

module.exports = User;
