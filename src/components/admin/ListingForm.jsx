import { useState } from 'react';
import { ImageUpload } from '../ImageUpload';

export const ListingForm = ({ listing = null, onSubmit, isEdit = false }) => {
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
    type: listing?.type || 'entire_home',
    mainImage: listing?.mainImage || '',
    weeklyDiscount: listing?.weeklyDiscount || '',
    cleaningFee: listing?.cleaningFee || '',
    serviceFee: listing?.serviceFee || '',
    occupancyTaxes: listing?.occupancyTaxes || ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Property Images</h2>
        <ImageUpload
          onImageUpload={(images) => setFormData({ ...formData, images: images })}
          currentImages={formData.images}
          multiple={true}
        />
      </div>

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
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
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

          <div>
            <label className="block text-sm font-medium mb-1">Main Image URL</label>
            <input
              type="url"
              value={formData.mainImage}
              onChange={(e) => setFormData({...formData, mainImage: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="https://example.com/image.jpg"
            />
            {formData.mainImage && (
              <div className="mt-2">
                <img src={formData.mainImage} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
              </div>
            )}
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
              step={0.5}
            />
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Amenities</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {amenityOptions.map(amenity => (
            <label key={amenity} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.amenities.includes(amenity)}
                onChange={() => {
                  if (formData.amenities.includes(amenity)) {
                    setFormData({
                      ...formData,
                      amenities: formData.amenities.filter(a => a !== amenity)
                    });
                  } else {
                    setFormData({
                      ...formData,
                      amenities: [...formData.amenities, amenity]
                    });
                  }
                }}
                className="w-4 h-4 text-rose-500 rounded"
              />
              <span className="text-sm">{amenity}</span>
            </label>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={newAmenity}
            onChange={(e) => setNewAmenity(e.target.value)}
            placeholder="Add custom amenity..."
            className="flex-1 border rounded-lg p-2"
          />
          <button
            type="button"
            onClick={addAmenity}
            className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
          >
            Add
          </button>
        </div>
        
        {formData.amenities.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.amenities.map(amenity => (
              <span key={amenity} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {amenity}
                <button
                  type="button"
                  onClick={() => removeAmenity(amenity)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Pricing & Fees Section - MOVED OUTSIDE Amenities */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Pricing & Fees</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Weekly Discount (%)</label>
            <input
              type="number"
              value={formData.weeklyDiscount}
              onChange={(e) => setFormData({...formData, weeklyDiscount: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., 15 for 15% off"
              min="0"
              max="100"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty for no weekly discount</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Cleaning Fee ($)</label>
            <input
              type="number"
              value={formData.cleaningFee}
              onChange={(e) => setFormData({...formData, cleaningFee: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., 50"
              min="0"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Service Fee ($)</label>
            <input
              type="number"
              value={formData.serviceFee}
              onChange={(e) => setFormData({...formData, serviceFee: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., 25"
              min="0"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Occupancy Taxes ($)</label>
            <input
              type="number"
              value={formData.occupancyTaxes}
              onChange={(e) => setFormData({...formData, occupancyTaxes: e.target.value})}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., 12.50"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
        >
          {isEdit ? 'Update Listing' : 'Create Listing'}
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
