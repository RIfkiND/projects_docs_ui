import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-zinc-900 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} YourProjectName. MIT License.
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          v1.0.0
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="hover:underline">
            Docs Home
          </Link>
          <Link href="/docs/api" className="hover:underline">
            API
          </Link>
          <a
            href="https://github.com/your-org/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}