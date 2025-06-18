"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const OurPrograms = () => {
  return (
    <div
      className={`w-full relative flex flex-col gap-10 py-10 px-3 sm:px-10 lg:px-32 items-center font-sf`}
    >
      <Image
        src="/star.svg"
        alt="star"
        width={500}
        height={500}
        className="w-10 absolute left-5 top-5"
      />

      <h4 className="w-fit text-center text-[#9D00FF] text-[18px] py-1 px-4 rounded-2xl font-[700] font-sf">
        Our Programs
      </h4>

      <div className=" overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 ">
        <Fade direction="left" triggerOnce className="w-[80%] lg:w-[50%] ">
          <div className="flex flex-col md:items-start items-center gap-5 lg:gap-10 ">
            <h2 className="text-[#0A0A0A]  font-bold text-[25px] font-clash sm:text-[30px] ">
              Creators Stories{" "}
            </h2>

            <div className="flex flex-col gap-2 font-sf text-[16px] tracking-wide font-normal text-justify  text-[#3B3B3B]">
              <p className=" ">
                Every creator has a story — and we&apos;re here to document the
                ones reshaping industries.
              </p>

              <p>
                Through our Creators Story initiative, we spotlight
                professionals and creators across sectors — from tech and
                education to fashion, health, media, and business — who are
                using storytelling to build careers, launch impactful projects,
                and drive change in their communities.
              </p>
              <p>
                We capture their journeys through behind-the-scenes content,
                career documentaries, and creator-led narratives that showcase
                not just what they do, but why they do it.
              </p>

              <p>
                Our goal is to celebrate the hard work, purpose, and
                transformation behind every story — and to inspire the next
                generation of contentpreneurs. Watch these stories come to life
                on our YouTube channel.
              </p>
            </div>
            <button
              className={`text-[#fff] w-fit text-[16px] bg-[#9D00FF] py-3 px-10 rounded-2xl font-normal`}
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
            className="w-full"
          />
        </Fade>
      </div>

      <div className=" overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 mt-10">
        <Fade direction="up" triggerOnce className=" w-[100%] md:w-[40%] ">
          <div className="flex  flex-col md:items-start items-center gap-5 lg:gap-10 ">
            <h2 className="text-[#0A0A0A]  font-clash font-[700] text-[25px] sm:text-[30px] ">
              Black creator&apos;s Community
            </h2>

            <p className="text-[16px] tracking-wide font-normal text-justify font-sf leading-[1.7] text-[#3B3B3B] ">
              We believe creators deserve more than algorithms and likes.
              That&apos;s why we built a dedicated space outside social media a
              true home for creators to connect, learn, grow, and launch
              impactful work.At WithAudacious Creators Community, our mission is
              to build the largest network of Black creators and contentpreneurs
              shaping industries, culture, and commerce across Africa and the
              diaspora.
            </p>
            <button
              className={`text-[#fff] w-fit text-[16px] bg-[#9D00FF] py-3 px-10 rounded-[10px] font-normal `}
            >
              Join our Community
            </button>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce className="w-[100%] md:w-[50%] ">
          <Image
            src="/p2.png"
            alt="programs"
            width={500}
            height={500}
            className=" w-full"
          />
        </Fade>
      </div>
    </div>
  );
};

export default OurPrograms;
