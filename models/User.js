const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  vision: {
    type: String,
    default: ''
  },
  preferences: {
    type: Object,
    default: {}
  }
});

module.exports = mongoose.model('User', userSchema);
