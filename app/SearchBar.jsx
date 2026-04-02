"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (guests > 1) params.append('guests', guests);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="flex-1 flex items-center border rounded-full shadow-sm hover:shadow-md transition bg-white">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where are you going?"
              className="flex-1 px-6 py-3 rounded-full outline-none text-sm"
            />
            <div className="border-l h-8 mx-2"></div>
            <input
              type="number"
              min="1"
              max="16"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              placeholder="Add guests"
              className="w-28 px-2 py-3 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-rose-500 text-white p-3 rounded-full mx-2 hover:bg-rose-600 transition"
            >
              <Search size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};