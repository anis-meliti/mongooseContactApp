const mongoose = require('mongoose');
const config = require('config');
const mongoUri = config.get('mongoURI');

module.exports = () =>
  mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => (err ? console.error(err) : console.log('db Connected ...'))
  );
