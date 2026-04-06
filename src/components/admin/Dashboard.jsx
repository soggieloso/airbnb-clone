import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">Total Listings</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">0</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">Total Bookings</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">0</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-800 mt-1"></p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">Average Rating</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">0 ?</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Welcome to Admin Dashboard</h2>
        <p className="text-gray-600">You have successfully logged in!</p>
        <Link to="/admin/create-listing" className="inline-block mt-4 bg-rose-500 text-white px-6 py-2 rounded-lg">
          Create Your First Listing
        </Link>
      </div>
    </div>
  );
}
