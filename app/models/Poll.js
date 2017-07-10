const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

/* =====================Poll Model====================== */

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

Poll.plugin(findOrCreate);

module.exports = mongoose.model('Poll', Poll);
