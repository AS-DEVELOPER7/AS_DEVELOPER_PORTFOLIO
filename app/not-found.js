"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NordicTabCard } from "@/components/atoms/ui/nordic-tab-card";

export default function NotFound() {
  return (
    <div className="h-[95vh] flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-screen md:h-auto aspect-square md:rounded-lg bg-secondary p-4 flex flex-col overflow-hidden transition-all duration-300 max-w-2xl"
      >
        <NordicTabCard
          id="not-found-card" // FIX 1: Explicit ID prevents hydration mismatch!
          className="w-full h-full"
          topLeftComponent={
            <div className="p-3 flex items-center justify-center group/tab z-50">
              <Link
                href="/"
                scroll={true}
                className="text-primary font-bold text-sm tracking-tight transition-colors duration-300 flex items-center gap-2 hover:text-accent-tertiary"
              >
                <i className="fa-solid fa-arrow-left text-xs transition-transform duration-300 group-hover/tab:-translate-x-1" />
                Go back
              </Link>
            </div>
          }
          bottomRightComponent={
            <div className="p-3 flex items-center justify-center z-50">
              <span className="text-primary font-bold text-sm tracking-tight">
                404 - Page Not Found
              </span>
            </div>
          }
        >
          {/* FIX 2: Render a standard HTML Image, masked via CSS clip-path */}
          <div
            className="absolute inset-0 w-full h-full z-0 group overflow-hidden"
            style={{ clipPath: "url(#clip-path-not-found-card)" }}
          >
            <Image
              src="/images/404_walking.png"
              alt="Page Not Found 404"
              fill
              priority
              className="object-cover z-20 grayscale contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </NordicTabCard>
      </motion.div>
    </div>
  );
}
