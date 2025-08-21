'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: '100% Organic Product',
      content:
        'Our microgreens are 100% organic, grown without chemicals or pesticides, ensuring pure, safe, and nutrient-rich greens for your health.',
    },
    {
      title: 'Modern Farm',
      content:
        'A modern farm blending sustainable practices with innovation, producing fresh, nutrient-rich microgreens that nourish health and support a greener future.',
    },
    {
      title: 'Always Fresh Product',
      content:
        'Our microgreens are harvested daily, ensuring you receive fresh, flavorful, and nutrient-rich produce straight from our farm to your plate.',
    },
  ];

  return (
    <main className="max-md:py-5 md:pt-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6">

        {/* Left: Accordion Content */}
        <div>
          <p className="text-[#4d7c0f] italic mb-3 text-lg font-medium">
            ~ Why Choose us ~
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            We Believe in Freshness You Can Taste Every Day
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            At Krishi Kutir, freshness isn’t just a promise — it’s our passion. Every microgreen is grown with care, harvested at peak nutrition, and delivered the same day.
          </p>

          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b border-green-200 pb-4 mb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#4d7c0f] text-lg font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
                <h3 className="text-gray-800 font-semibold text-base md:text-lg">
                  {feature.title}
                </h3>
              </div>
              {openIndex === index && (
                <p className="text-sm md:text-base text-gray-600 mt-2 ml-7">
                  {feature.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Fixed Image Section */}
        <div className="self-start">
          <div className="grid grid-rows-2 gap-3 sm:gap-4 w-full max-w-md mx-auto">
            {/* Big Image */}
            <div className="rounded-lg overflow-hidden shadow-md h-[220px] sm:h-[260px]">
              <Image
                src="/background/choose1.jpg"
                alt="Choose 1"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Two Small Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg overflow-hidden shadow-md h-[120px] sm:h-[150px]">
                <Image
                  src="/background/choose2.jpg"
                  alt="Choose 2"
                  width={250}
                  height={180}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-[120px] sm:h-[150px]">
                <Image
                  src="/background/choose3.jpg"
                  alt="Choose 3"
                  width={250}
                  height={180}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
