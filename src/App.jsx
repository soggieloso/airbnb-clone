import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import CreateListing from "./components/admin/CreateListing";
import Listings from "./components/admin/Listings";
import EditListing from "./components/admin/EditListing";
import Signup from "./components/admin/Signup";

import HostLayout from "./components/host/HostLayout";
import HostDashboard from "./components/host/HostDashboard";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Header user={user} />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<AdminLogin setUser={setUser} />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/reservations"
          element={<Reservations />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" />} />

          <Route
            path="dashboard"
            element={<Dashboard user={user} />}
          />

          <Route path="listings" element={<Listings />} />

          <Route
            path="create-listing"
            element={<CreateListing />}
          />

          <Route
            path="edit-listing/:id"
            element={<EditListing />}
          />
        </Route>

        {/* HOST */}
        <Route
          path="/host"
          element={
            <ProtectedRoute>
              <HostLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/host/dashboard" />} />

          <Route
            path="dashboard"
            element={<HostDashboard />}
          />

          <Route path="listings" element={<Listings />} />

          <Route
            path="create-listing"
            element={<CreateListing />}
          />

          <Route
            path="edit-listing/:id"
            element={<EditListing />}
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;