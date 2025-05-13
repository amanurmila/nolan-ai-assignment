"use client";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function GeminiTextBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error("Failed to generate");

      const data = await res.json();
      setResponse(data.text || "No response received");
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaRobot /> Gemini Text Generator
      </h2>

      <textarea
        className="textarea textarea-bordered w-full mb-4"
        placeholder="Enter your prompt..."
        rows={6}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="btn btn-primary w-full mb-4"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (
        <div className="p-4 bg-base-200 rounded-lg">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
