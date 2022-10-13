const mongoose = require('mongoose')
const { Schema } = mongoose;

const code = new Schema({
  title: String,
  description: String,
  comment: String
});

const Code = mongoose.model('Code', code);

module.exports = Code;