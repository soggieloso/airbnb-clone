
export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Support</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Help Center</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Safety information</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Cancellation options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Community</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Airbnb.org</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Anti-discrimination</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Disability support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Hosting</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Airbnb your home</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">AirCover for Hosts</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Hosting resources</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">About</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Newsroom</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Investors</li>
              <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">Careers</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Airbnb Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
