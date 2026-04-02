"use client";
import { useState } from 'react';
import { Star, Share, Heart, Wifi, Kitchen, AirConditioner, Parking, Check, MapPin } from 'lucide-react';
import { Header } from '../components/Header/Header';
import { DateRangePicker } from '../components/BookingCalendar/DateRangePicker';

export const ListingDetail = () => {
  const [selectedDates, setSelectedDates] = useState({
    startDate: new Date('2022-02-19'),
    endDate: new Date('2022-02-26')
  });
  const [guests, setGuests] = useState(2);

  const pricing = {
    nightlyRate: 79,
    nights: 7,
    subtotal: 553,
    weeklyDiscount: -28,
    cleaningFee: 62,
    serviceFee: 83,
    taxes: 29,
    total: 699
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 max-w-7xl mx-auto px-4">
        {/* Gallery */}
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden mb-8">
          <img src="/main-image.jpg" className="col-span-2 row-span-2 h-[400px] w-full object-cover" />
          <img src="/image2.jpg" className="h-[198px] w-full object-cover" />
          <img src="/image3.jpg" className="h-[198px] w-full object-cover" />
          <img src="/image4.jpg" className="h-[198px] w-full object-cover" />
          <img src="/image5.jpg" className="h-[198px] w-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Listing Info */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="border-b pb-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Entire rental unit hosted by Ghazal</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star size={16} className="fill-black" />
                      <span className="font-semibold ml-1">5.0</span>
                      <span className="text-gray-600 ml-1">· 7 reviews</span>
                    </div>
                    <span className="text-gray-600">· Superhost</span>
                    <span className="text-gray-600">· Bordeaux, France</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Share size={20} className="cursor-pointer" />
                  <Heart size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div className="border-b py-6 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Hosted by Ghazal</h3>
                <p className="text-gray-600">Superhost · 12 reviews · Identity verified</p>
                <div className="flex gap-4 mt-3">
                  <span>⭐ 100% response rate</span>
                  <span>⏱️ within an hour</span>
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-300"></div>
            </div>

            {/* Guest Info */}
            <div className="border-b py-6">
              <h3 className="text-xl font-semibold mb-4">You'll have the apartment to yourself</h3>
              <div className="flex gap-6">
                <div>
                  <p className="font-semibold">2 guests</p>
                  <p className="text-gray-600 text-sm">Capacity</p>
                </div>
                <div>
                  <p className="font-semibold">1 bedroom</p>
                  <p className="text-gray-600 text-sm">1 bed</p>
                </div>
                <div>
                  <p className="font-semibold">1 bath</p>
                  <p className="text-gray-600 text-sm">Private</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b py-6">
              <p className="text-gray-700 leading-relaxed">
                Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.
                Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms 
                of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access 
                the apartment by tram A and C and bus routes 27 and 44.
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b py-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3"><Wifi size={20} /> Wifi</div>
                <div className="flex items-center gap-3"><Kitchen size={20} /> Kitchen</div>
                <div className="flex items-center gap-3"><AirConditioner size={20} /> Air conditioning</div>
                <div className="flex items-center gap-3"><Parking size={20} /> Free parking</div>
                <div className="flex items-center gap-3"><Check size={20} /> Free washer</div>
                <div className="flex items-center gap-3"><Check size={20} /> Dryer</div>
              </div>
              <button className="mt-4 underline font-semibold">Show all 37 amenities</button>
            </div>

            {/* Reviews */}
            <div className="border-b py-6">
              <div className="flex items-center gap-2 mb-6">
                <Star size={20} className="fill-black" />
                <span className="text-xl font-semibold">5.0</span>
                <span className="text-gray-600">· 7 reviews</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><span className="font-semibold">5.0</span> Cleanliness</div>
                <div><span className="font-semibold">5.0</span> Accuracy</div>
                <div><span className="font-semibold">5.0</span> Communication</div>
                <div><span className="font-semibold">4.9</span> Location</div>
                <div><span className="font-semibold">5.0</span> Check-in</div>
                <div><span className="font-semibold">4.7</span> Value</div>
              </div>

              {/* Review Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-xl p-4">
                  <p className="font-semibold">Jose</p>
                  <p className="text-gray-500 text-sm">December 2021</p>
                  <p className="mt-2">Host was very attentive. Nice place to stay!</p>
                </div>
                <div className="border rounded-xl p-4">
                  <p className="font-semibold">Shayna</p>
                  <p className="text-gray-500 text-sm">December 2021</p>
                  <p className="mt-2">Wonderful neighborhood, easy access to restaurants and the subway...</p>
                </div>
              </div>
              <button className="mt-4 underline font-semibold">Show all 12 reviews</button>
            </div>

            {/* Where you'll sleep */}
            <div className="border-b py-6">
              <h3 className="text-xl font-semibold mb-4">Where you'll sleep</h3>
              <div className="border rounded-xl p-4">
                <p className="font-semibold">Bedroom</p>
                <p className="text-gray-600">1 queen bed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">${pricing.nightlyRate}</span>
                <span className="text-gray-600">/ night</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                <Star size={16} className="fill-black" />
                <span className="font-semibold">5.0</span>
                <span className="text-gray-600">· 7 reviews</span>
              </div>

              {/* Date Picker */}
              <div className="border rounded-lg mb-4">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3">
                    <p className="text-xs font-semibold">CHECK-IN</p>
                    <p className="text-sm">2/19/2022</p>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold">CHECKOUT</p>
                    <p className="text-sm">2/26/2022</p>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="border rounded-lg mb-6">
                <div className="p-3">
                  <p className="text-xs font-semibold">GUESTS</p>
                  <p className="text-sm">{guests} guests</p>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="underline">${pricing.nightlyRate} x {pricing.nights} nights</span>
                  <span>${pricing.subtotal}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Weekly discount</span>
                  <span>-${Math.abs(pricing.weeklyDiscount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>${pricing.cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>${pricing.serviceFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Occupancy taxes and fees</span>
                  <span>${pricing.taxes}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${pricing.total}</span>
                </div>
              </div>

              <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition">
                Reserve
              </button>
              <p className="text-center text-sm text-gray-500 mt-2">You won't be charged yet</p>

              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>✓ Free cancellation before Feb 14</p>
                <p>✓ Self check-in with keypad</p>
                <p>✓ Enhanced Clean commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};