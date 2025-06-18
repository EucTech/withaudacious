import { outfit } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatIsCreatorsLunchPad = () => {
  return (
    <div
      className={` w-full h-fit flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-60 px-5 lg:px-20 py-10 bg-gradient-to-l to-[#BC93EE] from-[#52459F] ${outfit.className}`}
      style={{
        backgroundImage: "url('/wc-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="  hidden  lg:flex relative ">
        <Image
          src="/w1.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[20em] lg:w-[14em] h-full object-center "
        />

        <Image
          src="/w2.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[10em] h-fit absolute bottom-0 right-[-10.5em] object-center "
        />
      </div>

      <div className=" w-[100%] sm:w-[70%] lg:w-[50%] flex flex-col gap-7 lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] lg:text-start text-center font-bold font-clash`}>
          What is Creators Launchpad
        </h1>
        <div className="text-[#fff] font-sf text-center  lg:text-start tracking-wider text-[15px] flex flex-col gap-4">
          <p>
            Creators Launchpad is an accelerator-style initiative designed to
            help African creators turn content into companies — through funding,
            mentorship, and co-launch opportunities with brands and fellow
            creators.
          </p>
          <p>
            Whether you&apos;re launching a product, a digital service, or scaling
            your influence, we&apos;ll help you make it happen.
          </p>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5">
          <Link
            href="https://forms.gle/qKvxhyr7JrhtfaVt6"
            className=" w-fit sm:w-[12em] flex items-center justify-center text-[#fff] text-[16px] bg-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-[10px] font-normal "
          >
            Apply
          </Link>
          <Link
            href="https://forms.gle/qKvxhyr7JrhtfaVt6"
            className=" w-fit sm:w-[12em] flex items-center justify-center text-[#fff] text-[16px] border border-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-[10px] font-normal "
          >
            Partner with us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCreatorsLunchPad;
