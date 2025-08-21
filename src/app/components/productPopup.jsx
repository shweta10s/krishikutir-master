'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ProductPopup = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    product: product || '',
    weight: '100g',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

   const googleFormData = new FormData()
    // Map your fields correctly to Google Form entry IDs
    googleFormData.append("entry.754697071", formData.fullName) // Full Name
    googleFormData.append("entry.2029787450", formData.email)    // Email
    googleFormData.append("entry.830095174", formData.phone)    // Phone
    googleFormData.append("entry.207973647", formData.product)  // Product (replace ID)
    googleFormData.append("entry.1800267886", formData.weight)   // Weight (replace ID)

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLK51BRgUBnvZ4xjlFGG3B7MM0pfnXHNucaNJUkWW_Mx5tAQ/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // Prevents CORS issues
        }
      )
      toast.success('✅ Thank you! Your order has been submitted.')
      onClose()
    } catch (error) {
      toast.error('❌ Something went wrong. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50">
      <Toaster position="top-right" />
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Order Product
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            required
          />

          {/* Product (auto-filled) */}
          <input
            type="text"
            name="product"
            value={formData.product}
            readOnly
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-100 text-gray-600 cursor-not-allowed"
          />

          {/* Weight (only 100g) */}
          <select
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
          >
            <option value="100g">100g</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductPopup
