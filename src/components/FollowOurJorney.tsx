"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const FollowOurJorney = () => {
  return (
    <div
      className={`relative bg-[#DC1B79]/15 overflow-hidden w-full flex flex-col gap-6 items-center justify-center py-32 px-10 sm:px-20 font-sf`}
    >
      <div className=" absolute left-0 top-[-60px]">
        <Image
          src="/v-bg.svg"
          alt="background"
          width={500}
          height={500}
          className="w-[80%]"
        />
      </div>
      <h4 className="text-[#9D00FF] text-[17px]  rounded-2xl font-[600] ">
        Follow our Journey{" "}
      </h4>

      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center"
      >
        <div className="w-full sm:w-[70%] lg:w-[45%] flex flex-col gap-7">
          <h2
            className={`w-full text-center text-[28px] sm:text-[35px] font-semibold  `}
          >
            Stay <span className="text-[#9D00FF]">Updated</span> With Audacious
            Community
          </h2>

          <p className="font-normal text-[17px] text-center text-[#5E5D6F]">
            Stay connected and be the first to receive updates, news, and
            exclusive offers related to With audacious community. Don&apos;t
            miss out on any important information - follow us today!
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="https://www.linkedin.com/company/iamaudacious"
            className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-[#9D00FF] text-[#fff] rounded-full"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl"
            className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-[#9D00FF] text-[#fff] rounded-full"
          >
            <IoLogoWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/withaudacious?igsh=YzljYTk1ODg3Zg=="
            className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-[#9D00FF] text-[#fff] rounded-full"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://t.me/+kvcp5JxxP9plOTA0"
            className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-[#9D00FF] text-[#fff] rounded-full"
          >
            <BiLogoTelegram />
          </Link>
        </div>
      </Slide>
    </div>
  );
};

export default FollowOurJorney;
