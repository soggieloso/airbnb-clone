import { Link } from 'react-router-dom';
import { PlusCircle, Home, Calendar, DollarSign, Star } from 'lucide-react';

export default function HostDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Host Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your properties and earnings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Listings</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Home className="text-rose-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Calendar className="text-rose-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">$8,450</p>
              </div>
              <DollarSign className="text-rose-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.92</p>
              </div>
              <Star className="text-rose-500" size={32} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admin/create-listing"
              className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
            >
              <PlusCircle size={18} />
              Add New Listing
            </Link>
            <Link
              to="/admin/listings"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-rose-500 hover:text-rose-500 transition"
            >
              Manage Listings
            </Link>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
          </div>
          <div className="p-6 text-center text-gray-500">
            No recent bookings to display
          </div>
        </div>
      </div>
    </div>
  );
}