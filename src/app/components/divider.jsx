import Link from "next/link";
import React from "react";

const Divider = () => {
  return (
    <section className="relative w-full min-h-[60vh] mt-10 overflow-hidden">
      {/* Background */}
      <img
        src="/background/image-1.jpg"
        alt="Divider Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="text-white space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Eat Fresh, Live Healthy
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Microgreens packed with nutrients, harvested daily and delivered
            directly to your doorstep. Because your health deserves freshness.
          </p>
          <Link href="/training">
            <button className="bg-white text-[#4d7c0f] px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-white transition duration-300">
              Enquire Now
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/background/microgreens.jpg"
            alt="Microgreens"
            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Divider;
