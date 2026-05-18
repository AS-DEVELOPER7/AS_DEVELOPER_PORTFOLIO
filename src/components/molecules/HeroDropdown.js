"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

// Added descriptive subtext and index for that premium editorial layout
const navItems = [
  { id: "01", name: "Work", subtext: "View latest projects", href: "/work" },
  {
    id: "02",
    name: "About",
    subtext: "My background & skills",
    href: "/about",
  },
  {
    id: "03",
    name: "Contact",
    subtext: "Let's work together",
    href: "/contact",
  },
];

export const HeroDropdown = ({ isMenuOpen, topOffset = 37 }) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-40 bg-primary left-0 right-0 w-full overflow-hidden rounded-lg shadow-2xl"
          style={{
            top: topOffset,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full p-4  flex flex-col justify-center"
          >
            <div className="flex flex-col w-full md:gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => router.push(item.href)}
                  whileTap={{ scale: 0.98 }}
                  className="group relative cursor-pointer flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 ease-out"
                >
                  {/* Left Indicator Bar */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-3/5 bg-accent-tertiary rounded-r-full transition-all duration-300 ease-out origin-center" />

                  {/* Item Content */}
                  <div className="flex items-center gap-6">
                    <span className="text-secondary/50 text-xs font-medium tabular-nums group-hover:text-accent-tertiary transition-colors duration-300">
                      {item.id}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-secondary text-base md:text-lg sm:text-xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-out">
                        {item.name}
                      </span>
                      <span className="text-secondary/40 text-xs sm:text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-out h-0 group-hover:h-4  overflow-hidden">
                        {item.subtext}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Animated Arrow */}
                  <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-accent-tertiary">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
