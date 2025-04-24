import HeroTwo from "@/components/HeroTwo";
import HeroSection from "../components/HeroSection";
import HomeOne from "@/components/HomeOne";
import SecureSection from "@/components/SecureSection";
import HomeAction from "@/components/HomeAction";
import FeaturesSection from "@/components/FeaturesSection";
import ProductivitySection from "@/components/ProductivitySection";
import TestimonialSection from "@/components/TestimonialSection";

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
      <section>
        <SecureSection />
      </section>
      <section>
        <HomeAction />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <ProductivitySection />
      </section>
      <section>
        <TestimonialSection />
      </section>
    </div>
  );
}
