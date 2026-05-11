import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Calendar, Menu, X, Home, PlusCircle, LayoutDashboard, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user");
    navigate("/");
    setIsDropdownOpen(false);
    window.location.reload();
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-rose-500 text-xl font-bold">airbnb</span>
          </Link>

          {/* Desktop Navigation - Main nav links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">
              Find a home
            </Link>
            <Link to="/explore" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">
              Explore properties
            </Link>
            <Link to="/experiences" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">
              Online Experiences
            </Link>
          </div>

          {/* Desktop Navigation - Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>

            {user ? (
              // Logged in user - Show greeting and dropdown
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                >
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center">
                    <User size={18} className="text-rose-500 dark:text-rose-400" />
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
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-100 dark:border-gray-700">
                      {/* User Info Section */}
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {user.username || user.email?.split("@")[0]}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
                      </div>
                      
                      {/* Role-based Navigation Links */}
                      {(user?.role === 'admin' || user?.role === 'host') && (
                        <>
                          <Link
                            to={user.role === 'admin' ? "/admin/dashboard" : "/host/dashboard"}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <LayoutDashboard size={16} />
                            <span>{user.role === 'admin' ? 'Admin' : 'Host'} Dashboard</span>
                          </Link>
                          
                          <Link
                            to={user.role === 'admin' ? "/admin/listings" : "/host/listings"}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <PlusCircle size={16} />
                            <span>My Listings</span>
                          </Link>
                        </>
                      )}
                      
                      <Link
                        to="/reservations"
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Calendar size={16} />
                        <span>My Reservations</span>
                      </Link>
                      
                      <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 w-full text-left"
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
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
                >
                  Become a host
                </Link>
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            {user ? (
              <div className="space-y-3">
                {/* User Info */}
                <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Hello, {user.username || user.email?.split("@")[0]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
                </div>
                
                {(user?.role === 'admin' || user?.role === 'host') && (
                  <>
                    <Link
                      to={user.role === 'admin' ? "/admin/dashboard" : "/host/dashboard"}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LayoutDashboard size={18} />
                      <span>{user.role === 'admin' ? 'Admin' : 'Host'} Dashboard</span>
                    </Link>
                    
                    <Link
                      to={user.role === 'admin' ? "/admin/listings" : "/host/listings"}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <PlusCircle size={18} />
                      <span>My Listings</span>
                    </Link>
                  </>
                )}
                
                <Link
                  to="/reservations"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>My Reservations</span>
                </Link>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg w-full text-left"
                >
                  <LogOut size={18} />
                  <span>Log out</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find a home
                </Link>
                <Link
                  to="/explore"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore properties
                </Link>
                <Link
                  to="/experiences"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Online Experiences
                </Link>
                <div className="border-t dark:border-gray-700 my-2"></div>
                <Link
                  to="/host"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a host
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-lg text-center hover:bg-gray-800 dark:hover:bg-gray-100"
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