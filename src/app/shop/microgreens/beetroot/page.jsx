'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import OtherHero from '@/app/components/other-hero'// ✅ Import popup
import Link from 'next/link' // ✅ Needed for Link component
import ProductPopup from '@/app/components/productPopup'

const ProductDetails = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleOrderClick = (productName) => {
    setSelectedProduct(productName)
    setShowPopup(true)
  }

  const recommendedProducts = [
    { name: 'Cabbage', slug: 'cabbage', price: '₹293', flavor: 'Mild, slightly sweet', image: '/product/Cabbage.png', sizes: ['100g'] },
    { name: 'Radish China Rose', slug: 'radish-china-rose', price: '₹270', flavor: 'Spicy, peppery', image: '/product/Radish-china-rose.png', sizes: ['100g'] },
    { name: 'Corn Shoot', slug: 'corn-shoot', price: '₹0', flavor: 'Sweet, grassy', image: '/product/Corn-Shoot.png', sizes: ['100g'] },
  ]

  return (
    <div className='w-full bg-white text-black'>
      {/* Hero */}
      <OtherHero name="Beetroot Microgreens" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          {/* Product Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/product/Beetroot.png"
              alt="Beetroot Microgreens"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Beetroot Microgreens
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
                <span className="text-red-500">❤️ Earthy, Sweet</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Best For:</span> Juices, Dessert Garnishes
              </p>

              {/* ✅ CTA Button with popup */}
              <button
                onClick={() => handleOrderClick('Beetroot Microgreens')}
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
            <li>Fights Cancer</li>
            <li>Removes fatigue and releases high energy hormones</li>
            <li>Controls cholesterol and blood sugar</li>
            <li>Reduces sign of ageing</li>
            <li>Fights dandruff and Hair fall</li>
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
                <tr><td className="py-2 px-4 border">Calcium</td><td className="py-2 px-4 border">21.8 mg</td></tr>
                <tr><td className="py-2 px-4 border">Carbohydrates</td><td className="py-2 px-4 border">11 gm</td></tr>
                <tr><td className="py-2 px-4 border">Dietary Fibre</td><td className="py-2 px-4 border">2.8 gm</td></tr>
                <tr><td className="py-2 px-4 border">Energy</td><td className="py-2 px-4 border">18 kcal</td></tr>
                <tr><td className="py-2 px-4 border">Iron</td><td className="py-2 px-4 border">1.1 mg</td></tr>
                <tr><td className="py-2 px-4 border">Magnesium</td><td className="py-2 px-4 border">31.3 mg</td></tr>
                <tr><td className="py-2 px-4 border">Potassium</td><td className="py-2 px-4 border">442 mg</td></tr>
                <tr><td className="py-2 px-4 border">Protein</td><td className="py-2 px-4 border">1.9 gm</td></tr>
                <tr><td className="py-2 px-4 border">Total Fat</td><td className="py-2 px-4 border">0.2 gm</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin A</td><td className="py-2 px-4 border">44.9 iu</td></tr>
                <tr><td className="py-2 px-4 border">Vitamin C</td><td className="py-2 px-4 border">6.7 mg</td></tr>
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
            {[
              { src: 'https://images.unsplash.com/photo-1609334768385-b7b7bb1eabf1?w=500&q=80', alt: 'Beetroot Microgreens Closeup' },
              { src: 'https://images.unsplash.com/photo-1617137968427-8594fbc64d53?w=500&q=80', alt: 'Beetroot Microgreens on Salad' },
              { src: 'https://images.unsplash.com/photo-1623062741521-38f820bbfba7?w=500&q=80', alt: 'Beetroot Microgreens Garnish' },
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

      {/* ✅ Popup Form Component */}
      {showPopup && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}

export default ProductDetails
