"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/organisms/Hero";
import ProfileCard from "@/components/molecules/ProfileCard";
import { TextGenerateEffect } from "@/components/atoms/ui/text-generate-effect";
import { CanvasText } from "@/components/atoms/ui/canvas-text";

export const AboutHero = () => {
  return (
    <Hero>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-10 w-full"
      >
        {/* Profile Avatar & Status */}
        <ProfileCard />
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-4xl font-medium  text-primary  transition-colors"
        >
          Hi, I&apos;m Ali
          <CanvasText
            text="Frontend Developer."
            className="text-primary font-medium"
            backgroundClassName="bg-blue-600 dark:bg-blue-700"
            colors={[
              "rgba(0, 153, 255, 1)",
              "rgba(0, 153, 255, 0.9)",
              "rgba(0, 153, 255, 0.8)",
              "rgba(0, 153, 255, 0.7)",
              "rgba(0, 153, 255, 0.6)",
              "rgba(0, 153, 255, 0.5)",
              "rgba(0, 153, 255, 0.4)",
              "rgba(0, 153, 255, 0.3)",
              "rgba(0, 153, 255, 0.2)",
              "rgba(0, 153, 255, 0.1)",
            ]}
            lineGap={4}
            animationDuration={10} // Sped up slightly so it's noticeable but smooth
          />
        </motion.h1>
        {/* Primary Narrative */}
        <TextGenerateEffect
          words="I architect and build premium web and mobile applications from the ground up, utilizing high-performance frameworks like Next.js and React Native Expo to deliver banking-grade security, real-time synchronization, and stellar responsiveness."
          className=" leading-relaxed font-normal max-w-2xl transition-colors"
          // duration={0.8}
        />
      </motion.div>
    </Hero>
  );
};
