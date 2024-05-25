import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import heroImage from '@/public/hero-image.svg'
import mobileMenu from '@/public/mobile-menu.svg'
import Link from 'next/link'
const Home = () => {
  return (
    <div className=' overflow-x-hidden' >
      <section className='nav h-[60vh] '>
        {/* <Image className='' src={heroImage} alt=''/> */}
        <div className="flex flex-col ml-3 gap-5 w-[15rem] h-[95%] justify-end">
          <h2 className=' text-3xl font-bold text-white mt-auto'>Improve your customer&apos;s experience with a QR menu</h2>
          <button className='button w-[8rem] px-4 py-3'>Get Started</button>
        </div>
      </section>
      
      <section>
        <div className="w-[95%] mx-auto my-[3rem] ">
          <h1 className='text-2xl text-black font-semibold text-center mb-7 '>Bring your restaurant <span className='block'>business online</span></h1>
          <p className='text-center'>Tap into digital demand and enable contactless & frictionless ordering experiences in your branding in no time. Prove return on investment with digital ordering by experiencing more direct sales, lower margins & increased retention.</p>
        </div>
      </section>
    </div>
  )
}

export default Home