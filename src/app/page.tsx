"use client";
import Hero from "@/components/Home/Hero";
import CoreFeatures from "@/components/Home/CoreFeatures";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero id="home" />
      <CoreFeatures id="core-features" />
    </div>
  );
}

