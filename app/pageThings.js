"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Star, Heart } from "lucide-react";

// Sample destination data
const destinations = [
  {
    id: 1,
    title: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=500&fit=crop",
    price: "$89",
    rating: 4.89,
    dates: "Mar 10-15",
  },
  {
    id: 2,
    title: "Drakensberg, South Africa",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=500&fit=crop",
    price: "$120",
    rating: 4.95,
    dates: "Mar 12-17",
  },
  {
    id: 3,
    title: "Kruger National Park",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=500&fit=crop",
    price: "$210",
    rating: 4.92,
    dates: "Mar 8-13",
  },
  {
    id: 4,
    title: "Garden Route",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=500&fit=crop",
    price: "$150",
    rating: 4.87,
    dates: "Mar 5-10",
  },
  {
    id: 5,
    title: "Johannesburg",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop",
    price: "$75",
    rating: 4.76,
    dates: "Mar 1-6",
  },
  {
    id: 6,
    title: "Durban Beachfront",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop",
    price: "$95",
    rating: 4.83,
    dates: "Mar 15-20",
  },
];

// Category icons data
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
  const [hoveredCard, setHoveredCard] = useState(null);

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

      {/* Popular Stays Section */}
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
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition">
                  <Heart
                    size={18}
                    className="text-gray-600 hover:text-rose-500"
                    fill={hoveredCard === index ? "#f43f5e" : "none"}
                  />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {destination.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {destination.dates}
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {destination.price}{" "}
                    <span className="font-normal text-gray-500">night</span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-rose-500 text-rose-500" />
                  <span className="text-sm font-medium">
                    {destination.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
