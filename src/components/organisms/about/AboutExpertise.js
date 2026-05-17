"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";
import { GlowingEffect } from "@/components/atoms/ui/glowing-effect";
import { cn } from "@/utils/cn";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/skills";

export const AboutExpertise = () => {

  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skillCategories[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="w-full space-y-8 "
    >
      {" "}
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2  "
      >
        <h2 className="text-2xl  font-bold tracking-tight text-primary">
          Core Expertise
        </h2>
        <p className="text-primary/60 text-base font-medium  leading-relaxed">
          A curated suite of modern technologies, frameworks, and methodologies
          that I leverage to engineer premium, pixel-perfect user experiences.
        </p>
      </motion.div>
      {/* Animated Tag Switcher Segmented Control */}
      <div className="w-full select-none">
        <div className="flex gap-1.5 p-1 bg-primary/3 border border-primary/5 rounded-xl w-full justify-between select-none">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "relative px-3 py-2.5 text-[10px] sm:px-4 sm:py-2.5 sm:text-xs font-mono font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg flex-1 text-center cursor-pointer border-none bg-transparent outline-none",
                activeTab === idx
                  ? "text-white font-black"
                  : "text-primary/40 hover:text-primary/70",
              )}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="activeExpertiseTab"
                  className="absolute inset-0 bg-accent-tertiary rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category.tag}
            </button>
          ))}
        </div>
      </div>
      {/* Skill Card Display with Smooth Transition */}
      <div className="w-full min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full h-full"
          >
            <NordicTabCard
              id={`expertise-card-${activeTab}`}
              className="w-full h-full"
              childrenClassName="p-5 pt-10 pb-3 flex flex-col w-full h-full"
              topLeftComponent={
                <div className="px-5 py-2 flex items-center justify-center border-r border-b border-primary/[0.02]">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-primary/40">
                    {activeCategory.title}
                  </span>
                </div>
              }
              svgChildren={(safeId) => (
                <foreignObject
                  width="100%"
                  height="100%"
                  mask={`url(#stroke-mask-${safeId})`}
                >
                  <div className="w-full h-full relative">
                    <GlowingEffect
                      blur={0}
                      borderWidth={1}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      fillMode={true}
                    />
                  </div>
                </foreignObject>
              )}
            >
              {/* Category Main Header Title */}
              {/* <h3 className="text-xs font-bold tracking-[0.15em] text-primary/30 uppercase mb-4 pl-1">
                {activeCategory.title}
              </h3> */}

              {/* Structured row stack lists replace clunky button pills */}
              <div className="flex flex-col w-full  pt-2">
                {activeCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center justify-between py-2.5 not-last:border-b border-primary/5 px-2 hover:bg-primary/1.5 transition-all duration-300 ease-out cursor-default select-none relative"
                  >
                    {/* Left Accent indicator line */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-3/5 bg-accent-tertiary/80 rounded-full transition-all duration-300 ease-out origin-center" />

                    <div className="flex items-start gap-3.5 pl-1.5 pr-2 w-[70%]">
                      {typeof skill.icon === "string" ? (
                        <i className={cn(skill.icon, "text-sm text-primary/30 group-hover:text-accent-tertiary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 mt-1 shrink-0")} />
                      ) : (
                        <skill.icon className="w-4 h-4 text-primary/30 group-hover:text-accent-tertiary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 mt-0.5 shrink-0" />
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium tracking-tight text-primary/80 group-hover:text-primary transition-colors duration-300 truncate">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-normal tracking-wide text-primary/30 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all duration-500 ease-out mt-0.5 leading-snug">
                          {skill.desc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Minimalist dot proficiency indicator */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-1 h-1 rounded-[1px] transition-all duration-500 ease-out",
                              i < skill.score
                                ? "bg-primary/20 group-hover:bg-accent-tertiary group-hover:scale-110"
                                : "bg-primary/5",
                            )}
                            style={{
                              transitionDelay: `${i * 30}ms`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Subtle geometric arrow pointer interactive feedback indicator */}
                      <ArrowRight className="w-3.5 h-3.5 text-accent-tertiary opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </div>
                ))}
              </div>
            </NordicTabCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AboutExpertise;
