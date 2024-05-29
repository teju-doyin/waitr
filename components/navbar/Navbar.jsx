'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import close from '@/public/close.svg';
import mobileMenu from '@/public/mobile-menu.svg';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const handleMenu = () => setIsOpen(!isOpen)
  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768) { // Tailwind's md breakpoint
      setIsOpen(false);
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    }
  }, [isOpen]);

  return (
    <header className="overscroll-none  w-full">
      <div className=" md:px-7 fixed top-0 w-full z-50 py-3.5 px-3 mx-auto gradient md:bg-none flex justify-between items-center">
        <div className="flex  justify-between items-center w-full md:basis-[30%]">
          <div className="relative"
            onMouseEnter={()=> setIsTooltipVisible(true)}
            onMouseLeave={()=> setIsTooltipVisible(false)}>
          
            <Image className={` cursor-pointer${isOpen? ' transition-opacity duration-300 opacity-0':''}`}src={logo} alt="Logo" />
            <div className={`absolute top-1/2 left-full transform -translate-y-1/2 ml-2 transition-opacity duration-100 ${isTooltipVisible ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                <div className="relative bg-black text-white text-sm px-2 py-1 rounded">
                  Scan to Order System for Restaurants & Hotels
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-black"></div>
                </div>
            </div>
         </div>
          <div className="ml-auto md:hidden relative">
            {!isOpen && (
              <Image
                onClick={handleMenu}
                className="cursor-pointer transition-opacity duration-300 opacity-100"
                src={mobileMenu}
                alt="Open menu"
                style={{ display: isOpen ? 'none' : 'block' }}
              />
            )}
            {isOpen && (
              <Image
                onClick={handleMenu}
                width={22}
                className="cursor-pointer transition-opacity duration-300 opacity-100 "
                src={close}
                alt="Close menu"
                style={{ display: isOpen ? 'block' : 'none' }}
              />
            )}
          </div>
        </div>
        <nav className="hidden md:flex gap-4 md:items-center">
          <p className="text-white">Call: (+234) 703 957 4358</p>
          <div className="flex gap-4">
            <Link className="text-orange border border-orange px-4 py-1.5 rounded-3xl sign-in-hover" href="/sign-in">
              Sign in
            </Link>
            <Link className="bg-orange text-white px-4 py-2 rounded-3xl register-hover" href="/register">
              Register, it&apos;s FREE
            </Link>
          </div>
        </nav>
      </div>


      <div
        className={`fixed inset-0 z-40 bg-black  transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full md:'
        }`}
      >
        <div className={` md:hidden space-y-8 transition-transform duration-500 ease-in-out  ${isOpen?'  flex relative top-[20dvh] flex-col  gap-16 justify-center items-center  transform translate-x-0 opacity-100 ':'transform translate-x-full opacity-0  md:flex md:gap-2 md:basis-[70%] md:max-w-[550px] md:items-center'}`}>
        
          <Image src={logo} alt="Logo" />
          <p className='text-white flex-none  '>Call: (+234) 703 957 4358</p>
          <div className="flex-grow flex flex-col gap-5 justify-center  md:flex-row md:gap-3 md:justify-end items-center ">
            <Link className=' cursor-pointer text-center w-[70%] mx-auto  text-orange border px-4 py-1.5 rounded-3xl border-orange md:mx-0 md:w-[30%] sign-in-hover' href="/sign-in">Sign in</Link>
            <Link className=' button py-2 px-4 register-hover' href="/register">Register, it&apos;s FREE</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
