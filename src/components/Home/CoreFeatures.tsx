import { FaBolt, FaBoxOpen, FaWrench, FaBook } from "react-icons/fa";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const features = [
  {
    icon: <FaBolt className="text-3xl text-blue-500 dark:text-blue-400" />,
    title: "Fast setup",
    desc: "Get started in seconds with minimal steps.",
    href: "/docs/getting-started",
    className: "md:col-span-2", // Large card
  },
  {
    icon: <FaBoxOpen className="text-3xl text-green-500 dark:text-green-400" />,
    title: "Zero config",
    desc: "Works out of the box with smart defaults.",
    href: "/docs/zero-config",
    className: "", // Normal card
  },
  {
    icon: (
      <FaWrench className="text-3xl text-yellow-500 dark:text-yellow-400" />
    ),
    title: "Customizable",
    desc: "Easily adapt to your workflow and needs.",
    href: "/docs/customization",
    className: "", // Normal card
  },
  {
    icon: <FaBook className="text-3xl text-purple-500 dark:text-purple-400" />,
    title: "Rich API Docs",
    desc: "Comprehensive documentation for every feature.",
    href: "/docs/api",
    className: "md:col-span-2", // Large card
  },
];

export default function CoreFeatures({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-12 bg-white dark:bg-black/80 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[minmax(220px,1fr)]">
          {features.map((f) => (
            <BackgroundGradient
              key={f.title}
              className={`rounded-[22px] h-full ${f.className}`}
            >
              <Link
                href={f.href}
                className="rounded-[18px] bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition min-h-[220px] h-full"
              >
                {f.icon}
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white text-center">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  {f.desc}
                </p>
              </Link>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}