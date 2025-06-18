"use client";
import { outfit } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";

const OurEvent = () => {
  return (
    <div
      className={` relative w-full h-fit flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 lg:px-20 py-10 bg-bb to-[#DC1B79] from-[#151F15] ${outfit.className}`}
    >
      <Image
        src="/whitestar.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-14 object-cover absolute bottom-[20px] left-[20px]"
      />

      <div className=" w-[100%] lg:w-[50%] flex flex-col gap-7 justify-center lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] font-bold font-clash`}>
          Physical Events
        </h1>
          <p className={`text-[#fff] font-light text-center  lg:text-start tracking-wider text-[15px] flex flex-col gap-4 ${outfit.className}`}>
            Every Quater, we curate events across cities that bring togetherthe
            brightest minds in the Black creator economy. We organize events and
            platforms to connect creators brands, and investors, facilitating
            valuable collaborations and partnerships. Building a Supportive
            Community
          </p>

        <Slide
          direction="up"
          className="  w-fit text-[#fff] text-[16px] bg-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-2xl font-normal "
        >
          <Link href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl">
            Partner with us
          </Link>
        </Slide>
      </div>

      <Image
        src="/event.png"
        alt="event-image"
        width={1000}
        height={1000}
        quality={100}
        className="w-[400px] object-cover rounded-2xl"
      />
    </div>
  );
};

export default OurEvent;
