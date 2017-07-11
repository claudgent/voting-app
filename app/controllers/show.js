const Poll = require('../models/Poll');

const showPoll = function (req, res) {
  const viewModel = {
    title: '',
    choice1: '',
    choice2: '',
  };
    // find the poll by searching the filename matching the url parameter
  Poll.findOne({ $regex: req.params.pollName },
    (err, poll) => {
      if (err) { throw err; }
      if (poll) {
        // save the poll object to the viewModel:
        viewModel.poll = poll;
        // save the model (since it has been updated)
        poll.save();
        res.render('poll', viewModel);
      } else {
        // if no poll was found, simply go back to the homepage:
        res.send('no poll found');
      }
    });
};

module.exports = showPoll;
