'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast, Toaster } from 'react-hot-toast';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import { IoCall } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#fef7e6] mt-20 pt-6 px-4 sm:px-6 md:px-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container max-w-7xl mx-auto flex flex-col gap-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 md:gap-6">
          <Link href="/" aria-label="Go to home">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto md:mx-0">
              <Image
                src="/logo/kk-logo.png"
                alt="Logo"
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Footer Links */}
<div className="grid gap-8 sm:gap-10 md:gap-12 
                grid-cols-2 sm:grid-cols-2 md:grid-cols-3">

  {/* Social Links (col 1 desktop) */}
  <div className="order-1 md:order-1 flex flex-col gap-3">
    <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-3 border-b-2 border-[#78b943] w-fit pb-1">
      Social Links
    </h4>
    <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base">
      <Link href="https://www.facebook.com/share/1C9eadexh8/" className="flex items-center gap-3 hover:text-[#000]">
        <FaFacebookF className="w-4 h-4" />
        <span>Krishii Kutirr</span>
      </Link>
      <Link href="https://www.instagram.com/krishikutirbhopal?igsh=cHVwNm10bG5vbzR0" className="flex items-center gap-3 hover:text-[#000]">
        <FaInstagram className="w-4 h-4" />
        <span>krishikutirbhopal</span>
      </Link>
      <Link href="https://www.linkedin.com/in/krishii-kutirr-bhopal-177b62374" className="flex items-center gap-3 hover:text-[#000]">
        <FaLinkedinIn className="w-4 h-4" />
        <span>Krishii Kutirr Bhopal</span>
      </Link>
      <Link href="https://x.com/KrishiiKutirr" className="flex items-center gap-3 hover:text-[#000]">
        <FaSquareXTwitter className="w-4 h-4" />
        <span>@KrishiiKutirr</span>
      </Link>
      <Link href="https://youtube.com/@krishiikutirr" className="flex items-center gap-3 hover:text-[#000]">
        <FaYoutube className="w-4 h-4" />
        <span>KrishiiKutirr</span>
      </Link>
    </div>
  </div>

  {/* Quick Links (col 2 desktop) */}
  <div className="order-2 md:order-2 flex flex-col gap-3">
    <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-3 border-b-2 border-[#78b943] w-fit pb-1">
      Quick Links
    </h4>
    <div className="flex flex-col gap-2 text-[#515151] text-sm md:text-base">
      {['Home', 'About Us', 'Training'].map((link, idx) => (
        <Link
          key={idx}
          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-[#000] transition-colors"
        >
          {link}
        </Link>
      ))}
      {/* Dropdown */}
      <div className="relative group">
        <div className="flex items-center hover:text-black cursor-pointer">
          <div className="flex items-center transition-colors">
            Shop
            <FaChevronDown className="ml-1 text-xs" />
          </div>
        </div>
        <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-md w-44 p-2 hidden group-hover:block z-50">
          <Link href="/shop/kit" className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
            Kit
          </Link>
          <Link href="/shop/microgreens" className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
            Microgreens
          </Link>
        </div>
      </div>
      {['Blog', 'Contact'].map((link, idx) => (
        <Link
          key={idx}
          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-[#000] transition-colors"
        >
          {link}
        </Link>
      ))}
    </div>
  </div>
    

  {/* Official Info (col 3 desktop, bottom in mobile) */}
 <div className="order-3 md:order-3 sm:col-span-1 md:col-span-1 flex flex-col gap-3 w-full">
  <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-3 border-b-2 border-[#78b943] w-fit pb-1">
    Official Info
  </h4>

  <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base w-full">
    {/* Location */}
    <Link
      href="https://maps.app.goo.gl/dRx7xpRkx6SAsrA68"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[#000]"
    >
      <FaLocationDot className="w-4 h-4 flex-shrink-0" />
      <span>B-26, Orchard Majesty, Airport Road, 
Asharam Square, Gandhi Nagar, Bhopal-462036</span>
    </Link>

    {/* Email */}
    <Link
      href="mailto:Krishiikutirrbhopal@gmail.com"
      className="flex items-center gap-3 hover:text-[#000]"
    >
      <IoMdMail className="w-4 h-4 flex-shrink-0" />
      <span className="break-all">Krishiikutirrbhopal@gmail.com</span>
    </Link>

    {/* Phone */}
    <Link
      href="tel:+919009166101"
      className="flex items-center gap-3 hover:text-[#000]"
    >
      <IoCall className="w-4 h-4 flex-shrink-0" />
      <span>+91 9009166101</span>
    </Link>
      <Link href="/microgreens-varieties" className='hidden'>New Page</Link>

  </div>
</div>

</div>



      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 border-t-2 border-[#78b943] py-3 md:py-4">
        <p className="text-sm sm:text-base md:text-lg text-[#78b943] text-center">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="/" className="font-medium hover:underline transition-colors">
            Krishikutir
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
