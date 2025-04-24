"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomeOne() {
  return (
    <div>
      {/* Section 1 */}
      <motion.section
        className="text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="relative transform md:rotate-[-10deg] rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="https://thumbs.dreamstime.com/b/friendship-girls-unsplash-generate-ai-290623910.jpg"
            alt="Film Illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div className="text-left max-w-xl" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Enhance your <br />
            <span className="font-bold">screenwriting experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Providing tailored solutions to overcome writer’s block and
            streamlining your creative process.
          </p>
          <button className="mt-6 btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            NolanAI for Screenwriters <FaArrowRight />
          </button>
        </motion.div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="text-left max-w-xl" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Enhance your <br />
            <span className="font-bold">screenwriting experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Providing tailored solutions to overcome writer’s block and
            streamlining your creative process.
          </p>
          <button className="mt-6 btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            NolanAI for Screenwriters <FaArrowRight />
          </button>
        </motion.div>

        <motion.div
          className="relative transform md:rotate-[10deg] rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
            alt="Film Illustration"
            width={600}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="relative transform md:rotate-[-10deg] rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg"
            alt="Film Illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div className="text-left max-w-xl" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Enhance your <br />
            <span className="font-bold">screenwriting experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Providing tailored solutions to overcome writer’s block and
            streamlining your creative process.
          </p>
          <button className="mt-6 btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            NolanAI for Screenwriters <FaArrowRight />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
