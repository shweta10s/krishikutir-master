'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

const images = [
  '/product/Basil-green.png',
  '/product/Beetroot.png',
  '/product/Mustard-green.png',
  '/product/Pak-choi-green.png',
  '/product/Mustard-yellow.png',
  '/product/Cabbage.png',
  '/product/Red-amaranth.png',
  '/product/Radish-white.png', // last one = "See More"
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % (images.length - 1)); // last one excluded
  };

  const goToPrev = () => {
    setPhotoIndex((photoIndex - 1 + (images.length - 1)) % (images.length - 1));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="gallery py-12 mt-16 max-w-7xl mx-auto px-4">
        <p className="text-[#4d7c0f] italic mb-2 text-base sm:text-lg md:text-xl font-[400] text-center">
          ~ From our Events ~
        </p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center leading-snug">
          Our Moments in Pictures
        </h2>

        {/* Rows */}
        <div className="grid grid-cols-4 gap-2">
          {images.map((ele, i) => {
            // Last one becomes "See More"
            if (i === images.length - 1) {
              return (
                <Link
                  key={i}
                  href="/gallery"
                  className="relative h-48 w-full cursor-pointer group"
                >
                  <Image
                    fill
                    className="object-cover object-center opacity-50 group-hover:opacity-70 transition"
                    src={ele}
                    alt="See more"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <span className="text-black text-lg md:text-xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
                      See More →
                    </span>
                  </div>
                </Link>
              );
            }

            // Normal clickable images
            return (
              <div
                key={i}
                className="relative h-48 w-full cursor-pointer"
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
              >
                <Image
                  fill
                  className="object-cover object-center"
                  src={ele}
                  alt={`Gallery image ${i + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center z-50">
          <div className="relative">
            {/* Fixed size for all images */}
            <img
              className="w-[800px] h-[500px] object-cover rounded shadow-lg"
              src={images[photoIndex]}
              alt={`Large view ${photoIndex + 1}`}
            />

            {/* Prev */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl h-10 w-10 bg-white rounded-full flex justify-center items-center shadow"
              onClick={goToPrev}
            >
              <IoIosArrowBack className="text-black" />
            </button>

            {/* Next */}
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl h-10 w-10 bg-white rounded-full flex justify-center items-center shadow"
              onClick={goToNext}
            >
              <IoIosArrowForward className="text-black" />
            </button>

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-3xl px-3 py-1 rounded-full text-white"
              onClick={closeModal}
            >
              <RiCloseLine />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
