"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  innerStyle,
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 30;
    const y = (clientY - (rect.top + rect.height / 2)) / 30;
    setMousePosition({ x, y });
  };

  const isTransparent = containerClassName?.includes("bg-transparent");

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      {...props}
      style={{
        perspective: "1000px",
      }}
      animate={{
        transform: isHovering
          ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) rotateX(${mousePosition.y * 1}deg) rotateY(${-mousePosition.x * 1}deg)`
          : "translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      }}
      className={cn(
        "mx-auto w-full bg-secondary relative rounded-xl border border-neutral/5 ",
        containerClassName,
      )}
    >
      <div className="relative h-full sm:mx-0 sm:rounded-xl">
        <motion.div
          animate={{
            transform: isHovering
              ? `translate3d(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px, 0) scale3d(1.02, 1.02, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 0.5,
          }}
          className={cn("h-full", className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
