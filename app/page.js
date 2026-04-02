"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { listings } from "../src/components/data/listings";
import { ListingCard } from "../src/components/ListingCard";
// Category data
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
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl overflow-hidden mb-12">
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Not sure where to go?
            <span className="text-rose-500 block mt-2">Perfect.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique homes and experiences around the world. Let us
            inspire your next adventure.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-lg p-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1 px-4">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <div className="border-l px-4 hidden sm:block">
                <input
                  type="text"
                  placeholder="Any week"
                  className="w-24 outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <div className="border-l px-4 hidden sm:block">
                <input
                  type="text"
                  placeholder="Add guests"
                  className="w-24 outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Explore by category
          </h2>
          <button className="text-rose-500 hover:text-rose-600 text-sm font-medium">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition group"
            >
              <div className="text-3xl mb-1">{category.icon}</div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Inspiration for your next trip
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=500&fit=crop"
              alt="Mountain retreat"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Mountain Retreats</h3>
              <p className="text-sm opacity-90">Escape to nature</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=500&fit=crop"
              alt="Beach front"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Beachfront</h3>
              <p className="text-sm opacity-90">Ocean views</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=500&fit=crop"
              alt="City escapes"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">City Escapes</h3>
              <p className="text-sm opacity-90">Urban adventures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Grid - THIS IS WHERE YOUR LISTINGS WILL SHOW */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Popular stays
          </h2>
          <button className="text-rose-500 hover:text-rose-600 text-sm font-medium">
            Show all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
