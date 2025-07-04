'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import hero from "../../public/Images/heroCat.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            Bring your film project to life <br />
            from <span className="text-white/80">idea</span> to{" "}
            <span className="text-white font-extrabold">production</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/create"
              className="btn btn-primary rounded-full text-lg w-fit px-6"
            >
              Start Creating
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={hero}
            alt="Film Illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
