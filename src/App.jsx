import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import CreateListing from './components/admin/CreateListing';
import Listings from './components/admin/Listings';
import EditListing from './components/admin/EditListing';
import Signup from "./components/admin/Signup";
import HostLayout from './components/host/HostLayout';  // Add this import
import HostDashboard from './components/host/HostDashboard';  // Create this next
import { ProtectedRoute } from './components/ProtectedRoute';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
    </div>
  );
}

function App() {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Header user={user} />
      
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservations" element={<Reservations />} />
        
        {/* Admin routes - only for users with admin role */}
        <Route path="/admin" element={
          <ProtectedRoute requiredRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listings" element={<Listings />} />
          <Route path="create-listing" element={<CreateListing />} />
          <Route path="edit-listing/:id" element={<EditListing />} />
        </Route>
        
        {/* Host routes - for users with host or admin role */}
        <Route path="/host" element={
          <ProtectedRoute requiredRoles={['host', 'admin']}>
            <HostLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/host/dashboard" />} />
          <Route path="dashboard" element={<HostDashboard />} />
          <Route path="listings" element={<Listings />} />
          <Route path="create-listing" element={<CreateListing />} />
          <Route path="edit-listing/:id" element={<EditListing />} />
        </Route>
        
        {/* 404 - Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;