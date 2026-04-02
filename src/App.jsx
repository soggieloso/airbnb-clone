import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminLogin from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import CreateListing from './pages/Admin/CreateListing';
import Listings from './pages/Admin/Listings';
import EditListing from './pages/Admin/EditListing';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={
          isAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" />
        }>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listings" element={<Listings />} />
          <Route path="create-listing" element={<CreateListing />} />
          <Route path="edit-listing/:id" element={<EditListing />} />
        </Route>
        
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;