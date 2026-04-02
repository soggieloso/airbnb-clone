"use client";

export const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-12 fade-in">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Hero"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Find your next adventure
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover unique homes and experiences around the world
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
              Start exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};