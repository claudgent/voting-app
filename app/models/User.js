
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  pollsOwned: Number,
  polls: Array,
});

User.plugin(findOrCreate);

module.exports = mongoose.model('User', User);
