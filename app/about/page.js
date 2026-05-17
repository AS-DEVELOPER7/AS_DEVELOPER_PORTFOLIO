"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AboutHero } from "@/components/organisms/about/AboutHero";
import { Footer } from "@/components/organisms/Footer";
import { SocialSection } from "@/components/organisms/home/SocialSection";
import { TracingBeam } from "@/components/atoms/ui/tracing-beam";
import { AboutPortrait } from "@/components/organisms/about/AboutPortrait";
import { AboutExpertise } from "@/components/organisms/about/AboutExpertise";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="flex bg-secondary md:rounded-lg transition-all duration-500 min-h-[200vh] p-4 flex-col overflow-clip">
      <TracingBeam className="z-50">
        {/* Removed the global gap-32. We now control spacing explicitly per block. */}
        <div className="flex flex-col w-full">
          <div className="mb-24  w-full">
            <AboutHero />
          </div>

          {/* Large Rounded Portrait Block */}
          <div className="mb-24  w-full">
            <AboutPortrait />
          </div>

          {/* Core Expertise (Skills) Grid */}
          <div className="mb-24  w-full">
            <AboutExpertise />
          </div>

          {/* BLOCK 4: Socials */}
          <div className="mb-20 w-full">
            <SocialSection />
          </div>

          {/* Footer component */}
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
