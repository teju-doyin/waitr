import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import mobileMenu from '@/public/mobile-menu.svg'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='    bg-no-repeat '>
        <div className="w-full relative ">
          <nav className='fixed top-0 py-3.5 px-3 w-full mx-auto gradient flex  justify-between items-center'>
            <Image src={logo} alt=''/>
            <Image className='cursor-pointer' src={mobileMenu} alt=''/>
            <div className=" hidden nav-links  flex gap-6 items-center">
              <p className='text-white'>Call: (+234) 703 957 4358</p>
              <div className=" flex gap-3 items-center">
                <Link className=' cursor-pointer text-orange border px-4 py-1.5 rounded-3xl border-orange ' href="/sign-in">Sign in</Link>
                <Link className=' button py-2 px-4 ' href="/register">Register, it&apos;s FREE</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Navbar