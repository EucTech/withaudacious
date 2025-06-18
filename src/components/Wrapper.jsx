"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./HeroSection/Navbar";
import Footer from "./Footer";


const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      { pathname === "/" ? (
           <>
           {children}
           <Footer />
         </>

        ) : (
          <>
          <div className="w-full z-50 bg-[#000]/40  backdrop-blur-3xl fixed">
          <Navbar />
          </div>
          {children}
          <Footer />
        </>
        )}
    </>
  );
};

export default LayoutWrapper;
