'use client';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alok Sharma',
    image:
      '/testimonial/Alok Sharma.jpg',
    quote:
      '“Krishi Kutir microgreens have completely changed the way I eat! Fresh, crisp, and packed with flavor, they add such a healthy boost to my meals. I love knowing they’re pesticide-free and grown locally. Their delivery is always on time and the quality is unmatched. Highly recommended!”',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Amit Tiwari',
    image:
            '/testimonial/Amit Tiwari.jpg',
    quote:
      '“I started adding Krishi Kutir microgreens to my breakfast and salads, and I feel more energetic throughout the day. The freshness is incredible, and they last long in the fridge. Their customer service is also fantastic—they truly care about what they deliver. A must-try for every health lover!”',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Krati Sachdev',
    image:
            '/testimonial/Krati Sachdev.jpg',
    quote:
      '“The sunflower and broccoli microgreens from Krishi Kutir are my absolute favorites! They taste amazing and make my dishes look so vibrant. Knowing they are grown organically without chemicals gives me peace of mind. Perfect for anyone wanting to eat clean and live healthy. 💚”',
    bgColor: 'bg-orange-100',
  },
  // extra cards for testing
  {
    name: 'Meenu Tahiliyani',
    image:
            '/testimonial/Meenu Tahiliyani.jpg',
    quote:
      '“I never thought eating healthy could be this simple. These microgreens are ready to eat, super fresh, and instantly make my meals healthier. No prep, no hassle—just pure nutrition in every bite.”',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Munish Verma',
    image:
            '/testimonial/Munish Verma.jpg',
    quote:
      '“Since adding these microgreens to my diet, I’ve noticed a big difference in my energy levels. They’re packed with nutrients, and I love that they’re grown naturally and delivered fresh. It feels amazing to have such a healthy and tasty option right at home!”',
    bgColor: 'bg-green-100',
  },
];

export default function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto bg-white pt-10 text-center px-4">
      {/* Header */}
      <p className="text-[#4d7c0f] italic mb-2 text-[20px] sm:text-[24px] font-medium">
        ~ Testimonials ~
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Client Review
      </h2>
      <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
        Discover what our happy customers say! Real stories, real experiences, and real results from enjoying our fresh, premium-quality microgreens every day.
      </p>

      {/* Cards */}
      <div className="mt-16 flex gap-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center min-w-[300px] max-w-[300px] h-[420px] snap-start pt-14 sm:pt-16"
          >
            {/* Profile Image */}
            <div className="z-10">
              <img
                src={t.image}
                alt={t.name}
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            {/* Card */}
            <div
              className={`${t.bgColor} mt-[-40px] pt-12 pb-6 px-6 rounded-md shadow-md w-full flex flex-col justify-between h-full`}
            >
              <p className="text-sm text-gray-800 italic overflow-hidden text-ellipsis">
                {t.quote}
              </p>
              <h4 className="font-semibold text-lg text-black mt-4">{t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
