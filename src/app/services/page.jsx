"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaMagic,
  FaChartLine,
  FaCloud,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    title: "AI Script Generation",
    description:
      "Generate full scripts using natural language. From stories to interviews — let the AI write it all.",
    icon: <FaFileAlt className="text-primary" size={36} />,
  },
  {
    title: "Smart Suggestions",
    description:
      "Real-time AI feedback and suggestions while you write or plan content.",
    icon: <FaMagic className="text-primary" size={36} />,
  },
  {
    title: "Idea Expansion",
    description:
      "Feed your thoughts into NolanAI and watch them evolve into full narratives or outlines.",
    icon: <FaRobot className="text-primary" size={36} />,
  },
  {
    title: "Analytics Insights",
    description:
      "Track how your content performs and gain insights to improve quality using AI.",
    icon: <FaChartLine className="text-primary" size={36} />,
  },
  {
    title: "Cloud Sync",
    description:
      "Access your scripts and data anytime from anywhere with secure cloud backup.",
    icon: <FaCloud className="text-primary" size={36} />,
  },
  {
    title: "Collaboration Tools",
    description:
      "Invite others to review or co-write your scripts with AI-assisted workflows.",
    icon: <FaHandsHelping className="text-primary" size={36} />,
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#0c0c1c] to-[#040414] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Powerful AI Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg"
        >
          Empowering creators with tools that blend creativity and artificial
          intelligence seamlessly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
