'use client';

import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true"); // mark as seen
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const googleFormData = new FormData();
    googleFormData.append("entry.773888232", formData.get("firstName"));
    googleFormData.append("entry.1502206100", formData.get("lastName"));
    googleFormData.append("entry.434840260", formData.get("email"));
    googleFormData.append("entry.155669080", formData.get("phone"));

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-jW3gis4LnTP_FZwVf4nmpP-mbzTN6LMFHSrruUHVGRMl3g/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors",
        }
      );
      toast.success('Thank you! Your message has been submitted.');
      setShowPopup(false);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl w-full max-w-lg p-4 sm:p-6 md:p-8 relative shadow-xl max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 sm:top-3 sm:right-4 text-gray-600 text-2xl sm:text-3xl hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            {/* Form Title */}
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>

            {/* Form */}
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="p-2 sm:p-3 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="p-2 sm:p-3 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="p-2 sm:p-3 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="p-2 sm:p-3 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
