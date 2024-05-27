'use client';
import React, { useState,useEffect  } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import close from '@/public/close.svg'
import mobileMenu from '@/public/mobile-menu.svg'
import Link from 'next/link'
const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false)
  const handleOpenMenu=()=> setIsOpen(!isOpen)
  const handleCloseMenu=()=> setIsOpen(!isOpen)
  // console.log(isOpen?'true':'false')
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  return (
    
    <header className='overscroll-none relative nothing-here-in-md '>
      <div className={` transition-all duration-300 ease-in-out ${isOpen? '  fixed  bottom-0 h-[100dvh] w-full bg-black z-[1000] opacity-100':' w-full  z-[1000] fixed  top-0 py-3.5 px-3  mx-auto gradient flex  justify-between items-center'}       `}>
        <nav className={`  ${isOpen?'flex flex-col h-[100%] gap-[4rem] ':'w-full md:bgblack flex md:justify-between'}`}>
          <div className={`${isOpen? 'flex flex-col-reverse justify-between basis-[20%] mt-4 ': ' m-0 flex w-full flex-row justify-between md:basis-[15%]'}`}>
            <Image className={`${isOpen? 'mx-auto':'mx-0'} `}src={logo} alt=''/>
            <div className="ml-auto   md:hidden mobile-navs">
              {!isOpen &&<Image onClick={handleOpenMenu } className= ' cursor-pointer' src={mobileMenu} alt=''/>}
              {isOpen && <Image onClick={handleCloseMenu} width={40} className='pr-5 pt-2 cursor-pointer' src={close} alt=''/>}
              
            </div>
          </div>
          <div className={`${isOpen?'flex flex-col basis-[40%] gap-8 justify-center items-center  md: nav-links  ':'hidden md:flex md:gap-2 md:basis-[70%] md:max-w-[550px] md:items-center'}`}>
            <p className='text-white flex-none '>Call: (+234) 703 957 4358</p>
            <div className="flex-grow flex flex-col gap-5 justify-center  md:flex-row md:gap-3 md:justify-end items-center ">
              <Link className=' cursor-pointer text-center w-[70%] mx-auto  text-orange border px-4 py-1.5 rounded-3xl border-orange md:mx-0 md:w-[30%] ' href="/sign-in">Sign in</Link>
              <Link className=' button py-2 px-4 ' href="/register">Register, it&apos;s FREE</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
//fixed  top-0 py-3.5 px-3 w-full mx-auto gradient flex  justify-between items-center

export default Navbar