"use client";
import { outfit } from "@/font";
import Image from "next/image";
import React from "react";

const CreatorsLaunchpadHero = () => {
  return (
    <div
      className={` relative w-full h-fit flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-5 lg:px-20 pt-24 pb-10 bg-bb to-[#DC1B79] from-[#151F15] ${outfit.className}`}
    >
      <Image
        src="/whitestar.svg"
        alt="founder-image"
        width={500}
        height={500}
        className="w-14 object-cover absolute bottom-[20px] left-[20px]"
      />

      <p
        className={`lg:w-[40%] text-[#fff] font-light text-center  lg:text-start tracking-wider text-[15px] flex flex-col gap-4 ${outfit.className}`}
      >
        A growth program for African contentpreneurs & digital creators ready to
        launch real businesses, products, and collaborations.
      </p>

      <Image
        src="/p1.png"
        alt="event-image"
        width={1000}
        height={1000}
        quality={100}
        className="w-[400px] object-cover rounded-2xl"
      />
    </div>
  );
};

export default CreatorsLaunchpadHero;
