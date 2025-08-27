import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="h-[40rem] w-full rounded-md bg-neutral-50 dark:bg-black/80 relative flex flex-col items-center justify-center antialiased transition-colors"
    >
      <div className="max-w-2xl mx-auto p-4 mt-12">
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-200 dark:to-neutral-600 text-center font-sans font-bold transition-colors">
          Docs That Get Out of Your Way.
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto my-4 text-lg text-center relative z-10 font-light transition-colors">
          Learn{" "}
          <span className="font-semibold text-black dark:text-white">
            [Project Name]
          </span>{" "}
          with clear guides, API references, and real-world examples — written
          for developers, by developers.
        </p>
        <div className="flex justify-center gap-4 mt-8 relative z-10">
          <a
            href="#"
            className="px-6 py-2 rounded-lg bg-teal-600 dark:bg-teal-500 text-white font-semibold shadow hover:bg-teal-700 dark:hover:bg-teal-600 transition"
          >
            Get Started
          </a>
          <a
            href="/docs"
            className="px-6 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-900 transition"
          >
            View Docs
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
