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

export default function HeroTwo() {
  return (
    <div className="text-center pb-5 w-11/12 mx-auto">
      <div className="space-y-5">
        <h2 className="text-4xl font-bold">
          NolanAI is a collaborative film production suite
        </h2>
        <p className="text-2xl">
          "covering the full film production process from concept creation and
          screenwriting to planning and stage production"
        </p>
      </div>
      <section className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaRobot className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Brainstorm Assistant</h3>
            <p className="text-gray-300">
              Quickly generate plot ideas, character arcs, and setting
              inspiration with real-time AI suggestions, helping you kickstart
              any story.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaMagic className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Script Enhancer</h3>
            <p className="text-gray-300">
              Improve your screenplay with tone adjustments, smarter dialogue,
              and AI-powered refinement tools that keep your creative voice
              intact.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaVideo className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Brainstorm Assistant</h3>
            <p className="text-gray-300">
              Quickly generate plot ideas, character arcs, and setting
              inspiration with real-time AI suggestions, helping you kickstart
              any story.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaLine className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Script Enhancer</h3>
            <p className="text-gray-300">
              Improve your screenplay with tone adjustments, smarter dialogue,
              and AI-powered refinement tools that keep your creative voice
              intact.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaLanguage className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Brainstorm Assistant</h3>
            <p className="text-gray-300">
              Quickly generate plot ideas, character arcs, and setting
              inspiration with real-time AI suggestions, helping you kickstart
              any story.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#2176FF] flex items-center justify-center shadow-lg shadow-black/30">
              <FaTable className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Script Enhancer</h3>
            <p className="text-gray-300">
              Improve your screenplay with tone adjustments, smarter dialogue,
              and AI-powered refinement tools that keep your creative voice
              intact.
            </p>
          </div>
        </div>
      </section>
      <button className="btn btn-lg bg-[#2176FF] rounded-4xl px-6 py-3 text-center">
        Sign Up For Free
        <FaArrowRight />
      </button>
      <div className="my-6 space-y-5">
        <h2 className="text-3xl font-bold">Leading the charge in Ethical AI</h2>
        <p className="text-2xl">
          At NolanAI, we prioritize the ethical implications of AI in the
          creative industry. We believe in AI-powered tools that enhance
          human-driven storytelling.
        </p>
        <button className="btn bg-[#2176FF] rounded-4xl px-6 py-3 text-center">
          Learn More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
