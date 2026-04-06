const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('host', 'username email');
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single listing
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('host', 'username email');
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create listing
router.post('/', async (req, res) => {
  try {
    const listing = await Listing.create({ ...req.body, host: '676d4e2a6b0b3b1a2c4e5f6a' });
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update listing
router.put('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete listing
router.delete('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json({ message: 'Listing deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
