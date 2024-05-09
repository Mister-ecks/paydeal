import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <div>
      <section className="mt-[88px] md:mt-[235px] mx-auto">
        <h1 className="font-space md:text-[48px] md:font-bold font-medium text-2xl text-[#292D32] text-center mx-[26.5px] md:leading-[55px] md:mx-[164px]">
          Manage all business payments seamlessly with our app.
        </h1>
      </section>
      {/* Offers for the app */}
      <div className="flex flex-col md:flex-row  md:items-center md:justify-center mx-auto mt-[39px] ml-[23px]  md:space-x-[108px] md:mx-[138px] md:mt-[134px]">
        {/* Left/Top section */}
        <div className="mr-[127px] md:mr-0 md:w-1/2">
          <h1 className="text-left text-base font-bold font-space text-[#292D32] md:text-5xl md:leading-[55px]">
            A digital platform for the digital economy
          </h1>
          <div className="mt-[13px] md:mt-[32px] flex flex-col space-y-[13px] md:space-y-[15px]">
            {/* Points */}
            {/* Point 1 */}
            <div className="flex items-start md:items-start space-x-[13px]">
              <Image
                src="/assets/images/Checkmark.svg"
                width={16}
                height={16}
                alt="paydeal check mark"
              />
              <p className="text-sm md:text-2xl text-[#292D32] text-left leading-4">
                Create a USD, GBP, EUR account to receive payments for your
                service.
              </p>
            </div>
            {/* Point 2 */}
            <div className="flex items-center space-x-[13px]">
              <Image
                src="/assets/images/Checkmark.svg"
                width={16}
                height={16}
                alt="paydeal check mark"
              />
              <p className="text-sm md:text-2xl text-[#292D32] text-left ">
                Send an invoice
              </p>
            </div>
            {/* Point 3 */}
            <div className="flex items-center space-x-[13px]">
              <Image
                src="/assets/images/Checkmark.svg"
                width={16}
                height={16}
                alt="paydeal check mark"
              />
              <p className="text-sm md:text-2xl text-[#292D32] text-left ">
                Debit card for easy spending
              </p>
            </div>
            {/* Point 4 */}
            <div className="flex items-center space-x-[13px]">
              <Image
                src="/assets/images/Checkmark.svg"
                width={16}
                height={16}
                alt="paydeal check mark"
              />
              <p className="text-sm md:text-2xl text-[#292D32] text-left ">
                Withdraw to your local bank easily
              </p>
            </div>

            <div className="">
              <button className="px-[18px] py-[10px] md:py-[15px] md:px-[30px] mt-[28px] md:mt-[50px] text-sm font-bold rounded-[5px] text-white md:text-2xl bg-[#1C1C93]">
                Open an account
              </button>
            </div>
          </div>
        </div>
        {/* Right/Bottom section */}
        <div className="mr-[21.38px] md:mr-0 mt-[107px] md:mt-0">
        <Image
          src="/assets/images/MobileImage.svg"
          width={363.62}
          height={360}
          alt="paydeal mobile girl image"
          className="md:hidden flex flex-shrink-0"
        />
        <Image src="/assets/images/DesktopImage.svg" width={602} height={596} alt="paydeal desktop girl image" className="md:flex hidden md:w-full md:flex-shrink-0"/>
        </div>
      </div>
     
      <div></div>
    </div>
  );
};

export default Offer;
