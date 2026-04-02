"use client";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { 
  HomeIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalListings: 0,
    totalBookings: 0,
    totalRevenue: 0,
    averageRating: 0
  });
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const listings = await api.getListings();
      setStats({
        totalListings: listings.length,
        totalBookings: 156,
        totalRevenue: 45780,
        averageRating: 4.8
      });
      setRecentListings(listings.slice(0, 5));
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    { title: 'Total Listings', value: stats.totalListings, icon: HomeIcon, color: 'bg-blue-500' },
    { title: 'Total Bookings', value: stats.totalBookings, icon: UserGroupIcon, color: 'bg-green-500' },
    { title: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: CurrencyDollarIcon, color: 'bg-rose-500' },
    { title: 'Average Rating', value: `${stats.averageRating} ★`, icon: StarIcon, color: 'bg-yellow-500' },
  ];

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading dashboard...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Listings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentListings.map((listing) => (
            <div key={listing.id} className="px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">{listing.title}</h3>
                <p className="text-sm text-gray-500">{listing.location}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">${listing.price}/night</p>
                <Link 
                  to={`/admin/edit-listing/${listing.id}`}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Link to="/admin/listings" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
            View all listings →
          </Link>
        </div>
      </div>
    </div>
  );
}