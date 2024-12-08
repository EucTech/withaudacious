"use client";
import { inter, outfit } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Flip, Slide,} from "react-awesome-reveal";

const OurEvent = () => {
  return (
    <div
      className={` relative w-full h-fit flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 lg:px-20 py-10 bg-gradient-to-l to-[#DC1B79] from-[#151F15] ${outfit.className}`}
    >
      <Image
        src="/whitestar.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-14 object-cover absolute bottom-[20px] left-[20px]"
      />

      <div className=" w-[100%] md:w-[60%] flex flex-col gap-7 lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] font-bold ${inter.className}`}>
          Our Events
        </h1>
        <div className="text-[#fff] font-light text-center  md:text-start tracking-wider text-[15px] flex flex-col gap-4">
          <p>
            We organize events and platforms to connect creators and creatives,
            brands, and investors, facilitating valuable collaborations and
            partnerships.
          </p>
          <p>Building a Supportive Community</p>
          <p>
            We create a supportive and collaborative environment for the tech
            community, fostering a culture of mutual support and growth.
          </p>
        </div>

        <Slide direction="up" className="  w-fit text-[#fff] text-[16px] bg-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-2xl font-normal ">
        <Link href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl" >
          Join our Community
        </Link>
        </Slide>
        
      </div>

      <div
        className="w-[90%] sm:w-[50%] lg:w-[30%]  flex flex-col">
        <Image
          src="/hangout.png"
          alt="hangout-image"
          width={500}
          height={500}
          className="w-full h-full lg:h-[15em] xl:h-[18em] object-center "
        />

        <div className="w-full h-fit flex flex-col gap-3 items-center bg-[#DC1B79] py-2 px-4">
          <h2 className="w-full text-center text-[20px] md:text-[22px] text-[#fff] font-medium">With Audacious Creative mixer 2.0</h2>
          <p className="text-justify text-[13px] text-[#fff]">
            Join us for exclusive events and hangouts designed to bring together
            like-minded creators, industry leaders, and influencers.
          </p>
          <button className="w-fit text-[#fff] text-[16px] bg-[#141011]  py-1 px-12 rounded-2xl font-light">
            <Flip direction="horizontal">Register </Flip>
          </button>
        </div>

      </div>

    </div>
  );
};

export default OurEvent;
