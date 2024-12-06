import { inter, outfit } from "@/font";
import Image from "next/image";
import React from "react";

const WeCreate = () => {
  return (
    <div
      className={` w-full h-fit flex flex-col lg:flex-row items-center gap-10 lg:gap-60 px-5 lg:px-20 py-10 bg-gradient-to-l to-[#BC93EE] from-[#52459F] ${outfit.className}`}
      style={{
        backgroundImage: "url('/wc-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="  hidden  lg:flex relative ">
        <Image
          src="/f1.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[20em] lg:w-[14em] h-full object-center "
        />

        <Image
          src="/f2.png"
          alt="founder-image"
          width={500}
          height={500}
          className="w-[10em] h-fit absolute bottom-0 right-[-10.5em] object-center "
        />
      </div>

      <div className=" w-[100%] sm:w-[70%] lg:w-[50%] flex flex-col gap-7 lg:items-start items-center ">
        <h1 className={`text-[#fff] text-[30px] font-bold ${inter.className}`}>
          We create Stories
        </h1>
        <div className="text-[#fff] font-light text-center  md:text-start tracking-wider text-[15px] flex flex-col gap-4">
          <p>
            Storytelling is at the core of what we do. We tell stories of
            Creators, Creatives, and talents through YouTube and Podcast
            features, mini-docus and more.
          </p>
        </div>
        <h4 className="  w-fit text-[#fff] text-[16px] bg-[#141011] mt-3 md:mt-10 py-3 px-10 rounded-2xl font-normal ">
          Share your story
        </h4>
      </div>
    </div>
  );
};

export default WeCreate;
