import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Calendar, Menu, X, Home, PlusCircle, LayoutDashboard } from "lucide-react";

export default function Header({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user");
    navigate("/");
    setIsDropdownOpen(false);
    window.location.reload();
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-rose-500 text-xl font-bold">airbnb</span>
          </Link>

          {/* Inside the dropdown menu - add role-based links */}
{user?.role === 'host' && (
  <Link
    to="/host/dashboard"
    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    onClick={() => setIsDropdownOpen(false)}
  >
    <Home size={16} />
    <span>Host Dashboard</span>
  </Link>
)}

{user?.role === 'admin' && (
  <Link
    to="/admin/dashboard"
    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    onClick={() => setIsDropdownOpen(false)}
  >
    <LayoutDashboard size={16} />
    <span>Admin Dashboard</span>
  </Link>
)}

          {/* Desktop Navigation - Main nav links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Find a home
            </Link>
            <Link to="/explore" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Explore properties
            </Link>
            <Link to="/experiences" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Online Experiences
            </Link>
          </div>

          {/* Desktop Navigation - Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              // Logged in user - Show greeting and dropdown
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <User size={18} className="text-rose-500" />
                  </div>
                  <span className="text-sm font-medium">
                    Hello, {user.username || user.email?.split("@")[0] || "Guest"}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                      {/* User Info Section */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {user.username || user.email?.split("@")[0]}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                      </div>
                      
                      {/* Navigation Links */}
                      <Link
                        to="/admin/dashboard"
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <LayoutDashboard size={16} />
                        <span>Admin Dashboard</span>
                      </Link>
                      
                      <Link
                        to="/admin/listings"
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <PlusCircle size={16} />
                        <span>My Listings</span>
                      </Link>
                      
                      <Link
                        to="/reservations"
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Calendar size={16} />
                        <span>My Reservations</span>
                      </Link>
                      
                      <div className="border-t border-gray-100 my-1"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full text-left"
                      >
                        <LogOut size={16} />
                        <span>Log out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              // Logged out user
              <>
                <Link
                  to="/host"
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Become a host
                </Link>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {user ? (
              <div className="space-y-3">
                {/* User Info */}
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="font-semibold text-gray-900">
                    Hello, {user.username || user.email?.split("@")[0]}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                </div>
                
                <Link
                  to="/admin/dashboard"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard size={18} />
                  <span>Admin Dashboard</span>
                </Link>
                
                <Link
                  to="/admin/listings"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PlusCircle size={18} />
                  <span>My Listings</span>
                </Link>
                
                <Link
                  to="/reservations"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>My Reservations</span>
                </Link>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-gray-50 rounded-lg w-full text-left"
                >
                  <LogOut size={18} />
                  <span>Log out</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find a home
                </Link>
                <Link
                  to="/explore"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore properties
                </Link>
                <Link
                  to="/experiences"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Online Experiences
                </Link>
                <div className="border-t my-2"></div>
                <Link
                  to="/host"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a host
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 bg-gray-900 text-white rounded-lg text-center hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}