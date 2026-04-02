export const validateListing = (formData) => {
  const errors = {};

  if (!formData.title || formData.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!formData.location || formData.location.trim().length < 2) {
    errors.location = "Location is required";
  }

  if (!formData.description || formData.description.trim().length < 20) {
    errors.description = "Description must be at least 20 characters";
  }

  if (!formData.bedrooms || formData.bedrooms < 1) {
    errors.bedrooms = "At least 1 bedroom is required";
  }

  if (!formData.bathrooms || formData.bathrooms < 1) {
    errors.bathrooms = "At least 1 bathroom is required";
  }

  if (!formData.guests || formData.guests < 1) {
    errors.guests = "At least 1 guest capacity is required";
  }

  if (!formData.type || formData.type === "") {
    errors.type = "Property type is required";
  }

  if (!formData.price || formData.price < 10) {
    errors.price = "Price must be at least $10";
  }

  if (!formData.amenities || formData.amenities.length === 0) {
    errors.amenities = "At least one amenity is required";
  }

  if (
    formData.weeklyDiscount &&
    (formData.weeklyDiscount < 0 || formData.weeklyDiscount > 100)
  ) {
    errors.weeklyDiscount = "Weekly discount must be between 0 and 100";
  }

  if (formData.cleaningFee && formData.cleaningFee < 0) {
    errors.cleaningFee = "Cleaning fee cannot be negative";
  }

  if (formData.serviceFee && formData.serviceFee < 0) {
    errors.serviceFee = "Service fee cannot be negative";
  }

  if (formData.occupancyTaxes && formData.occupancyTaxes < 0) {
    errors.occupancyTaxes = "Occupancy taxes cannot be negative";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateLogin = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
