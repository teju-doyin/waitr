import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'
const notFound = () => {
  return (
    <div className='bg-not-found bg-transparent min-h-dvh bg-cover   ' >

      <Image  src={logo} alt="" />
      <div className="flex flex-col  justify-center items-center text-white">
        <h1 className='text-[15rem] font-extrabold'>404</h1>
        <p className='text-lg'>Our team is working hard to resolve the issue. </p>
      </div>
      <p className=' mt-auto text-white font-medium'>Copyrights Int+  | All Rights Reserved</p>
    </div>
  )
}

export default notFound