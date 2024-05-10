import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main"
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div>
    <div className="bg-gradient-to-b from-[#892CDC] to-[#1C1C93]">
        <Header/>
        <Hero/>
        </div>
        <Main/>
        <div className="md:bg-[#F1F1FF]">
        <Steps/>

        </div>
    </div>
  );
}
