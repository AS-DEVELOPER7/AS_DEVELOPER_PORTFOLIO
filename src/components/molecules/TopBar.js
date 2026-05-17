"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "../atoms/ThemeToggle";

import { motion, AnimatePresence } from "framer-motion";
import { HeroDropdown } from "./HeroDropdown";

export const TopBar = ({
  leftIslandRef,
  rightIslandRef,
  isMenuOpen,
  setIsMenuOpen,
  measurements,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "flex items-start justify-between w-full   relative z-50 select-none ",
          className,
        )}
      >
        {/* Left Island Content */}
        <div
          ref={leftIslandRef}
          className="flex items-center gap-6 transition-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center transition-none">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full transition-none" />
            </div>
            <span className="text-primary font-semibold text-lg tracking-tight">
              AS-DEVELOPER
            </span>
          </div>

          {/* Toggle */}
          <ThemeToggle />

          {/* Nordic Precision Status */}
          <div className="hidden sm:flex  items-center gap-2">
            <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
            <span className="text-tertiary text-sm font-medium tracking-wide">
              Available
            </span>
          </div>
        </div>

        {/* Right Island Content */}
        <div ref={rightIslandRef} className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "text-base font-medium tracking-wide transition-all duration-300 min-w-[60px] flex justify-center items-center overflow-hidden h-8",
              isMenuOpen ? "text-primary" : "text-primary hover:opacity-100",
            )}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isMenuOpen ? "close" : isHovered ? "open" : "menu"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mr-2"
              >
                {isMenuOpen ? "Close" : isHovered ? "Open" : "Menu"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <HeroDropdown isMenuOpen={isMenuOpen} topOffset={37} />
    </>
  );
};
