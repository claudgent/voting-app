const Poll = require('../models/Poll');

const getData = (req, res) => {
      // use the find() API and pass an empty query object to retrieve all records
  Poll.find({}, ((err, docs) => {
    if (err) throw err;
    res.send(docs);
  }));
};

module.exports = getData;
