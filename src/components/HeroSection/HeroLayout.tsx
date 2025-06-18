"use client";
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Image from 'next/image';

const HeroLayout = () => {
  return (
    <div className=' relative overflow-hidden h-fit  w-full items-center flex flex-col gap-5 bg-[#101010] pt-5 sm:pb-10 pb-20  '
    >
      <Navbar/>
      <HeroSection/>
      <div className=" absolute w-[24em] h-[20em] bg-[#BF91F9]/40 blur-[90px] rounded-full -right-10 top-0 z-10 "></div>
       <div className="absolute w-[20em] h-[20em] overflow-hidden rounded-full translate-x-1 bottom-0 z-10 animate-spinSlow">
        <Image
          src="/c.png"
          alt="Hero Background"
          width={1000}
          height={1000}
          className="w-fit object-cover rounded-full"
          priority
        />
      </div>
    </div>
  )
}

export default HeroLayout
