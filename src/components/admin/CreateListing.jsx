import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListingForm } from "./ListingForm";
import API from "../../services/api";

export default function CreateListing() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await API.createListing(formData);
      navigate("/admin/listings");
    } catch (error) {
      console.error("Failed to create listing:", error);
      alert("Failed to create listing. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create Listing</h1>
        <p className="text-gray-500 mt-1">Add a new property to your listings</p>
      </div>

      <ListingForm onSubmit={handleSubmit} />
    </div>
  );
}
