'use client';

import Image from "next/image";

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
  {
    href: '/shop/microgreens/turnip-green',
    name: 'Turnip Green',
    price: 225,
    image: '/product/Turnip-green.png',
    sizes: ['100 gm'],
    flavor: 'Mildly bitter, earthy',
    bestUse: 'Soups, sautés, stews',
    nutrition: 'Vitamin K, calcium, folate',
  },
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
  {
    href: '/shop/microgreens/basil-green',
    name: 'Basil Green',
    price: 315,
    image: '/product/Basil-green.png',
    sizes: ['100 gm'],
    flavor: 'Sweet, aromatic',
    bestUse: 'Pizzas, pasta, salads',
    nutrition: 'Vitamin K, manganese, antioxidants',
  },
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
  {
    href: '/shop/microgreens/spinach',
    name: 'Spinach',
    price: 0,
    image: '/product/Spinach.png',
    sizes: ['100 gm'],
    flavor: 'Mild, slightly sweet',
    bestUse: 'Salads, omelettes',
    nutrition: 'Iron, Vitamin A, C, folate',
  },
  {
    href: '/shop/microgreens/kale-green',
    name: 'Kale Green',
    price: 315,
    image: '/product/Kale-green.png',
    sizes: ['100 gm'],
    flavor: 'Mildly bitter, earthy',
    bestUse: 'Smoothies, salads',
    nutrition: '',
  },
  {
    href: '/shop/microgreens/mustard-yellow-american',
    name: 'Mustard Yellow American',
    price: 0,
    image: '/product/Mustard-yellow.png',
    sizes: ['100 gm'],
    flavor: 'Strong, tangy, mustardy',
    bestUse: 'Sandwiches, pickles, wraps',
    nutrition: 'Vitamin K, C, calcium',
  },
  {
    href: '/shop/microgreens/radish-china-rose',
    name: 'Radish China Rose',
    price: 270,
    image: '/product/Radish-china-rose.png',
    sizes: ['100 gm'],
    flavor: 'Spicy, peppery',
    bestUse: 'Salads, tacos',
    nutrition: 'Vitamin C, folate, potassium',
  },
  {
    href: '/shop/microgreens/peas',
    name: 'Peas',
    price: 0,
    image: '/product/Peas.png',
    sizes: ['100 gm'],
    flavor: 'Sweet, crunchy',
    bestUse: 'Salads, snacks',
    nutrition: 'Vitamin C, protein, fiber',
  },
  {
    href: '/shop/microgreens/red-amaranth',
    name: 'Red Amaranth',
    price: 270,
    image: '/product/Red-amaranth.png',
    sizes: ['100 gm'],
    flavor: 'Mild, earthy, beet-like',
    bestUse: 'Salads, stir-fries',
    nutrition: 'Vitamin K, C, iron',
  },
  {
    href: '/shop/microgreens/corn-shoot',
    name: 'Corn Shoot',
    price: 0,
    image: '/product/Corn-shoot.png',
    sizes: ['100 gm'],
    flavor: 'Sweet, grassy',
    bestUse: 'Garnish, salads, wraps',
    nutrition: 'Vitamin A, antioxidants',
  },
  {
    href: '/shop/microgreens/radish-silk-red',
    name: 'Radish Silk Red',
    price: 270,
    image: '/product/Radish-silk-red.png',
    sizes: ['100 gm'],
    flavor: 'Crisp, peppery',
    bestUse: 'Sandwiches, salads',
    nutrition: 'Vitamin C, folate, potassium',
  },
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
  {
    href: '/shop/microgreens/broccoli',
    name: 'Broccoli',
    price: 338,
    image: '/product/Broccoli.png',
    sizes: ['100 gm'],
    flavor: 'Mild, slightly bitter',
    bestUse: 'Salads, smoothies',
    nutrition: 'Vitamin C, sulforaphane, fiber',
  },
  {
    href: '/shop/microgreens/cabbage',
    name: 'Cabbage',
    price: 293,
    image: '/product/Cabbage.png',
    sizes: ['100 gm'],
    flavor: 'Mild, slightly sweet',
    bestUse: 'Salads, slaws',
    nutrition: 'Vitamin K, C, antioxidants',
  },
];

export default function MicrogreensVarieties() {
  return (
    <section className="mt-20 py-12 px-4 flex justify-center text-black">
      <div className="relative max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          Our Microgreens Collection
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="mt-4 font-bold text-lg text-green-700">{item.name}</h3>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Flavor:</span> {item.flavor}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Best Use:</span> {item.bestUse}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Nutrients:</span> {item.nutrition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
