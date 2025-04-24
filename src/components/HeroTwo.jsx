"use client";

import React from "react";
import {
  FaRobot,
  FaMagic,
  FaVideo,
  FaLine,
  FaLanguage,
  FaTable,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Brainstorm Assistant",
    desc: "Quickly generate plot ideas, character arcs, and setting inspiration with real-time AI suggestions, helping you kickstart any story.",
  },
  {
    icon: <FaMagic />,
    title: "Script Enhancer",
    desc: "Improve your screenplay with tone adjustments, smarter dialogue, and AI-powered refinement tools that keep your creative voice intact.",
  },
  {
    icon: <FaVideo />,
    title: "Pre-Vis Tool",
    desc: "Visualize and plan your scenes ahead with AI-powered storyboarding tools and cinematic references.",
  },
  {
    icon: <FaLine />,
    title: "Dialogue Generator",
    desc: "Get context-aware dialogue suggestions and rewrite ideas tailored to your characters.",
  },
  {
    icon: <FaLanguage />,
    title: "Multilingual Scripts",
    desc: "Instantly translate your scripts into multiple languages, preserving tone and nuance.",
  },
  {
    icon: <FaTable />,
    title: "Script Breakdown",
    desc: "Auto-breakdown your scripts into scenes, locations, props, and characters for pre-production.",
  },
];

export default function HeroTwo() {
  return (
    <div className="text-center pb-5 w-11/12 mx-auto">
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          NolanAI is a collaborative film production suite
        </h2>
        <p className="text-2xl text-gray-200">
          "covering the full film production process from concept creation and
          screenwriting to planning and stage production"
        </p>
      </motion.div>

      {/* Features Grid */}
      <section className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
                <div className="text-white text-3xl">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="btn btn-lg bg-[#2176FF] rounded-4xl px-6 py-3 text-white flex items-center gap-2 mx-auto"
      >
        Sign Up For Free
        <FaArrowRight />
      </motion.button>

      {/* Ethical AI Section */}
      <motion.div
        className="my-10 space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Leading the charge in Ethical AI</h2>
        <p className="text-2xl text-gray-200">
          At NolanAI, we prioritize the ethical implications of AI in the
          creative industry. We believe in AI-powered tools that enhance
          human-driven storytelling.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn bg-[#2176FF] rounded-4xl px-6 py-3 text-white flex items-center gap-2 mx-auto"
        >
          Learn More
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </div>
  );
}
