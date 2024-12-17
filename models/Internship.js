const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  topics: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL for images
});

module.exports = mongoose.model('Internship', InternshipSchema);
