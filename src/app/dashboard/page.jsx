"use client"; // ✅ Mark as client component

import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setGeneratedText("");
    setError("");

    try {
      const res = await fetch("/api/generate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setGeneratedText(data.text);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <FaRobot className="text-primary" /> AI Text Generator
        </h1>

        <textarea
          className="textarea textarea-bordered w-full h-32 mb-4 p-3"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="btn btn-primary w-full mb-4"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Text"}
        </button>

        {error && (
          <div className="p-4 bg-red-200 text-red-800 rounded-lg mb-4">
            {error}
          </div>
        )}

        {generatedText && (
          <div className="p-4 bg-neutral text-neutral-content rounded-lg">
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
