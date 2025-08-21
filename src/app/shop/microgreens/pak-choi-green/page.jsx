'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OtherHero from '@/app/components/other-hero';
import ProductPopup from '@/app/components/ProductPopup'; // ✅ Import popup
import Link from 'next/link';

export default function PakChoiGreen() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderClick = () => {
    setShowPopup(true);
  };

  const recommendedProducts = [
    {
      name: 'Radish China Rose',
      slug: 'radish-china-rose',
      price: '₹270',
      flavor: 'Spicy, peppery',
      image: '/product/Radish-china-rose.png',
      sizes: ['100g'],
    },
    { 
      name: 'Turnip Green',
      slug: 'turnip-green',
      price: '₹225',
      flavor: 'Mildly bitter, earthy',
      image: '/product/Turnip-green.png',
      sizes: ['100g'],
    },
    {
      name: 'Kale Green',
      slug: 'kale-green',
      price: '₹315',
      flavor: 'Mildly bitter, earthy',
      image: '/product/Kale-green.png',
      sizes: ['100g'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <OtherHero name="Pak Choi Green" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Pak-choi-green.png"
              alt="Pak Choi Green Microgreens"
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pak Choi Green Microgreens
            </h1>

            {/* Sizes and Pricing */}
            <div className="mb-6 space-y-1">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">100g:</span> ₹270
              </p>
            </div>

            {/* Flavor & Best For */}
            <div className="mb-8 space-y-3">
              <p className="text-lg">
                <span className="font-semibold">Flavor Profile:</span>{' '}
                <span className="text-green-700">🌱 Mild, Earthy</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Stir-fries, Soups, Ramen
              </p>

              {/* CTA Button */}
              <button
                onClick={handleOrderClick}
                className="bg-[#4d7c0f] text-white px-5 py-2 rounded hover:bg-[#3f670d] transition cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Health Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Strong Bones</li>
            <li>Healthy Heart</li>
            <li>Good Digestion</li>
            <li>Sharp Eyesight</li>
            <li>Boosts Immunity</li>
          </ul>
        </div>

        {/* Nutrition Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Nutritional Value (per 100 gm)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-gray-700">
              <thead className="bg-[#679f1d] text-white">
                <tr>
                  <th className="py-2 px-4 border">Nutrient</th>
                  <th className="py-2 px-4 border">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border">Calories</td><td className="py-2 px-4 border">13 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Water</td><td className="py-2 px-4 border">~95%</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">1.5 g</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">2.2 g</td></tr>
                <tr><td className="py-2 px-4 border">Fiber</td><td className="py-2 px-4 border">1 g</td></tr>
                <tr><td className="py-2 px-4 border">Fat</td><td className="py-2 px-4 border">0.2 g</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">4468 IU</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">45 mg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin K</td><td className="py-2 px-4 border">45.5 µg</td></tr>
                <tr><td className="py-2 px-4 border">Folate (B9)</td><td className="py-2 px-4 border">66 µg</td></tr>
                <tr><td className="py-2 px-4 border">Calcium</td><td className="py-2 px-4 border">105 mg</td></tr>
                <tr><td className="py-2 px-4 border">Iron</td><td className="py-2 px-4 border">0.8 mg</td></tr>
                <tr><td className="py-2 px-4 border">Potassium</td><td className="py-2 px-4 border">252 mg</td></tr>
                <tr><td className="py-2 px-4 border">Magnesium</td><td className="py-2 px-4 border">19 mg</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1506807803488-8eafc15316c9?w=500&q=80"
                alt="Pak Choi Microgreens Fresh"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1612197527762-2bfcf7cb3cf9?w=500&q=80"
                alt="Pak Choi Microgreens Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1608018021976-4320d86bb9c1?w=500&q=80"
                alt="Pak Choi Microgreens Cooking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recommendedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title + Price */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-800 font-bold">{product.price}</p>
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {/* Flavor */}
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-semibold">Flavor:</span> {product.flavor}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    onClick={handleOrderClick}
                    className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
                  >
                    Order Now
                  </button>

                  <Link
                    href={`/shop/microgreens/${product.slug}`}
                    className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Show Popup when clicked */}
      {showPopup && (
        <ProductPopup
          product="Pak Choi Green Microgreens"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
