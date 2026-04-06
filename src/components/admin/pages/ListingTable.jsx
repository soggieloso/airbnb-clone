
import { useState } from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';

export const ListingTable = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "3 Room Bedroom",
      hotelName: "Sandton City Hotel",
      guests: "4-6 guests",
      type: "Entire Home",
      beds: 5,
      baths: 3,
      amenities: "Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 325,
      image: "/listing1.jpg"
    },
    {
      id: 2,
      title: "Entire home in Bordeaux",
      hotelName: "Woodmead City Hotel",
      guests: "4-6 guests",
      type: "Entire Home",
      beds: 5,
      baths: 3,
      amenities: "Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: null,
      image: "/listing2.jpg"
    },
    {
      id: 3,
      title: "Entire home in Bordeaux",
      hotelName: "Historic City Center Home",
      guests: "4-6 guests",
      type: "Entire Home",
      beds: 5,
      baths: 3,
      amenities: "Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 125,
      image: "/listing3.jpg"
    }
  ]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this listing?')) {
      setListings(listings.filter(listing => listing.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-600">Listing</th>
              <th className="text-left p-4 font-semibold text-gray-600">Details</th>
              <th className="text-left p-4 font-semibold text-gray-600">Rating</th>
              <th className="text-left p-4 font-semibold text-gray-600">Price</th>
              <th className="text-left p-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={listing.image} alt={listing.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold">{listing.title}</p>
                      <p className="text-sm text-gray-500">{listing.hotelName}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    <p>{listing.guests} · {listing.beds} beds · {listing.baths} baths</p>
                    <p className="text-gray-500 text-xs">{listing.amenities}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{listing.rating}</span>
                    <span className="text-gray-500">({listing.reviews} reviews)</span>
                  </div>
                </td>
                <td className="p-4">
                  {listing.price ? (
                    <span className="font-semibold">${listing.price}<span className="text-gray-500 text-sm">/night</span></span>
                  ) : (
                    <span className="text-gray-400">Not set</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <Edit size={18} />
                    </button>
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
  );
};
