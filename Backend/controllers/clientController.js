const Client = require("../models/Client");
const cloudinary = require("../utils/cloudinary");
const multer = require("multer");

const storage = multer.memoryStorage();
exports.upload = multer({ storage });

exports.addClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const file = req.file;

    const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
      if (error) return res.status(500).json({ error });

      const newClient = new Client({
        name,
        designation,
        description,
        imageUrl: result.secure_url
      });

      await newClient.save();
      res.status(201).json(newClient);
    });

    if (file) {
      result.end(file.buffer);
    } else {
      return res.status(400).json({ error: "No image file provided" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
