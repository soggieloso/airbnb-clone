const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  guests: { type: Number, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  amenities: [String],
  mainImage: { type: String, required: true },
  images: [String],
  weeklyDiscount: { type: Number, default: 0 },
  cleaningFee: { type: Number, default: 0 },
  serviceFee: { type: Number, default: 0 },
  occupancyTaxes: { type: Number, default: 0 },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', listingSchema);
