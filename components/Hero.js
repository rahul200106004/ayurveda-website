'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className='bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 grid md:grid-cols-2 gap-6 items-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <h1 className='text-4xl md:text-5xl font-extrabold text-ayuGreen leading-tight'>
          Ayurvedic Healing for Modern Life
        </h1>
        <p className='mt-4 text-gray-600 text-lg'>
          Book trusted Ayurvedic consultations with <strong className='text-ayuGreen'>Dr. Ashim Aryan</strong>.
        </p>
        <div className='mt-6'>
          <a
            href='/book'
            className='inline-block px-6 py-3 bg-ayuGreen text-white rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg'
          >
            Book Consultation
          </a>
        </div>
      </div>
      <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <img
          src='/doctor.jpg'
          alt='Dr Ashim'
          className='w-64 h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
        />
      </div>
    </section>
  )
}
