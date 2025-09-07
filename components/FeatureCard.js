'use client'
import { useState } from 'react'

export default function FeatureCard({ title, children }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className='font-semibold text-ayuGreen text-lg mb-3 transition-colors duration-300 hover:text-green-700'>
        {title}
      </h4>
      <p className='text-gray-600 leading-relaxed'>{children}</p>
      <div className={`mt-4 h-1 bg-ayuGreen rounded-full transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`}></div>
    </div>
  )
}
