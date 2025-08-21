'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = {
  "Our Events": [
    '/product/Basil-green.png',
  '/product/Beetroot.png',
  '/product/Mustard-green.png',
  ],
  "Our Farms": [
    '/product/Pak-choi-green.png',
  '/product/Mustard-yellow.png',
  '/product/Cabbage.png',
  ],
  "Our Exhibition": [
    '/product/Red-amaranth.png',
  '/product/Radish-white.png',
  '/product/Turnip-green.png',
  ],
};

export default function Gallery() {
  const [active, setActive] = useState("Our Events");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? categories[active].length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === categories[active].length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Gallery</h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all 
              ${active === cat 
                ? "bg-[#4d7c0f] text-white shadow-lg" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories[active].map((img, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src={img}
              alt={`${active} image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl h-3/4 flex items-center">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 text-white text-4xl font-bold z-50"
            >
              &#10094;
            </button>

            {/* Current Image */}
            <div className="relative w-full h-full mx-10">
              <Image
                src={categories[active][currentIndex]}
                alt="Expanded"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 text-white text-4xl font-bold z-50"
            >
              &#10095;
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-5xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
