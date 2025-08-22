import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      href: '/shop/microgreens',
      title: 'Healthy Microgreens',
      description:
        'High-quality, organic microgreens freshly harvested for your health.',
      image: '/background/microgreens.jpg',
      bgColor: 'bg-yellow-100',
    },
    {
      href: '/shop/kit',
      title: 'Microgreens Kit',
      description:
        'Start growing your own microgreens at home with our easy-to-use kit.',
      image: '/background/microgreens-kit.jpg',
      bgColor: 'bg-green-100',
    },
    {
      href: '/training',
      title: 'Microgreens Training',
      description:
        'Grow microgreens at home, start a profitable business with ease.',
      image: '/background/microgreens-training.jpg',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-10">
      {/* Header */}
      <section className="text-center mb-10 px-4">
        <p className="text-[#4d7c0f] italic mb-2 text-[18px] sm:text-[20px] md:text-[24px] font-[400]">
          ~ Our Services ~
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug max-w-3xl mx-auto">
          All of our products are organic & fresh.
        </h2>
      </section>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} rounded-xl p-6 flex flex-col justify-between shadow-md transition hover:shadow-lg duration-300`}
          >
            {/* Content + Image */}
            <div className="flex flex-col items-center text-center gap-4 mb-6">
              {/* Image */}
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Link href={service.href}>
                <button className="bg-[#4d7c0f] text-white px-5 py-2 rounded-full hover:bg-[#3f670d] transition duration-300 text-sm sm:text-base cursor-pointer">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
