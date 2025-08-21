import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] mt-[90px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-image/hero-bg.jpg"
        alt="Hero Background"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-10 lg:gap-0">
        {/* Left Side Content */}
        <div className="relative flex flex-col justify-center gap-3 w-full md:w-1/2 text-white py-10 md:py-0 max-md:text-center">
          {/* Decorative small background */}
          <Image
            src="/background/bg-1.png"
            alt="Decorative"
            width={140}
            height={140}
            priority
            className="absolute top-0 left-0 h-[100px] md:h-[140px] opacity-20 pointer-events-none"
          />

          {/* Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-[48px] lg:text-[64px] font-extrabold mt-4">
            Microgreens,
          </h1>

          <h2 className="text-base sm:text-lg md:text-[20px] lg:text-[32px] font-semibold text-[#dfc893] -mt-1">
            Tiny leaves, Big Nutrition
          </h2>

          <h3 className="text-sm sm:text-base md:text-[18px] lg:text-[26px] font-semibold text-[#f5b00e] mt-1">
            Powerful | Pure | Petite
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm sm:text-base md:text-base lg:w-[90%] text-gray-200">
            Experience the power of fresh nutrition with our premium, pesticide-free microgreens.
            Grown naturally, harvested at peak freshness, and delivered to your doorstep –
            bringing you the pure taste and health benefits of the green revolution every day.
          </p>

          {/* CTA */}
          <div className="w-full flex max-md:justify-center mt-4">
            <Link href="/contact" className="w-fit">
              <button className="bg-white text-[#4d7c0f] border-2 border-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold shadow-lg hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 text-sm sm:text-base">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image (desktop) */}
      <div className="hidden md:flex absolute bottom-0 right-0 z-10 justify-end items-end">
  <Image
    src="/background/hero-img.png"
    alt="Hero Image"
    width={900}
    height={900}
    priority
    className="object-contain object-right w-full h-auto md:translate-y-[20px] max-w-[700px]"
  />
</div>




      </div>

      {/* Image for mobile (below content) */}
      {/* Image for mobile (below content) */}
      {/* Mobile Image */}
      <div className="md:hidden relative z-20 flex justify-center mt-6">
        <img
          src="/background/hero-img.png"
          alt="Hero Image"
          className="object-contain rotate-90 
               w-[90%] sm:w-[80%] max-w-[350px] h-auto"
        />
      </div>





    </section>
  );
};

export default Hero;
