"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialCard } from "@/components/molecules/SocialCard";

export const SocialSection = () => {
  const socials = [
    {
      title: "GitHub",
      iconClass: "fa-brands fa-github",
      href: "https://github.com/AS-DEVELOPER7",
    },
    {
      title: "LinkedIn",
      iconClass: "fa-brands fa-linkedin-in",
      href: "https://linkedin.com/in/as-developer",
    },
    {
      title: "Phone",
      iconClass: "fa-solid fa-phone",
      href: "tel:+96594453835",
    },
    {
      title: "Email",
      iconClass: "fa-solid fa-envelope",
      href: "mailto:alihussainsagir.dev@gmail.com",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 relative z-10">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2  "
      >
        <h2 className="text-2xl  font-bold tracking-tight text-primary">
          Let&apos;s Connect.
        </h2>
        <p className="text-primary/60 text-base font-medium  leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations, or engineering solutions.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2  gap-4 w-full">
        {/* Standard Social Cards */}
        {socials.map((social, index) => (
          <SocialCard key={social.title} {...social} index={index} />
        ))}
      </div>
    </div>
  );
};
