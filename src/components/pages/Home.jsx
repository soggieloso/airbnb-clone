import { useState } from "react";
import { listings } from "../components/data/listings";
import { ListingCard } from "../components/ListingCard";
import { Footer } from "../components/Footer";

const categories = [
  { name: "Beachfront", icon: "🏖️" },
  { name: "Cabins", icon: "🏡" },
  { name: "Tiny Homes", icon: "🏠" },
  { name: "Luxury", icon: "✨" },
  { name: "Tropical", icon: "🌴" },
  { name: "Ski-in/Ski-out", icon: "⛷️" },
  { name: "Amazing views", icon: "🏔️" },
  { name: "Historical homes", icon: "🏛️" },
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [week, setWeek] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">airbnb</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
            Not sure where to go?
          </h1>
          <div className="text-5xl md:text-6xl font-bold text-rose-500 mb-6">
            Perfect.
          </div>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Discover unique homes and experiences around the world. Let us inspire your next adventure.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full border border-gray-200 shadow-lg p-2 max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="flex-1 px-5">
                <div className="text-xs text-left text-gray-500">Where are you going?</div>
                <input
                  type="text"
                  placeholder="Anywhere"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex-1 px-5">
                <div className="text-xs text-left text-gray-500">Any week</div>
                <input
                  type="text"
                  placeholder="Add dates"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex-1 px-5">
                <div className="text-xs text-left text-gray-500">Add guests</div>
                <input
                  type="text"
                  placeholder="Add guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
              <button className="bg-rose-500 text-white p-3 rounded-full ml-2">
                Q
              </button>
            </div>
          </div>

          {/* Search values display */}
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
            <span>Anywhere</span>
            <span>Add dates</span>
            <span>Add guests</span>
          </div>

          <button className="mt-6 text-sm text-gray-500 hover:underline">
            I'm flexible
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Explore by category</h2>
          <button className="text-rose-500 text-sm flex items-center gap-1">
            View all <span>→</span>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition group">
              <span className="text-3xl group-hover:scale-110 transition">{cat.icon}</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
            {/* Inspiration Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Inspiration for your next trip
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
              alt="Mountain retreat"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Mountain Retreats</h3>
              <p className="text-sm opacity-90">Escape to nature</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop"
              alt="Beach front"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Beachfront</h3>
              <p className="text-sm opacity-90">Ocean views</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop"
              alt="City escapes"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">City Escapes</h3>
              <p className="text-sm opacity-90">Urban adventures</p>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR STAYS / LISTINGS SECTION - ADDED BACK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Popular stays</h2>
            <p className="text-gray-500 text-sm mt-1">Most loved by our community</p>
          </div>
          <button className="text-rose-500 text-sm font-medium hover:text-rose-600">
            Show all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
       <Footer />
    </div>
  );
}
