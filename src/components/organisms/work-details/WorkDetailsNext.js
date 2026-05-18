"use client";
import React from "react";
import Link from "next/link";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";
import { SectionBadge } from "@/components/atoms/ui/section-badge";
import { ProjectMockup } from "@/components/molecules/ProjectMockup";

export const WorkDetailsNext = ({ project, nextProject }) => {
  if (!project || !nextProject) return null;

  return (
    <div className="flex flex-col gap-8 w-full pt-12">
      <SectionBadge title="Next Project" />

      <Link href={`/work/${project.nextId}`} className="w-full group">
        <NordicTabCard
          id={`${project.nextId}-next-teaser`}
          topLeftComponent={
            <div className="px-6 py-2 flex items-center gap-1.5 cursor-pointer">
              <span className="text-primary font-bold text-sm tracking-tight transition-colors group-hover:text-accent-tertiary">
                {project.nextName}
              </span>
              <span className="text-accent-tertiary font-bold text-sm tracking-tight transition-all duration-300 transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                &rarr;
              </span>
            </div>
          }
        >
          <ProjectMockup
            project={nextProject}
            clipPathId={`clip-path-${project.nextId}-next-teaser`}
          />
        </NordicTabCard>
      </Link>
    </div>
  );
};
