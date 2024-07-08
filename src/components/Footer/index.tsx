import React from "react";
import Image from "next/image";
import FooterColumns from "./FooterColumns";

const Footer = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#892CDC] to-[#1C1C93] mt-[124px] md:mt-[218px] mx-auto">
        {/* Content container */}
        <div className="pt-[65.93px] pl-[36.5px] pr-[55px] pb-[50px]">
          {/* Content */}
          {/* Header */}
          <div>
            <Image
              src="/assets/images/Subtract.svg"
              alt="paydeal mobile footer logo"
              height={32.58}
              width={130.21}
            />
            <p className="mt-[19px] text-white">
              We help generate more leads by leveraging on our keys services
              that we offer. Get the best experience
            </p>
          </div>
          {/* Footer container */}
          <div className="flex flex-col space-y-[113px] md:space-y-0 mt-[56.48px] md:flex-row justify-between">
            {/* Footer columns */}
           <FooterColumns header1="Company" header2="Product" data1="FAQs" data2="About Us" data3="Careers" data4="Terms & Conditions" data5="Features" data6="Updates" data7="Security" data8="Articles"/>
           <FooterColumns header1="Resources" header2="Help" data1="News" data2="API Docs" data3="Partners" data4='' data5=" Support" data6="Book a call" data7="" data8=""/>

           <FooterColumns header1="Offices" header2="" data1="Lagos" data2="England" data3="Scotland" data4='Germany' data5="" data6="" data7="" data8=""/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
