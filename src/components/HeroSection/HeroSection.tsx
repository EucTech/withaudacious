import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="overflow-hidden flex lg:flex-row flex-col gap-10 justify-between items-center lg:pt-0 pt-16 px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-40 font-sf z-40">
      <Fade duration={1000} direction="left" triggerOnce className="lg:w-[50%]">
        <div className="w-full flex flex-col text-center lg:text-start gap-10 ">
          <h1 className="font-[700] leading-[1] text-[#FFFFFF] text-[35px] sm:text-[40px] lg:text-[50px]">
            <TypeAnimation
              sequence={["A Home for Creators building careers"]}
              speed={50}
              wrapper="span"
              repeat={0}
            />
          </h1>
          <p className=" text-[16px] sm:text-[16px] font-normal text-[#fff] ">
            We believe creators deserve more than algorithms and likes.
            That&apos;s why we built a dedicated space outside social media — a
            true home for creators to connect, learn, grow, and launch impactful
            work.
          </p>

          <Link
            className="w-fit lg:mx-0 mx-auto bg-[#9D00FF] hover:bg-opacity-95 font-[700] text-[16px] rounded-[15px] text-[#FFFFFF] px-6 py-3"
            href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl"
          >
            Join our Community
          </Link>
        </div>
      </Fade>

      <Fade duration={1000} delay={200} direction="right" triggerOnce className="w-[100%] sm:w-[400px] lg:w-[300px] xl:w-[400px] ">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={400}
          height={400}
          quality={100}
          className=" h-auto"
          priority
        />
      </Fade>
    </div>
  );
};

export default HeroSection;
