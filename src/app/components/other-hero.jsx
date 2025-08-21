/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import React from 'react';

const OtherHero = ({ name }) => {
  return (
    <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image/bg-mg-hs.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full rotate-180"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-7xl mx-auto text-center px-4">
        <p className="text-white font-semibold text-[24px] sm:text-[34px] md:text-[50px] lg:text-[60px] leading-snug">
          {name}
        </p>
      </div>
    </div>
  );
};

export default OtherHero;
