import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Providing compassionate, reliable, and technology-driven healthcare services to the Sunyani community and beyond. At SDA Hospital, your well-being is our mission combining medical excellence with patient-centered care..</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>SERVICES</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Doctors</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>(233)20 671 3873</li>
            <li>sdahospitalsunyani@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ SDA Hospital.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
