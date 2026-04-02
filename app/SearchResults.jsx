"use client";

import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { ListingCard } from '../components/ListingCard/ListingCard';
import { FilterSidebar } from '../components/Filters/FilterSidebar';

export const SearchResults = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Bordeaux Getaway",
      location: "Bordeaux, France",
      price: 325,
      rating: 5.0,
      reviews: 318,
      imageUrl: "/listing1.jpg",
      dates: "Feb 19-26",
      beds: 5,
      baths: 3,
      guests: "4-6 guests"
    },
    // More listings...
  ]);

  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    typeOfPlace: [],
    amenities: [],
    instantBook: false
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-80 hidden lg:block">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>
          
          {/* Results Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Stays in Bordeaux</h1>
              <p className="text-gray-600">200+ places to stay</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};