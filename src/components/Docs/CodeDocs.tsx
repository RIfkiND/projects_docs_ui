"use client";

import { CodeBlock } from "@/components/ui/code-block";

export default function CodeDocs() {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
      <div className="md:col-span-2 w-full">
        <h1 className="text-2xl font-bold mb-4">Documentation</h1>
        <CodeBlock
          language="js"
          filename="fetch-api-example.js"
          highlightLines={[1, 2, 7]}
          code={code}
        />
      </div>
    </div>
  );
}
