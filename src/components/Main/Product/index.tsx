"use client";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
const Product = () => {
  return (
    <div>
      <section className="mt-[5rem] mx-auto text-center md:mt-[10.75rem]">
        <h1 className="text-2xl md:text-5xl font-medium md:font-bold font-space text-[#292D32] mx-[1.406rem] md:mx-[10.25rem] md:leading-[3.438rem] leading-7">
          We make cross-boarder payouts easy for you. Explore what makes us
          different
        </h1>

        <div className="md:mx-[8.019rem]">
          <FirstSection />
          <SecondSection />
          <ThirdSection/>
        </div>
      </section>
    </div>
  );
};

export default Product;
