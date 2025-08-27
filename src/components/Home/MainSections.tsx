import Link from "next/link";
import { FaPlayCircle, FaBookOpen, FaCode, FaListAlt, FaQuestionCircle } from "react-icons/fa";

export default function MainSections({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-12 bg-gray-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-black dark:text-white">
          Documentation Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/docs/getting-started" className="group rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <FaPlayCircle className="text-3xl text-blue-500 group-hover:scale-110 transition" />
            <span className="mt-4 font-semibold text-black dark:text-white">Getting Started</span>
            <span className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">Start here to set up and use the project.</span>
          </Link>
          <Link href="/docs/guides" className="group rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <FaBookOpen className="text-3xl text-green-500 group-hover:scale-110 transition" />
            <span className="mt-4 font-semibold text-black dark:text-white">Guides & Tutorials</span>
            <span className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">Step-by-step guides and tutorials.</span>
          </Link>
          <Link href="/docs/api" className="group rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <FaCode className="text-3xl text-purple-500 group-hover:scale-110 transition" />
            <span className="mt-4 font-semibold text-black dark:text-white">API Reference</span>
            <span className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">Detailed API documentation.</span>
          </Link>
          <Link href="/docs/examples" className="group rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <FaListAlt className="text-3xl text-yellow-500 group-hover:scale-110 transition" />
            <span className="mt-4 font-semibold text-black dark:text-white">Examples</span>
            <span className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">Practical code examples and demos.</span>
          </Link>
          <Link href="/docs/faq" className="group rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <FaQuestionCircle className="text-3xl text-pink-500 group-hover:scale-110 transition" />
            <span className="mt-4 font-semibold text-black dark:text-white">FAQ</span>
            <span className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">Frequently asked questions.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}