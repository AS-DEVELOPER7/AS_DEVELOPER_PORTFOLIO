"use client";
import React from "react";
import { Timeline, TimelineEntry } from "@/components/atoms/ui/timeline";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SectionBadge } from "@/components/atoms/ui/section-badge";

export const ExperienceSection = () => {
  const data = [
    {
      title: "2023 — Pres.",
      content: (
        <TimelineEntry
          role="Frontend Developer"
          company="Al Nada International Exchange"
          location="Kuwait City"
          description="Architected the flagship mobile app from scratch using React Native
            Expo. Spearheaded a Next.js HR Management System featuring facial
            recognition attendance, and engineered a real-time Socket.io tablet
            application for in-branch rate displays."
          technologies={["React Native", "Next.js", "Socket.io", "REST APIs"]}
        />
      ),
    },
    {
      title: "2022 — 2023",
      content: (
        <TimelineEntry
          role="Frontend Developer Intern"
          company="Taqanal Energy Pvt. Ltd"
          location="Bengaluru"
          description="Built a data-heavy energy monitoring dashboard utilizing React.js
            for real-time graphing. Developed a scalable REST API using the
            Loopback framework and launched a React Native mobile app for remote
            field personnel."
          technologies={["React.js", "React Native", "Loopback", "Redux"]}
        />
      ),
    },
    {
      title: "Early 2022",
      content: (
        <TimelineEntry
          role="Frontend Developer Intern"
          company="OrangeFox"
          location="Mumbai"
          description="Delivered custom-built web interfaces tailored to specific business
            logic and branding. Implemented global state management using
            Redux.js to ensure state persistence across dynamic user sessions."
          technologies={["React.js", "Redux.js", "CSS3/HTML5"]}
        />
      ),
    },
  ];

  return (
    <div id="experience" className="w-full flex flex-col relative z-10">
      {/* Header Badge */}
      <SectionBadge title="Experience" />

      <Timeline data={data} />
    </div>
  );
};
