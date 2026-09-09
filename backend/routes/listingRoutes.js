import express from "express";
import Listing from "../models/Listing.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Get all listings
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find().populate("host", "username email");
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single listing
router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("host", "username email");
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create listing
router.post("/", requireAuth, async (req, res) => {
  try {
    const listing = await Listing.create({ ...req.body, host: req.user.id });
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update listing (owning host, or an admin)
router.put("/:id", requireAuth, async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    if (req.user.role !== "admin") filter.host = req.user.id;

    const listing = await Listing.findOneAndUpdate(filter, req.body, { new: true });
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete listing (owning host, or an admin)
router.delete("/:id", requireAuth, async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    if (req.user.role !== "admin") filter.host = req.user.id;

    const listing = await Listing.findOneAndDelete(filter);
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json({ message: "Listing deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
