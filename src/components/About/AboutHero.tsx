import { outfit } from "@/font";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div
      className={` bg-[#101010] pt-28 w-full h-full md:h-[35em] flex flex-col md:flex-row items-center gap-10 justify-center px-5 sm:px-10 md:px-20 py-10 ${outfit.className}`}
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="w-full md:w-[60%] flex flex-col md:items-start items-center gap-5 ">
        <h1
          className={`text-[#FFFFFF] tracking-wider text-center text-[28px] sm:text-[32px] lg:text-[40px] font-bold ${outfit.className}`}
        >
          Hi Content <span className="text-[#DC1B79]">Creator</span>
        </h1>
        <p className="text-[#fff] md:text-start text-balance text-center text-[15px] font-normal">
          Our goal is to build the most vibrant and connected creators and
          creatives eco system globally, empowering creators and creatives to
          create, collaborate, and grow.
        </p>
        <button className="w-fit mt-4 bg-[#DC1B79] text-[#fff] px-10 py-3 rounded-lg">
          Join our Community
        </button>
      </div>

      <div className=" flex justify-center relative">
        <Image
          src="/a1.png"
          alt="about-image"
          width={500}
          height={500}
          className=" w-[80%] md:w-[60%]"
        />

        <Image
          src="/a2.png"
          alt="about-image"
          width={500}
          height={500}
          className="w-[60%] absolute md:block hidden  -top-10 -right-10 "
        />
      </div>
    </div>
  );
};

export default AboutHero;
