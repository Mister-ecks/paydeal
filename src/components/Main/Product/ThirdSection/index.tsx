'use client'
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css"
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";



import { FaArrowRight } from "react-icons/fa6";
const ThirdSection = () => {
    const { ref: paymentRef, inView: paymentInView } = useInView({triggerOnce: true});
    const { ref: chatCardRef, inView: chatCardInView } = useInView({triggerOnce: true});
    useEffect(() => {}, []);
  return (
    <div className="flex justify-center items-center">
        <div className="mt-[2.188rem] md:mt-[11.625rem] overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center md:gap-x-[8.125rem]">
            {/* First Text */}
            <div ref={paymentRef} className={`mt-[1.375rem] mx-[1.438rem] md:mx-0  md:mt-0  ${paymentInView ? "animate__animated animate__fadeInLeft" : ""}`}>
                <h1 className={`text-left font-space font-bold  text-base md:text-5xl`}>Swap between currencies</h1>
                <p className="text-left text-[#292D32] font-normal mt-[0.938rem] text-sm md:text-2xl leading-4 md:mt-[3.875rem]">You are able to store money using our financial solution in a safe wallet. Swap currencies and withdraw money to your local bank easily.</p>
                <a href=""><button className="flex text-sm md:text-xl mt-[0.938rem] md:mt-[3.875rem] text-[#1C1C93] items-center font-bold ">Start now <FaArrowRight className="font-thin ml-[0.813rem]"/></button></a>
            </div>

            {/* card */}
          <div className={`bg-[#1C1C93] rounded-[0.557rem]  w-[22.356rem] py-[1.003rem] px-[1.04rem]  md:px-[1.75rem] md:py-[1.656rem] ${chatCardInView ? "animate__animated animate__fadeInRight image-delay" : ""} md:w-[34.625rem]`}>
            {/* White chat background */}
            <div ref={chatCardRef} className="bg-white w-[20.276rem]  rounded-[0.557rem] md:w-[30.125rem]  mx-auto my-auto ">
              {/* Chat wrapper */}
              <div className="pl-[19.83px] pt-[27.04px] pr-[35.45px]">
                  <div className="flex-col flex">
                    <div>
                        {/* Swap Currencies */}
                      <div className="flex justify-between items-center">
                <div className="text-left">
                <p className="text-[0.589rem] font-normal md:text-[16px] text-[#292D32]">Amount to convert</p>
                <h1 className="text-[0.884rem] font-medium text-[#292D32] font-space md:text-[24px]">$9,394.00</h1>
                <p className="text-[0.589rem] font-normal md:text-[16px] text-[#292D32]">Due March, 2023</p>
               </div>

               <div className="flex items-center">
               {/* currency */}
                <div className="flex">
                  <Image src="/assets/images/US.svg" width={21.03} height={15.02} alt="Us country flag" className="md:w-[35px] md:h-[25px]"/>
                  <p className="text-[14.42px] leading-[25.2px] text-[#292D32]/50 font-medium ml-[11.42px] md:text-[16px]">USD</p>
                </div>
                  <div>
                    <RiArrowDropDownLine className="text-[#292D32]/50 font-medium text-[14.42px] md:text-[16px]"/>
                  </div>
               </div>
                </div>
                {/* <div className="border-b-[#292D32]/50 border my-[28.84px] z-10"></div> */}
                {/* Swap icon */}
                <div className="bg-[#1C1C93]   mx-auto flex justify-center items-center rounded-full w-[28.84px] h-[28.84px] md:w-[47px] md:h-[47px] z-50  my-[25px]">
                  <BsArrowDownUp className="text-white inline  mx-auto my-auto text-xs md:text-lg"/>
                </div>
                {/* Currency second part */}
                <div className="flex justify-between items-center mb-[40.26px] md:mb-[67px]">
                <div className="text-left">
                <p className="text-[0.589rem] font-normal md:text-[16px] text-[#292D32]">Amount to convert</p>
                <h1 className="text-[0.884rem] font-medium text-[#292D32] font-space md:text-[24px]">$9,394.00</h1>
                <p className="text-[0.589rem] font-normal md:text-[16px] text-[#292D32]">Due March, 2023</p>
               </div>

               <div className="flex items-center">
               {/* currency */}
                <div className="flex">
                  <Image src="/assets/images/NG.svg" width={21.03} height={15.02} alt="Nigeria country flag" className="md:w-[35px] md:h-[25px]"/>
                  <p className="text-[14.42px] leading-[25.2px] md:text-[16px] text-[#292D32]/50 font-medium ml-[11.42px]">NGN</p>
                </div>
                  <div>
                    <RiArrowDropDownLine className="text-[#292D32]/50 font-medium md:text-[16px] text-[14.42px]"/>
                  </div>
               </div>
                </div>
                      </div>
                  </div>
                  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ThirdSection