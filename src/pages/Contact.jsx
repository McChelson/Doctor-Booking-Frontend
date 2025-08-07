import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>VISIT OUR FACILITY</p>
          <p className=' text-gray-500'>Via Sunyani - Berekum Rd <br /> SDA Hospital, 8MW4+3MQ, Sunyani</p>
          <p className=' text-gray-500'>Tel: (233)20 671 3873 <br /> Email: sdahospitalsunyani@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>SHAPE FUTURE OF HEALTCARE WITH US</p>
          <p className=' text-gray-500'>Be a part of a passionate group transforming healthcare through technology and innovation.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>CONTACT US</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
