import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';

export const ListingCard = ({ listing }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/listing/${listing.id}`}>
      <div 
        className="group cursor-pointer fade-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <img
            src={listing.mainImage}  // FIXED: changed from listing.image
            alt={listing.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              isLiked ? 'bg-white/80' : 'bg-white/30'
            }`}
          >
            <Heart
              size={22}
              className={`transition-colors duration-200 ${
                isLiked ? 'fill-rose-500 text-rose-500' : 'text-white hover:text-rose-500'
              }`}
            />
          </button>
          {listing.rating >= 4.9 && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-900">
              🔥 Popular
            </div>
          )}
        </div>

        <div className="mt-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 hover:text-rose-500 transition-colors">
                {listing.title}  {/* FIXED: title should be the main heading */}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{listing.location}</p>  {/* FIXED: location as subtext */}
            </div>
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
              <Star size={14} className="fill-current text-rose-500" />
              <span className="text-sm font-medium">{listing.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">{listing.type} · {listing.bedrooms} beds</p>  {/* FIXED: removed dates, using actual data */}
          <p className="mt-2">
            <span className="font-semibold text-gray-900">${listing.price}</span>
            <span className="text-gray-500"> night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
