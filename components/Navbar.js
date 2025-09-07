'use client'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
export default function Navbar(){
  return (
    <header className='w-full bg-white shadow-sm'>
      <div className='max-w-5xl mx-auto flex items-center justify-between p-4'>
        <div className='text-2xl font-bold text-ayuGreen'>Dr. Ashim Aryan</div>
        <nav className='hidden md:flex gap-6 items-center'>
          <Link href='/'>Home</Link>
          <Link href='/doctor'>Doctor</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/prakriti'>Prakriti Analysis</Link>
          <Link href='/book' className='px-4 py-2 bg-ayuGreen text-white rounded'>Book</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
