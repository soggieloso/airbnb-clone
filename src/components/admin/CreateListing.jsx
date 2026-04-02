"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListingForm } from '../../components/Listings/ListingForm';
import { api } from '../../services/api';

const initialFormData = {
  title: '',
  location: '',
  description: '',
  bedrooms: 1,
  bathrooms: 1,
  guests: 2,
  type: 'apartment',
  price: 100,
  amenities: [],
  images: [],
  weeklyDiscount: 0,
  cleaningFee: 50,
  serviceFee: 20,
  occupancyTaxes: 10
};

const amenitiesList = [
  'WiFi', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning', 'Heating',
  'TV', 'Parking', 'Pool', 'Gym', 'Pet friendly', 'Smoking allowed'
];

export default function CreateListing() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await api.createListing(data);
      if (result.id) {
        navigate('/admin/listings');
      } else {
        setErrors({ submit: result.message || 'Failed to create listing' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create New Listing</h1>
        <p className="text-gray-500 mt-1">Add a new property to your portfolio</p>
      </div>
      
      <ListingForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        errors={errors}
        loading={loading}
        amenitiesList={amenitiesList}
        isEdit={false}
      />
    </div>
  );
}