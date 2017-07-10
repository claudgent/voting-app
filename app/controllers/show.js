const Poll = require('../models/Poll');

const showPoll = () => {
  Poll.findOne({ 'name.last': 'Ghost' }, 'name occupation', (err, poll) => {
    if (err) return console.error(err);
    console.log(poll);
  });
};

module.exports = showPoll;
