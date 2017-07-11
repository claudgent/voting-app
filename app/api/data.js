const Poll = require('../models/Poll');

const getData = function (req, res) {
      // use the find() API and pass an empty query object to retrieve all records
  Poll.find({}, ((err, docs) => {
    if (err) res.send('Error retrieving data');
    res.json({ docs });
  }));
};

module.exports = getData;
