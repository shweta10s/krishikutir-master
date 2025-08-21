'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OtherHero from '@/app/components/other-hero';
import ProductPopup from '@/app/components/productPopup'; // import your popup form
import Link from 'next/link';

export default function ProductDetails() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleOrderNow = (productName) => {
    setSelectedProduct(productName);
    setShowPopup(true);
  };

  const handleSizeSelect = (productName, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productName]: size,
    }));
  };

  const recommendedProducts = [
    {
      name: 'Radish White',
      slug: 'radish-white',
      price: '₹225',
      flavor: 'Crisp, peppery',
      image: '/product/Radish-white.png',
      sizes: ['100g'],
    },
    {
      name: 'Broccoli',
      slug: 'broccoli',
      price: '₹338',
      flavor: 'Mild, slightly bitter',
      image: '/product/Broccoli.png',
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
      <OtherHero name="Sunflower Black Oil" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Sunflower-black-oil.png"
              alt="Sunflower Black Oil Microgreens"
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sunflower Black Oil Microgreens
            </h1>

            {/* Sizes and Pricing */}
            <div className="mb-6 space-y-1">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">100g:</span> ₹225
              </p>
            </div>

            {/* Flavor & Best For */}
            <div className="mb-8 space-y-3">
              <p className="text-lg">
                <span className="font-semibold">Flavor Profile:</span>{' '}
                <span className="text-yellow-700">🌰 Nutty, Crunchy</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Smoothie Bowls, Wraps
              </p>

              {/* CTA Button */}
              <button
                onClick={() =>
                  handleOrderNow('Sunflower Black Oil Microgreens')
                }
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
            <li>Boosts fertility</li>
            <li>Prevents Cancer</li>
            <li>Purifies Blood</li>
            <li>Lowers Blood Pressure</li>
            <li>Helps reduce Heart Disease</li>
            <li>Reduces Cholesterol</li>
            <li>Helps reduce Type 2 Diabetes</li>
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
                <tr>
                  <td className="py-2 px-4 border">Calories</td>
                  <td className="py-2 px-4 border">28 kcal</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Protein</td>
                  <td className="py-2 px-4 border">3.5 g</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Total Carbohydrates</td>
                  <td className="py-2 px-4 border">6.3 g</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Dietary Fiber</td>
                  <td className="py-2 px-4 border">3.2 g</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Calcium</td>
                  <td className="py-2 px-4 border">67.1 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Iron</td>
                  <td className="py-2 px-4 border">1.0 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Magnesium</td>
                  <td className="py-2 px-4 border">54.7 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Potassium</td>
                  <td className="py-2 px-4 border">239.6 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Vitamin C</td>
                  <td className="py-2 px-4 border">64.9 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Vitamin E</td>
                  <td className="py-2 px-4 border">48.7 mg</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Vitamin K1</td>
                  <td className="py-2 px-4 border">62.5 µg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recipe Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Recipe Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Incorporated into Sandwiches, wraps and salads</li>
            <li>Blended into juices and smoothies</li>
            <li>Garnished on Pizza, Soups, Omelets, curries</li>
            <li>Eaten raw, cooked in warm and cold dishes</li>
          </ul>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1623062741521-38f820bbfba7?w=500&q=80"
                alt="Sunflower Microgreens Closeup"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1617137968427-8594fbc64d53?w=500&q=80"
                alt="Sunflower Microgreens on Salad"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1609334768385-b7b7bb1eabf1?w=500&q=80"
                alt="Sunflower Microgreens Garnish"
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

                {/* Weights */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(product.name, size)}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        selectedSizes[product.name] === size
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Flavor */}
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-semibold">Flavor:</span> {product.flavor}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    onClick={() => handleOrderNow(product.name)}
                    className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
                  >
                    Order Now
                  </button>

                  {/* ✅ Next.js Link */}
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

      {/* Popup Form */}
      {showPopup && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
