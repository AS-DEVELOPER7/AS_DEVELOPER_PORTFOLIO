"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Layers, Cpu, Globe } from "lucide-react";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SectionBadge } from "@/components/atoms/ui/section-badge";

export const ServicesSection = () => {
  const services = [
    {
      title: "Cross-Platform Mobile Apps",
      icon: Smartphone,
      description:
        "Crafting high-performance, production-ready iOS & Android applications from scratch using React Native, Expo, Redux, and REST APIs, securing biometric and native storage systems.",
    },
    {
      title: "Web Applications (SSR)",
      icon: Layers,
      description:
        "Architecting robust, secure, and SEO-friendly web applications utilizing Next.js, React, and modern UI systems like Tailwind CSS, optimized for exceptional performance and loading speeds.",
    },
    {
      title: "Real-time Sync & APIs",
      icon: Cpu,
      description:
        "Engineering instantaneous client-server communication using Socket.io and designing highly scalable, secure, and documented REST APIs via the Loopback framework and Node.js.",
    },
    {
      title: "Custom Frontend Modernization",
      icon: Globe,
      description:
        "Refactoring legacy software frontends into contemporary, modular interfaces with responsive layout mechanics, prioritising clean state management, accessibility, and high contrast.",
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
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
          Core Expertise.
        </h2>
        <p className="text-primary/60 text-sm md:text-base font-normal leading-relaxed">
          I specialize in building modular, pixel-perfect user interfaces,
          high-performance mobile/web applications, and real-time interactive
          user flows.
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
