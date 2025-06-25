const Contact = require('../models/Contact');

exports.addContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
