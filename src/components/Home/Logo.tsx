import LogoLoop from "@/components/Bits/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



export default function Logo({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="bg-white dark:bg-black "
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center rounded-lg">
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