import React from "react";
import Step from "./Step";
import Image from "next/image";

const Steps = () => {
  return (
    <div className=" md:mx-[127.5px] md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row-reverse md:gap-x-[109.5px] md:items-center">
        {/* Steps */}
        <div className="">
        <section className="mt-[46px] md:mt-[207px]">
          <h1 className="font-space font-medium  md:mx-0 text-center mx-[40px] text-2xl md:text-5xl text-[#292D32] md:font-medium md:text-left md:ml-[22px]">
            Get started in just a few simple steps
          </h1>{" "}
         
          
          <div className="flex flex-col space-y-[19px] md:space-y-[45.5px] mt-[47px] md:mt-[48.5px]">
            <Step
              number="01"
              title="Register in minutes"
              desc="Create an account in just a few minutes! By downloading the Paydeal app from the App store."
            />
            <Step
              number="02"
              title="Complete KYC verification"
              desc="Next, complete your KYC verification. This is to ensure security and compliance with laid down policies."
            />
            <Step
              number="03"
              title="Get your virtual account"
              desc="Once KYC verification is done, get instant access to a world of seamless financial transactions."
            />
          </div>
          </section>
        </div>
        {/* Phone Image */}
        <div className="mx-auto mt-[56px] md:mt-[207px] md:flex md:flex-shrink-0">
          <Image
            src="/assets/images/PaydealMobileApp.svg"
            width={283}
            height={572.57}
            alt="paydeal phone interface mobile"
            className="md:hidden"
          />
          <Image src='/assets/images/PaydealDesktopPhone.svg' width={474} height={959} alt="paydeal phone interface desktop" className="hidden md:block"/>
        </div>
      </div>
    </div>
  );
};

export default Steps;
