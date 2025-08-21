'use client';

import './globals.css';
// import { useState, useEffect } from 'react';
// import MaintenancePage from './maintenance/page';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Whatsapp from '@/app/components/whatsapp';
// import { Providers } from './redux/provider/provider';

import { Lora } from 'next/font/google'; 

// Load the Lora font
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  // const [showMaintenance, setShowMaintenance] = useState(false);

  // useEffect(() => {
  //   // Set this to true if you want to show the maintenance page
  //   setShowMaintenance(false); // Change to true to activate
  // }, []);

  // if (showMaintenance) {
  //   return (
  //     <html lang="en">
  //       <body className="bg-black">
  //         <MaintenancePage />
  //       </body>
  //     </html>
  //   );
  // }
 
  return (
    <html lang="en">
      <body className={lora.className}>
        {/* <Providers> */}
        <Navbar />
        <Whatsapp />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
