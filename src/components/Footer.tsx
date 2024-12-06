import { outfit } from "@/font";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div
      className={`bg-[#131F12] w-full flex flex-col gap-4 py-10 px-10 md:px-24 ${outfit.className}`}
      style={{
        backgroundImage: "url('/footer-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-[#E6E6E6] flex flex-col gap-2">
          <h1 className="text-white text-[17px] font-semibold">Legal</h1>
          <h3 className=" cursor-pointer text-[14px] font-medium">
            Privacy policy
          </h3>
          <h3 className=" cursor-pointer text-[14px] font-medium">
            Terms of use
          </h3>
        </div>

        <div className="text-[#E6E6E6] flex flex-col gap-2">
          <h1 className="text-white text-[17px] font-semibold">Links</h1>
          <Link href="/" className=" cursor-pointer text-[14px] font-medium">
            Home
          </Link>
          <Link
            href="aboutus"
            className=" cursor-pointer text-[14px] font-medium"
          >
            About Us
          </Link>
          <h3 className=" cursor-pointer text-[14px] font-medium">Stories</h3>
        </div>

        <div className="text-[#E6E6E6] flex flex-col gap-2">
          <h1 className="text-white text-[17px] font-semibold">Contact</h1>
          <h3 className=" cursor-pointer text-[14px] font-medium">
            maralexfirm.com@gmail.com
          </h3>
          <h3 className=" cursor-pointer text-[14px] font-medium">
            08101832699
          </h3>
          <h3 className=" cursor-pointer text-[14px] font-medium">
            Applewood Estate 1, Orchid Road, Lekki Lagos Nigeria{" "}
          </h3>
        </div>
      </div>

      <span className=" border-b-2 border-solid border-[#898A8C] my-3 md:my-8" />

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
        <p className="text-[14px] text-center text-[#E6E6E6] ">
          © 2024 with audacious
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://www.linkedin.com/company/iamaudacious" className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-transparent border border-[#fff] border-solid text-[#fff] rounded-full">
          <FaLinkedin />
          </Link>
          <Link href="https://chat.whatsapp.com/KsaMSqpIECaAjZfEfBlAbl" className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-transparent border border-[#fff] border-solid text-[#fff] rounded-full">
            <IoLogoWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/withaudacious?igsh=YzljYTk1ODg3Zg==" className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-transparent border border-[#fff] border-solid text-[#fff] rounded-full">
            <AiFillInstagram />
          </Link>
          <Link href="https://t.me/+kvcp5JxxP9plOTA0" className="w-10 cursor-pointer h-10 p-2 flex items-center justify-center bg-transparent border border-[#fff] border-solid text-[#fff] rounded-full">
            <BiLogoTelegram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
