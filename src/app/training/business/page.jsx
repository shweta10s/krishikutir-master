'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Toaster, toast } from "react-hot-toast";

export default function Training() {
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
        <div className='w-full bg-white'>
            <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 mt-20">
                <Toaster position="top-right" reverseOrder={false} />

                {/* Header Section */}
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#4d7c0f] mb-4">
                        Start a Business
                    </h1>
                    <h2 className="text-3xl font-bold text-center text-[#000] mb-6">
                        Welcome to Krishi Kutir – The Leaf Lounge
                    </h2>
                    <p className="mt-2 text-lg italic">
                        Empowering Health, Enabling Business
                    </p>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <p>At <b>Krishi Kutir</b>, we don’t just grow microgreens — we cultivate a movement for clean, local, and profitable living.
                    </p>

                    <p>Founded by <b>Rachna Alok Sharma</b>, a passionate educator with <b>25+ years</b> of experience, Krishi Kutir is a Bhopal-based microgreens farm dedicated to helping individuals and aspiring entrepreneurs start their own health-focused business from home or farm.
                    </p>

                    <p>With hands-on training, expert guidance, and sustainable growing practices, we’ve empowered over <b>100+ learners</b> and <b>300+ happy clients</b>, including restaurants, dieticians, cafes, and hospitals.
                    </p>

                    <p>Now, we invite YOU to be a part of this green revolution — <b>learn, grow</b>
                    </p>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Start your own  business
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><b>Duration:</b>  10 to 12 Hours</li>
                        <li><b>Mode:</b> Online (Live)</li>
                        <li><b>Fees:</b> ₹12,500</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ What You’ll Learn:
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>What are microgreens?</li>
                        <li>Health benefits & nutritional power.</li>
                        <li>Tray setup and growing steps.</li>
                        <li>Watering, lighting & harvesting</li>
                        <li>Mold prevention tips & blackout technique.</li>
                        <li>How to reuse trays effectively.</li>
                        <li>Shelf life & storage hacks.</li>
                        <li>Selling cheatsheet</li>
                        <li>Social media marketing cheatsheet</li>
                        <li>How to get more sales lessons</li>
                        <li>Q&A + PDF Guidebook for future reference.</li>
                    </ul>
                    <div className="relative w-full h-60 sm:h-64 md:h-52 lg:h-56 xl:h-64">
                        <Image
                            src="/product/Beetroot.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        What support will you get:
                    </h2>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ Market Demand & Trends
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Rising Demand for Healthy Foods</li>
                        <li>Boom in Wellness & Diet Industry</li>
                        <li>Growing B2B Opportunities</li>
                        <li>Home Delivery Trend</li>
                        <li>Low Competition, High Margin</li>
                        <li>Supports Local & Sustainable Farmin</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ Sales Strategy Support – B2B & D2C
                    </h2>
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        B2B Sales Support (Hotels, Cafes, Dieticians, Hospitals, etc.):
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>How to identify and target potential B2B clients in your area</li>
                        <li>Sample pitch templates and client communication scripts</li>
                        <li>Microgreens packaging, pricing, and delivery model for bulk orders</li>
                        <li>How to set up tasting/sample trials to build trust</li>
                        <li>Custom branding ideas for local outlets (if applicable)</li>
                        <li>Long-term client retention tips (subscription models, feedback systems)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        D2C Sales Support (Direct to Individual Customers):
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Setting up weekly/monthly subscription plans</li>
                        <li>Building customer trust through education & recipe sharing</li>
                        <li>WhatsApp + Instagram selling techniques</li>
                        <li>Content strategy for social media: what to post and when</li>
                        <li>Local delivery model guidance</li>
                        <li>Referral and loyalty programs to boost customer base</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ Pricing & Packaging
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Market-Based Pricing Guidance</li>
                        <li>Learn how to price your microgreens for retail, wholesale, and premium B2B clients (restaurants, dieticians, etc.)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        📦 Packaging Material Sources
                    </h2>
                    <p>Get contacts and vendor details for food-grade, compostable, and branding-friendly packaging.
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        🎨 Label & Branding Templates
                    </h2>
                    <p>Ready-to-use designs and guidance to create attractive labels with health info, shelf life, and brand appeal.
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        💰 Costing & Profit Margin Calculation
                    </h2>
                    <p>Understand your production costs, calculate profit per tray, and build a sustainable pricing model.
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        🛒 Product Kit Ideas
                    </h2>
                    <p>Guidance on creating combo packs (e.g., Immunity Kit, Diabetic Kit) for seasonal promotions and better customer engagement.
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        🧾 GST & Basic Compliance Tips
                    </h2>
                    <p>Learn what’s legally needed to start selling (MSME, FSSAI, GST overview for small businesses).
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        📈 Ongoing Support
                    </h2>
                    <p>Post-training consultation for pricing adjustments, packaging upgrades, or new market trends.
                    </p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        💰 Setup Costs & ROI:
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><b>Initial Investment:</b> ₹3,000 – ₹7,000 (seeds, trays, grow lights, media)</li>
                        <li><b>Space Required:</b> Only 1 small room or kitchen balcony</li>
                        <li><b>Harvest Cycle:</b> 7–14 days per batch</li>
                        <li><b>Profit Margin:</b> 40% – 60% per tray (depending on pricing & volume)</li>
                        <li><b>Break-even Point:</b> Within 30–45 days (with regular sales)</li>
                        <li><b>Earning Potential:</b> ₹10,000–₹50,000/month (scalable with demand)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ Certification Support
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Guidance on applying for FSSAI license (Food Business License)</li>
                        <li>Process walk-through for MSME / Udyam registration</li>
                        <li>Farm registration for commercial growers</li>
                        <li>Packaging & labelling compliance as per norms</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        ✅ Documentation Templates
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Invoicing format for B2B clients</li>
                        <li>Order tracking sheet</li>
                        <li>Standard operating procedures (SOPs) for hygiene and handling</li>
                        <li>Sample MOU for B2B tie-ups</li>
                    </ul>

                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        📲 Social Media & Marketing Toolkit Support
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <h4 className='font-bold'>Customizable Marketing Toolkit</h4>
                            <p>Get editable Logo, brochures, business cards & WhatsApp creatives to promote your microgreens business with ease.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Social Media Post Templates</h4>
                            <p>Professionally designed Instagram & Facebook post templates to attract health-conscious customers.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Caption & Hashtag Bank</h4>
                            <p>Ready-to-use content captions and hashtag ideas tailored for the microgreens niche.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Personal Brand Building Tips</h4>
                            <p>Learn how to position yourself as a trusted microgreens expert in your local area.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>1:1 Marketing Guidance Call</h4>
                            <p>We offer a one-time strategy call to help you set up your social media presence effectively.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Reel & Video Script Ideas</h4>
                            <p>Engaging reel content ideas and formats that you can use to showcase your farm and products.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Sales Message Templates</h4>
                            <p>Scripts to pitch your product to restaurants, cafes, and customers with confidence.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Local Promotion Strategy</h4>
                            <p>Tips to grow your business using WhatsApp marketing, local events, and partnerships.</p>
                        </li>
                        <li>
                            <h4 className='font-bold'>Social Media Account setup</h4>
                            <p>One time account setup: Instagram, Facebook, LinkedIn, Twitter, Google My Business.</p>
                        </li>
                    </ol>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        How to Start a Microgreens Business
                    </h2>

                    <p>Have you ever dreamed of starting your own business but felt it was out of reach?</p>

                    <p>I’m here to share an exciting opportunity — one that could earn you <b>₹80,000+ per month</b> (or even more) with minimal investment.</p>

                    <p>Most people have never considered starting a microgreens business — yet it’s a fresh, healthy, and profitable idea that can completely transform your life.</p>

                    <p>When I began my journey, I wasn’t an expert grower. I had doubts. I feared failure. But instead of quitting before I started, I decided to give it my all — and it changed everything.</p>

                    <p>Growing microgreens is simpler than it seems. With just a few affordable supplies and some dedication, you can:</p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Grow fresh, nutrient-rich microgreens in as little as <b>7–14 days</b></li>
                        <li>Sell directly to restaurants, cafes, and health-conscious individuals</li>
                        <li>Build a sustainable, repeat-customer business right <b>from home</b></li>
                        <li>If you’re tired of the 9-to-5 grind and want a meaningful, profitable venture, this could be the opportunity you’ve been searching for.</li>
                    </ul>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        What Are Microgreens?
                    </h2>

                    <p>Microgreens are tiny, nutrient-rich leafy vegetables harvested just 7 to 14 days after germination, when they’re only a few centimeters tall. Grown from the seeds of herbs, vegetables, or grains, they are collected at a much earlier stage than their mature counterparts, offering intense flavor, vibrant color, and concentrated nutrition.</p>

                    <h3 className="text-lg font-semibold text-black mt-10">
                        🌱 You Can Become a Microgreens Farmer with Krishi Kutir
                    </h3>

                    <p>When I began growing microgreens for profit, I wasn’t an expert gardener — I was just starting my farming journey. I thought it would be difficult, but I quickly learned that you don’t need a big “green thumb” to succeed.</p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        What is Microgreens Farming?
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Growing fresh, nutrient-rich microgreens indoors — in a spare room, balcony, or even a small shelf setup</li>
                        <li>Harvesting your crop once or twice per week for consistent sales</li>
                        <li>Selling to restaurants, cafes, health-conscious customers, or even directly in local markets</li>
                        <li>No outdoor garden or large space needed — it’s a perfect business for small areas</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        How I Started
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Began with just a few trays (flats)</li>
                        <li>Learned step-by-step without feeling overwhelmed</li>
                        <li>Slowly scaled up as confidence and demand grew</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Why You Can Do This Too
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>No prior farming experience required</li>
                        <li>Low investment, high return potential</li>
                        <li>A flexible business you can run from home</li>
                        <li>Support, guidance, and training available at Krishi Kutir’s Hands-On Microgreens Workshop</li>
                    </ul>

                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        How to Start Selling Microgreens – Krishi Kutir Way
                    </h2>
                    <p>Selling microgreens is simpler than you think! With the right training and guidance, you can grow a fresh, healthy, and <b>profitable business from your home.</b></p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Through our Krishi Kutir Training Program, you will learn how to:
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Grow high-demand varieties like Radish, Brassica, and Pea microgreens (plus many more over time)</li>
                        <li>Harvest a consistent crop every week ready to sell</li>
                        <li>Supply to restaurant chefs, local grocers, farmers’ markets, and health-conscious individuals</li>
                        <li>Market your produce effectively so word-of-mouth brings more and more customers</li>
                        <li>Avoid common mistakes through our tried-and-tested growing methods</li>
                        <li>Manage your time efficiently so it doesn’t feel like a full-time chore</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Is the Krishi Kutir Microgreens Business Training Right for You?
                    </h2>
                    <p>At Krishi Kutir, we meet people from all walks of life who are curious about starting their own microgreens business.</p>
                    <p>Many are skeptical at first — until Enroll truly understand how simple and rewarding it can be.</p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Here’s what you need to succeed (and what we’ll help you with):
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Willingness to Learn</li>
                        <li>The growing process is easy, but there are a few “must-do” steps we’ll teach you to ensure success.</li>
                        <li>A Little Time Each Day</li>
                        <li>Just a few minutes daily to water and care for your crop is all it takes.</li>
                        <li>Openness to Selling Locally</li>
                        <li>We’ll guide you on finding buyers in your community — from restaurants to health-conscious families.</li>
                        <li>A Small Initial Investment</li>
                        <li>Affordable supplies, seeds, and trays are all you need to get started.</li>
                    </ul>

                    <p>That’s it! <b>No college degree, no huge capital,</b> and no long waiting period to see results. With just a little time, money, and space, you can grow microgreens successfully — just like hundreds of others who started with us.</p>

                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Why Learn with Krishi Kutir?
                    </h2>
                    <ul className="l-6 space-y-2">
                        <li>✅ ISO 9001:2015 Certified</li>
                        <li>✅ 100% Organic & Locally Grown Practices</li>
                        <li>✅ Personalized Guidance & Post-Training Support</li>
                        <li>✅ Beginner-Friendly & Expert-Backed Sessions</li>
                    </ul>
                </section>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-black mt-10">
                        Steps to Join Our Microgreens Workshop
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Register Online – Fill out our quick and easy registration form.</li>
                        <li>Choose Your Batch – Select a date & time that suits you best.</li>
                        <li>Make Payment – Secure your spot by completing the payment.</li>
                        <li>Get Confirmation – Receive your workshop details via email/WhatsApp.</li>
                        <li>Attend & Learn – Join the session and start your microgreens journey!</li>
                    </ol>

                    <h2 className="text-2xl font-semibold text-black mt-10">Launch Your Microgreens Business Today
                    </h2>
                </section>


                {/* Registration Form */}
                {!submitted && (
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-16 border border-gray-200">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-[#4d7c0f] mb-2">
                                Business Enquiry
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
                                    Full Name
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
                                    Phone Number
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
            </div>
        </div >
    );
}
