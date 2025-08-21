'use client';

import Image from 'next/image';
import { FaLeaf, FaHandHoldingHeart } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-white py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Decorative background blob */}
          <div className="absolute -z-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#e5f3d9] rounded-[60%] blur-2xl opacity-50"></div>
          
          {/* Image card */}
          <div className="relative w-[85%] max-w-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/background/about.jpg"
              alt="Organic plants"
              width={500}
              height={500}
              className="object-cover w-full h-auto"
              priority
            />
            {/* subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent"></div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[#4d7c0f] italic mb-2 text-lg sm:text-xl font-medium">
            ~ About us ~
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We believe in working with
            <br className="hidden sm:block" /> accredited farmers
          </h2>
          <p className="text-gray-700 mt-4 font-medium text-base sm:text-lg">
            Krishi Kutir brings you fresh, organic microgreens — harvested live in Bhopal and delivered to homes, restaurants, cafés, and dieticians.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Organic means growing our food without chemical aids during the growing process—no fertilizers, pesticides, fungicides, herbicides, or larvicides.
          </p>

          {/* Feature points */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start space-x-3">
              <FaLeaf className="text-green-700 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Why Organic?</h4>
                <p className="text-sm text-gray-600">We’re making room for self-care today with a plan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaHandHoldingHeart className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Speciality Produce</h4>
                <p className="text-sm text-gray-600">We’re making room for self-care today with a plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
