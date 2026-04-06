import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Create Listing', path: '/admin/create-listing' },
    { name: 'View Listings', path: '/admin/listings' },
    { name: 'Reservations', path: '/admin/reservations' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-rose-500">airbnb</div>
        <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              pathname === item.path
                ? 'block px-4 py-2 rounded-lg mb-2 bg-rose-500 text-white'
                : 'block px-4 py-2 rounded-lg mb-2 text-gray-700 hover:bg-gray-100'
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
