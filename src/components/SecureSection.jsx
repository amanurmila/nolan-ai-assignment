"use client";
import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SecureSection = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Secure</h2>
        <p className="text-2xl font-light mb-6">
          Don’t worry, your data is secure and encrypted with{" "}
          <span className="font-semibold">Nolan AI</span>
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          We take your privacy and the ownership of your work very seriously. We
          respect your creative content and have no rights over it. We do not
          use your work for training our models or for any other purposes
          without your explicit consent.
        </p>
      </motion.div>

      {/* Icon with animation */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 flex items-center justify-center shadow-xl">
          <FaShieldAlt className="text-6xl text-white drop-shadow-lg" />
        </div>
      </motion.div>
    </section>
  );
};

export default SecureSection;
