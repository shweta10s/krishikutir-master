'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OtherHero from '@/app/components/other-hero';
import Link from 'next/link';
import ProductPopup from '@/app/components/productPopup'; // ✅ Import popup

export default function MustardYellowAmerican() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderClick = () => {
    setShowPopup(true);
  };

  const recommendedProducts = [
    {
      name: 'Spinach',
      slug: 'spinach',
      price: '₹0',
      flavor: 'Mild, slightly sweet',
      image: '/product/Spinach.png',
      sizes: ['100g'],
    },
    { 
      name: 'Radish Silk Red',
      slug: 'radish-silk-red',
      price: '₹270',
      flavor: 'Crisp, peppery',
      image: '/product/Radish-silk-red.png',
      sizes: ['100g'],
    },
    {
      name: 'Peas',
      slug: 'peas',
      price: '₹0',
      flavor: 'Sweet, crunchy',
      image: '/product/Peas.png',
      sizes: ['100g'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <OtherHero name="Mustard Yellow American" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Mustard-yellow.png"
              alt="Mustard Yellow American Microgreens"
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mustard Yellow American Microgreens
            </h1>

            {/* Sizes and Pricing */}
            <div className="mb-6 space-y-1">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">100g:</span> ₹0
              </p>
            </div>

            {/* Flavor & Best For */}
            <div className="mb-8 space-y-3">
              <p className="text-lg">
                <span className="font-semibold">Flavor Profile:</span>{' '}
                <span className="text-green-700">🌷 Tangy, Sharp</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Sandwiches, Tacos, Dressings
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
            <li>Boosts Immunity</li>
            <li>Improves Digestion</li>
            <li>Supports Heart Health</li>
            <li>Strengthens Bones</li>
            <li>Helps Detox Body</li>
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
                <tr><td className="py-2 px-4 border">Calories</td><td className="py-2 px-4 border">~26 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">~3 g</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">~4 g</td></tr>
                <tr><td className="py-2 px-4 border">Fat</td><td className="py-2 px-4 border">~0.6 g</td></tr>
                <tr><td className="py-2 px-4 border">Fiber</td><td className="py-2 px-4 border">~1.5 g</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">~28 mg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin K1</td><td className="py-2 px-4 border">~275 µg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">~1800 IU</td></tr>
                <tr><td className="py-2 px-4 border">Calcium</td><td className="py-2 px-4 border">~50 mg</td></tr>
                <tr><td className="py-2 px-4 border">Iron</td><td className="py-2 px-4 border">~1.1 mg</td></tr>
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
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?w=500&q=80"
                alt="Mustard Yellow Microgreens Fresh"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1589927986089-35812388d1b0?w=500&q=80"
                alt="Mustard Yellow Microgreens Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=500&q=80"
                alt="Mustard Yellow Microgreens Cooking"
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
          product="Mustard Yellow American Microgreens"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
