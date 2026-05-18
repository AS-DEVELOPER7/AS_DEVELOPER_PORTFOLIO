"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HoverBorderGradient } from "../atoms/ui/hover-border-gradient";
import { TextHoverEffect } from "../atoms/ui/text-hover-effect";
import { useRouter } from "next/navigation";
import { ProfileCard } from "@/components/molecules/ProfileCard";

export const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kuwait",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Socials",
      links: [
        { name: "GitHub", href: "https://github.com/AS-DEVELOPER7" },
        { name: "LinkedIn", href: "https://linkedin.com/in/as-developer" },
        { name: "Email", href: "mailto:alihussainsagir.dev@gmail.com" },
      ],
    },
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="w-full flex flex-col relative z-10 gap-16 bg-primary text-secondary border border-secondary/10 rounded-lg overflow-hidden px-6 pt-12 pb-6">
      {/* Top Section */}
      <div className="flex flex-row items-center justify-between w-full">
        <ProfileCard
          name="Ali Hussain Sagir"
          role={
            <span className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-secondary/70 text-xs font-medium tracking-wide uppercase">
                Available for work
              </span>
            </span>
          }
          avatarSize="w-12 h-12"
          imageWidth={48}
          imageHeight={48}
          isGrayscale={true}
          textColor="text-secondary"
          subTextColor="text-secondary/70"
        />

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-white hover:text-accent-tertiary transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpRight className="w-5 h-5 -rotate-45" />
        </HoverBorderGradient>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 w-full">
        <div className="flex gap-8 min-[400px]:gap-16 sm:gap-24">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h3 className="text-secondary/50 text-xs font-bold uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <div
                      onClick={() => handleLinkClick(link.href)}
                      className="group flex items-center gap-1 cursor-pointer text-secondary hover:text-accent-tertiary text-sm font-medium transition-colors duration-300"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 text-left sm:text-right">
          <h3 className="text-secondary/50 text-xs font-bold uppercase tracking-widest">
            Local Time
          </h3>
          <div className="flex flex-col text-sm font-medium text-secondary/80">
            <span>Kuwait City, KW</span>
            <span className="text-accent-tertiary tabular-nums">
              {time || "Loading..."}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col w-full relative border-t border-secondary/10">
        <TextHoverEffect text="ALI HUSSAIN" />

        <div className="flex flex-row items-center justify-between w-full gap-2 text-secondary/50 text-[10px] uppercase tracking-widest font-bold pt-6 z-10 relative">
          <p>© {currentYear} Ali Hussain Sagir.</p>
        </div>
      </div>
    </footer>
  );
};
