"use client";

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ListingForm } from '../../components/Listings/ListingForm';
import { api } from '../../services/api';

const amenitiesList = [
  'WiFi', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning', 'Heating',
  'TV', 'Parking', 'Pool', 'Gym', 'Pet friendly', 'Smoking allowed'
];

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const data = await api.getListing(id);
      setFormData(data);
    } catch (error) {
      setErrors({ fetch: 'Failed to load listing' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitLoading(true);
    try {
      const result = await api.updateListing(id, data);
      if (result.id) {
        navigate('/admin/listings');
      } else {
        setErrors({ submit: result.message || 'Failed to update listing' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading listing...</div>;
  }

  if (!formData) {
    return <div className="text-red-600 text-center py-8">Listing not found</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Listing</h1>
        <p className="text-gray-500 mt-1">Update your property information</p>
      </div>
      
      <ListingForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        errors={errors}
        loading={submitLoading}
        amenitiesList={amenitiesList}
        isEdit={true}
      />
    </div>
  );
}