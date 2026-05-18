"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ProjectMockup = ({
  project,
  imageSrc,
  imageAlt,
  clipPathId,
  className,
  innerClassName,
}) => {
  if (!project) return null;

  const targetClipPathId =
    clipPathId === null ? null : clipPathId || `clip-path-${project.id}`;
  const targetImageSrc = imageSrc || project.imageSrc;
  const targetImageAlt = imageAlt || project.imageAlt;

  return (
    <div
      className={cn(
        "relative w-full aspect-16/10 flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300",
        project.bgColor,
        // Adjust responsive card interior padding profiles based on context layout types
        project.isMobile ? "p-4 sm:p-8 md:p-12" : "p-6 sm:p-10 md:p-16",
        className,
      )}
      style={
        targetClipPathId ? { clipPath: `url(#${targetClipPathId})` } : undefined
      }
    >
      <div
        className={cn(
          "relative shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden  transition-transform duration-700 ease-out group-hover:scale-[1.03]",
          project.borderColor,
          // Dynamic responsive blueprint sizing:
          // Mobile viewports scale dynamically through fluid column width steps, locking to standard 9:19.5 phone metrics
          // Desktop layouts maintain standardized device screen dimensions safely
          project.isMobile
            ? "w-[50%] min-[400px]:w-[35%] md:w-[28%] aspect-9/19.5 rounded-lg  border-neutral-700/40"
            : "w-[95%] sm:w-[90%] md:w-[85%] aspect-video rounded-lg  border",
          innerClassName,
        )}
      >
        <Image
          src={targetImageSrc}
          alt={targetImageAlt}
          fill
          priority={project.priority}
          // Responsive anchor optimizations: mobile stays centered inside phone chassis layout; web pins to the navigation bar top
          className={cn(
            "object-cover",
            project.isMobile ? "object-center" : "object-top",
          )}
        />
      </div>
    </div>
  );
};
