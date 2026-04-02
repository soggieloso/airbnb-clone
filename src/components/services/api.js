"use client";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export const api = {
  // Auth endpoints
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  verify: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/verify`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },

  // Listing endpoints
  getListings: async () => {
    const response = await fetch(`${API_BASE_URL}/listings`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },

  getListing: async (id) => {
    const response = await fetch(`${API_BASE_URL}/listings/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },

  createListing: async (data) => {
    const response = await fetch(`${API_BASE_URL}/listings`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  },

  updateListing: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/listings/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  },

  deleteListing: async (id) => {
    const response = await fetch(`${API_BASE_URL}/listings/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return response.json();
  },

  // Image upload
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("adminToken")
          ? `Bearer ${localStorage.getItem("adminToken")}`
          : "",
      },
      body: formData,
    });
    return response.json();
  },
};
