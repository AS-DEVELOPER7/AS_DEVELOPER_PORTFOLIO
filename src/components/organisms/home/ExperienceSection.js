"use client";
import React from "react";
import { Timeline, TimelineEntry } from "@/components/atoms/ui/timeline";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/atoms/ui/section-badge";

export const ExperienceSection = () => {
  const data = [
    {
      title: "2023 — Pres.",
      content: (
        <TimelineEntry
          role="Frontend Developer"
          company="Al Nada International Exchange"
          location="Kuwait City, Kuwait"
          description="Architected and led the development of the Al Nada Exchange mobile remittance app from scratch using React Native Expo. Spearheaded the Next.js HRMS platform featuring custom Face Recognition automated check-ins, developed high-performance rate display systems, and optimized core frontend architectures."
          technologies={["React Native", "Next.js", "Socket.io", "REST APIs", "Expo", "Redux.js"]}
        />
      ),
    },
    {
      title: "2022 — 2023",
      content: (
        <TimelineEntry
          role="Frontend Developer Intern"
          company="Taqanal Energy Pvt. Ltd"
          location="Bengaluru, India"
          description="Built a data-heavy energy monitoring web dashboard using React.js featuring real-time graphing. Developed and documented scalable REST APIs using Loopback, and launched a React Native mobile application for remote personnel sync."
          technologies={["React.js", "React Native", "Loopback", "REST APIs", "Redux"]}
        />
      ),
    },
    {
      title: "2022",
      content: (
        <TimelineEntry
          role="Frontend Developer Intern"
          company="OrangeFox"
          location="Mumbai, India"
          description="Delivered customized, responsive web interfaces tailored to business logic and branding using React.js. Implemented scalable global state management pipelines using Redux.js to ensure data persistence across user sessions."
          technologies={["React.js", "Redux.js", "HTML5", "CSS3"]}
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
