import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    date: 'August 21, 2025',
    title: 'Top Benefits of Microgreens in Daily Life – The Superfood You Need',
    imgSrc: '/background/blog-2.jpg',
    postId: '01',
  },
  {
    date: 'August 21, 2025',
    title: 'Microgreens: Nature’s Tiny Superfood for a Healthier You',
    imgSrc: '/background/blog-1.jpg',
    postId: '02',
  },
  {
    date: 'August 21, 2025',
    title: 'How to Grow Microgreens at Home – A Simple DIY Guide',
    imgSrc: '/background/blog-3.jpg',
    postId: '03',
  },
];

export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto bg-white pt-16 max-md:mt-6 px-4 lg:px-6">
      {/* Heading */}
      <p className="text-[#4d7c0f] italic mb-2 text-base sm:text-lg md:text-xl font-[400] text-center">
        ~ From our blog ~
      </p>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center leading-snug">
        Learn, Grow, and Eat Better with Our Microgreen Blog
      </h2>

      {/* Blog cards */}
      <div className="mt-10">
        {/* Scrollable on small screens, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {blogPosts.map((post) => (
            <div
              key={post.postId}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col min-w-[80%] sm:min-w-[60%] lg:min-w-0 snap-center"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-60">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">{post.date}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2 mb-4 leading-snug text-[#000]">
                    {post.title}
                  </h3>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                  <Link href='/blog' className="hover:text-gray-600">
                    Read more
                  </Link>
                  <span>{post.postId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
