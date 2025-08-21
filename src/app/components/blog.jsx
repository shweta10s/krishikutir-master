import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Our 6 of the Best Organic Chocolates to Buy.',
    imgSrc: '/background/blog-1.jpg',
    postId: '04',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Best guide to shopping for organic ingredients.',
    imgSrc: '/background/blog-2.jpg',
    postId: '02',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Zechsal Magnesium flakes especially made.',
    imgSrc: '/background/blog-3.jpg',
    postId: '02',
  },
];

export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto bg-white mt-16 max-md:mt-6 px-4 lg:px-6">
      {/* Heading */}
      <p className="text-[#4d7c0f] italic mb-2 text-base sm:text-lg md:text-xl font-[400] text-center">
        ~ From our blog ~
      </p>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center leading-snug">
        Learn, Grow, and Eat Better with Our Microgreen Blog
      </h2>

      {/* Scrollable cards */}
      <div className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] snap-center"
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
                <p className="text-xs sm:text-sm text-gray-600">
                  {post.date} &nbsp; || &nbsp; {post.author}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2 mb-4 leading-snug text-[#000]">
                  {post.title}
                </h3>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                <Link href="/blog" className="hover:text-gray-600">
                  Read more
                </Link>
                <span>{post.postId}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
