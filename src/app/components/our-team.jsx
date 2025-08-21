'use client';

import Image from 'next/image';

export default function OurTeam() {
  const team = [
    {
      image: '/images/Rachna.jpeg',
      name: 'Rachna Alok Sharma',
      title: 'Founder',
      description: `For 25 years, Rachna Alok Sharma inspired minds as a dedicated teacher. But outside the classroom, she saw a troubling trend—fast food on every corner, yet real nutrition was missing from daily lives. Determined to find a natural, simple answer to modern health challenges, she discovered microgreens—tiny plants with extraordinary nutritional power. One taste, one study, and she was hooked. These small greens carried vitamins, minerals, and antioxidants far beyond their size. With passion and purpose, Rachna began growing microgreens in a single room at home. What started as an experiment soon bloomed into a mission.`,
    },
    {
      image: '/images/Sonal.jpeg',
      name: 'Sonal Rajan',
      title: 'Production Head',
      description:
        'At Krishi Kutir, we grow fresh, premium-quality microgreens in Bhopal using sustainable and organic practices. Our focus is freshness, health, and flavor.',
    },
  ];

  return (
    <section className="py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#4d7c0f] italic mb-2 text-xl font-medium">~ Our Team ~</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Meet the founders driving <br /> our mission and shaping the future
        </h2>
      </div>

      {/* Team Cards */}
      <div className="space-y-12">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section - 30% */}
            <div className="md:w-1/3 w-full flex justify-center items-center p-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Section - 70% */}
            <div className="p-6 md:p-10 flex flex-col justify-center md:w-2/3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#4d7c0f] text-base mt-1">{member.title}</p>
              <hr className="my-3" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
