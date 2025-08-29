"use client";
import Hero from "@/components/Home/Hero";
import CoreFeatures from "@/components/Home/CoreFeatures";
import Logo from "@/components/Home/Logo";
import Faq from "@/components/Home/Faq";
import GettingStarted from "@/components/Home/GettingStarted";
import CommunityCard from "@/components/Home/CommunityCard";
import TabsNavigation from "@/components/Home/TabsNavigation";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero id="home" />
      <GettingStarted id="getting-started" />
      <CoreFeatures id="core-features" />
      <Logo id="logo" />
      <TabsNavigation id="tabs-navigation" />
      <CommunityCard id="community" />
      <Faq id="faq" />
    </div>
  );
}

