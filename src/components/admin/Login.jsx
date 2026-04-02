"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { validateLogin } from '../../utils/validation';
import { api } from '../../services/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError('');
    
    const validation = validateLogin(email, password);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setLoading(true);
    
    try {
      const data = await api.login(email, password);
      
      if (data.token) {
        login(data.token, data.user);
        navigate('/admin/dashboard');
      } else {
        setServerError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setServerError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gray-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <img src="/airbnb-logo.svg" alt="Airbnb" className="h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-500 mt-2">Sign in to manage your listings</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {serverError}
            </div>
          )}
          
          <div>
            <label className="input-label">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input-field ${errors.email ? 'border-red-500' : ''}`}
              placeholder="admin@example.com"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          
          <div>
            <label className="input-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`input-field ${errors.password ? 'border-red-500' : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Demo credentials: admin@airbnb.com / admin123
        </div>
      </div>
    </div>
  );
}