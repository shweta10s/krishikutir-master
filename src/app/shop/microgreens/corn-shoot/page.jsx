'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OtherHero from '@/app/components/other-hero';
import Link from 'next/link';
import ProductPopup from '@/app/components/productPopup'; // import your popup

export default function CornShootMicrogreens() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(''); // ✅ Needed to track selected product

  const handleOrderClick = (productName) => {
    setSelectedProduct(productName); // ✅ Assign selected product
    setShowPopup(true);
  }

  const recommendedProducts = [
    { name: 'Beetroot', slug: 'beetroot', price: '₹270', flavor: 'Mild, earthy, sweet', image: '/product/Beetroot.png', sizes: ['100g'] },
    { name: 'Kale Green', slug: 'kale-green', price: '₹315', flavor: 'Mildly bitter, earthy', image: '/product/Kale-green.png', sizes: ['100g'] },
    { name: 'Mustard Yellow American', slug: 'mustard-yellow-american', price: '₹0', flavor: 'Strong, tangy, mustardy', image: '/product/Mustard-yellow.png', sizes: ['100g'] },
  ];

  return (
    <div className='w-full bg-white text-black'>
      {/* Hero */}
      <OtherHero name="Corn Shoot" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Corn-shoot.png"
              alt="Corn Shoot Microgreens"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Corn Shoot Microgreens
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
                <span className="text-green-700">🏵️ Sweet, grassy</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Salads, seafood garnishes
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleOrderClick('Corn Shoot Microgreens')}
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
            <li>Boosts Energy</li>
            <li>Supports Digestion</li>
            <li>Good for Eyes</li>
            <li>Strengthens Immunity</li>
            <li>Rich in Antioxidants</li>
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
                <tr><td className="py-2 px-4 border">Calories</td><td className="py-2 px-4 border">90 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">3.6 g</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">17 g</td></tr>
                <tr><td className="py-2 px-4 border">Dietary Fiber</td><td className="py-2 px-4 border">1.2 g</td></tr>
                <tr><td className="py-2 px-4 border">Fat</td><td className="py-2 px-4 border">1.2 g</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">21 mg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">750 IU</td></tr>
                <tr><td className="py-2 px-4 border">Potassium</td><td className="py-2 px-4 border">290 mg</td></tr>
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
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&q=80"
                alt="Corn Shoot Microgreens Fresh"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1615937544232-3ac2c81394b3?w=500&q=80"
                alt="Corn Shoot Microgreens Salad"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&q=80"
                alt="Corn Shoot Microgreens Dish"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recommendedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col">
                <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover" loading="lazy"/>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-800 font-bold">{product.price}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600">{size}</span>
                  ))}
                </div>

                <p className="text-sm text-gray-700 mt-2"><span className="font-semibold">Flavor:</span> {product.flavor}</p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button onClick={() => handleOrderClick(product.name)} className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600">
                    Order Now
                  </button>
                  <Link href={`/shop/microgreens/${product.slug}`} className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 text-center">
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
          product={selectedProduct} // ✅ Correctly pass selected product
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
