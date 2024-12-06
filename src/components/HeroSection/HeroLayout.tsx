"use client";
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

const HeroLayout = () => {
  return (
    <div className=' overflow-hidden h-fit sm:h-[38em] w-full items-center flex flex-col gap-16 bg-[#000] pt-10 sm:pb-10 pb-20  '
    style={{
      backgroundImage: "url('/hero-bg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "cover",
    }}
    >
      <Navbar/>
      <HeroSection/>
      
    </div>
  )
}

export default HeroLayout
