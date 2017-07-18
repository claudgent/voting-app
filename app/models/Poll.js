const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

/* =====================Poll Model====================== */

const Schema = mongoose.Schema;

const Poll = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateCreated: Date.now,
  choice1: {
    type: String,
    required: true,
  },
  choice2: {
    type: String,
    require: true,
  },
  choiceVotes1: {
    type: Number,
    required: true,
  },
  choiceVotes2: {
    type: Number,
    required: true,
  },
  voters: { type: Array,
    required: true,
  },
});

Poll.plugin(findOrCreate);

module.exports = mongoose.model('Poll', Poll);
