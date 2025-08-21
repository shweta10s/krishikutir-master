import React from 'react'
import OtherHero from '../components/other-hero'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import WhyChoose from '../components/why-choose'
import OurTeam from '../components/our-team'

const Page = () => {
  return (
    <>
      <OtherHero name="About Us" />

      <div className="">
        <About />
      </div>

      {/* ✅ Stats Section */}
      <div className="max-w-7xl mx-auto bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 py-12">
        <div className="py-10 shadow-lg rounded-md bg-[#679f1d] text-white flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">300+</h1>
          <p className="text-lg">Satisfied Clients</p>
        </div>

        <div className="py-10 shadow-lg rounded-md bg-[#679f1d] text-white flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">100+</h1>
          <p className="text-lg">Trained Students</p>
        </div>

        <div className="py-10 shadow-lg rounded-md bg-[#679f1d] text-white flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">50+</h1>
          <p className="text-lg">Hotels & Cafes Served</p>
        </div>

        <div className="py-10 shadow-lg rounded-md bg-[#679f1d] text-white flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">71+</h1>
          <p className="text-lg">Varieties of Microgreens</p>
        </div>
      </div>

      <div>
        <WhyChoose />
      </div>

      <div>
        <OurTeam />
      </div>

      <Testimonial />
    </>
  )
}

export default Page
