const Poll = require('../models/Poll');

const addtoDB = (request) => {
  Poll.findOrCreate({
    name: request.body.title,
    choice1: request.body.choice1,
    choice2: request.body.choice2,
  });
  console.log('added poll to database.');
};

module.exports = addtoDB;
