'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#fef7e6] shadow-md z-50 h-[90px] flex items-center">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/">

          <img src="/logo/kk-logo.png" alt="Logo" className="h-14 cursor-pointer" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button className='text-[#000]' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li>
            <Link
              href="/"
              className={`transition-colors duration-200 ${isActive('/') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutUs"
              className={`transition-colors duration-200 ${isActive('/aboutUs') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/training"
              className={`transition-colors duration-200 ${isActive('/training') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              Training
            </Link>
          </li>

          {/* Shop Dropdown */}
          <li className="relative group cursor-pointer">
            <div
              className={`flex items-center gap-1 transition-colors duration-200 ${pathname.startsWith('/shop') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              Shop
              <IoIosArrowDown size={16} />
            </div>
            <ul className="absolute top-8 left-0 bg-[#fef7e6] text-[#333] shadow-lg rounded-md hidden group-hover:block min-w-[180px] -mt-4 z-60">
              <li className="px-4 py-2 hover:bg-[#e2f0c9]">
                <Link href="/shop/kit">Kit</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#e2f0c9]">
                <Link href="/shop/microgreens/">Microgreens</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/gallery"
              className={`transition-colors duration-200 ${isActive('/gallery') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={`transition-colors duration-200 ${isActive('/blog') ? 'text-[#4d7c0f]' : 'text-[#333]'
                } hover:text-[#4d7c0f]`}
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Contact Us Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#4d7c0f] hover:bg-[#3f670d] text-white px-5 py-2 rounded transition cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#fef7e6] shadow-md px-4 pb-6 z-50 md:hidden">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/') ? 'text-[#4d7c0f]' : 'text-[#333]'} hover:text-[#4d7c0f]`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/aboutUs') ? 'text-[#4d7c0f]' : 'text-[#333]'} hover:text-[#4d7c0f]`}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/training" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/training') ? 'text-[#4d7c0f]' : 'text-[#333]'} hover:text-[#4d7c0f]`}>
                Training
              </Link>
            </li>

            {/* Shop Dropdown in Mobile */}
            <li>
              <div
                className="flex items-center justify-between cursor-pointer text-[#333]"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                <span className="hover:text-[#4d7c0f]">Shop</span>
                <IoIosArrowDown
                  className={`transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>
              {isShopDropdownOpen && (
                <ul className="ml-4 mt-2">
                  <li className="py-1">
                    <Link href="/shop/kit" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4d7c0f]">Kit</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/shop/microgreens/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4d7c0f]">Microgreens</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/gallery') ? 'text-[#4d7c0f]' : 'text-[#333]'} hover:text-[#4d7c0f]`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/blog') ? 'text-[#4d7c0f]' : 'text-[#333]'} hover:text-[#4d7c0f]`}>
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <button className="bg-[#4d7c0f] text-white px-5 py-2 rounded hover:bg-[#3f670d] transition w-full mt-2">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
