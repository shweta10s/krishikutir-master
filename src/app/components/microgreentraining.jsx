'use client';

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const MicrogreenTraining = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2mAn2PsZv3ov35gk6c_nTaKCPaLJVT_kW_OGdlcdtpgn7oQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      toast.success("✅ Thank you! Your response has been recorded.");
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#4d7c0f] mb-10">
          How to Start a Microgreens Business
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Have you ever dreamed of starting your own business but felt it was out of reach?
            A microgreens business could be the opportunity you’ve been searching for — one that can earn you
            ₹80,000+ per month (or even more) with minimal investment. With just a few affordable supplies and dedication,
            you can grow fresh, nutrient-rich microgreens in as little as 7–14 days and sell them directly to
            restaurants, cafes, and health-conscious individuals. It’s a fresh, healthy, and profitable idea that
            can completely transform your life.
          </p>

          <p>
            When I began my journey, I wasn’t an expert grower. I had doubts. I feared failure.
            But instead of quitting before I started, I decided to give it my all — and it changed everything.
            Growing microgreens is simpler than it seems. This is a meaningful, profitable venture you can run from home.
          </p>

          {/* Section: What Are Microgreens */}
          <h3 className="text-2xl font-semibold text-black mt-10">What Are Microgreens?</h3>
          <p>
            Microgreens are tiny, nutrient-rich leafy vegetables harvested just 7 to 14 days after germination,
            when they’re only a few centimeters tall. Grown from the seeds of herbs, vegetables, or grains,
            they are collected at a much earlier stage than their mature counterparts, offering intense flavor,
            vibrant color, and concentrated nutrition.
          </p>

          {/* Section: You Can Become a Farmer */}
          <h3 className="text-lg font-semibold text-black mt-10">
            🌱 You Can Become a Microgreens Farmer with Krishi Kutir
          </h3>
          <p>
            When I began growing microgreens for profit, I wasn’t an expert gardener — I was just starting my farming journey.
            I thought it would be difficult, but I quickly learned that you don’t need a big “green thumb” to succeed.
          </p>

          {/* Section: What is Microgreens Farming */}
          <h3 className="text-2xl font-semibold text-black mt-10">What is Microgreens Farming?</h3>
          <p>
            Microgreens farming means growing fresh, nutrient-rich greens indoors — in a spare room, balcony, or even a small shelf setup.
            You can harvest your crop once or twice per week for consistent sales.
            The best part? No outdoor garden or large space is needed — it’s a perfect business for small areas.
          </p>

          {/* Section: How I Started */}
          <h3 className="text-2xl font-semibold text-black mt-10">How I Started</h3>
          <p>
            I began with just a few trays, learned step-by-step without feeling overwhelmed,
            and slowly scaled up as confidence and demand grew.
          </p>

          {/* Section: Why YOU Can Do This Too */}
          <h3 className="text-2xl font-semibold text-black mt-10">Why YOU Can Do This Too</h3>
          <p>
            No prior farming experience is required. The business needs only low investment, but it has high return potential.
            It’s flexible, home-based, and comes with full guidance and training through Krishi Kutir’s Hands-On Microgreens Workshop.
          </p>

          {/* Section: How to Start Selling */}
          <h3 className="text-2xl font-semibold text-black mt-10">How to Start Selling Microgreens – The Krishi Kutir Way</h3>
          <p>
            Selling microgreens is simpler than you think! With the right training and guidance,
            you can grow a fresh, healthy, and profitable business from your home.
            Through our Krishi Kutir Training Program, you will learn how to grow high-demand varieties like Radish, Brassica, and Pea,
            harvest a consistent crop every week, supply to restaurants, grocers, and health-conscious individuals,
            market your produce effectively, avoid common mistakes, and manage your time efficiently.
          </p>

          {/* Section: Is the Training Right for You */}
          <h3 className="text-2xl font-semibold text-black mt-10">Is the Training Right for You?</h3>
          <p>
            At Krishi Kutir, we meet people from all walks of life who are curious about starting their own microgreens business.
            Many are skeptical at first — until they truly understand how simple and rewarding it can be.
          </p>
          <p>
            Here’s what you need to succeed (and what we’ll help you with): willingness to learn,
            a little time each day, openness to selling locally, and a small initial investment in trays, seeds, and supplies.
            That’s it! No college degree, no huge capital, and no long waiting period to see results.
          </p>

          {/* Section: Why Learn with Krishi Kutir */}
          <h3 className="text-2xl font-semibold text-black mt-10">Why Learn with Krishi Kutir?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>✅ ISO 9001:2015 Certified</li>
            <li>✅ 100% Organic & Locally Grown Practices</li>
            <li>✅ Personalized Guidance & Post-Training Support</li>
            <li>✅ Beginner-Friendly & Expert-Backed Sessions</li>
          </ul>

          {/* Section: Steps */}
          <h3 className="text-2xl font-semibold text-black mt-10">Steps to Join Our Microgreens Workshop</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><b>Register Online</b> – Fill out our quick and easy registration form.</li>
            <li><b>Choose Your Batch</b> – Select a date & time that suits you best.</li>
            <li><b>Make Payment</b> – Secure your spot by completing the payment.</li>
            <li><b>Get Confirmation</b> – Receive your workshop details via email/WhatsApp.</li>
            <li><b>Attend & Learn</b> – Join the session and start your microgreens journey!</li>
          </ol>

          {/* Final CTA */}
          <p className="mt-10 font-semibold text-[#4d7c0f]">
            🌱 Start small. Grow fast. Live free. Join Krishi Kutir’s Microgreens Workshop today and begin your journey towards
            becoming a successful microgreens entrepreneur.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      {!submitted && (
     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-16 border border-gray-200">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-[#4d7c0f] mb-2">
      Training Enquiry
    </h2>
    <p className="text-gray-500">
      Fill in your details below to register for our training sessions.
    </p>
  </div>

  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
  >
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        name="entry.440504865"
        placeholder="Enter your full name"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Address
      </label>
      <input
        type="email"
        name="entry.894157557"
        placeholder="Enter your email address"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone
      </label>
      <input
        type="tel"
        name="entry.824814810"
        placeholder="Enter your phone number"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
      />
    </div>

    {/* Training Selection */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Training
      </label>
      <select
        name="entry.676540564"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
      >
        <option value="">Choose an option</option>
        <option value="Beginners’ Training">Beginners’ Training</option>
        <option value="Intermediate Training">Intermediate Training</option>
        <option value="Advanced Training">Start a Business</option>
      </select>
    </div>

    {/* Submit */}
    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full bg-[#4d7c0f] hover:bg-[#3f670d] text-white py-3 rounded-lg font-semibold text-lg transition duration-200"
      >
        Submit
      </button>
    </div>
  </form>
</div>





      )}

      {/* Success Message */}
      {submitted && (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-gray-100 text-center mt-16">
          <h3 className="text-2xl font-semibold text-[#4d7c0f] mb-4">✅ Registration Successful!</h3>
          <p className="text-gray-700">Thank you for registering. We will contact you with further details soon.</p>
        </div>
      )}
    </section>
  );
};

export default MicrogreenTraining;
