"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PlusCircle, List, Calendar, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  { name: 'Create Listing', href: '/admin/listings/create', icon: PlusCircle },
  { name: 'View Listings', href: '/admin/listings', icon: List },
  { name: 'Reservations', href: '/admin/reservations', icon: Calendar },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-rose-500">airbnb</div>
        <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
      </div>
      
      <nav className="p-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition ${
                isActive
                  ? 'bg-rose-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}