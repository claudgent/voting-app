
const mongoose = require('mongoose');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const Poll = new Schema({
  id: String,
  name: String,
  votes: Number,
  choices: Array,
  voters: Array,
});

Schema.virtual('user').set(function (user) {
  this.user = user;
}).get(function () {
  return this.user;
});


module.exports = mongoose.model('Poll', Poll);
