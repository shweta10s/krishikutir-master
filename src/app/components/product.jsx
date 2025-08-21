'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Product = () => {
  // ✅ All 18 products with details
  const products = [
    {
      name: 'Mustard Green',
      price: 225,
      image: '/product/Mustard-green.png',
      sizes: ['100 gm'],
      flavor: 'Spicy, peppery',
      bestUse: 'Sandwiches, salads, wraps',
      nutrition: 'Vitamin K, A, C, calcium',
    },
    {
      name: 'Pak Choi Green',
      price: 270,
      image: '/product/Pak-choi-green.png',
      sizes: ['100 gm'],
      flavor: 'Mild, cabbage-like',
      bestUse: 'Stir fry, soups, salads',
      nutrition: 'Vitamin K, A, C, calcium',
    },
    {
      name: 'Beetroot',
      price: 270,
      image: '/product/Beetroot.png',
      sizes: ['100 gm'],
      flavor: 'Mild, earthy, sweet',
      bestUse: 'Soups, sautés, stews',
      nutrition: 'Vitamin K, calcium, folate',
    },
    {
      name: 'Radish White',
      price: 150,
      image: '/product/Radish-white.png',
      sizes: ['100 gm'],
      flavor: 'Crisp, peppery',
      bestUse: 'Salads, garnishes',
      nutrition: 'Vitamin C, folate, potassium',
    },
  ];

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (productName, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productName]: size,
    }));
  };

  const visibleCount = 4; // show first 4

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen py-10 text-black px-4 md:px-6 lg:px-4">
      {/* Header */}
      <header className="w-full flex flex-col justify-center items-center text-center mb-10">
        <p className="text-[#4d7c0f] italic mb-2 text-[20px] sm:text-[24px] font-[400]">
          ~ Our Products ~
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Superfoods Harvested at Peak Freshness
        </h2>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between">
            {/* Image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <h2 className="font-semibold text-lg">Rs. {product.price}</h2>
              </div>

              {/* Size Options */}
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(product.name, size)}
                    className={`text-xs px-3 py-1 rounded-full border 
                      ${selectedSizes[product.name] === size
                        ? 'border-green-600 text-green-600'
                        : 'border-gray-300 text-gray-600'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Flavor / Use / Nutrition */}
              <div className="text-sm text-gray-600 mt-3 space-y-1">
                <p><strong>Flavor:</strong> {product.flavor}</p>
                <p><strong>Best Use:</strong> {product.bestUse}</p>
                <p><strong>Nutrition:</strong> {product.nutrition}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link
                href="tel:+919009166101"
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
              >
                Call Us
              </Link>
              <Link
                href={`/shop/microgreens`}
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Show More Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/shop/microgreens"
          className="bg-[#4d7c0f] text-white px-6 py-2 rounded hover:bg-[#3f670d] transition"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Product;
