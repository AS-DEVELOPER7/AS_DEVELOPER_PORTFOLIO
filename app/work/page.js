"use client";
import React from "react";
import { Footer } from "@/components/organisms/Footer";
import { SocialSection } from "@/components/organisms/home/SocialSection";
import { TracingBeam } from "@/components/atoms/ui/tracing-beam";
import { WorkHeader } from "@/components/organisms/work/WorkHeader";
import { WorkProjects } from "@/components/organisms/work/WorkProjects";

export default function WorkPage() {
  return (
    <main className="flex bg-secondary md:rounded-lg transition-all duration-500 min-h-screen p-4 flex-col overflow-clip max-w-7xl mx-auto">
      {/* 1. Header Card */}
      <TracingBeam className="z-50">
        <div className="flex flex-col w-full">
          <div className="mb-24  w-full">
            <WorkHeader />
          </div>

          {/* 2. Projects & Social Grid wrapped in TracingBeam */}
          <div className="mb-24  w-full">
            <WorkProjects />
          </div>
          <div className="mb-24  w-full">
            <SocialSection />
          </div>

          {/* 3. Footer */}
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
