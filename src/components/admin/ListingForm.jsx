"use client";

import { useState } from 'react';


export const ListingForm = ({ listing = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: listing?.title || '',
    hotelName: listing?.hotelName || '',
    description: listing?.description || '',
    location: listing?.location || '',
    price: listing?.price || '',
    guests: listing?.guests || 2,
    bedrooms: listing?.bedrooms || 1,
    beds: listing?.beds || 1,
    baths: listing?.baths || 1,
    amenities: listing?.amenities || [],
    images: listing?.images || [],
    type: listing?.type || 'entire_home'
  });

  const [newAmenity, setNewAmenity] = useState('');

  const amenityOptions = [
    'Wifi', 'Kitchen', 'Air conditioning', 'Washer', 'Dryer', 
    'Free parking', 'Dedicated workspace', 'Iron', 'Pool', 
    'Hot tub', 'Gym', 'TV', 'Pet friendly'
  ];

  const addAmenity = () => {
    if (newAmenity && !formData.amenities.includes(newAmenity)) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, newAmenity]
      });
      setNewAmenity('');
    }
  };

  const removeAmenity = (amenity) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter(a => a !== amenity)
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In real app, upload to cloud storage
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setFormData({
      ...formData,
      images: [...formData.images, ...imageUrls]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Listing Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Hotel/Property Name *</label>
            <input
              type="text"
              value={formData.hotelName}
              onChange={(e) => setFormData({...formData, hotelName: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="Describe your property..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="City, Country"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Price per night ($) *</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Property Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full border rounded-lg p-2"
            >
              <option value="entire_home">Entire Home</option>
              <option value="private_room">Private Room</option>
              <option value="shared_room">Shared Room</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Max Guests</label>
            <input
              type="number"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              className="w-full border rounded-lg p-2"
              min={1}
              max={16}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Bedrooms</label>
            <input
              type="number"
              value={formData.bedrooms}
              onChange={(e) => setFormData({...formData, bedrooms: parseInt(e.target.value)})}
              className="w-full border rounded-lg p-2"
              min={0}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Beds</label>
            <input
              type="number"
              value={formData.beds}
              onChange={(e) => setFormData({...formData, beds: parseInt(e.target.value)})}
              className="w-full border rounded-lg p-2"
              min={1}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Baths</label>
            <input
              type="number"
              value={formData.baths}
              onChange={(e) => setFormData({...formData, baths: parseInt(e.target.value)})}
              className="w-full border rounded-lg p-2"
              min={0}
              step={0}