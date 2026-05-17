"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { TracingBeam } from "@/components/atoms/ui/tracing-beam";
import { SocialSection } from "@/components/organisms/home/SocialSection";
import { Footer } from "@/components/organisms/Footer";
import { WorkDetailsHero } from "@/components/organisms/work-details/WorkDetailsHero";
import { WorkDetailsCover } from "@/components/organisms/work-details/WorkDetailsCover";
import { WorkDetailsSpecs } from "@/components/organisms/work-details/WorkDetailsSpecs";
import { WorkDetailsAbout } from "@/components/organisms/work-details/WorkDetailsAbout";
import { WorkDetailsGallery } from "@/components/organisms/work-details/WorkDetailsGallery";
import { WorkDetailsNext } from "@/components/organisms/work-details/WorkDetailsNext";

export default function WorkDetailPage({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const id = resolvedParams.id;

  // Fallback default redirect to tarmal if invalid slug is provided
  const project = projects.find((p) => p.id === id) || projects[0];
  const nextProject = projects.find((p) => p.id === project.nextId);

  return (
    <main className="flex bg-secondary md:rounded-lg transition-all duration-500 min-h-screen p-4 flex-col overflow-clip max-w-7xl mx-auto">
      {/* 1. Header Card */}
      <TracingBeam className="z-50">
        <div className="flex flex-col w-full gap-16">
          <div>
            <WorkDetailsHero project={project} />
          </div>

          <div>
            <WorkDetailsCover project={project} />
          </div>

          {/* Specifications Grid */}
          <WorkDetailsSpecs project={project} />

          {/* About Section */}
          <WorkDetailsAbout project={project} />

          {/* Gallery Showcase Section */}
          <WorkDetailsGallery project={project} />

          {/* Next Project Showcase Card */}
          {nextProject && (
            <WorkDetailsNext project={project} nextProject={nextProject} />
          )}

          {/* BLOCK 4: Socials */}
          <div className="mb-20 w-full ">
            <SocialSection />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
