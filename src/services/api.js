import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

API.getListings = async () => (await API.get("/listings")).data;
API.getListing = async (id) => (await API.get(`/listings/${id}`)).data;
API.createListing = async (data) => (await API.post("/listings", data)).data;
API.updateListing = async (id, data) => (await API.put(`/listings/${id}`, data)).data;
API.deleteListing = async (id) => (await API.delete(`/listings/${id}`)).data;

export default API;
