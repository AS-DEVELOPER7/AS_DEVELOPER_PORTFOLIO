"use client";
import React from "react";
import { motion } from "framer-motion";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectMockup } from "@/components/molecules/ProjectMockup";

export const WorkProjects = () => {
  const router = useRouter();
  return (
    // Spacing optimization: upgraded gap-6 to gap-12 to let individual pieces breathe
    <div className="flex flex-col w-full gap-12  mb-12">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full cursor-pointer"
          onClick={() => router.push(`/work/${project.id}`)}
        >
          <NordicTabCard
            id={project.id}
            className="group"
            topLeftComponent={
              <div className="px-6 py-2 flex items-center gap-1.5 cursor-pointer">
                <span className="text-primary font-bold text-sm tracking-tight transition-colors group-hover:text-accent-tertiary">
                  {project.name}
                </span>
                <span className="text-accent-tertiary font-bold text-sm tracking-tight transition-all duration-300 transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  &rarr;
                </span>
              </div>
            }
          >
            {/* Parent workspace wrapper container 
              Removed the group-hover:blur-xs layer so your project imagery stays tack-sharp on hover
            */}
            <ProjectMockup project={project} />
          </NordicTabCard>
        </motion.div>
      ))}
    </div>
  );
};
