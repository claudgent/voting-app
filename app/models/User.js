
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  pollsOwned: {
    type: Number,
    required: true,
  },
  polls: {
    type: Array,
    required: true,
  },
});

User.plugin(findOrCreate);

module.exports = mongoose.model('User', User);
