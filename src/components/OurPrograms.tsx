"use client";
import { manrope, outfit } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade, } from "react-awesome-reveal";

const OurPrograms = () => {
  return (
    <div
      className={`w-full relative flex flex-col gap-10 py-10 px-3 sm:px-10 lg:px-32 items-center ${outfit.className}`}
    >
      <Image
        src="/star.svg"
        alt="star"
        width={500}
        height={500}
        className="w-10 absolute left-5 top-5"
      />

      <h4 className="w-fit text-center text-[#DC1B79] text-[17px] bg-[#DC1B79]/20 py-1 px-4 rounded-2xl font-semibold ">
        Our Programs
      </h4>

      <div className=" overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 ">
        <Fade direction="left" triggerOnce className="w-[80%] lg:w-[40%] ">
          <div className="flex flex-col md:items-start items-center gap-5 lg:gap-10 ">
            <h2 className="text-[#0A0A0A]  font-bold text-[25px] sm:text-[30px] ">
              Creators Stories{" "}
            </h2>

            <p className="text-[16px] tracking-wide font-normal text-justify text-[#3B3B3B] ">
              Everyone has a story to tell, and we&apos;re here to help share
              yours. Through our Creators Story initiative, we shoot and cover
              the journey of exceptional creators and their projects. From
              behind-the-scenes footage to full documentary-style features, we
              aim to showcase the hard work, dedication, and passion that goes
              into creating. Watch your story come to life on our YouTube
              channel and inspire the world.
            </p>
            <button
              className={`text-[#fff] w-fit text-[16px] bg-[#DC1B79] py-3 px-10 rounded-2xl font-normal ${manrope.className}`}
            >
              Watch our stories{" "}
            </button>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce className="w-[100%] md:w-[50%] ">
          <Image
            src="/p1.png"
            alt="programs"
            width={500}
            height={500}
            className=""
          />
        </Fade>
      </div>

      <div className=" overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 mt-10">
        <Fade direction="up" triggerOnce className="md:order-2 w-[100%] md:w-[40%] ">
          <div className="flex  flex-col md:items-start items-center gap-5 lg:gap-10 ">
            <h2 className="text-[#0A0A0A]  font-bold text-[25px] sm:text-[30px] ">
              Fund a Creator Initiative
            </h2>

            <p className="text-[16px] tracking-wide font-normal text-justify text-[#3B3B3B] ">
              Every creator deserves a chance to bring their vision to life.
              Through our Fund a Creator Initiative, we offer financial support
              and resources to help you bring your creative projects to the
              world. Whether it&apos;s a film, podcast, music, or digital
              content, we want to help you make your dream a reality.
            </p>
            <button
              className={`text-[#fff] w-fit text-[16px] bg-[#DC1B79] py-3 px-10 rounded-2xl font-normal ${manrope.className}`}
            >
              Partner with us
            </button>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce className="w-[100%] md:w-[50%] md:order-1">
          <Image
            src="/p2.png"
            alt="programs"
            width={500}
            height={500}
            className=" "
          />
        </Fade>
      </div>
    </div>
  );
};

export default OurPrograms;
