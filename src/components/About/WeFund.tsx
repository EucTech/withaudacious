import { inter, outfit } from "@/font";
import Image from "next/image";
import React from "react";

const WeFund = () => {
  return (
    <div
      className={` w-full h-fit flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 lg:px-32 py-10 bg-gradient-to-l to-[#0D8456] from-[#52459F] ${outfit.className}`}
    >
      <div className=" w-[100%] sm:w-[70%] lg:w-[50%] flex flex-col gap-7 lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] font-bold ${inter.className}`}>
          We fund Creators
        </h1>

        <div className="text-[#fff] font-light text-center   md:text-start tracking-wider text-[15px] flex flex-col gap-4">
          <p>
            We help Creators connect with potential brands and investors,
            bridging the gap between creativity and the funding needed to bring
            them to life.
          </p>
        </div>

        <h4 className="  w-fit text-[#fff] text-[16px] bg-[#DC1B79] mt-3 md:mt-10 py-3 px-16 rounded-2xl font-normal ">
          Partner with us
        </h4>
      </div>

      <Image
        src="/room-setup.png"
        alt="room setup"
        width={500}
        height={500}
        className="w-[30em] lg:w-[30%] h-full object-center rounded-xl "
      />
    </div>
  );
};

export default WeFund;
