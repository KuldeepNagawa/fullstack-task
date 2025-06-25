const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json("Contact Saved");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;