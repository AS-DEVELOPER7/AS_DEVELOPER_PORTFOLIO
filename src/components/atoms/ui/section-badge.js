"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/utils/cn";

export const SectionBadge = ({
  title,
  showIcon = true,
  icon: Icon = ArrowDown,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "bg-neutral rounded-xl py-6 flex items-center justify-center gap-2 group transition-all duration-300 border border-primary/5",
        className,
      )}
    >
      <span className="text-primary/80 font-bold uppercase tracking-wider text-sm">
        {title}
      </span>
      {showIcon && Icon && (
        <Icon className="w-4 h-4 text-primary/60 group-hover:translate-y-1 transition-transform" />
      )}
    </motion.div>
  );
};
