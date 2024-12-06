import { inter, outfit } from "@/font";
import Image from "next/image";
import React from "react";

const WeHost = () => {
  return (
    <div
      className={` w-full h-fit flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 lg:px-20 py-10 bg-gradient-to-l to-[#DC1B79] from-[#151F15] ${outfit.className}`}
    >
      <div className=" w-[100%] sm:w-[70%] lg:w-[50%] flex flex-col gap-7 lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] font-bold ${inter.className}`}>
          We host Creators Mixer
        </h1>
        <div className="text-[#fff] font-light text-center  md:text-start tracking-wider text-[15px] flex flex-col gap-4">
          <p>
            The WithAudacious Creators and Creatives Mixer is more than just an
            event. Designed for creators, innovators, and visionaries, our mixer
            is a unique opportunity to meet like-minded individuals, share
            experiences,
          </p>
          <p>
            Whether you&apos;re a designer, content creator, writer, musician,
            filmmaker, or techie, this is your space to connect with others who
            share your passion for creativity. Explore potential partnerships in
            an atmosphere that celebrates bold ideas and fresh perspectives.
          </p>
        </div>

        <h4 className="  w-fit text-[#fff] text-[16px] bg-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-2xl font-normal ">
          Join our Next Mixer
        </h4>
      </div>

      <div className=" flex relative " >
        <Image
          src="/f1.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[15em] md:w-[20em] lg:w-[14em] h-full object-center "
        />

        <Image
          src="/f2.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[10em] lg:block hidden h-fit absolute bottom-0 -right-[10.5em] object-center "
        />

      </div>
    </div>
  );
};

export default WeHost;
