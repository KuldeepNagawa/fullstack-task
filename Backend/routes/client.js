const express = require("express");
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const Client = require("../models/Client");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const stream = cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
      if (error) return res.status(500).json(error);
      const newClient = new Client({
        name: req.body.name,
        description: req.body.description,
        designation: req.body.designation,
        imageUrl: result.secure_url,
      });
      await newClient.save();
      res.status(201).json("Client Added");
    });
    stream.end(req.file.buffer);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;