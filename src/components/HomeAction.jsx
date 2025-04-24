"use client";

import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomeAction() {
  const HomeAction = dynamic(() => import("./HomeAction"), { ssr: false });
  return (
    <div className="text-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <motion.div
        className="lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold">
          NolanAI <span className="text-white font-bold">in Action</span>
        </h2>
        <p className="text-gray-400 text-xl">Meet Bryce</p>
        <p className="text-gray-300 text-lg">
          An independent filmmaker who is utilizing the full power of NolanAI to
          break down scripts, create pitch decks and storyboards, and reach his
          ultimate goal.
        </p>
        <p className="text-gray-300 text-lg">
          With its AI-powered features and user-friendly interface, it can help
          you bring your stories to life in the most efficient and effective way
          possible, while respecting your unique creative voice.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary w-fit gap-2"
        >
          View premium plans <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-video">
          <iframe
            src="https://www.youtube.com/embed/0NFxcNheoLc"
            title="NolanAI in Action"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
