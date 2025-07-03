"use client";

import { useState } from "react";
import Image from "next/image";
import { assets, cityList } from "../frontend-assets/assets.js";
import { toast } from "react-toastify";

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    toast(`Searching cars in ${location} from ${pickupDate} to ${returnDate}`);
  };

  return (
    <div className="bg-[#f1f5f9] min-h-screen py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">
        Luxury cars on Rent
      </h1>

      {/* Search Bar */}
      <div className="bg-white shadow-xl rounded-md px-3 py-2 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-black mb-[2px]">Pickup Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-sm text-gray-500 bg-white outline-none focus:ring-0"
          >
            <option value="">Please select location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-black mb-0.5">Pick-up Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="text-sm text-gray-500 bg-white outline-none focus:ring-0"
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-black mb-0.5">
            Return Date
            </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="text-sm text-gray-500 bg-white outline-none focus:ring-0"
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="group flex items-center gap-2 bg-[#7E57C2] text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-all duration-300"
        >
          <i className="fas fa-search group-hover:scale-110 transition-transform" />
          <span className="hover:font-semibold">Search</span>
        </button>
      </div>

      {/* Car Image */}
      <div className="mt-12 flex justify-center">
        <Image
          src={assets.main_car}
          alt="Luxury Car"
          width={800}
          height={400}
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
}