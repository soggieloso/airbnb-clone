"use client";

import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';

export const ListingCard = ({ listing }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2"
          >
            <Heart
              size={24}
              className={`transition ${
                isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'
              }`}
            />
          </button>
        </div>

        <div className="mt-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">{listing.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                Type: {listing.type || 'Apartment'} · Bedrooms: {listing.bedrooms}
              </p>
              <p className="text-gray-500 text-sm">
                Bathrooms: {listing.bathrooms} · {listing.location}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-current text-gray-700" />
              <span className="text-sm font-medium">{listing.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">Reviews: {listing.reviews || 42}</p>
          <p className="mt-2">
            <span className="font-semibold text-lg">${listing.price}</span>
            <span className="text-gray-500"> / night</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Price Range: ${listing.price} - ${listing.price + 500}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="text-xs text-gray-500">Private Pool</span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs text-gray-500">Gym</span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs text-gray-500">Wi-Fi</span>
          </div>
        </div>
      </div>
    </Link>
  );
};