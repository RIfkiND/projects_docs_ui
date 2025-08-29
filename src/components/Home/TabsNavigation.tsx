"use client";

import { Tabs } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export default function TabsNavigation({ id }: { id?: string }) {
  const tabs = [
    {
      title: "Getting Started",
      value: "getting-started",
      content: (
        <div className="w-full h-full rounded-2xl p-8 md:p-12 bg-gradient-to-br from-sky-700 to-cyan-900 flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Getting Started
          </h2>
          <p className="text-white mb-4">
            Kickstart your journey with our platform using this simple setup
            example:
          </p>
          <CodeBlock
            language="js"
            filename="fetch-api-example.js"
            code={`// Example: Fetch data from your backend API
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
  });`}
            highlightLines={[1, 2, 7]}
          />
        </div>
      ),
    },
    {
      title: "Guides & Tutorials",
      value: "guides",
      content: (
        <div className="w-full h-full rounded-2xl p-8 md:p-12 bg-gradient-to-br from-purple-700 to-violet-900 flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Guides & Tutorials
          </h2>
          <p className="text-white mb-4">
            Step-by-step guides to help you master the platform.
          </p>
          <CodeBlock
            language="bash"
            filename="install.sh"
            code={`# Install the CLI
npm install -g your-cli

# Initialize your project
your-cli init my-project`}
            highlightLines={[1, 4]}
          />
        </div>
      ),
    },
    {
      title: "API Reference",
      value: "api-reference",
      content: (
        <div className="w-full h-full rounded-2xl p-8 md:p-12 bg-gradient-to-br from-green-700 to-emerald-900 flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            API Reference
          </h2>
          <p className="text-white mb-4">
            Comprehensive documentation for every API endpoint.
          </p>
          <CodeBlock
            language="json"
            filename="api-response.json"
            code={`{
  "status": "success",
  "data": {
    "id": 123,
    "name": "Sample Item"
  }
}`}
            highlightLines={[2, 5]}
          />
        </div>
      ),
    },
    {
      title: "Examples",
      value: "examples",
      content: (
        <div className="w-full h-full rounded-2xl p-8 md:p-12 bg-gradient-to-br from-yellow-600 to-orange-700 flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Examples
          </h2>
          <p className="text-white mb-4">
            Explore practical code examples for common use cases.
          </p>
          <CodeBlock
            language="tsx"
            filename="example.tsx"
            code={`import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me!</Button>;
}`}
            highlightLines={[1, 4]}
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id={id}
      className="bg-white dark:bg-black py-20 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto w-full text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 dark:from-blue-300 dark:via-blue-500 dark:to-cyan-500 bg-clip-text text-transparent mb-2">
            Explore the Docs
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Find guides, API references, and practical examples to get the most
            out of the platform.
          </p>
        </div>
        <div className="h-[28rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
