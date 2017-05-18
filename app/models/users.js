
const mongoose = require('mongoose');

/* =====================User Model====================== */

const Schema = mongoose.Schema;

const User = new Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number,
  },
  pollsOwned: Number,
  polls: Array,
});

module.exports = mongoose.model('User', User);
