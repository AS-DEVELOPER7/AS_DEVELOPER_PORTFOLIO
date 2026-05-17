"use client";
import React from "react";
import { motion } from "framer-motion";

export const WorkDetailsAbout = ({ project }) => {
  if (!project || !project.about) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="w-full grid grid-cols-4 gap-6 py-16 border-b border-primary/5"
    >
      {/* Structural Label Left Column */}
      <div className="col-span-1 pr-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-primary/30 sticky top-24">
          About
        </h2>
      </div>

      {/* Main Body Description Text Column (Split border design) */}
      <div className="col-span-3 border-l border-primary/5 pl-6 md:pl-10 flex flex-col gap-8 text-base text-primary/60 leading-relaxed font-normal antialiased">
        {project.about.map((p, index) => (
          <motion.p
            key={index}
            variants={paragraphVariants}
            className="transition-colors duration-500 hover:text-primary relative group cursor-default"
          >
            {/* Subtle left side highlight indicator on paragraph hover */}
            <span className="absolute left-[-25px] md:left-[-41px] top-1.5 w-[2px] h-0 group-hover:h-3/4 bg-accent-tertiary rounded-full transition-all duration-300 ease-out origin-top" />
            {p}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

