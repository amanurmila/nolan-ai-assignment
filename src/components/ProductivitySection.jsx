"use client";
import { FaRunning, FaPiggyBank, FaBolt, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProductivitySection() {
  return (
    <section className="bg-[#0B0E14] text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skyrocket your <span className="text-[#ffffff]">productivity</span>
        </motion.h2>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaRunning className="text-orange-400 text-2xl" />,
              title: "90% faster",
              desc: "Speed Through Project Completion",
            },
            {
              icon: <FaPiggyBank className="text-orange-400 text-2xl" />,
              title: "80% Lower Costs",
              desc: "Halve Your Expenses",
            },
            {
              icon: <FaBolt className="text-orange-400 text-2xl" />,
              title: "Exceptional Quality",
              desc: "Surpass the Highest Industry Standards",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mx-auto bg-[#111319] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="mt-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#2563eb] text-white hover:bg-[#1e40af] gap-2 px-6"
          >
            <FaDiscord className="text-xl" />
            Join Us On Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}
