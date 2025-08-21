'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OtherHero from '@/app/components/other-hero';
import Link from 'next/link';
import ProductPopup from '@/app/components/productPopup';

export default function RadishWhite() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderNow = () => setShowPopup(true);

  const recommendedProducts = [
    { name: 'Mustard Green', slug: 'mustard-green', price: '₹225', flavor: 'Spicy, peppery', image: '/product/Mustard-Green.png', sizes: ['100g'] },
    { name: 'Turnip Green', slug: 'turnip-green', price: '₹225', flavor: 'Mildly bitter, earthy', image: '/product/Turnip-Green.png', sizes: ['100g'] },
    { name: 'Basil Green', slug: 'basil-green', price: '₹315', flavor: 'Sweet, aromatic', image: '/product/Basil-Green.png', sizes: ['100g'] },
  ];

  return (
    <div className='w-full bg-white text-black'>
      <OtherHero name="Radish White" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image src="/product/Radish-white.png" alt="Radish White Microgreens" fill className="object-cover" loading="lazy"/>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Radish White Microgreens</h1>

            <div className="mb-6 space-y-1">
              <p className="text-lg text-gray-700"><span className="font-semibold">100g:</span> ₹225</p>
            </div>

            <div className="mb-8 space-y-3">
              <p className="text-lg"><span className="font-semibold">Flavor Profile:</span> <span className="text-green-700">🌱 Bold, Peppery</span></p>
              <p className="text-lg"><span className="font-semibold">Best For:</span> Canapés, Soups</p>

              <button
                onClick={handleOrderNow}
                className="bg-[#4d7c0f] text-white px-5 py-2 rounded hover:bg-[#3f670d] transition"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Health Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Boosts Immunity</li>
            <li>Supports Digestion</li>
            <li>Good for Heart Health</li>
            <li>Helps Manage Weight</li>
            <li>Keeps Skin Healthy</li>
          </ul>
        </div>

        {/* Nutrition Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Nutritional Value (per 100 gm)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-gray-700">
              <thead className="bg-[#679f1d] text-white">
                <tr>
                  <th className="py-2 px-4 border">Nutrient</th>
                  <th className="py-2 px-4 border">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border">Calories</td><td className="py-2 px-4 border">45 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">4 g</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">4 g</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin E</td><td className="py-2 px-4 border">3.75 mg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">20–25 mg</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">~1600 IU</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin K</td><td className="py-2 px-4 border">~250 µg</td></tr>
                <tr><td className="py-2 px-4 border">B Vitamins (B1–B6)</td><td className="py-2 px-4 border">0.2–0.8 mg</td></tr>
                <tr><td className="py-2 px-4 border">Folate (B9)</td><td className="py-2 px-4 border">~20 µg</td></tr>
                <tr><td className="py-2 px-4 border">Calcium</td><td className="py-2 px-4 border">~150 mg</td></tr>
                <tr><td className="py-2 px-4 border">Iron</td><td className="py-2 px-4 border">~1.3 mg</td></tr>
                <tr><td className="py-2 px-4 border">Magnesium</td><td className="py-2 px-4 border">~45 mg</td></tr>
                <tr><td className="py-2 px-4 border">Phosphorus</td><td className="py-2 px-4 border">~60 mg</td></tr>
                <tr><td className="py-2 px-4 border">Potassium</td><td className="py-2 px-4 border">~300 mg</td></tr>
                <tr><td className="py-2 px-4 border">Zinc</td><td className="py-2 px-4 border">~0.7 mg</td></tr>
                <tr><td className="py-2 px-4 border">Manganese</td><td className="py-2 px-4 border">~0.3 mg</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Product Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80', alt: 'Fresh' },
              { src: 'https://images.unsplash.com/photo-1585238341986-37d27d96fa3d?w=500&q=80', alt: 'Dish' },
              { src: 'https://images.unsplash.com/photo-1556800735-8b2031092b4c?w=500&q=80', alt: 'Cooking' },
            ].map((img, i) => (
              <div key={i} className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover" loading="lazy"/>
              </div>
            ))}
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
                  <button onClick={() => setShowPopup(true)} className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600">
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

      {showPopup && <ProductPopup product="Radish White Microgreen" onClose={() => setShowPopup(false)} />}
    </div>
  );
}
