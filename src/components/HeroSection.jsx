"use client";

import Image from "next/image";
import Link from "next/link";
import hero from "../../public/Images/heroCat.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        {/* Left Side Content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Bring your film project to life <br />
            from <span className="text-white/80">idea</span> to{" "}
            <span className="text-white font-extrabold">production</span>
          </h1>
          <Link
            href="/create"
            className="btn btn-primary rounded-full text-lg w-fit px-6"
          >
            Start Creating
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="relative transform md:rotate-[-5deg] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={hero}
            alt="Film Illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
