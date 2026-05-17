"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const SocialCard = ({ title, iconClass, href, index }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center justify-between p-4  rounded-2xl bg-neutral/40 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-neutral/60 hover:border-white/10 shadow-sm"
    >
      {/* Subtle Hover Radial Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_left,var(--tw-gradient-stops))] from-accetext-accent-tertiary/10 via-transparent to-transparent transition-opacity duration-500" />

      <div className="flex items-center gap-4 relative z-10">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 group-hover:bg-accetext-accent-tertiary/10 group-hover:border-accetext-accent-tertiary/20 transition-all duration-300">
          <i
            className={cn(
              iconClass,
              "text-lg text-primary/70 group-hover:text-accent-tertiary transition-colors duration-300",
            )}
          />
        </div>
        <span className="text-lg font-medium tracking-tight text-primary/80 group-hover:text-primary transition-colors duration-300">
          {title}
        </span>
      </div>

      {/* FontAwesome Arrow angled to 45 degrees */}
      <i className="fa-solid fa-arrow-right -rotate-45 text-primary/30 group-hover:text-accent-tertiary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 relative z-10" />
    </motion.a>
  );
};
