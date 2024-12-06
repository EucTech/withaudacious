import AboutHero from '@/components/About/AboutHero'
import WeCreate from '@/components/About/WeCreate'
import WeFund from '@/components/About/WeFund'
import WeHost from '@/components/About/WeHost'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <WeHost/>
      <WeCreate/>
      <WeFund/>
    </div>
  )
}

export default page
