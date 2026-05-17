"use client";
import React from "react";
import { motion } from "framer-motion";

export const WorkDetailsSpecs = ({ project }) => {
  if (!project) return null;

  const specRows = [
    { label: "Client", value: project.client },
    { label: "Service", value: project.service },
    { label: "Year", value: project.year || "2026" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="w-full border-t border-primary/5 mt-4 mb-8"
    >
      {specRows.map((row, idx) => (
        <motion.div
          key={idx}
          variants={rowVariants}
          className="flex items-center justify-between py-5 border-b border-primary/5 group/spec hover:bg-primary/[0.01] px-2 transition-colors duration-300"
        >
          {/* Label Styling */}
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary/40 group-hover/spec:text-primary/60 transition-colors duration-300">
            {row.label}
          </span>
          {/* Value Styling */}
          <span className="text-sm font-semibold tracking-tight text-primary">
            {row.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};
