
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

/* =====================User Model====================== */

const Schema = mongoose.Schema;
Schema.plugin(findOrCreate);

const User = new Schema({
  githubId: String,
  displayName: String,
  username: String,
  pollsOwned: Number,
  polls: Array,
});

module.exports = mongoose.model('User', User);
