const API_BASE_URL = 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? 'Bearer ' + token : ''
  };
};

export const api = {
  login: async (email, password) => {
    const response = await fetch(API_BASE_URL + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  verify: async () => {
    const response = await fetch(API_BASE_URL + '/auth/verify', {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getListings: async () => {
    const response = await fetch(API_BASE_URL + '/listings', {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getListing: async (id) => {
    const response = await fetch(API_BASE_URL + '/listings/' + id, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  createListing: async (data) => {
    const response = await fetch(API_BASE_URL + '/listings', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  },

  updateListing: async (id, data) => {
    const response = await fetch(API_BASE_URL + '/listings/' + id, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  },

  deleteListing: async (id) => {
    const response = await fetch(API_BASE_URL + '/listings/' + id, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.json();
  },

  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const token = localStorage.getItem('adminToken');
    const response = await fetch(API_BASE_URL + '/upload', {
      method: 'POST',
      headers: {
        'Authorization': token ? 'Bearer ' + token : ''
      },
      body: formData
    });
    return response.json();
  },

  signup: async (username, email, password) => {
  const response = await fetch(API_BASE_URL + '/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  return response.json();
},

};
