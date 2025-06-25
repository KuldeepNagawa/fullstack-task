const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// const dotenv = require('dotenv');
// const cors = require('cors');

import path from "path";

dotenv.config();
const app = express();

const __dirname = path.resolve();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API Routes
app.use('/api/projects', require('./routes/project'));
app.use('/api/clients', require('./routes/client'));
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/subscribers', require('./routes/subscriber'));

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));


    app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });

}

// Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection (no need for deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
