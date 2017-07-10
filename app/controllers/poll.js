const mongoose = require('mongoose');

const addtoDB = (request) => {
  const newPoll = mongoose.model.Poll({
    name: request.body.title,
    choice1: request.body.choice1,
    choice2: request.body.choice2,
  });
  console.log('maybe it was inserted, idk.');
};

module.exports = addtoDB;
