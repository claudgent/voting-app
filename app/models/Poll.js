const mongoose = require('mongoose');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const Poll = new Schema({
  name: {
    type: String,
    required: true,
  },
  choice1: {
    type: String,
    required: true,
  },
  choice2: {
    type: String,
    require: true,
  },
  choiceVotes1: Number,
  choiceVotes2: Number,
  voters: Array,
});

module.exports = mongoose.model('Poll', Poll);
