import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className=" relative flex flex-col lg:flex-row items-center justify-center gap-9 font-sf px-5 sm:px-10 md:px-20 lg:px-28 py-16">
      <div className="absolute inset-0 bg-grid bg-cover bg-center z-10"></div>{" "}
      {/* background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9D00FF] to-[#52459F] z-20 opacity-90"></div>{" "}
      {/* overlay */}
      <div className="flex flex-col items-center lg:items-start gap-5 lg:w-[70%] z-50">
        
        <h3 className="font-clash text-[40px] font-[700] text-[#FFFFFF] ">
          Our Story
        </h3>
        <div className="flex flex-col gap-2 font-sf text-[15px] leading-[1.6] text-[#FFFFFF]">
          <p>
            What began in early 2024 as a casual creators hangout — a simple
            gathering of passionate storytellers, content strategists, and
            culture-shapers — has quickly evolved into WithAudacious, a growing
            force in Africa&apos;s creator economy.
          </p>
          <p>
            From intimate mixers to city-wide summits, business workshops, and
            community-led sessions, WithAudacious has grown into a thriving
            ecosystem of over 1,000 creators and creatives across Nigeria (and
            counting). We&apos;ve created spaces where creators don&apos;t just
            vibe — they learn, collaborate, build income streams, and unlock
            growth.
          </p>
          <p>Our mission?</p>
          <p>
            To empower Africa&apos;s next generation of creators — not just as
            artists, but as entrepreneurs — through curated events, community
            support, and access to opportunities that turn passion into
            sustainable success.
          </p>
          <p>
            The future of content is commerce. And at WithAudacious, we&apos;re
            building the launchpad for it. Let me know if you want a visual
            version for a webpage or presentation.
          </p>
        </div>
        <button className="bg-[#000000] w-fit text-white rounded-[10px] mt-10 py-3 px-10">
          Sponsor a story
        </button>
      </div>
      <Image
        src="/ff.png"
        alt="Image"
        width={1000}
        height={1000}
        quality={100}
        className="w-full lg:w-[300px] xl:w-[400px] z-30"
      />
    </div>
  );
};

export default OurStory;
