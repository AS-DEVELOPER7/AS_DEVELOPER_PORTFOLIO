"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/organisms/Hero";
import { TextGenerateEffect } from "@/components/atoms/ui/text-generate-effect";
import { CanvasText } from "@/components/atoms/ui/canvas-text";

export const WorkDetailsHero = ({ project }) => {
  if (!project) return null;

  return (
    <Hero>
      <div className=" flex py-5 flex-col gap-10 w-full font-hanken-grotesk">
        {/* Title & Introduction Block */}

        <CanvasText
          text={project.name}
          className="text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tight text-primary mb-4 font-outfit "
          backgroundClassName="bg-blue-600 dark:bg-blue-700"
          colors={[
            "rgba(0, 153, 255, 1)",
            "rgba(0, 153, 255, 0.9)",
            "rgba(0, 153, 255, 0.8)",
            "rgba(0, 153, 255, 0.7)",
            "rgba(0, 153, 255, 0.6)",
            "rgba(0, 153, 255, 0.5)",
            "rgba(0, 153, 255, 0.4)",
            "rgba(0, 153, 255, 0.3)",
            "rgba(0, 153, 255, 0.2)",
            "rgba(0, 153, 255, 0.1)",
          ]}
          lineGap={4}
          animationDuration={10} // Sped up slightly so it's noticeable but smooth
        />
        <TextGenerateEffect
          words={project.subtext}
          className=" leading-relaxed font-normal max-w-2xl transition-colors"
          // duration={0.8}
        />

        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(project.url, "_blank")}
            className="group relative flex cursor-pointer items-center gap-2 h-12 w-full md:w-auto justify-center px-8 rounded-xl bg-primary text-secondary font-medium transition-all duration-300 overflow-hidden"
          >
            {/* Subtle Shimmer Overlay */}
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span className="relative z-10">
              {project.isMobile ? "Download App" : "Preview Website"}
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>
    </Hero>
  );
};
