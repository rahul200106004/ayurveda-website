'use client'
import { useState, useEffect } from 'react'

export default function DoctorCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex gap-6 items-center transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className='w-36 h-36 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
        <img
          src='/doctor.jpg'
          alt='Dr. Ashim Aryan'
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='flex-1'>
        <h3 className='text-2xl font-bold text-ayuGreen hover:text-green-700 transition-colors duration-300'>
          Dr. Ashim Aryan
        </h3>
        <p className='text-gray-600 mt-2 leading-relaxed'>
          UG BAMS, Delhi University; PG, Delhi University
        </p>
        <p className='mt-1 text-gray-600 leading-relaxed'>
          Specializations: Orthopedic, Dermatology, Medicine, Gynecology
        </p>
        <div className='mt-4'>
          <a
            href='/book'
            className='inline-block px-4 py-2 bg-ayuGreen text-white rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg'
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  )
}
