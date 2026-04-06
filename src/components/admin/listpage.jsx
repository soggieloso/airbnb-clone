import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Edit, Trash2, Eye, Plus } from 'lucide-react';

export default function ListPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const data = await api.getListings();
      setListings(data);
    } catch (error) {
      console.error('Failed to fetch listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this listing?')) {
      try {
        await api.deleteListing(id);
        fetchListings();
      } catch (error) {
        console.error('Failed to delete listing:', error);
      }
    }
  };

  // Filter listings based on search and type
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || listing.type === filterType;
    return matchesSearch && matchesType;
  });

  // Get unique property types for filter
  const propertyTypes = ['all', ...new Set(listings.map(l => l.type))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Listings</h1>
          <p className="text-gray-500 mt-1">Manage your property listings</p>
        </div>
        <Link 
          to="/admin/create-listing" 
          className="bg-rose-500 text-white px-5 py-2.5 rounded-lg hover:bg-rose-600 transition flex items-center gap-2 w-fit"
        >
          <Plus size={18} />
          Create New Listing
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Listings Table */}
      {filteredListings.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          {listings.length === 0 ? (
            <>
              <p className="text-gray-500 mb-4">No listings yet</p>
              <Link to="/admin/create-listing" className="text-rose-500 hover:text-rose-600">
                Create your first listing →
              </Link>
            </>
          ) : (
            <p className="text-gray-500">No listings match your search</p>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-600">Listing</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Location</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Type</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Price</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Status</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredListings.map((listing) => (
                  <tr key={listing.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={listing.mainImage || listing.image || 'https://via.placeholder.com/64'} 
                          alt={listing.title} 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{listing.title}</p>
                          <p className="text-xs text-gray-500">{listing.bedrooms} beds · {listing.bathrooms} baths</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{listing.location}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs capitalize">
                        {listing.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-gray-900">${listing.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Link 
                          to={`/listing/${listing.id}`}
                          target="_blank"
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                          title="View"
                        >
                          <Eye size={18} />
                        </Link>
                        <Link 
                          to={`/admin/edit-listing/${listing.id}`} 
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(listing.id)} 
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer with count */}
          <div className="px-4 py-3 bg-gray-50 border-t">
            <p className="text-sm text-gray-500">
              Showing {filteredListings.length} of {listings.length} listings
            </p>
          </div>
        </div>
      )}
    </div>
  );
}