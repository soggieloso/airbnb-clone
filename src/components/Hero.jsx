export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 to-orange-50/30 rounded-2xl overflow-hidden mb-12 fade-in min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-orange-500/5"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Logo/Badge */}
        <div className="mb-6">
          <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">airbnb</span>
        </div>
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3">
            Not sure where to go?
          </h1>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-rose-500 block">
            Perfect.
          </span>
        </div>
        
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover unique homes and experiences around the world. Let us inspire your next adventure.
        </p>

        {/* Navigation Tabs (like the image) */}
        <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-4 px-4 py-2 border-b border-gray-100 text-xs sm:text-sm text-gray-500">
            <span className="font-medium text-gray-900 border-b-2 border-rose-500 pb-2 -mb-[2px]">
              Locations
            </span>
            <span className="hover:text-gray-900 transition cursor-pointer">
              Checking in
            </span>
            <span className="hover:text-gray-900 transition cursor-pointer">
              Checkout
            </span>
            <span className="hover:text-gray-900 transition cursor-pointer">
              Guest
            </span>
          </div>
          
          <div className="p-4 sm:p-5 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span>🔍 Search listings</span>
              <span className="text-gray-300">—</span>
              <span>👤 Add guest</span>
            </div>
          </div>
        </div>
        
        {/* Media Player Controls Style (like your image) */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
          <span>00:00:00</span>
          <span className="text-gray-300">/</span>
          <span>13:07</span>
          <button className="ml-3 text-gray-500 hover:text-gray-700 transition">
            ▶
          </button>
          <span className="text-gray-300 text-xs">1x</span>
        </div>
      </div>
    </div>
  );
};
