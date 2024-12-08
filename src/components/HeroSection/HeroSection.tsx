import { inter, outfit } from "@/font";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="sm:w-[90%] lg:w-[70%] xl:w-[60%] flex flex-col gap-10 items-center px-5 ">
      <h1
        className={`flex flex-wrap items-center justify-center gap-3 text-[#FFFFFF] tracking-wider text-[30px] sm:text-[50px] text-center font-bold ${outfit.className}`}
      >
        <span>Hi</span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Content Creator",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "Creative",
            1500,
          ]}
          wrapper="span"
          speed={10}
          // style={{ fontSize: "30px", display: "inline-block", color: "#DC1B79" }}
          repeat={Infinity}
          className="text-[#DC1B79] "
        />
      </h1>

      <p
        className={` text-[16px] sm:text-[18px] font-normal text-center text-[#fff] ${inter.className}`}
      >
        Our goal is to build the most vibrant and connected creators and
        creatives eco-system globally, empowering creators and creatives to
        create, collaborate, and grow.
      </p>

      <Link
        className={`w-[80%] sm:w-[40%] text-center tracking-wider bg-[#DC1B79] text-white text-[16px] font-semibold mt-8 md:mt-14 sm:mt-20 py-4 px-5 rounded-lg ${outfit.className}`}
        href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl"
      >
        Join our Community
      </Link>
    </div>
  );
};

export default HeroSection;
