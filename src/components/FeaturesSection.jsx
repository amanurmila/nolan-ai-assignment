"use client";
import { useState } from "react";
import {
  FiEdit,
  FiUsers,
  FiFilm,
  FiCalendar,
  FiImage,
  FiClipboard,
  FiZap,
} from "react-icons/fi";

const tabData = {
  Screenwriters: [
    {
      icon: <FiEdit />,
      text: "Write and experiment for a free script editor with affordable Premium plans.",
    },
    {
      icon: <FiZap />,
      text: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
    },
    {
      icon: <FiClipboard />,
      text: "Cut down on tedious tasks with built-in automated script formatting.",
    },
    {
      icon: <FiEdit />,
      text: "Write and experiment for a free script editor with affordable Premium plans.",
    },
    {
      icon: <FiZap />,
      text: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
    },
    {
      icon: <FiClipboard />,
      text: "Cut down on tedious tasks with built-in automated script formatting.",
    },
  ],
  Producers: [
    {
      icon: <FiFilm />,
      text: "Quickly import and work on existing scripts, streamlining the pre-production process.",
    },
    {
      icon: <FiCalendar />,
      text: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
    },
    {
      icon: <FiImage />,
      text: "Access a vast library of film industry images, including posters and cast member photos.",
    },
    {
      icon: <FiFilm />,
      text: "Quickly import and work on existing scripts, streamlining the pre-production process.",
    },
    {
      icon: <FiCalendar />,
      text: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
    },
    {
      icon: <FiImage />,
      text: "Access a vast library of film industry images, including posters and cast member photos.",
    },
  ],
  Directors: [
    {
      icon: <FiUsers />,
      text: "Collaborate with your team and get feedback from peers.",
    },
    {
      icon: <FiZap />,
      text: "Get AI suggestions for scene structure and direction ideas.",
    },
    {
      icon: <FiClipboard />,
      text: "Plan your shots and scenes visually using built-in storyboard tools.",
    },
    {
      icon: <FiUsers />,
      text: "Collaborate with your team and get feedback from peers.",
    },
    {
      icon: <FiZap />,
      text: "Get AI suggestions for scene structure and direction ideas.",
    },
    {
      icon: <FiClipboard />,
      text: "Plan your shots and scenes visually using built-in storyboard tools.",
    },
  ],
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("Screenwriters");

  return (
    <section className="bg-[#0B0E14] text-white py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">Up your </span>
          <span className="text-[#3B82F6]">Game</span>
          <span className="text-white"> with NolanAI</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          NolanAI is the ultimate tool for filmmakers looking to improve their
          craft. With its AI-powered features and user-friendly interface, it
          helps you bring your stories to life efficiently while respecting your
          creative voice.
        </p>

        <div className="flex justify-center gap-6 text-lg font-semibold mb-8 border-b border-gray-700 pb-4">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition duration-300 ${
                activeTab === tab
                  ? "text-[#3B82F6] border-b-2 border-[#3B82F6]"
                  : "text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {tabData[activeTab].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="bg-[#1C1F26] p-3 rounded-full text-[#3B82F6] text-xl">
                {item.icon}
              </div>
              <p className="text-base text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="btn bg-[#3B82F6] hover:bg-[#2563eb] text-white px-6">
            All Features →
          </button>
        </div>
      </div>
    </section>
  );
}
