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

  const serviceCities = [
    'Bhopal',
    'Ujjain',
    'Indore',
    'Dewas',
    'Jabalpur',
  ];

  return (
    <footer className="bg-[#fef7e6] pt-10 px-6 sm:px-8 md:px-12">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-6 border-b border-[#78b943]/40 pb-8">
          <Link href="/" aria-label="Go to home" className="flex-shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/logo/kk-logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Links Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mt-10">
          {/* Social Links */}
          <div>
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] inline-block pb-1">
              Social Links
            </h4>
            <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base">
              <Link href="https://www.facebook.com/share/1C9eadexh8/" className="flex items-center gap-2 hover:text-[#000]">
                <FaFacebookF className="w-4 h-4" /> Krishii Kutirr
              </Link>
              <Link href="https://www.instagram.com/krishikutirbhopal?igsh=cHVwNm10bG5vbzR0" className="flex items-center gap-2 hover:text-[#000]">
                <FaInstagram className="w-4 h-4" /> krishikutirbhopal
              </Link>
              <Link href="https://www.linkedin.com/in/krishii-kutirr-bhopal-177b62374" className="flex items-center gap-2 hover:text-[#000]">
                <FaLinkedinIn className="w-4 h-4" /> Krishii Kutirr Bhopal
              </Link>
              <Link href="https://x.com/KrishiiKutirr" className="flex items-center gap-2 hover:text-[#000]">
                <FaSquareXTwitter className="w-4 h-4" /> @KrishiiKutirr
              </Link>
              <Link href="https://youtube.com/@krishiikutirr" className="flex items-center gap-2 hover:text-[#000]">
                <FaYoutube className="w-4 h-4" /> KrishiiKutirr
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] inline-block pb-1">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base">
              {['Home', 'About Us', 'Training'].map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#000]"
                >
                  {link}
                </Link>
              ))}

              {/* Dropdown */}
              <div className="relative group">
                <div className="flex items-center hover:text-black cursor-pointer">
                  Shop <FaChevronDown className="ml-1 text-xs" />
                </div>
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-md w-44 p-2 hidden group-hover:block z-50">
                  <Link href="/shop/kit" className="block px-3 py-1 hover:bg-gray-100 rounded">
                    Kit
                  </Link>
                  <Link href="/shop/microgreens" className="block px-3 py-1 hover:bg-gray-100 rounded">
                    Microgreens
                  </Link>
                </div>
              </div>

              {['Gallery', 'Blog', 'Contact'].map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#000]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] inline-block pb-1">
              Service Area
            </h4>
            <ul className="space-y-2 text-[#515151] text-sm md:text-base">
              {serviceCities.map((city, idx) => (
                <li key={idx}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] inline-block pb-1">
              Official Info
            </h4>
            <div className="flex flex-col gap-4 text-[#515151] text-sm md:text-base">
              <Link
                href="https://maps.app.goo.gl/dRx7xpRkx6SAsrA68"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#000]"
              >
                <FaLocationDot className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>B-26, Orchard Majesty, Airport Road,
                  Asharam Square, Gandhi Nagar, Bhopal-462036</span>
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#000]"
              >
                <FaLocationDot className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>House no.247 Jasuja city, dhanvantari Nagar,
                  Jabalpur (M.P) 482001</span>
              </Link>

              <Link href="mailto:Krishiikutirrbhopal@gmail.com" className="flex items-center gap-2 hover:text-[#000]">
                <IoMdMail className="w-5 h-5" />
                <span className="break-all">Krishiikutirrbhopal@gmail.com</span>
              </Link>

              <Link href="tel:+919009166101" className="flex items-center gap-2 hover:text-[#000]">
                <IoCall className="w-5 h-5" /> <span>+91 9009166101 (Bhopal)</span>
              </Link>

              <Link href="tel:+919977428323" className="flex items-center gap-2 hover:text-[#000]">
                <IoCall className="w-5 h-5" /> <span>+91 9977428323 (Jabalpur)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-[#78b943] mt-10 py-4 text-center">
          <p className="text-sm md:text-base text-[#78b943]">
            &copy; {new Date().getFullYear()}{' '}
            <Link href="/" className="font-medium hover:underline">
              Krishikutir
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
