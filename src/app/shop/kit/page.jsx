'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MicrogreensKit() {
  return (
    <div className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-10 text-center mb-16 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4d7c0f] mb-2">
            Best Microgreens Grow Kit in India
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Krishi Kutir Premium Microgreens Grow Kit
          </h2>
          <p className="italic text-gray-700 text-lg mb-6">
            Grow Fresh. Eat Fresh. Live Green.
          </p>
          <div className="relative w-full h-80 md:h-96 mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Mustard-green.png"
              alt="Krishi Kutir Microgreens Grow Kit"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Product Overview */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-16">
          <p className="text-lg leading-relaxed mb-6">
            Unlock the joy of growing your own nutrient-rich microgreens at home with Krishi Kutir’s Premium Microgreens Grow Kit — thoughtfully curated for beginners and home growers who value health, freshness, and simplicity.
          </p>

          {/* What's Inside */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">✅ What’s Inside the Kit?</h3>
            <div className="space-y-3">
              <p><b>Microgreens Growing Tray:</b> Specially designed for airflow and drainage to ensure healthy growth and strong roots.</p>
              <p><b>High-Quality Seeds (4 Varieties):</b> Handpicked for taste, nutrition, and ease of growing—perfect to add variety to your meals.</p>
              <p><b>Premium Grow Medium:</b> Soil-free, clean, and ready to use—ideal for quick germination and flavor-rich growth.</p>
              <p><b>Spray Bottle:</b> For easy, even misting to keep your greens perfectly hydrated.</p>
              <p><b>Germination Napkin:</b> Helps during the early seed-sprouting phase and makes cleanup easy.</p>
              <p><b>Harvesting Scissors:</b> Sharp and precise for clean, fresh cuts during harvesting.</p>
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">🌱 Why Choose Krishi Kutir’s Kit?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-200 text-center">
                <h4 className="text-lg font-bold mb-2">Eco-Friendly Packaging</h4>
                <p>Zero waste, no fancy boxes—just simple, minimal packaging that’s kind to the environment.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-200 text-center">
                <h4 className="text-lg font-bold mb-2">Easy to Use</h4>
                <p>No farming background required! Just follow our beginner-friendly instructions.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-200 text-center">
                <h4 className="text-lg font-bold mb-2">Power-Packed Nutrition</h4>
                <p>Microgreens are loaded with vitamins, minerals, and antioxidants—great for immunity, energy, and overall wellness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-16">
          <h3 className="text-2xl font-semibold mb-6">Steps to Grow Microgreens</h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>Soak the seeds overnight</li>
            <li>Add water to coco discs until it expands several times of its original size.</li>
            <li>Fill the growbags tray with small layer of moistened cocopeat mix (1-to-2-inch height from the bottom of growbag)</li>
            <li>Spread the seeds evenly across the tray and gently tap them flat into the soil.</li>
            <li>Sprinkle the water with spray bottle and cover the growbag with cloth/paper for 2 to 3 days. Sprinkle water everyday till seeds germinate</li>
            <li>When seeds germinated, remove the cover and keep it in well-lit place.</li>
            <li>Sprinkle the water whenever soil need moister (Be careful not to over-water) and If possible, keep in a place where it gets at least 1-2 hours of partial sunlight</li>
            <li>About 8 to 10 days after seeds germination, Harvest 1 to 3 inches along by cutting them above the soil leaving ½ inch.</li>
            <li>Wash thoroughly before use. Microgreens can last in the refrigerator for 5-10 days</li>
          </ul>
          <p className="mt-4 italic text-sm text-gray-600">
            Note: When all of your microgreens are harvested it is time to start the growing process again because roots that remain in the soil will not grow more leaves.
          </p>
        </section>

        {/* Use Them Section */}
       <section className="bg-green-50 rounded-3xl shadow-lg p-10 mb-16">
  <h3 className="text-3xl font-semibold text-center mb-10">Use Them In:</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      { name: "Salads", icon: "🥗" },
      { name: "Sandwiches", icon: "🥪" },
      { name: "Smoothies", icon: "🥤" },
      { name: "Curries", icon: "🍛" },
      { name: "Dals", icon: "🍲" },
      { name: "Khichdi", icon: "🍚" },
      { name: "Soups & more!", icon: "🍜" },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <p className="font-semibold text-lg">{item.name}</p>
      </div>
    ))}
  </div>
</section>


        {/* CTA Section */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold text-[#4d7c0f] mb-4">🛒 Order your Krishi Kutir Microgreens Grow Kit today</h3>
          <p className="mb-6 text-gray-700">Take the first step toward sustainable, healthy living.</p>
          <Link href='/contact' className="bg-[#4d7c0f] hover:bg-[#3f670d] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-200">
            Order Now
          </Link>
        </section>

      </div>
    </div>
  );
}
