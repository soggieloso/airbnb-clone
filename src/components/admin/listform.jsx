"use client";

import { useState } from 'react';

const amenitiesList = [
  'Wi-Fi', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning', 'Heating',
  'TV', 'Parking', 'Pool', 'Gym', 'Hot tub', 'Pet friendly'
];

const propertyTypes = ['Apartment', 'House', 'Cabin', 'Villa', 'Castle', 'Tiny Home', 'Beachfront'];

export default function ListingForm({ onSubmit, loading, initialData = null }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    location: initialData?.location || '',
    description: initialData?.description || '',
    type: initialData?.type || 'Apartment',
    bedrooms: initialData?.bedrooms || 1,
    bathrooms: initialData?.bathrooms || 1,
    maxGuests: initialData?.maxGuests || 2,
    price: initialData?.price || 0,
    weeklyDiscount: initialData?.weeklyDiscount || 0,
    cleaningFee: initialData?.cleaningFee || 0,
    serviceFee: initialData?.serviceFee || 0,
    occupancyTaxes: initialData?.occupancyTaxes || 0,
    amenities: initialData?.amenities || [],
    mainImage: initialData?.mainImage || '',
    rating: initialData?.rating || 0,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.mainImage.trim()) newErrors.mainImage = 'Main image URL is required';
    if (formData.price <= 0) newErrors.price = 'Price must be greater than 0';
    if (formData.bedrooms < 1) newErrors.bedrooms = 'At least 1 bedroom required';
    if (formData.bathrooms < 1) newErrors.bathrooms = 'At least 1 bathroom required';
    if (formData.maxGuests < 1) newErrors.maxGuests = 'At least 1 guest required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Type *
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Main Image URL *
          </label>
          <input
            type="url"
            value={formData.mainImage}
            onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              errors.mainImage ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="https://example.com/image.jpg"
          />
          {errors.mainImage && <p className="text-red-500 text-sm mt-1">{errors.mainImage}</p>}
        </div>

        {/* Capacity & Pricing */}
        <div className="col-span-2 mt-4">
          <h3 className="text-lg font-semibold mb-4">Capacity & Pricing</h3>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bedrooms *
          </label>
          <input
            type="number"
            min="1"
            value={formData.bedrooms}
            onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) })}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus