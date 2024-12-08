"use client";
import { outfit } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Roll } from "react-awesome-reveal";

const FounderLetters = () => {
  return (
    <div
      className={` relative w-full flex flex-col md:flex-row items-center gap-10 lg:gap-20 bg-[#BC93EE] px-3 sm:px-10 lg:px-40 py-20 ${outfit.className}`}
    >
      <Image
        src="/founder-image.png"
        alt="founder-image"
        width={500}
        height={500}
        className="w-[60%] md:w-[40%] object-cover order-2 md:order-1"
      />

      <Image
        src="/red-s.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-20 object-cover absolute top-[20px] left-[20px]"
      />

      <Image
        src="/w-s.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-20 object-cover absolute top-[20px] right-[20px]"
      />

      <Image
        src="/whitestar.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-14 object-cover absolute bottom-[20px] left-[20px]"
      />

      <div className="flex flex-col gap-5 order-1 md:items-start items-center md:order-2">
        <h1 className="text-[#221919] text-[30px] font-bold ">
          Our founders letter
        </h1>
        <div className="text-[#3B3B3B] text-[15px] flex flex-col gap-2">
          <p>
            When I started WithAudacious, it wasn&apos;t just about building a
            community—it was about creating a space I wished I had when I began
            my journey. A space where creativity is celebrated, connections are
            genuine, and collaboration sparks endless possibilities.
          </p>
          <p>
            WithAudacious is for the bold, the dreamers, and the doers who
            refuse to settle. It&apos;s a place to grow, share, and thrive alongside
            others who understand the unique challenges and joys of building
            something meaningful.
          </p>
          <p>
            Together, we&apos;re not just creating—we&apos;re shaping the future. Thank
            you for being part of this journey. Your audacity inspires me every
            day.
          </p>
        </div>
        <div className="relative w-fit mt-6">
          <Link href="https://forms.gle/tm4ZpW7QS7XgNMmP9" className="  w-fit text-[#fff] text-[16px] bg-[#DC1B79] py-3 px-10 md:px-20 rounded-2xl font-normal ">
            Sponspor us
          </Link>
          <Roll className=" right-[-15px] -top-2 w-10 absolute ">
          <Image src="/rw.svg" alt="right-arrow" width={500} height={500} />
          </Roll>
        </div>
      </div>
    </div>
  );
};

export default FounderLetters;
