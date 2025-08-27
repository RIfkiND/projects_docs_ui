"use client";
import Hero from "@/components/Home/Hero";
import CoreFeatures from "@/components/Home/CoreFeatures";
import MainSections from "@/components/Home/MainSections";
import Logo from "@/components/Home/Logo";
import Faq from "@/components/Home/Faq";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero id="home" />
      <CoreFeatures id="core-features" />
      <Logo id="logo" />
      <MainSections id="main-sections" />
      <Faq id="faq" />
    </div>
  );
}

