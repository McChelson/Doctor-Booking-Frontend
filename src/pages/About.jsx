import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to SDA Hospital, Sunyani. Your trusted healthcare partner.
We are committed to making your healthcare experience more convenient and efficient. At SDA Hospital, we understand the challenges patients face in scheduling appointments and managing medical records, and we’re here to provide a seamless solution.</p>
          <p>At SDA Hospital, we are dedicated to innovation and excellence in healthcare technology.
Our mission is to continually evolve our platform by embracing cutting-edge advancements to enhance user experience and ensure top-quality service. From scheduling your first appointment to managing long-term care, SDA HOSPITAL is here to guide and support you at every stage of your healthcare journey.</p>
          <b className='text-gray-800'>Our Long-Term Goal</b>
          <p>Our Long-Term Goal at SDA Hospital is to deliver a smooth, integrated healthcare experience for all. We are committed to closing the gap between patients and healthcare providers ensuring timely, easy access to the care you deserve, exactly when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>REASONS TO  <span className='text-gray-700 font-semibold'>TRUST US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFECTIVENESS:</b>
          <p>Simplified appointment booking designed to fit seamlessly into your busy schedule.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
