import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, CreditCard } from "lucide-react";

// Sample reservation data (replace with actual API data later)
const sampleReservations = [
  {
    id: 1,
    listingTitle: "Beachfront Paradise",
    location: "Malibu, California",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&h=300&fit=crop",
    checkIn: "2024-12-20",
    checkOut: "2024-12-25",
    guests: 4,
    totalPrice: 2250,
    status: "confirmed"
  },
  {
    id: 2,
    listingTitle: "Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
    checkIn: "2025-01-10",
    checkOut: "2025-01-15",
    guests: 2,
    totalPrice: 1495,
    status: "pending"
  }
];

export default function Reservations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Reservations</h1>
          <p className="text-gray-500 mt-1">Manage your upcoming and past trips</p>
        </div>

        {/* Reservations List */}
        {sampleReservations.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No reservations yet</h3>
            <p className="text-gray-500 mb-6">Start exploring and book your next adventure!</p>
            <Link
              to="/"
              className="inline-block bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
            >
              Explore homes
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sampleReservations.map((reservation) => (
              <div key={reservation.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-48 h-48 md:h-auto">
                    <img
                      src={reservation.image}
                      alt={reservation.listingTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-rose-500">
                          <Link to={`/listing/${reservation.id}`}>
                            {reservation.listingTitle}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 mt-1">
                          <MapPin size={14} />
                          <span className="text-sm">{reservation.location}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        reservation.status === 'confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <div>
                          <p className="text-xs text-gray-400">Check in</p>
                          <p className="text-sm font-medium">{reservation.checkIn}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <div>
                          <p className="text-xs text-gray-400">Check out</p>
                          <p className="text-sm font-medium">{reservation.checkOut}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} />
                        <div>
                          <p className="text-xs text-gray-400">Guests</p>
                          <p className="text-sm font-medium">{reservation.guests} guests</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <CreditCard size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-500">Total paid:</span>
                        <span className="font-semibold text-gray-900">${reservation.totalPrice}</span>
                      </div>
                      <button className="text-rose-500 text-sm hover:underline">
                        View details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}