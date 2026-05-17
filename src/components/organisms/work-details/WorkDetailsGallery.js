"use client";
import React from "react";
import { SectionBadge } from "@/components/atoms/ui/section-badge";
import { ProjectMockup } from "@/components/molecules/ProjectMockup";

export const WorkDetailsGallery = ({ project }) => {
  if (!project || !project.gallery) return null;

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header Badge */}
      <SectionBadge title="Gallery" />

      {/* Gallery Images Grid */}
      <div className="grid grid-cols-2 gap-6 w-full">
        {project.gallery.map((img, idx) => (
          <ProjectMockup
            key={idx}
            project={project}
            imageSrc={img}
            imageAlt={`${project.name} Gallery ${idx + 1}`}
            clipPathId={null}
            className={project.isMobile ? "p-12  rounded-lg" : "p-6 rounded-lg"}
            innerClassName={
              project.isMobile
                ? "w-[40%] aspect-9/19.5 rounded-lg border-neutral-700/40"
                : "w-[90%]  aspect-video rounded-lg"
            }
          />
        ))}
      </div>
    </div>
  );
};
