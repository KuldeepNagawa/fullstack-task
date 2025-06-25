const express = require("express");
const Subscriber = require("../models/Subscriber");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newSubscriber = new Subscriber({ email: req.body.email });
    await newSubscriber.save();
    res.status(201).json("Subscribed");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const subscribers = await Subscriber.find();
  res.json(subscribers);
});

module.exports = router;

