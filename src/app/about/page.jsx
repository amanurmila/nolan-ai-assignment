// components/AboutUs.jsx
"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaUsers, FaRegLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={32} />,
    title: "Cutting-edge AI",
    desc: "We build intelligent tools that understand your needs and learn as you go.",
  },
  {
    icon: <FaRocket size={32} />,
    title: "Fast & Reliable",
    desc: "Speed and stability are at our core — making your AI workflows seamless.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Human-Centered",
    desc: "Our mission is to empower people through accessible and ethical AI.",
  },
  {
    icon: <FaRegLightbulb size={32} />,
    title: "Innovative Ideas",
    desc: "We’re always experimenting with new ways to make AI more helpful.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#0c0c1c] to-[#040414] py-20 px-4 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            At <span className="font-semibold text-primary">NolanAI</span>, we
            craft state-of-the-art artificial intelligence that helps creators,
            thinkers, and innovators do more with less friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="max-w-4xl mx-auto text-lg text-gray-500">
            We believe AI should enhance your creativity, not replace it.
            NolanAI stands at the intersection of storytelling and technology,
            enabling people to bring their visions to life — faster, smarter,
            and with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
