import Figures from "../Figures";

const Metrics = () => {
 
 
  return (
    
    <div>
      <section className="pt-[5rem] mx-auto">
        <h1 className={`font-space text-[#292D32] font-medium text-2xl text-center md:text-5xl md:font-bold`}>
          High performance metrics
        </h1>

        <p className="text-sm text-center text-[#292D32] mt-[0.625rem] font-normal md:font-medium md:text-2xl md:mt-[1.313rem]">Get the best cross-boarder payment from us</p>

        {/* Cards */}
        <div className="mt-[2.5rem] md:mt-[3rem] flex items-center justify-center space-x-[8.063rem] mx-[1.5rem]">
            <Figures heading="$150B" desc="Trading volume"/>
            <Figures  heading="500K+" desc="Successful transactions"/>
            <Figures  heading="98%" desc="Success rates"/>
        </div>
      </section>
    </div>
  );
};

export default Metrics;
