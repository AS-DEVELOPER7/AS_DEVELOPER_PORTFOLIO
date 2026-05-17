"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      // 1. Start slightly down (only 20px, not 500px)
      // 2. Start slightly pushed back in 3D space (scale: 0.98)
      // 3. Start slightly out of focus (blur)
      initial={{
        opacity: 0,
        y: 500,
        scale: 0.98,
        filter: "blur(4px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1, // Snappy and responsive. 1s is too slow for web navigation.
        // This is the legendary "Expo Out" easing curve.
        // It starts lightning fast and spends 80% of the duration smoothly decelerating.
        ease: [0.16, 1, 0.3, 1],
      }}
      // transform-gpu forces the browser to use the graphics card, preventing lag with the blur
      className="w-full flex-1 flex flex-col relative z-10 transform-gpu"
    >
      {children}
    </motion.div>
  );
}
