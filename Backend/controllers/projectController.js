const Project = require("../models/Project");
const cloudinary = require("../utils/cloudinary");
const multer = require("multer");

const storage = multer.memoryStorage();
exports.upload = multer({ storage });

exports.addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const file = req.file;

    const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
      if (error) return res.status(500).json({ error });

      const newProject = new Project({
        name,
        description,
        imageUrl: result.secure_url
      });

      await newProject.save();
      res.status(201).json(newProject);
    });

    if (file) {
      result.end(file.buffer);
    } else {
      return res.status(400).json({ error: "No image file" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
