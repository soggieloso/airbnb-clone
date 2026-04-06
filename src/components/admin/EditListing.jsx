import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ListingForm } from "./ListingForm";
import { api } from "../../services/api";

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const data = await api.getListing(id);
      setListing(data);
    } catch (error) {
      console.error("Failed to fetch listing:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await api.updateListing(id, formData);
      navigate("/admin/listings");
    } catch (error) {
      console.error("Failed to update listing:", error);
      alert("Failed to update listing. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  if (!listing) {
    return <div className="text-red-600 text-center py-8">Listing not found</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Listing</h1>
        <p className="text-gray-500 mt-1">Update your property information</p>
      </div>
      
      <ListingForm 
        listing={listing} 
        onSubmit={handleSubmit} 
        isEdit={true}
      />
    </div>
  );
}
