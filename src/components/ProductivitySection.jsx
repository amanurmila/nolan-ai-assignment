"use client";
import { FaRunning, FaPiggyBank, FaBolt, FaDiscord } from "react-icons/fa";

export default function ProductivitySection() {
  return (
    <section className="bg-[#0B0E14] text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-14">
          Skyrocket your <span className="text-[#ffffff]">productivity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div>
            <div className="mx-auto bg-[#111319] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FaRunning className="text-orange-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-1">90% faster</h3>
            <p className="text-gray-400">Speed Through Project Completion</p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="mx-auto bg-[#111319] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FaPiggyBank className="text-orange-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-1">80% Lower Costs</h3>
            <p className="text-gray-400">Halve Your Expenses</p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="mx-auto bg-[#111319] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FaBolt className="text-orange-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Exceptional Quality</h3>
            <p className="text-gray-400">
              Surpass the Highest Industry Standards
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="https://discord.gg" // <-- Replace this
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#2563eb] text-white hover:bg-[#1e40af] gap-2 px-6"
          >
            <FaDiscord className="text-xl" />
            Join Us On Discord
          </a>
        </div>
      </div>
    </section>
  );
}
