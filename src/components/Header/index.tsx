"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { link } from "fs";
import {clsx} from 'clsx';

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const navLinks = [
    { label: "Home", link: "#" },
    { label: "Product", link: "#" },
    { label: "Offers", link: "#" },
  ];
  return (
    <div>
      <header className="flex w-full justify-between items-center pt-[1.688rem] pb-[1.219rem] pl-[1.821rem]  pr-[1.375rem] flex-wrap border-b border-white/70 md:px-[8.019rem] md:pt-4 md:pb-[1.524rem]">
        <div className="flex-shrink-0">
          <Image
            src="/assets/logo/MobileLogo.svg"
            className="block md:hidden"
            alt="Mobile Logo"
            width={75.93}
            height={19}
          />
          <Image
            src="/assets/logo/DesktopLogo.svg"
            className="hidden md:block"
            alt="Desktop Logo"
            width={110}
            height={18}
          />
        </div>

        <button className="block md:hidden">
          <MdMenu className="text-white" size={24} onClick={() => setSideMenu(true)} />
        </button>
        {/* Sidebar Mobile Menu */}
        <div
          className={clsx(
            " fixed h-full w-screen md:hidden lg:hidden top-0 right-0 -translate-x-full  transition-all z-50 ",
            sideMenu && "translate-x-0"
          )}
        >
          <section className="text-black bg-gradient-to-b from-[#892CDC] to-[#1C1C93] flex-col absolute right-0 top-0 h-screen py-[1.688rem] px-[1.625rem] w-full flex  ">
            <div className="flex justify-between items-center">
              <div>
              <Image src="/assets/logo/MobileLogo.svg" width={75.93} height={19} alt="mobile logo"/>
              </div>
              
              <div>
              <IoIosCloseCircleOutline
              onClick={() => setSideMenu(false)}
              className="mt-0 text-3xl cursor-pointer ml-auto text-[#DADAFF]"
            />
              </div>
              
            </div>
            

            <div className="w-[9.938rem]">
            <div className="mt-[4.688rem] flex flex-col space-y-[1.875rem]">
            {navLinks.map((d, i) => (
              <Link key={i} className="text-xl font-normal text-[#FFFFFF] " href={d.link}>
                {d.label}
              </Link>
            ))}
            </div>

            <div className="flex flex-col space-y-[0.813rem] mt-[2.5rem]">
              <button className="py-[0.75rem] text-base rounded-md border border-[#F1F1FF] text-white hover:bg-white/90/">Sign in</button>
              <button className="py-[0.75rem]  text-base rounded-md bg-white text-[#292D32]">Get Started</button>
            </div>
            </div>
           

            
            
          </section>
        </div>

        <div className="w-full md:w-auto hidden md:block" id="nav-content">
          <ul className="md:flex text-white text-lg md:space-x-[3.188rem]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
          </ul>
        </div>

        <button className="hidden md:block text-white text-lg border-2 border-white px-[1.25rem] py-[0.63rem] rounded-[0.625rem] font-medium">
          Sign in
        </button>
      </header>
    </div>
  );
};

export default Header;
