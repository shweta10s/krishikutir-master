'use client';

import React, { useState } from 'react';
import OtherHero from '../components/other-hero';
import Image from 'next/image';

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
    postId: '03',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Healthy oils you should always cook with.',
    imgSrc: '/background/blog-1.jpg',
    postId: '05',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Benefits of going fully organic.',
    imgSrc: '/background/blog-2.jpg',
    postId: '06',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Organic gardening for beginners.',
    imgSrc: '/background/blog-3.jpg',
    postId: '07',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'The truth about processed food.',
    imgSrc: '/background/blog-1.jpg',
    postId: '08',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Organic skin care: What you need to know.',
    imgSrc: '/background/blog-2.jpg',
    postId: '09',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'How to build a chemical-free lifestyle.',
    imgSrc: '/background/blog-3.jpg',
    postId: '10',
  },
];

const Page = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, blogPosts.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  const isAllVisible = visibleCount >= blogPosts.length;

  return (
    <>
      <OtherHero name="Blog" />

      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, visibleCount).map((post, idx) => (
            <div key={idx} className="rounded-md overflow-hidden bg-white shadow-md flex flex-col">
              <div className="relative w-full h-60 sm:h-64 md:h-52 lg:h-56 xl:h-64">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {post.date} &nbsp; || &nbsp; {post.author}
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold mt-2 mb-3 leading-snug text-[#000]">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                  <span>Read more</span>
                  <span>{post.postId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-8 px-4">
        {!isAllVisible ? (
          <button
            onClick={handleShowMore}
            className="bg-[#4d7c0f] text-white px-6 py-2 rounded hover:bg-[#3f670d] transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-[#3f670d] text-white px-6 py-2 rounded hover:bg-[#4d7c0f] transition"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default Page;
