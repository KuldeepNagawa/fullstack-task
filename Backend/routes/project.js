const express = require("express");
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const Project = require("../models/Project");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const stream = cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
      if (error) return res.status(500).json(error);
      const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        imageUrl: result.secure_url,
      });
      await newProject.save();
      res.status(201).json("Project Added");
    });
    stream.end(req.file.buffer);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
