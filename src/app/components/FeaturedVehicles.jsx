"use client";

import Image from "next/image";
import { assets, dummyCarData } from "../frontend-assets/assets.js";

export default function FeaturedVehicles() {
  const featuredCars = dummyCarData.slice(0, 3);

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-screen-xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Vechicles</h2>
        <p className="text-gray-500 mt-2">
          Explore our selection of premium vehicles available for your next
          adventure.
        </p>
      </div>

      {/** Cars Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCars.map((car) => (
          <div
            key={car._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#7E57C2] text-white text-xs font-semibold px-2 py-1 rounded">
                Available Now
              </span>
              <span className="absolute bottom-3 right-3 bg-gray-700 text-white text-sm px-2 py-1 rounded">
                ${car.pricePerDay}/day
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-lg font-semibold">
                {car.brand} {car.model}
              </h3>
              <p className="text-sm text-gray-500">
                {car.category} {car.year}
              </p>
              <div className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span>{car.seating_capacity} Seats</span>
                <span>{car.fuel_type}</span>
                <span>{car.transmission}</span>
                <span>{car.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/** Explore Button Section */}
      <div className="flex justify-center mt-10">
        <button className="group relative flex items-center border px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#7E57C2] hover:text-white transition-all duration-300 ease-in-out overflow-hidden">
          <span className="transition-colors duration-300">
            Explore all cars
          </span>
          <span className="ml-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <i className="fas fa-arrow-right text-white"></i>
          </span>
        </button>
      </div>

      {/** Banner Section */}
      <div className="mt-16 bg-gradient-to-r from-purple-900 to-purple-400 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Do You Own a Luxury Car?
          </h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur facere exercitationem, nulla vero officia, eveniet
            minus, assumenda qui ipsa dicta recusandae explicabo magnam optio
            magni laudantium. Exercitationem iste illum saepe! Laboriosam
            laudantium incidunt delectus veritatis minus consequatur. Iure
            quisquam iusto totam eos quae omnis doloribus ipsam possimus numquam
            dolor iste nobis reprehenderit ea laborum, ab repellendus beatae
            rem. Itaque, enim!
          </p>
          <button className="bg-white text-[#7E57C2] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
            List your car
          </button>
        </div>
        <Image
          src={assets.banner_car_image}
          alt="Luxury Car"
          className="w-[240px] h-auto"
        />
      </div>
    </section>
  );
}
