'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AyurvedicProductMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const products = [
    { name: 'Herbal Teas', href: '/products/herbal-teas' },
    { name: 'Oils & Ghee', href: '/products/oils-ghee' },
    { name: 'Spices & Herbs', href: '/products/spices-herbs' },
    { name: 'Supplements', href: '/products/supplements' },
    { name: 'Skincare', href: '/products/skincare' },
  ]

  return (
    <div className='relative'>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className='hover:text-ayuGreen transition-colors'
      >
        Products
      </button>
      {isOpen && (
        <div
          className='absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10'
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className='block px-4 py-2 text-gray-700 hover:bg-ayuGreen hover:text-white transition-colors'
            >
              {product.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
