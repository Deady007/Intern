const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

// Add an entry
router.post('/', async (req, res) => {
  try {
    const newEntry = new Internship(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Internship.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
