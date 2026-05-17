"use client";
import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Layers, Cpu, Globe } from "lucide-react";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SectionBadge } from "@/components/atoms/ui/section-badge";

export const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      icon: Paintbrush,
      description:
        "Creating stunning, user-centric websites that elegantly represent your brand, blending contemporary layout principles with high-contrast layouts.",
    },
    {
      title: "UX/UI Design",
      icon: Layers,
      description:
        "Designing highly functional interactive wireframes and seamless user flows optimized to increase engagement, usability, and modern aesthetics.",
    },
    {
      title: "Framer Development",
      icon: Cpu,
      description:
        "Building fully interactive, ultra-responsive web experiences with fluid custom animations, layouts, and rapid prototyping in Framer.",
    },
    {
      title: "Webflow Development",
      icon: Globe,
      description:
        "Crafting highly scalable, robust production-ready web designs backed by clean layout structures, custom styling rules, and smooth native engines.",
    },
  ];

  return (
    <div id="service" className="flex flex-col gap-10 w-full relative z-10">
      {/* Header Badge */}
      <SectionBadge title="Services" />

      {/* Editorial Narrative Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-2 -mt-4"
      >
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Core Expertise.
        </h2>
        <p className="text-primary/60 text-base font-normal leading-relaxed">
          I specialize in building modular, pixel-perfect user interfaces,
          high-performance web applications, and seamless interactive user
          flows.
        </p>
      </motion.div>

      {/* Services List */}
      <div className="flex flex-col gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  );
};
