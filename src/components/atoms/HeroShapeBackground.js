"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const HeroShapeBackground = ({
  measurements,
  isMenuOpen,
  className,
  fillClass = "fill-neutral",
  strokeClass = "stroke-neutral",
  strokeWidth = 1,
  cornerRadius = 16,
  topBarHeight = 37,
}) => {
  const { w, h, leftIslandWidth, rightIslandWidth } = measurements;
  const r = cornerRadius;
  const th = topBarHeight;
  const gap = 0; // Horizontal gap between islands and the curve
  const dropdownHeight = 300; // Expanded height for the menu dropdown

  // Prevent rendering if layout hasn't been measured
  if (w === 0 || h === 0) {
    return <div className={cn("absolute inset-0 -z-10", className)} />;
  }

  // Ensure islands don't overlap on very small screens
  // We need 2*r for curves + gap on each side
  const transitionWidth = 2 * r + gap;
  const availableForIslands = Math.max(0, w - 2 * transitionWidth);
  const safeLeftWidth = Math.min(leftIslandWidth, availableForIslands);
  const safeRightWidth = Math.min(
    rightIslandWidth,
    availableForIslands - safeLeftWidth,
  );

  // Calculate the middle bridge width
  const bridgeWidth = w - safeLeftWidth - safeRightWidth - 2 * transitionWidth;

  // Background Podium Path (Light Grey Area)
  const path = `
    M 0,${th + r}
    a ${r},${r} 0 0,1 ${r},-${r}
    h ${safeLeftWidth + gap - r}
    a ${r},${r} 0 0,0 ${r},-${r}
    v -${th - 2 * r}
    a ${r},${r} 0 0,1 ${r},-${r}
    h ${Math.max(0, bridgeWidth)}
    a ${r},${r} 0 0,1 ${r},${r}
    v ${th - 2 * r}
    a ${r},${r} 0 0,0 ${r},${r}
    h ${safeRightWidth + gap - r}
    a ${r},${r} 0 0,1 ${r},${r}
    v ${h - th - 2 * r}
    a ${r},${r} 0 0,1 -${r},${r}
    h -${w - 2 * r}
    a ${r},${r} 0 0,1 -${r},-${r}
    Z
  `
    .replace(/\s+/g, " ")
    .trim();

  // Bridge Path (Dark Area)
  // This exactly fills the bridge gap with inverted corners when the menu is open,
  // connecting the TopBar seamlessly to the full-width dropdown below it.
  const bridgePath = `
    M ${safeLeftWidth + gap}, ${th}
    a ${r},${r} 0 0,0 ${r},-${r}
    v -${th - 2 * r}
    a ${r},${r} 0 0,1 ${r},-${r}
    h ${Math.max(0, bridgeWidth)}
    a ${r},${r} 0 0,1 ${r},${r}
    v ${th - 2 * r}
    a ${r},${r} 0 0,0 ${r},${r}
    Z
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div
      className={cn("absolute inset-0 -z-10 pointer-events-none", className)}
    >
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main Hero Background */}
        <path
          d={path}
          className={cn(
            fillClass,
            strokeClass,
            "transition-colors duration-500",
          )}
          strokeWidth={strokeWidth}
        />

        {/* Animated Bridge Background */}
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
      </svg>
    </div>
  );
};
