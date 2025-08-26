
import Hero from "@/components/Home/Hero";
import QuickstartPreview from "@/components/Home/QuickstartPreview";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero id="home" />
      <QuickstartPreview id="quickstart" />
    </div>
  );
}
