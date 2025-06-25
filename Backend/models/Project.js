const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});
module.exports = mongoose.model("Project", ProjectSchema);
