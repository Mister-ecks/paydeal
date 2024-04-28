import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main"

export default function Home() {
  return (
    <div>
    <div className="bg-gradient-to-b from-[#892CDC] to-[#1C1C93]">
        <Header/>
        <Hero/>
        </div>
        <Main/>
      
    </div>
  );
}
