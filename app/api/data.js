const Poll = require('../models/Poll');

const getData = function (req, res) {
      // use the find() API and pass an empty query object to retrieve all records
  Poll.collection('polls').find({}).toArray((err, docs) => {
    if (err) throw err;
    res.send(docs);
  });
};
