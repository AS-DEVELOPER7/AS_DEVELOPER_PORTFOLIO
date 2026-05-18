"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";

export const AboutPortrait = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-64 sm:h-96 md:h-128 group"
    >
      <NordicTabCard
        className="w-full h-full"
        childrenClassName="relative w-full h-full"
        topLeftComponent={
          <div className="px-4 py-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-primary  select-none">
            PORTRAIT
          </div>
        }
        bottomRightComponent={
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary  select-none animate-pulse">
            Ali Hussain Sagir
          </div>
        }
      >
        <Image
          src="/images/profile.jpeg"
          alt="Ali Hussain Sagir Portrait"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Subtle Bottom Shade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </NordicTabCard>
    </motion.div>
  );
};

export default AboutPortrait;
