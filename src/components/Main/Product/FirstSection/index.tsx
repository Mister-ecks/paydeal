'use client'
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const FirstSection = () => {
    const { ref: paymentRef, inView: paymentInView } = useInView({triggerOnce: true});
    const { ref: chatCardRef, inView: chatCardInView } = useInView({triggerOnce: true});
    useEffect(() => {}, []);
  return (
    <div className="flex justify-center items-center ">
        <div className="mt-[2.188rem] md:mt-[11.625rem] overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center md:gap-x-[8.125rem]">
            {/* First Text */}
            <div ref={paymentRef} className={`mt-[1.375rem] mx-[1.438rem] md:mx-0  md:mt-0  ${paymentInView ? "animate__animated animate__fadeInLeft" : ""}`}>
                <h1 className={`text-left font-space font-bold text-[#292D32] text-base md:text-5xl`}>Create a payment link anywhere</h1>
                <p className="text-left text-[#292D32] font-normal mt-[0.938rem] text-sm md:text-2xl leading-4 md:mt-[3.875rem]">Use Payment Links to sell online without a website. Create a full payment page in just a few clicks and share the link with your customers.</p>
                <a href=""><button className="flex text-sm md:text-xl mt-[0.938rem] md:mt-[3.875rem] text-[#1C1C93] items-center font-bold ">Start now <FaArrowRight className="font-thin ml-[0.813rem]"/></button></a>
            </div>

            {/* card */}
          <div className={`bg-[#1C1C93] rounded-[0.557rem]  w-[22.356rem] py-[1.003rem] px-[1.04rem]  md:px-[1.75rem] md:py-[1.656rem] ${chatCardInView ? "animate__animated animate__fadeInRight image-delay" : ""} md:w-[34.625rem]`}>
            {/* White chat background */}
            <div ref={chatCardRef} className="bg-white w-[20.276rem] h-[14.594rem] rounded-[0.557rem] md:w-[30.125rem] md:h-[23.5rem] mx-auto my-auto ">
              {/* Chat wrapper */}
              <div className="pl-[1.5rem] pt-[1.226rem] pr-[1.228rem] ">
                {/*White Chat div */}
                <div className={`bg-white drop-shadow-lg rounded-[1.114rem] py-[0.56rem] md:py-[1rem] px-[0.957rem] md:px-[1.625rem] max-w-[11.289rem] overflow-hidden md:max-w-[19rem] ${chatCardInView ? "animate__animated animate__bounceInLeft animate__slow" : ""}`}>
                  <p className="text-[0.52rem] md:text-sm text-center text-[#292D32] font-normal">
                    I want to buy 24K Gold. Is it available?
                  </p>
                </div>

                {/* Blue chat div */}
                <div ref={chatCardRef} className={`bg-[#1C1C93]  drop-shadow-lg rounded-[1.114rem] py-[0.56rem] md:py-[1rem] px-[0.957rem] md:px-[1.625rem] max-w-[12rem] ml-auto mt-[29px] md:mt-[45.008px] md:max-w-[20rem] ${chatCardInView ? "animate__animated animate__bounceInRight animate__slow" : ""}`}>
                  <p className="text-[0.52rem] text-center text-[white] font-normal md:text-sm">
                    Yes, it&apos;s available. Make payment below.
                  </p>
                </div>

                <div className="" ref={chatCardRef}>
                    <Image src="/assets/images/24Kgold.svg" alt="Payment link" width={103.39} height={96.85} className={`ml-auto mt-[0.594rem] md:hidden ${chatCardInView ? "animate__animated animate__bounceInRight animate__slower" : ""}`}/>
                    <Image src="/assets/images/Desktop24Kgold.svg" alt="Desktop Payment link" width={230} height={200} className={`ml-auto px-0 mt-[1rem] md:block hidden ${chatCardInView ? "animate__animated animate__bounceInRight product" : ""}`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstSection