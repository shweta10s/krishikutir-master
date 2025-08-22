'use client';

import React, { useState } from 'react';
import OtherHero from '../components/other-hero';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import MicrogreenTraining from '../components/microgreentraining';

const courses = [
  {
    title: "Beginners’ Training",
    duration: "2 to 4 Hours",
    mode: "Online (Live)",
    fees: "₹ 999/- (Including growing kit)",
    learn: [
      "What are microgreens?",
      "Health benefits & nutritional power.",
      "Tray setup and growing steps.",
      "Watering, lighting & harvesting basics.",
      "Live demo of 1 variety.",
    ],
  },
  {
    title: "INTERMEDIATE Training",
    duration: "4 to 6 Hours",
    mode: "Online (Live)",
    fees: "₹ 1999",
    learn: [
      "How to grow 3–4 varieties.",
      "Mold prevention tips & blackout technique.",
      "How to reuse trays effectively.",
      "Shelf life & storage hacks.",
      "Q&A + PDF Guidebook for future reference.",
    ],
  },
  {
    title: "Start a business",
    duration: "10 to 12 Hours",
    mode: "Online (Live)",
    fees: null,
    learn: [
      "Beginner + Intermediate lessons",
      "Microgreens mini recipe book",
      "Selling cheatsheet",
      "Social media marketing cheatsheet",
      "How to get more sales lessons",
    ],
  },
];

const Page = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState('');

  // 🔹 Open popup
  const handleCourseEnquireClick = (courseTitle) => {
    setSelectedTraining(courseTitle);
    setShowForm(true);
  };

  return (
    <>
      <OtherHero name="Training" />

      {/* ✅ keep only one toaster (move to _app.js or layout.js if possible) */}
      {/* <Toaster position="top-center" reverseOrder={false} /> */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto bg-white min-h-[50vh] text-[#000] pt-10 px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            Launch Your Microgreens Business Today!
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Start a healthy, exciting, and profitable journey with microgreens.
          </p>
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 text-lg text-white bg-[#4d7c0f] rounded-lg hover:bg-[#3f670d] transition w-fit mx-auto md:mx-0"
          >
            Enquire Now
          </Link>
        </div>

        <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto rounded-xl overflow-hidden">
          <img
            src="/background/microgreens.jpg"
            alt="Microgreens Training"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Courses Section */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
                  {course.title}
                </h2>

                <div className="text-gray-700 space-y-1 mb-4 text-sm sm:text-base">
                  <p><b>Duration:</b> {course.duration}</p>
                  <p><b>Mode:</b> {course.mode}</p>
                  {course.fees && <p><b>Fees:</b> {course.fees}</p>}
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-base sm:text-lg text-green-800 mb-3">
                    ✅ What You’ll Learn:
                  </h3>
                  <ul className="space-y-2">
                    {course.learn.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 text-sm leading-relaxed"
                      >
                        <span className="text-[#000] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🔹 Button: popup for 1st & 2nd, redirect for 3rd */}
                {course.title === "Start a business" ? (
                  <Link
                    href="/training/business"
                    className="mt-auto w-full bg-[#4d7c0f] hover:bg-[#3f670d] text-white py-2 px-4 rounded-lg font-semibold transition duration-300 text-center"
                  >
                    Go to Business Page
                  </Link>
                ) : (
                  <button
                    onClick={() => handleCourseEnquireClick(course.title)}
                    className="mt-auto w-full bg-[#4d7c0f] hover:bg-[#3f670d] text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
                  >
                    Know More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Register for Training
            </h2>

            {/* Popup Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const formDataToSend = new FormData(e.target);

                  await fetch(
                    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2mAn2PsZv3ov35gk6c_nTaKCPaLJVT_kW_OGdlcdtpgn7oQ/formResponse",
                    {
                      method: "POST",
                      body: formDataToSend,
                      mode: "no-cors",
                    }
                  );

                  toast.success("✅ Thank you! Your response has been recorded.");
                  setShowForm(false);
                } catch (err) {
                  toast.error("❌ Something went wrong. Please try again.");
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium">Selected Training</label>
                <input
                  type="text"
                  name="entry.676540564"
                  value={selectedTraining}
                  
                  readOnly
                  className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="entry.440504865"
                  placeholder="Enter your fullname"
                  required
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="entry.894157557"
                  placeholder="Enter your email address"
                  required
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="entry.824814810"
                  placeholder="Enter your phone number"
                  required
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4d7c0f] text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <MicrogreenTraining />
    </>
  );
};

export default Page;
