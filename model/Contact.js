const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: { type: String, unique: true }
});

module.exports = Contact = mongoose.model('contact', contactSchema);
