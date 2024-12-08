"use client"
import { dm_sans, montserrat, outfit } from "@/font";
import className from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = className(
    "transition-all items-center justify-center cursor-pointer bg-[#000] text-[#838383] pl-5 pr-5 md:pl-0 h-[24em] w-[100%] sm:w-[40%] flex flex-col right-0 top-[100%] absolute items-start gap-4 text-[15px] font-medium transition-all duration-300 ease-linear delay-200 ${outfit}",
    {
      "right-[-100%] transition-all duration-300 ease-linear delay-200": !showNav,
    }
  );

  // const navLists = className(
  //   "hover:text-[#838383] border-b-2 border-transparent hover:border-b-2 border-solid hover:border-[#263238] transition duration-300 ease-linear delay-200"
  // );

  return (
    <div
      className={`flex relative items-center justify-between px-4 lg:px-32 w-full h-[4em] bg-transparent`}
    >
      <Link href='/' className="flex items-center gap-4">
        <Image
          src="logo.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-10 h-10"
        />
        <h1
          className={` hidden md:block text-[#DC1B79] text-[18px] sm:text-[22px] font-semibold ${montserrat.className}`}
        >
          Withaudacious
        </h1>
      </Link>

      <div
        className={`cursor-pointer text-[#838383] z-50 hidden md:flex items-center gap-4 text-[15px] font-medium ${dm_sans.className}`}
      >
        <Link href='aboutus'>About us</Link>
        <Link href='https://www.youtube.com/channel/UCqUdk73arHvDYNuxI7yMZlQ'>Creators stories</Link>
        <Link href='https://forms.gle/tm4ZpW7QS7XgNMmP9'>Support us </Link>
      </div>

      <div className={`${handleNav} z-50 block md:hidden text-[#838383]`}>
        <Link href='aboutus' onClick={() => setShowNav(false)}>
          About us
        </Link>
        <Link href='https://www.youtube.com/channel/UCqUdk73arHvDYNuxI7yMZlQ' onClick={() => setShowNav(false)}>
          Creators stories
        </Link>
        <Link href='https://forms.gle/tm4ZpW7QS7XgNMmP9' onClick={() => setShowNav(false)}>
          Support us
        </Link>
      </div>

      <Link href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl">
        <button
          className={` bg-[#DC1B79] text-white text-[16px] font-semibold py-2 px-3 rounded-lg ${outfit.className}`}
        >
          Join our Community
        </button>
      </Link>

      <BiMenuAltLeft
        onClick={() => setShowNav(!showNav)}
        className="text-[30px] md:hidden block text-[#fff]"
      />
    </div>
  );
};

export default Navbar;
