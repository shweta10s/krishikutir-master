'use client';

import React, { useState } from 'react';
import OtherHero from '@/app/components/other-hero';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [visibleCount, setVisibleCount] = useState(4); // Initially 4 cards

   const products = [
    {
      href: '/shop/microgreens/mustard-green',
      name: 'Mustard Green',
      price: 225,
      image: '/product/Mustard-green.png',
      sizes: ['100 gm'],
      flavor: 'Spicy, peppery',
      bestUse: 'Sandwiches, salads, wraps',
      nutrition: 'Vitamin K, A, C, calcium',
    },
    {
      href: '/shop/microgreens/pak-choi-green',
      name: 'Pak Choi Green',
      price: 270,
      image: '/product/Pak-choi-green.png',
      sizes: ['100 gm'],
      flavor: 'Mild, cabbage-like',
      bestUse: 'Sandwiches, salads, wraps',
      nutrition: 'Vitamin K, A, C, calcium',
    },
    // {
    //   href: '/shop/microgreens/turnip-green',
    //   name: 'Turnip Green',
    //   price: 225,
    //   image: '/product/Turnip-green.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mildly bitter, earthy',
    //   bestUse: 'Soups, sautés, stews',
    //   nutrition: 'Vitamin K, calcium, folate',
    // },
    {
      href: '/shop/microgreens/radish-white',
      name: 'Radish White',
      price: 225,
      image: '/product/Radish-white.png',
      sizes: ['100 gm'],
      flavor: 'Crisp, peppery',
      bestUse: 'Salads, garnishes',
      nutrition: 'Vitamin C, folate, potassium',
    },
    {
      href: '/shop/microgreens/sunflower-black-oil',
      name: 'Sunflower Black Oil',
      price: 225,
      image: '/product/Sunflower-black-oil.png',
      sizes: ['100 gm'],
      flavor: 'Nutty, crunchy',
      bestUse: 'Sandwiches, smoothies, snacks',
      nutrition: 'Protein, Vitamin E, zinc',
    },
    // {
    //   href: '/shop/microgreens/basil-green',
    //   name: 'Basil Green',
    //   price: 315,
    //   image: '/product/Basil-green.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Sweet, aromatic',
    //   bestUse: 'Pizzas, pasta, salads',
    //   nutrition: 'Vitamin K, manganese, antioxidants',
    // },
    {
      href: '/shop/microgreens/beetroot',
      name: 'Beetroot',
      price: 270,
      image: '/product/Beetroot.png',
      sizes: ['100 gm'],
      flavor: 'Mild, earthy, sweet',
      bestUse: 'Salads, smoothies',
      nutrition: 'Folate, manganese, iron',
    },
    // {
    //   href: '/shop/microgreens/spinach',
    //   name: 'Spinach',
    //   price: 0,
    //   image: '/product/Spinach.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mild, slightly sweet',
    //   bestUse: 'Salads, omelettes',
    //   nutrition: 'Iron, Vitamin A, C, folate',
    // },
    // {
    //   href: '/shop/microgreens/kale-green',
    //   name: 'Kale Green',
    //   price: 315,
    //   image: '/product/Kale-green.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mildly bitter, earthy',
    //   bestUse: 'Smoothies, salads',
    //   nutrition: '',
    // },
    // {
    //   href: '/shop/microgreens/mustard-yellow-american',
    //   name: 'Mustard Yellow American',
    //   price: 0,
    //   image: '/product/Mustard-yellow.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Strong, tangy, mustardy',
    //   bestUse: 'Sandwiches, pickles, wraps',
    //   nutrition: 'Vitamin K, C, calcium',
    // },
    // {
    //   href: '/shop/microgreens/radish-china-rose',
    //   name: 'Radish China Rose',
    //   price: 270,
    //   image: '/product/Radish-china-rose.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Spicy, peppery',
    //   bestUse: 'Salads, tacos',
    //   nutrition: 'Vitamin C, folate, potassium',
    // },
    // {
    //   href: '/shop/microgreens/peas',
    //   name: 'Peas',
    //   price: 0,
    //   image: '/product/Peas.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Sweet, crunchy',
    //   bestUse: 'Salads, snacks',
    //   nutrition: 'Vitamin C, protein, fiber',
    // },
    // {
    //   href: '/shop/microgreens/red-amaranth',
    //   name: 'Red Amaranth',
    //   price: 270,
    //   image: '/product/Red-amaranth.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mild, earthy, beet-like',
    //   bestUse: 'Salads, stir-fries',
    //   nutrition: 'Vitamin K, C, iron',
    // },
    // {
    //   href: '/shop/microgreens/corn-shoot',
    //   name: 'Corn Shoot',
    //   price: 0,
    //   image: '/product/Corn-shoot.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Sweet, grassy',
    //   bestUse: 'Garnish, salads, wraps', 
    //   nutrition: 'Vitamin A, antioxidants',
    // },
    // {
    //   href: '/shop/microgreens/radish-silk-red',
    //   name: 'Radish Silk Red',
    //   price: 270,
    //   image: '/product/Radish-silk-red.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Crisp, peppery',
    //   bestUse: 'Sandwiches, salads',
    //   nutrition: 'Vitamin C, folate, potassium',
    // },
    {
      href: '/shop/microgreens/radish-purple-pure',
      name: 'Radish Purple Pure',
      price: 315,
      image: '/product/Radish-purple.png',
      sizes: ['100 gm'],
      flavor: 'Mildly spicy, crisp',
      bestUse: 'Salads, wraps',
      nutrition: 'Vitamin C, folate, antioxidants',
    },
    // {
    //   href: '/shop/microgreens/broccoli',
    //   name: 'Broccoli',
    //   price: 338,
    //   image: '/product/Broccoli.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mild, slightly bitter',
    //   bestUse: 'Salads, smoothies',
    //   nutrition: 'Vitamin C, sulforaphane, fiber',
    // },
    // {
    //   href: '/shop/microgreens/cabbage',
    //   name: 'Cabbage',
    //   price: 293,
    //   image: '/product/Cabbage.png',
    //   sizes: ['100 gm'],
    //   flavor: 'Mild, slightly sweet',
    //   bestUse: 'Salads, slaws',
    //   nutrition: 'Vitamin K, C, antioxidants',
    // },
  ];

  const handleSizeSelect = (productName, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productName]: size,
    }));
  };

  const handleShowMore = () => {
    if (visibleCount >= products.length) {
      setVisibleCount(4); // Collapse back to 4
    } else {
      setVisibleCount((prev) => prev + 4); // Show 4 more each click
    }
  };

  return (
    <div>
      <OtherHero name="Microgreens" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
          {products.slice(0, visibleCount).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-64 rounded-xl overflow-hidden min-h-[250px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <h2 className="font-semibold text-lg">Rs. {product.price}</h2>
                </div>

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

                <div className="mt-3 text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Flavor Profile:</strong> {product.flavor}
                  </p>
                  <p>
                    <strong>Best Use For:</strong> {product.bestUse}
                  </p>
                  <p>
                    <strong>Nutritional Value (per 100g):</strong> {product.nutrition}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Link
                  href="tel:+919009166101"
                  className="flex justify-center items-center text-white text-sm px-4 py-2 rounded-full bg-[#4d7c0f] hover:bg-[#3f670d] transition"
                >
                  Call Us
                </Link>
                <Link
                  href={product.href}
                  className="flex justify-center items-center text-white text-sm px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleShowMore}
            className="text-sm font-semibold text-orange-600 border border-orange-600 px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
          >
            {visibleCount >= products.length ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
