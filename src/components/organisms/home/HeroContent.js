"use client";
import React from "react";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TextGenerateEffect } from "@/components/atoms/ui/text-generate-effect";
import { CanvasText } from "@/components/atoms/ui/canvas-text";
import { useRouter } from "next/navigation";

export const HeroContent = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-10 w-full"
    >
      {/* Profile Section */}
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
        className="text-4xl font-medium tracking-tight text-primary leading-[1.2] transition-colors"
      >
        Crafting High-Performance <br />
        <CanvasText
          text="Web & Mobile Apps."
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

      <TextGenerateEffect
        words="Frontend Developer specializing in high-performance Web and Mobile applications. Crafting secure, scalability-focused interfaces using Next.js and React Native."
        className=" leading-relaxed font-normal max-w-2xl transition-colors"
        // duration={0.8}
      />

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex items-center gap-4 "
      >
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="group relative flex items-center gap-2 h-12 px-8 rounded-xl bg-primary text-secondary font-medium  transition-all duration-300 overflow-hidden"
        >
          {/* Subtle Shimmer Overlay */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span className="relative z-10">View Resume</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/work")}
          className="flex items-center cursor-pointer gap-2 h-12 px-8 rounded-xl bg-secondary/50 border border-primary/10 text-primary/80 font-medium hover:bg-secondary hover:text-primary hover:border-accent-tertiary/30 transition-all duration-300"
        >
          <span>View Projects</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
