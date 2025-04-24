import HeroTwo from "@/components/HeroTwo";
import HeroSection from "../components/HeroSection";
import HomeOne from "@/components/HomeOne";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-[#0c0c1c] to-[#040414]">
      <section>
        <HeroSection />
      </section>
      <section>
        <HeroTwo />
      </section>
      <section>
        <HomeOne />
      </section>
    </div>
  );
}
