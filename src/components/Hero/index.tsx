'use client'
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import "animate.css";
import Image from "next/image";

const Hero = () => {
  const {ref: mainTextRef, inView: mainTextInView}  = useInView();
  useEffect(()=>{

  }, [])
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto mt-[3.781rem] md:mt-[5.914rem] px-10 md:px-[13.188rem]">
      
        <div ref={mainTextRef}><h1
          
          className={`font-space text-center leader-7 md:leading-[4.25rem] font-medium text-2xl text-[#ffffff] md:text-6xl md:font-bold mx-auto ${mainTextInView ? "animate__animated animate__bounceIn" : ""}`}
        >
          Receive and make cross border payments anywhere
        </h1></div>

        <p className="text-white mx-auto text-sm md:text-2xl text-center leading-6 mt-[1.313rem] md:mt-[2.063rem] md:leading-[2.625rem]">
          We offer you a unique way to receive cross-boarder payments for
          services rendered on any freelancing platform. Create a unique payment
          link and enjoy the best with us
        </p>

        <button className="py-[0.75rem] md:py-[0.938rem] mt-[2.563rem] md:px-[2.188rem] px-[1.888rem] flex justify-center mx-auto text-[#292D32] rounded-[0.625rem] text-base font-normal bg-[#F1F1FF] md:text-2xl md:font-medium">
          Get Started
        </button>
      </section>
      {/* Hero Image */}
      <div className="mt-[4.563rem] md:mt-[2.599rem] flex justify-center md:mx-16 mx-[0.539rem] pb-[10.363rem] md:pb-[1.349rem] ">
        <Image
          src="/assets/images/map-mobile.svg"
          alt="map mobile image"
          width={390.74}
          height={189.19}
          className="mx-auto block md:hidden"
        />
        <Image
          src="/assets/images/map-desktop.svg"
          alt="map desktop image"
          width={1313}
          height={569.84}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
