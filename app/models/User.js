
const mongoose = require('mongoose');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const User = new Schema({
  githubId: String,
  displayName: String,
  username: String,
  pollsOwned: Number,
  polls: Array,
});

module.exports = mongoose.model('User', User);
