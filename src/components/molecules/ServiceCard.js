import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "../atoms/ui/wobble-card";
import { GlowingEffect } from "../atoms/ui/glowing-effect";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";

export const ServiceCard = ({ title, description, index, icon: Icon }) => {
  const formattedIndex = index !== undefined ? `0${index + 1}` : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay: index * 0.08,
      }}
      className="w-full relative group/service "
    >
      <WobbleCard
        containerClassName="bg-transparent border-none"
        className="p-0"
      >
        <NordicTabCard
          topLeftComponent={
            <div className="flex items-center gap-3 p-3 pl-4">
              {Icon && (
                <Icon className="w-5 h-5 text-primary/40 group-hover/service:text-accent-tertiary transition-colors duration-300" />
              )}
              <h3 className="text-primary font-bold text-base md:text-lg tracking-tight group-hover/service:text-accent-tertiary transition-colors duration-300">
                {title}
              </h3>
            </div>
          }
          bottomRightComponent={
            formattedIndex && (
              <div className="px-5 py-2 select-none">
                <span className="text-[10px] font-bold font-mono tracking-[0.2em] text-primary/20 group-hover/service:text-primary/50 transition-colors duration-300">
                  {formattedIndex}
                </span>
              </div>
            )
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
          {/* Subtle Blueprint Mesh Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[14px_14px] pointer-events-none group-hover/service:opacity-[0.05] transition-opacity duration-500 rounded-3xl" />

          {/* Card Body Content */}
          <div className="p-8 pt-[60px] pb-10 relative z-10">
            <p className="text-primary/60 text-sm md:text-base leading-relaxed font-normal antialiased">
              {description}
            </p>
          </div>
        </NordicTabCard>
      </WobbleCard>
    </motion.div>
  );
};
