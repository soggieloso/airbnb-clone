"use client";

import { useState } from 'react';

const categories = [
  { name: 'Beachfront', icon: '🏖️' },
  { name: 'Cabins', icon: '🏡' },
  { name: 'Tiny Homes', icon: '🏠' },
  { name: 'Luxury', icon: '✨' },
  { name: 'Tropical', icon: '🌴' },
  { name: 'Ski-in/Ski-out', icon: '⛷️' },
  { name: 'Amazing views', icon: '🏔️' },
  { name: 'Historical homes', icon: '🏛️' }
];

export const CategoryBar = () => {
  const [activeCategory, setActiveCategory] = useState('Beachfront');

  return (
    <div className="border-b border-gray-200 mb-8 overflow-x-auto">
      <div className="flex gap-8 whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex flex-col items-center gap-2 pb-4 text-sm transition ${
              activeCategory === category.name
                ? 'border-b-2 border-rose-500 text-rose-500 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};