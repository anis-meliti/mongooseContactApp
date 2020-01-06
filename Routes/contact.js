const express = require('express');
const Contact = require('../model/Contact');
const { check, validationResult } = require('express-validator');

const Router = express.Router();

Router.post(
  '/addContact',
  [
    check('name', 'name is required').notEmpty(),
    check('mail', 'enter valid email ').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.length) return res.json({ error: errors.array() });
    console.log('TCL: req.body', req.body);
    const { name, mail } = req.body;
    console.log('TCL: name', name);
    try {
      const searchResult = await Contact.findOne({ mail });
      console.log('TCL: searchResult', searchResult);
      if (searchResult) return res.json({ msg: 'Contact already exists' });

      const newContact = new Contact({
        name,
        mail
      });
      newContact.save();
      res.json(newContact);
    } catch (error) {
      console.error(error);
    }
  }
);

Router.get('/getAllContact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts.length) return res.json({ msg: 'err' });
    res.json(contacts);
  } catch (error) {
    console.error(error);
  }
});
module.exports = Router;
