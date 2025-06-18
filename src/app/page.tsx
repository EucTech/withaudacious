import FollowOurJorney from '@/components/FollowOurJorney'
import FounderLetters from '@/components/FounderLetters'
import HeroLayout from '@/components/HeroSection/HeroLayout'
import OurEvent from '@/components/OurEvent'
import OurPrograms from '@/components/OurPrograms'
import OurStory from '@/components/OurStory'
import VideoSection from '@/components/VideoSection'
import React from 'react'

const page = () => {
  return (
    <div >
      <HeroLayout/>
      <FollowOurJorney/>
      <VideoSection/>
      <OurStory/>
      <OurPrograms/>
      <FounderLetters/>
      <OurEvent/>
    </div>
  )
}

export default page
