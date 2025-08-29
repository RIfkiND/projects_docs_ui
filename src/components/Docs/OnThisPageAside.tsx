"use client";

import { usePathname } from "next/navigation";

const routeTitles: Record<string, string[]> = {
  "/docs": ["Introduction", "Getting Started", "API Reference"],
  "/docs/getting-started": ["Overview", "Browser Support", "Installation"],
  "/docs/api": ["Endpoints", "Authentication", "Examples"],
  // Add more routes and their section titles as needed
};

export default function OnThisPageAside() {
  const pathname = usePathname();
  const items = routeTitles[pathname] || ["On this page"];

  return (
    <aside className="fixed right-0 top-24 md:top-32 w-64 max-w-xs pr-8 md:pr-12 z-30 flex flex-col items-end">
      <div className="pl-4 border-l-2  w-full">
        <h2 className="text-lg font-bold tracking-wide text-zinc-800 dark:text-zinc-100 mb-4">
          {pathname.replace("/docs", "").replace("/", "") || "Docs"}
        </h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item}>
              <span className="block text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
