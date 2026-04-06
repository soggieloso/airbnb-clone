import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Edit, Trash2 } from 'lucide-react';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Listings</h1>
          <p className="text-gray-500 mt-1">Manage your property listings</p>
        </div>
        <Link 
          to="/admin/create-listing" 
          className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
        >
          + Create New Listing
        </Link>
      </div>

      {listings.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <p className="text-gray-500 mb-4">No listings yet</p>
          <Link to="/admin/create-listing" className="text-rose-500 hover:text-rose-600">
            Create your first listing →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-600">Listing</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Location</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Price</th>
                  <th className="text-left p-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={listing.mainImage || listing.image || 'https://via.placeholder.com/64'} 
                          alt={listing.title} 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{listing.title}</p>
                          <p className="text-sm text-gray-500">{listing.type || 'Apartment'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{listing.location}</td>
                    <td className="p-4">
                      <span className="font-semibold text-gray-900">${listing.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Link 
                          to={`/admin/edit-listing/${listing.id}`} 
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Edit size={18} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(listing.id)} 
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
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
        </div>
      )}
    </div>
  );
}
