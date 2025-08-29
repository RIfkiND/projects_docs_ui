import LogoLoop from "@/components/Bits/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiPython,
  SiNodedotjs,
  SiVuedotjs,
  SiDjango,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGo />, title: "Golang", href: "https://go.dev" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
  { node: <SiDjango />, title: "Django", href: "https://djangoproject.com" },
];

export default function Logo({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="bg-white dark:bg-black py-20"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex flex-col items-center justify-center rounded-lg">
        {/* Gradient Heading */}
        <h2 className="text-5xl font-bold mb-6 pb-4 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500 bg-clip-text text-transparent tracking-tight text-center">
          Powered by Modern Technologies, Languages, and Frameworks Loved by
          Developers
        </h2>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
