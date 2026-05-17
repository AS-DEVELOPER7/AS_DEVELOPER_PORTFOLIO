"use client";
import React from "react";
import { MarqueeLogos } from "@/components/molecules/MarqueeLogos";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export const SkillsSection = () => {
  // Extract all individual skills dynamically from the centralized skills data
  const skills = skillCategories.flatMap((category) => category.skills);

  return (
    <div className="w-full -mt-10">
      <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className=""
      >
        <MarqueeLogos items={skills} />
      </motion.section>
    </div>
  );
};
