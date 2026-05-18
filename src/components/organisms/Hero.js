"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/atoms/ui/background-beams";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { HeroDropdown } from "@/components/molecules/HeroDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Hero = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      {/* Background Beams */}
      <div className="absolute z-10 inset-0 pointer-events-none overflow-hidden">
        <BackgroundBeams />
      </div>

      <div className="relative z-0 w-full flex flex-col my-auto transition-all duration-500 ">
        {/* Main Shaped Container */}
        <NordicTabCard
          className="relative w-full transition-all duration-500"
          topLeftComponent={
            <div className="flex items-center  gap-2 sm:gap-6 select-none pb-3 pr-3">
              <Link href="/" className="flex items-center gap-2.5">
                <img src="/AS.svg" alt="AS Logo" className="w-6 h-6 object-contain" />
                <span className="text-primary font-semibold text-sm sm:text-lg tracking-tight hidden min-[380px]:inline-block">
                  AS-DEVELOPER
                </span>
              </Link>
              <ThemeToggle />
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
                <span className="text-tertiary text-sm font-medium tracking-wide">
                  Available
                </span>
              </div>
            </div>
          }
          topRightComponent={
            <div className="flex items-center select-none p-3 px-4 pt-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                  "text-base font-medium cursor-pointer tracking-wide transition-all duration-300 flex justify-center items-center overflow-hidden h-8 outline-none",
                  isMenuOpen
                    ? "text-primary"
                    : "text-primary hover:opacity-100",
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isMenuOpen ? "close" : isHovered ? "open" : "menu"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {isMenuOpen ? "Close" : isHovered ? "Open" : "Menu"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          }
          svgChildren={(safeId, dimensions, widths) => {
            const { w } = dimensions;
            const W_tl = widths.tl;
            const W_tr = widths.tr;
            const r = 16;
            const th = 40;

            const bridgePath = `
              M ${W_tl - r}, ${th}
              A ${r},${r} 0 0,0 ${W_tl}, ${th - r}
              V ${r}
              A ${r},${r} 0 0,1 ${W_tl + r}, 0
              H ${w - W_tr - r}
              A ${r},${r} 0 0,1 ${w - W_tr}, ${r}
              V ${th - r}
              A ${r},${r} 0 0,0 ${w - W_tr + r}, ${th}
              Z
            `
              .replace(/\s+/g, " ")
              .trim();

            return (
              <motion.path
                d={bridgePath}
                initial={false}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                transition={
                  isMenuOpen
                    ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.3 }
                }
                className="fill-primary"
              />
            );
          }}
        >
          {/* Dropdown Menu when Open */}
          <HeroDropdown isMenuOpen={isMenuOpen} topOffset={40} />

          {/* Children body */}
          <div className="flex flex-col p-4 pt-14 sm:p-6 sm:pt-16 md:p-10 md:pt-20">{children}</div>
        </NordicTabCard>
      </div>
    </section>
  );
};
