const Poll = require('../models/Poll');

const showPoll = function (req, res) {
    // find the poll by searching the filename matching the url parameter
  Poll.findOne({ name: req.params.pollName },
    (err, poll) => {
      if (err) { throw err; }
      if (poll) {
        res.render('poll', poll);
        console.log(poll);
      } else {
        // if no poll was found, simply go back to the homepage:
        res.send('no poll found');
      }
    });
};

module.exports = showPoll;
