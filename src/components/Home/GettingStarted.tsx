"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function GettingStarted({ id }: { id?: string }) {
  const code = `// Example: Fetch data from your backend API
fetch("https://your-backend.com/api/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(data => {
    console.log("API response:", data);
  })
  .catch(err => {
    console.error("API error:", err);
  });
`;

  return (
    <section id={id} className="bg-white dark:bg-black py-16">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto w-full mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
          Get Started in Minutes
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Everything you need to build, customize, and launch quickly.
        </p>
        <div className="flex justify-center">
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 rounded-full mb-4"></span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 rounded-3xl bg-white dark:bg-zinc-800/80 shadow-2xl p-12">
        {/* Left: Code block */}
        <div className="flex-1 w-full">
          <CodeBlock
            language="js"
            filename="fetch-api-example.js"
            highlightLines={[1, 2, 7]}
            code={code}
          />
        </div>
        {/* Right: Text, heading, and image/video */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Getting Started
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            Kickstart your integration with our API in just a few steps. Watch
            the quick video or check the code example to get up and running
            fast!
          </p>
          {/* Example: Replace with your own image or video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 mb-2">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Getting Started Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
