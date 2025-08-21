/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Whatsapp() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Hide button when footer top enters the viewport
      if (footerTop <= windowHeight) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=9009166101&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?"
      target="_blank"
      className="fixed text-4xl right-[3vw] bottom-[3vw] z-30 max-sm:p-4"
    >
      <div className="grid justify-items-center gap-2">
        <div className="contact_icon">
          <img
            src="/whatsapp/WhatsApp.svg"
            alt="WhatsApp"
            className="my-float h-12 w-12"
          />
        </div>
        <p className="text-[#000000] font-semibold text-sm pl-1">
          Let's Chat?
        </p>
      </div>
    </Link>
  );
}
