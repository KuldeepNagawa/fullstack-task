const express = require("express");
const router = express.Router();
const { upload, addProject, getProjects } = require("../controllers/projectController");

router.post("/add", upload.single("image"), addProject);
router.get("/", getProjects);

module.exports = router;
