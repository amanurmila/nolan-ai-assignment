"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <FaRobot className="text-primary text-6xl animate-bounce" />
        </div>

        <h1 className="text-5xl font-extrabold mb-4">
          404 - Not Found
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Oops! The page you're looking for seems lost in the matrix.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-semibold text-lg shadow-lg hover:bg-primary/80 transition"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>

    </div>
  );
}
