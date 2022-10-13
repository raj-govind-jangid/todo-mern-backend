const mongoose = require('mongoose')
const { Schema } = mongoose;

const question = new Schema({
  title: String,
  description: String,
});

const Question = mongoose.model('Question', question);

module.exports = Question;