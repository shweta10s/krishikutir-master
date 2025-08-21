'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import OtherHero from '@/app/components/other-hero'
import Link from 'next/link'
import ProductPopup from '@/app/components/ProductPopup' // 👈 import your popup form

const ProductDetails = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleOrderClick = () => {
    setShowPopup(true)
  }

  const recommendedProducts = [
    {
      name: 'Pak Choi Green',
      slug: 'pak-choi-green',
      price: '₹270',
      flavor: 'Mild, cabbage-like',
      image: '/product/Pak-choi-green.png',
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
      name: 'Cabbage',
      slug: 'cabbage',
      price: '₹293',
      flavor: 'Mild, slightly sweet',
      image: '/product/Cabbage.png',
      sizes: ['100g'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <OtherHero name="Peas" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src='/product/Peas.png'
              alt="Pea Shoot Microgreens"
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pea Shoot Microgreens
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
                <span className="text-green-600">🌺 Sweet, Crisp</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Stir-fries, Garnishes, Salads
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
            <li>Helps in weight management</li>
            <li>Increases body energy levels</li>
            <li>Controls wrinkles and ageing process</li>
            <li>Prevents constipation</li>
            <li>Helps in blood sugar regulation</li>
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
                <tr><td className="py-2 px-4 border">Calcium</td><td className="py-2 px-4 border">27 mg</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">15.6 gm</td></tr>
                <tr><td className="py-2 px-4 border">Dietary Fibre</td><td className="py-2 px-4 border">5.5 gm</td></tr>
                <tr><td className="py-2 px-4 border">Energy</td><td className="py-2 px-4 border">30 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Iron</td><td className="py-2 px-4 border">1.5 mg</td></tr>
                <tr><td className="py-2 px-4 border">Magnesium</td><td className="py-2 px-4 border">39 mg</td></tr>
                <tr><td className="py-2 px-4 border">Potassium</td><td className="py-2 px-4 border">271 mg</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">5.4 gm</td></tr>
                <tr><td className="py-2 px-4 border">Total Fat</td><td className="py-2 px-4 border">0.2 gm</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">804 iu</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">14.2 mg</td></tr>
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
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&q=80"
                alt="Pea Shoot Microgreens Closeup"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1623062741521-38f820bbfba7?w=500&q=80"
                alt="Pea Shoot Microgreens in Salad"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1622207357000-20cd2d02d293?w=500&q=80"
                alt="Pea Shoot Microgreens Garnish"
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

      {/* Popup Form */}
      {showPopup && (
        <ProductPopup onClose={() => setShowPopup(false)} product="Pea Shoot Microgreens" />
      )}
    </>
  )
}

export default ProductDetails
