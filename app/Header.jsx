"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, User, Globe, LogOut, Settings, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const authStatus = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (authStatus === 'true' && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setIsMenuOpen(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-rose-500 text-xl font-bold">
              airbnb
            </div>
          </Link>

          {/* Center Navigation - Search Bar */}
          <div className="hidden md:flex items-center space-x-2 border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <span className="text-sm font-medium px-2">Anywhere</span>
            <span className="border-l h-5 mx-2"></span>
            <span className="text-sm text-gray-500 px-2">Any week</span>
            <span className="border-l h-5 mx-2"></span>
            <span className="text-sm text-gray-500 px-2">Add guests</span>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm text-gray-700 hover:text-gray-900">
              Become a Host
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Globe size={20} className="text-gray-700" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition"
              >
                <Menu size={16} className="text-gray-700" />
                <User size={16} className="text-gray-700" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {user?.name || user?.email}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user?.email}
                        </p>
                      </div>
                      <Link 
                        href="/profile"
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Settings size={16} className="mr-3" />
                        Profile Settings
                      </Link>
                      <Link 
                        href="/trips"
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Home size={16} className="mr-3" />
                        Your Trips
                      </Link>
                      <div className="border-t my-2"></div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-red-600"
                      >
                        <LogOut size={16} className="mr-3" />
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleLogin();
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium"
                      >
                        Log in
                      </button>
                      <Link 
                        href="/signup"
                        className="block px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign up
                      </Link>
                      <div className="border-t my-2"></div>
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        Become a Host
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        Help Center
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};