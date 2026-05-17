"use client";
import React from "react";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";
import { cn } from "@/utils/cn";
import { ProjectMockup } from "@/components/molecules/ProjectMockup";

export const WorkDetailsCover = ({ project }) => {
  if (!project) return null;

  return (
    <NordicTabCard
      id={`${project.id}-cover`}
      bottomRightComponent={
        <div className="px-6 py-2">
          <span className="text-primary font-bold text-sm tracking-tight">
            {project.year}
          </span>
        </div>
      }
    >
      <ProjectMockup
        project={project}
        clipPathId={`clip-path-${project.id}-cover`}
      />
    </NordicTabCard>
  );
};
