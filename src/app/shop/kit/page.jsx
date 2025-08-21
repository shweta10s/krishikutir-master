'use client';

import Image from 'next/image';

const kit = {
  name: 'Complete Microgreen Kit',
  image: '/product/kit-complete.png',
  price: 1499,
  contents: 'Seeds, Soil, Tray, Guide, Fertilizer, LED Light',
  benefits: 'Grow fresh microgreens at home, all-year round, high yield',
};

export default function MicrogreenKitPage() {
  return (
    <section className="mt-20 py-12 px-4 flex justify-center text-black">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          Our Microgreen Kit
        </h2>

        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col md:flex-row items-center gap-6">
          {/* Kit Image */}
          <div className="w-full md:w-1/2 h-64 relative">
            <Image
              src={kit.image}
              alt={kit.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Kit Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-700">{kit.name}</h3>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Price:</span> Rs. {kit.price}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Contents:</span> {kit.contents}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Benefits:</span> {kit.benefits}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
