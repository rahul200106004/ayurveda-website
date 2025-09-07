'use client'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import AyurvedicProductMenu from './AyurvedicProductMenu'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const [user, setUser] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Check for token in localStorage to determine if user is logged in
    const token = localStorage.getItem('token')
    if(token){
      setUser({ token }) // Simplified user state; can be expanded
    }
  }, [])

  return (
    <header className='w-full bg-white shadow-sm'>
      <div className='max-w-5xl mx-auto flex items-center justify-between p-4'>
        <div className='text-2xl font-bold text-ayuGreen'>Dr. Ashim Aryan</div>
        <nav className='hidden md:flex gap-6 items-center'>
          <Link href='/'>Home</Link>
          <Link href='/doctor'>Doctor</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/prakriti'>Prakriti Analysis</Link>
          <AyurvedicProductMenu />
          <Link href='/book' className='px-4 py-2 bg-ayuGreen text-white rounded'>Book</Link>
          {!user ? (
            <>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Signup</Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem('token')
                setUser(null)
                window.location.href = '/'
              }}
              className='px-4 py-2 bg-red-600 text-white rounded'
            >
              Logout
            </button>
          )}
          <LanguageSwitcher />
        </nav>
        {/* Mobile menu button */}
        <button
          className='md:hidden text-ayuGreen'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='px-4 py-2 space-y-2'>
            <Link href='/' className='block py-2 text-gray-700 hover:text-ayuGreen'>Home</Link>
            <Link href='/doctor' className='block py-2 text-gray-700 hover:text-ayuGreen'>Doctor</Link>
            <Link href='/blog' className='block py-2 text-gray-700 hover:text-ayuGreen'>Blog</Link>
            <Link href='/prakriti' className='block py-2 text-gray-700 hover:text-ayuGreen'>Prakriti Analysis</Link>
            <div className='py-2'>
              <span className='text-gray-700 font-semibold'>Products</span>
              <div className='ml-4 space-y-1'>
                <Link href='/products/herbal-teas' className='block py-1 text-gray-600 hover:text-ayuGreen'>Herbal Teas</Link>
                <Link href='/products/oils-ghee' className='block py-1 text-gray-600 hover:text-ayuGreen'>Oils & Ghee</Link>
                <Link href='/products/spices-herbs' className='block py-1 text-gray-600 hover:text-ayuGreen'>Spices & Herbs</Link>
                <Link href='/products/supplements' className='block py-1 text-gray-600 hover:text-ayuGreen'>Supplements</Link>
                <Link href='/products/skincare' className='block py-1 text-gray-600 hover:text-ayuGreen'>Skincare</Link>
              </div>
            </div>
            <Link href='/book' className='block py-2 px-4 bg-ayuGreen text-white rounded text-center'>Book</Link>
            {!user ? (
              <>
                <Link href='/login' className='block py-2 text-gray-700 hover:text-ayuGreen'>Login</Link>
                <Link href='/signup' className='block py-2 text-gray-700 hover:text-ayuGreen'>Signup</Link>
              </>
            ) : (
              <button
                onClick={() => {
                  localStorage.removeItem('token')
                  setUser(null)
                  window.location.href = '/'
                  setIsMenuOpen(false)
                }}
                className='block w-full py-2 px-4 bg-red-600 text-white rounded text-center'
              >
                Logout
              </button>
            )}
            <div className='py-2'>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
