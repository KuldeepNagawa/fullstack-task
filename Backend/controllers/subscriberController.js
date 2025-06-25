const Subscriber = require('../models/Subscriber');

exports.addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
