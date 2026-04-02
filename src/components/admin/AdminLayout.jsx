//"use client";

import { useState } from 'react';
import { 
  LayoutDashboard, 
  Home, 
  Calendar, 
  PlusCircle, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Home, label: 'My Listings', path: '/admin/listings' },
    { icon: Calendar, label: 'Reservations', path: '/admin/reservations' },
    { icon: PlusCircle, label: 'Create Listing', path: '/admin/create-listing' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 fixed h-full z-20`}>
        <div className="p-4 border-b flex justify-between items-center">
          <h1 className={`font-bold text-rose-500 ${!sidebarOpen && 'hidden'}`}>Admin Panel</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 rounded-lg hover:bg-gray-100">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition mb-1"
            >
              <item.icon size={20} />
              <span className={`${!sidebarOpen && 'hidden'}`}>{item.label}</span>
            </a>
          ))}
          
          <div className="border-t mt-4 pt-4">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full text-red-600">
              <LogOut size={20} />
              <span className={`${!sidebarOpen && 'hidden'}`}>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};