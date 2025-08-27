import { FaBolt, FaBoxOpen, FaWrench, FaBook } from "react-icons/fa";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function CoreFeatures({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-12 bg-white dark:bg-black/80 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Top Left: More height, less width */}
          <div className="flex-1 max-w-[380px]">
            <BackgroundGradient className="rounded-[22px] h-full">
              <Link
                href="/docs/getting-started"
                className="rounded-[18px] bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition min-h-[400px] h-full"
              >
                <FaBolt className="text-3xl text-blue-500 dark:text-blue-400" />
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white text-center">
                  Fast setup
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  Get started in seconds with minimal steps.
                </p>
              </Link>
            </BackgroundGradient>
          </div>
          {/* Top Right: More width, less height */}
          <div className="flex-1 min-w-[320px]">
            <BackgroundGradient className="rounded-[22px] h-full">
              <Link
                href="/docs/api"
                className="rounded-[18px] bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition min-h-[400px] h-full"
              >
                <FaBook className="text-3xl text-purple-500 dark:text-purple-400" />
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white text-center">
                  Rich API Docs
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  Comprehensive documentation for every feature.
                </p>
              </Link>
            </BackgroundGradient>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Bottom Left: More width, less height */}
          <div className="flex-1 min-w-[320px]">
            <BackgroundGradient className="rounded-[22px] h-full">
              <Link
                href="/docs/zero-config"
                className="rounded-[18px] bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition min-h-[400px] h-full"
              >
                <FaBoxOpen className="text-3xl text-green-500 dark:text-green-400" />
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white text-center">
                  Zero config
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  Works out of the box with smart defaults.
                </p>
              </Link>
            </BackgroundGradient>
          </div>
          {/* Bottom Right: More height, less width */}
          <div className="flex-1 max-w-[380px]">
            <BackgroundGradient className="rounded-[22px] h-full">
              <Link
                href="/docs/customization"
                className="rounded-[18px] bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition min-h-[400px] h-full"
              >
                <FaWrench className="text-3xl text-yellow-500 dark:text-yellow-400" />
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white text-center">
                  Customizable
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  Easily adapt to your workflow and needs.
                </p>
              </Link>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
