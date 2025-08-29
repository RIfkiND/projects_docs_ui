export default function Introduction({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="w-full max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start"
    >
      {/* Main Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
          Welcome to the Docs Dashboard
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          This dashboard provides everything you need to get started, explore
          features, and integrate with our platform. Use the sidebar to navigate
          guides, API references, and practical examples.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-sky-500 mb-2">🚀</span>
            <h3 className="font-semibold mb-1">Quick Start</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
              Get up and running in minutes with our step-by-step guide.
            </p>
          </div>
          <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-500 mb-2">📚</span>
            <h3 className="font-semibold mb-1">Comprehensive Guides</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
              Learn about features, configuration, and best practices.
            </p>
          </div>
          <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-cyan-500 mb-2">🔌</span>
            <h3 className="font-semibold mb-1">API & Integration</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
              Explore our API reference and integration examples.
            </p>
          </div>
        </div>
      </div>
      {/* Aside: On this page / Like this page */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-8">
          <div className="bg-white dark:bg-zinc-900 shadow rounded-xl p-4">
            <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
              On this page
            </span>
            <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
              <li>
                <a href="#quick-start" className="hover:underline">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="#comprehensive-guides" className="hover:underline">
                  Comprehensive Guides
                </a>
              </li>
              <li>
                <a href="#api-integration" className="hover:underline">
                  API & Integration
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-zinc-900 shadow rounded-xl p-4">
            <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
              Like this page?
            </span>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
              aria-label="Like this page"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              Like
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
