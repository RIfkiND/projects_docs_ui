"use client";

export default function Docs() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="max-w-3xl w-full ml-80 xl:ml-[20rem] flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-2">Getting Started</h1>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          <b>Vite</b> (French word for &quot;quick&quot;, pronounced /vit/, like &quot;veet&quot;)
          is a build tool that aims to provide a faster and leaner development
          experience for modern web projects. It consists of two major parts:
        </p>
        <ul className="list-disc pl-6">
          <li>
            A dev server that provides rich feature enhancements over native ES
            modules, for example extremely fast Hot Module Replacement (HMR).
          </li>
          <li>
            A build command that bundles your code with Rollup, pre-configured
            to output highly optimized static assets for production.
          </li>
        </ul>
    
      </div>
    </div>
  );
}
