'use client'
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";




const SecondSection = () => {
    const { ref: paymentRef, inView: paymentInView } = useInView({triggerOnce: true});
    const { ref: chatCardRef, inView: chatCardInView } = useInView({triggerOnce: true});
    useEffect(() => {}, []);
  return (
    <div className="flex justify-center items-center ">
        <div className="mt-[2.188rem] md:mt-[11.625rem] overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row-reverse md:justify-center md:items-center md:gap-x-[8.125rem]">
            {/* First Text */}
            <div ref={paymentRef} className={`mt-[1.375rem] mx-[1.438rem] md:mx-0  md:mt-0  ${paymentInView ? "animate__animated animate__fadeInRight" : ""}`}>
                <h1 className={`text-left font-space font-bold  text-base md:text-5xl`}>Invoice made for speed and scale</h1>
                <p className="text-left text-[#292D32] font-normal mt-[0.938rem] text-sm md:text-2xl leading-4 md:mt-[3.875rem]">A platform for international invoicing software created to save you time and speed up payment. Create an invoice quickly, then email it to your clients.</p>
                <a href=""><button className="flex text-sm md:text-xl mt-[0.938rem] md:mt-[3.875rem] text-[#1C1C93] items-center font-bold ">Start now <FaArrowRight className="font-thin ml-[0.813rem]"/></button></a>
            </div>

            {/* card */}
          <div className={`bg-[#1C1C93] rounded-[0.557rem]  w-[22.356rem] py-[1.003rem] px-[1.04rem]  md:px-[1.75rem] md:py-[1.656rem] ${chatCardInView ? "animate__animated animate__fadeInLeft image-delay" : ""} md:w-[34.625rem]`}>
            {/* White chat background */}
            <div ref={chatCardRef} className="bg-white w-[20.276rem] h-[14.594rem] rounded-[0.557rem] md:w-[30.125rem] md:h-[24.563rem] mx-auto my-auto ">
              {/* Chat wrapper */}
              <div className="pl-[0.995rem] pt-[0.737rem] pr-[1.228rem] pb-[0.884rem]  md:pl-[1.75rem] md:pt-[0.75rem] md:pb-[1.438rem] md:pr-[2.062rem] ">
                {/* Invoice Details */}
                <div className="flex justify-between items-start">
                <div className="text-left">
                <p className="text-[0.589rem] font-normal">Invoice from Mark</p>
                <h1 className="text-[0.884rem] font-medium font-space">$9,394.00</h1>
                <p className="text-[0.589rem] font-normal ">Due March, 2023</p>
               </div>

               <div>
                <Image src='/assets/images/CompanyLogo.svg' alt="Company logo"
                width={73.01}
                height={24.84}
                />
               </div>
                </div>
               
                <div className="border-b-[#292D32]/50 border mt-[0.862rem] "></div>
                {/* Invoice Details */}
                <div className="mt-[9.43px] flex-col justify-between">
                  <div className="flex items-center">
                  <FaArrowDownLong className="text-[9.43px] font-light  text-[#1c1c93] t"/>
                  <p className="text-[9.43px] text-[#292D32] pl-[5.31px]">Download invoice</p>
                  </div>
                  <div className="mt-[7.08px] flex-col space-y-[12.97px]">
                  <div className="mt-[7.08px] flex-col space-y-[12.97px]">
                        {/* First Detail */}
                        <div className="flex justify-between">
                          <p className="text-[9.43px] text-[#292D32] font-normal">From:</p>
                          <p className="text-[9.43px] text-[#292D32] font-normal">Mark</p>
                        </div>
                        {/* Second Detail */}
                        <div className="flex justify-between">
                          <p className="text-[9.43px] text-[#292D32] font-normal">To:</p>
                          <p className="text-[9.43px] text-[#292D32] font-normal">Khalid</p>
                        </div>
                        {/* Third Detail */}
                        <div className="flex justify-between">
                          <p className="text-[9.43px] text-[#292D32] font-normal">Notes:</p>
                          <p className="text-[9.43px] text-[#292D32] font-normal">I gave you a discount</p>
                        </div>
                  </div>

                  </div>

                  <div className="mt-[22.41px]">
                    <button className="text-[9.43px] pt-[5.9px] pb-[5.05px] w-full rounded-[5.9px] bg-[#1C1C93] text-white font-bold">Pay for this invoice</button>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondSection