'use client';

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import OtherHero from '../components/other-hero';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Map your Google Form field IDs correctly
    const googleFormData = new FormData();
    googleFormData.append("entry.773888232", formData.get("firstName")); // First Name
    googleFormData.append("entry.1502206100", formData.get("lastName"));  // Last Name
    googleFormData.append("entry.434840260", formData.get("email"));      // Email
    googleFormData.append("entry.155669080", formData.get("phone"));      // Phone

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-jW3gis4LnTP_FZwVf4nmpP-mbzTN6LMFHSrruUHVGRMl3g/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // prevents CORS error
        }
      );
      toast.success('Thank you! Your message has been submitted.');
      e.target.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <OtherHero name="Contact Us" />
      <Toaster position="top-right" reverseOrder={false} />

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto bg-white py-10 px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        <a
          href="https://maps.app.goo.gl/dRx7xpRkx6SAsrA68"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4d7c0f] hover:bg-[#3f670d] text-white p-6 rounded-tl-[30px] rounded-br-[30px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#4d7c0f] rounded-full p-3 mb-4">
              <FaMapMarkerAlt size={22} />
            </div>
            <h3 className="font-bold mb-2">Address:</h3>
            <p className="text-sm sm:text-xs md:text-sm">B-26, Orchard Majesty, Airport Road, Asharam Square, Gandhi Nagar, Bhopal-462036</p>
          </div>
        </a>

        <a
          href="tel:+919009166101"
          className="bg-[#4d7c0f] hover:bg-[#3f670d] text-white p-6 rounded-tl-[30px] rounded-br-[30px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#4d7c0f] rounded-full p-3 mb-4">
              <FaPhoneAlt size={22} />
            </div>
            <h3 className="font-bold mb-2">Phone:</h3>
            <p className="text-sm sm:text-xs md:text-sm">+91 9009166101</p>
          </div>
        </a>

        <a
          href="mailto:Krishiikutirrbhopal@gmail.com"
          className="bg-[#4d7c0f] hover:bg-[#3f670d] text-white p-6 rounded-tl-[30px] rounded-br-[30px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#4d7c0f] rounded-full p-3 mb-4">
              <FaEnvelope size={22} />
            </div>
            <h3 className="font-bold mb-2">Email:</h3>
            <p className="break-words text-sm sm:text-xs md:text-sm">Krishiikutirrbhopal@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Contact Form */}
     <div className='bg-white w-full'>
       <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="text-center mb-8">
          <p className="text-[#4d7c0f] italic text-lg">~ Contact Us ~</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Feel free to contact us any time.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First + Last Name */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none text-sm sm:text-xs md:text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none text-sm sm:text-xs md:text-sm"
                required
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none text-sm sm:text-xs md:text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none text-sm sm:text-xs md:text-sm"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-sm sm:text-xs md:text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
     </div>

      {/* Google Map */}
      <div className='bg-white w-full'>
      <section className="max-w-7xl mx-auto h-[300px] sm:h-[250px] md:h-[400px] px-4 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5190010401698!2d77.34579927387578!3d23.296921006037234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c676584cd265f%3A0x1963109d020fe57e!2sOrchard%20Majesty%20%7C%20Luxury%203%20BHK%20Villas%20In%20Bhopal%20%7C%20Premium%20Bungalow%20In%20Bhopal%20%7C%20Swadesh%20Group!5e0!3m2!1sen!2sin!4v1755777280622!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </section>
      </div>
    </>
  );
};

export default Page;
