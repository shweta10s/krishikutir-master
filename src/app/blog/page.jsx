'use client';

import React, { useState } from 'react';
import OtherHero from '../components/other-hero';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    date: 'August 21, 2025',
    title: 'Top Benefits of Microgreens in Daily Life – The Superfood You Need',
    imgSrc: '/background/blog-2.jpg',
    postId: '01',
    slug: '/blog/01',
  },
  {
    date: 'August 21, 2025',
    title: 'Microgreens: Nature’s Tiny Superfood for a Healthier You',
    imgSrc: '/background/blog-1.jpg',
    postId: '02',
    slug: '/blog/02',
  },
  {
    date: 'August 21, 2025',
    title: 'How to Grow Microgreens at Home – A Simple DIY Guide',
    imgSrc: '/background/blog-3.jpg',
    postId: '03',
    slug: '/blog/03',
  },
];

const Page = () => {
  const [visibleCount, setVisibleCount] = useState(3);

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

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
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
                  <p className="text-sm text-gray-600">{post.date}</p>
                  <h3 className="text-base sm:text-lg font-semibold mt-2 mb-3 leading-snug text-[#000]">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                  <Link href={`/blog/${post.postId}`}>Read more</Link>
                  <span>{post.postId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {blogPosts.length > 3 && (
        <div className="text-center py-8 px-4 bg-white">
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
      )}
    </>
  );
};

export default Page;
